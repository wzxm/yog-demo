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

        fis.match('*.es', {
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
            packager: fis.plugin('map')
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
}
