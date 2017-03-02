/**
 * @file FIS 配置
 * @author
 */

let config = require('./config.js');
let childProcess = require('child_process');

module.exports = function(sconfig) {

    var domain = sconfig.domain;
    var url = sconfig.domainFolder;
    var namespace = sconfig.name;

    fis.config.set('namespace', sconfig.name);

    /* 清除静态文件夹 start */
    let _cmd = 'rm -rf';
    if(process.platform.indexOf('win') === 0) {
        _cmd = 'rd/s/q ';
    }
    let wget = _cmd + namespace;
    childProcess.exec(wget, { cwd: '../yog/static/' }, function(err, stdout, stderr) {
        console.log('清空静态文件夹 static 成功！！！')
    });
    childProcess.exec(wget, { cwd: '../yog/app/' }, function(err, stdout, stderr) {
        console.log('清空静态文件夹 app 成功！！！')
    });
    childProcess.exec(wget, { cwd: '../yog/views/' }, function(err, stdout, stderr) {
        console.log('清空静态文件夹 views 成功！！！')
    });
    /* 清除静态文件夹 end */

    /**
     * 解释：排除某些文件
     * 默认值：['node_modules/**', 'output/**', 'fis-conf.js']
     * 用法 fis.set('project.ignore', ['*.bak']); // set 为覆盖不是叠加
     */
    fis.set('project.ignore', ['*.bak', 'node_modules/**', 'output/**', 'fis-conf.js', 'package.json', '*.bat', '*.md', 'prod.js']);

    // chrome下可以安装插件实现livereload功能
    // https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
    fis.config.set('livereload.port', 35729);

    if (fis.IS_FIS3) {

        fis.match('**/*.scss', {
            parser: fis.plugin('node-sass', {
                // options...
            }),
            rExt: '.css'
        });

        fis.match('/client/widget/**.js', {
            parser: fis.plugin('babel-6.x', {
                // options...
            }),
            rExt: 'js'
        });

        fis.match('*.handlebars', {
            parser: fis.plugin('handlebars-3.x', {
                //fis-parser-handlebars-3.x option
            }),
            rExt: '.js', // from .handlebars to .js 虽然源文件不需要编译，但是还是要转换为 .js 后缀
            release: false // handlebars 源文件不需要编译
        });

        fis.match('::image',{
            useMap: true
        });

        fis.match('*.png', {
            // fis-optimizer-png-compressor 插件进行压缩，已内置
            optimizer: fis.plugin('png-compressor')
        });


        // 按照 react-redux 的目录规范设置源代码目录
        fis.match('/client/{actions,components,constants,routes,containers,page,reducers,store}/**.{js,es,jsx,ts,tsx}', {
            parser: fis.plugin('typescript', {
                module: 1,
                target: 0
            }),
            isJsXLike: true,
            isMod: true
        });

        // 启用npm管理前端组件
        fis.enableNPM({
            autoPack: true // 使用autoPack可以自动将依赖的npm组件打包合并
        });

        fis.media('debug').match('*', {
            optimizer: null,
            useHash: false,
            deploy: fis.plugin('http-push', {
                receiver: config.localDomain + '/yog/upload',
                to: '/'
            })
        });

        fis.media('debug-prod').match('*', {
            deploy: fis.plugin('http-push', {
                receiver: config.localDomain + '/yog/upload',
                to: '/'
            })
        });

        fis.media('prod').match('*.{js,css,png,gif,jpg,ico,eot,svg,ttf,woff}', {
            url: url + namespace + '$0',
            domain: domain
        });

        fis.media('prod').match('::package', {
            packager: fis.plugin('map', {
                "/client/widget/build.js": "/client/widget/**.js",
                "/client/widget/build.css": "/client/widget/**.scss"
            })
        });

        fis.media('prod').match('*', {
            deploy: fis.plugin('http-push', {
                receiver: config.releaseDomain + '/yog/upload',
                to: '/'
            })
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

    /**
     * 打包阶段插件接口
     * @param  {Object} ret      一个包含处理后源码的结构
     * @param  {Object} conf     一般不需要关心，自动打包配置文件
     * @param  {Object} settings 插件配置属性
     * @param  {Object} opt      命令行参数
     * @return {undefined}
     */
    function replaceImg(ret, conf, settings, opt) {
        // ret.src 所有的源码，结构是 {'<subpath>': <File 对象>}
        // ret.ids 所有源码列表，结构是 {'<id>': <File 对象>}
        // ret.map 如果是 spriter、postpackager 这时候已经能得到打包结果了，
        //         可以修改静态资源列表或者其他
    }
}
