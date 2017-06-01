<!doctype html>
{% html lang="en" framework="vue:static/js/mod.js" %}
    {% head %}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="../static/favicon.ico">
        <title>{{ title }}</title>
        {% require "vue:static/js/jquery-1.10.2.js" %}
    {% endhead %}

    {% body %}
        <div id="app">
            <div id="middle" class="container">
                {% block content %}
                {% endblock %}
            </div>
        </div>
        <!--livereload-->
    {% endbody %}

    <script>
        //webview返回刷新
        window.webviewOnShow = function (from) {
            if (from == 1) {
                window.location.href = window.location.href;
            }
        }
        var Config = require('vue:widget/config.js')
        !function(){
            if (!(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                if(!Config.debug) { location.href = Config.redirect }
            }
        }();
        require('vue:widget/main.js')
    </script>
{% endhtml %}
