/**
 * @file FIS 配置
 * @author
 */
'use strict'

var config = require('./client/widget/config.js');
var childProcess = require('child_process');

fis.config.set('namespace', 'vue');

var domain = config.domain;
var url = config.domainFolder;
var namespace = config.name;
if (process.argv.slice(2).toString().match(/test|prod/)) {
    var _cmd = 'rm -rf ';
    if (process.platform.indexOf('win') === 0) {
        _cmd = 'rd/s/q ';
    }
    childProcess.exec(_cmd + namespace, { cwd: '../yog/static/' }, function(err1, stdout1, stderr1) {
        //清空静态文件夹
        console.log('清空静态文件夹成功！！！')
    });
}

// fis.set('project.ignore', ['*.bat', '*.md', 'fis-conf.js', 'prod.js', 'package.json', '*.bak', 'node_modules/**']);

// chrome下可以安装插件实现livereload功能
// https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
fis.config.set('livereload.port', 35729);

// sass包含文件夹
var incPath;
// Sass自动添加css前缀 需要安装组件 npm install -g fis3-preprocessor-autoprefixer
var autoFixCss;
console.log('fis = ' + fis.IS_FIS3);
if (fis.IS_FIS3) {

    // 启用npm管理前端组件
    fis.enableNPM({
        autoPack: true // 使用autoPack可以自动将依赖的npm组件打包合并
    });

    fis.match('client/widget/**.vue', {
        isMod: true,
        rExt: 'js',
        useSameNameRequire: true,
        parser: [
            fis.plugin('vue-component', {
                // vue@2.x runtimeOnly 
                runtimeOnly: true,          // vue@2.x 有润timeOnly模式，为ture时，template会在构建时转为render方法 
                // styleNameJoin 
                styleNameJoin: '',          // 样式文件命名连接符 `component-xx-a.css` 
                extractCSS: true,           // 是否将css生成新的文件, 如果为false, 则会内联到js中 
                // css scoped 
                cssScopedIdPrefix: '_v-',   // hash前缀：_v-23j232jj 
                cssScopedHashType: 'sum',   // hash生成模式，num：使用`hash-sum`, md5: 使用`fis.util.md5` 
                cssScopedHashLength: 8,     // hash 长度，cssScopedHashType为md5时有效 
                cssScopedFlag: '__vuec__',  // 兼容旧的ccs scoped模式而存在，此例子会将组件中所有的`__vuec__`替换为 `scoped id`，不需要设为空 
            })
        ],
    });

    // vue 组件中 ES2015 处理 
    fis.match('client/widget/**.vue:js', {
        isMod: true,
        rExt: 'js',
        useSameNameRequire: true,
        parser: [
            fis.plugin('babel-6.x', {
                // presets: ['es2015-loose', 'stage-3']
            }),
            fis.plugin('translate-es3ify', null, 'append')
        ]
        });
        
        // vue组件中coffee片段处理。 
        fis.match('client/widget/**.vue:coffee', {
        parser: [
            fis.plugin('cooffe')
        ]
    })

    fis.match('client/widget/{**.vue:scss}', {
        rExt: 'css',
        parser: [
            fis.plugin('node-sass', {
                sourceMap: true
            })
        ],
        postprocessor: fis.plugin('autoprefixer', {
            'cascade': true
        }),
    });

    // 打包成单个文件
    // fis.match('client/widget/(**).vue', {
    //     release: 'static/vue/$1.js'
    // });
    
    // fis.match('client/widget/(components/**.css)', {
    //     packTo: 'component-all.css',
    //     release: 'static/$1'
    // });

    fis.match('*.js', {
        useHash: false
    });

    if (namespace.indexOf('h5-') > -1) {
        incPath = ['../h5-common/client/static/scss/mixin'];
        autoFixCss = ['Android >= 2.1', 'iOS >= 7'];
    } else {
        incPath = [];
        autoFixCss = ['ie >= 8', 'firefox >= 15'];
    }

    fis.match('**.scss', { 
        preprocessor: fis.plugin('autoprefixer', {
            'browsers': autoFixCss,
            'cascade': true
        }),
        // node-sass 插件进行解析
        parser: fis.plugin('node-sass', {
            include_paths: incPath
        }),
        // .scss 文件后缀构建后被改成 .css 文件
        rExt: '.css'
    });

    fis.match('_*.{sass,scss}', {
        release: false
    });

    // // 对 CSS 进行图片合并
    fis.match('*.css', {
        // 给匹配到的文件分配属性 `useSprite`
        useSprite: true,
        // fis-optimizer-clean-css 插件进行压缩，已内置
        optimizer: fis.plugin('clean-css')
    });

    fis.match('/client/widget/**.js', {
        parser: fis.plugin('babel-6.x', {
            // presets: [
            // 注意一旦这里在这里添加了 presets 配置，则会覆盖默认加载的 preset-2015 等插件，因此需要自行添加所有需要使用的 presets
            // ]
        }),
        rExt: 'js'
    });

    // min.js不压缩，如果已经压缩过的资源再压缩可能导致打包非常缓慢
    fis.match('*.min.js', {
        optimizer: false
    }, true);

    fis.match('*.png', {
        // fis-optimizer-png-compressor 插件进行压缩，已内置
        optimizer: fis.plugin('png-compressor')
    });

    fis.match('::image', {
        useMap: true
    });

    fis.media('debug').match('*', {
        optimizer: null,
        useHash: false,
        deploy: fis.plugin('http-push', {
            receiver: config.localDomain + '/yog/upload',
            to: '/'
        })
    });

    // 给文件 URL 设置 domain 信息
    // 如果需要给某些资源添加 cdn，分配到此属性的资源 url 会被添加 domain；
    fis.media('prod').match('*.{js,css,sass,scss,less,png,gif,jpg,ico,eot,svg,ttf,woff}', {
        url: url + namespace + '$0',
        domain: domain
    });

    // 删除console
    fis.media('prod').match('*.js', {
        optimizer: fis.plugin('uglify-js', {
            compress: {
                drop_console: true
            }
        })
    });

    fis.media('prod').match('*.css', {
        // fis-optimizer-clean-css 插件进行压缩，已内置
        optimizer: fis.plugin('clean-css')
    });

    // fis.media('prod').match('::package', {
    //     packager: [replaceImg, fis.plugin('map', {
    //         '/client/widget/pkgall.js': '/client/widget/**.js',
    //         '/client/widget/pkgall.css': '/client/widget/**.scss'
    //     })]
    // });

    // 打包插件
    fis.match('::package', {
        packager: fis.plugin('map')
    });


    //发布到正式环境
    fis.media('test').match('*', {
        deploy: [
            fis.plugin('http-push', {
                receiver: config.localDomain + '/yog/upload',
                to: '/'
            }),
            fis.plugin('http-push', {
                receiver: config.testDomain + '/yog/upload',
                to: '/'
            })
        ]
    });
    fis.media('prod').match('*', {
        deploy: [
            fis.plugin('http-push', {
                receiver: config.localDomain + '/yog/upload',
                to: '/'
            }),
            fis.plugin('http-push', {
                receiver: config.releaseDomain + '/yog/upload',
                to: '/'
            })
        ]
    });

} else {
    fis.config.set('deploy', {
        debug: {
            to: '/',
            // yog2 默认的部署入口，使用调试模式启动 yog2 项目后，这个入口就会生效。IP与端口请根据实际情况调整。
            receiver: 'http://127.0.0.1:8085/yog/upload'
        }
    });
}
