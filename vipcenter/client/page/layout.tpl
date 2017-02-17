<!doctype html>
{% html lang="en" framework="vipcenter:static/js/mod.js" %}
    {% head %}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="/static/favicon.ico">
        <title>{{ data.title }}</title>
        {% require "vipcenter:static/js/bigpipe.js" %}

        {% require "vipcenter:static/css/m-base.css" %}
        {% require "vipcenter:static/css/intro.css" %}
    {% endhead %}

    {% body %}
        <div id="wrapper" class="content">
            <div id="middle" class="container">
                {% block content %}
                {% endblock %}
            </div>
        </div>
        {% require "vipcenter:static/js/compatible.js" %}
        {% require "vipcenter:static/js/zepto.min.js" %}
        {% require "vipcenter:static/js/intro.js" %}
    {% endbody %}

{% endhtml %}
