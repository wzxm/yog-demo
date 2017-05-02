{% require 'wzapp:static/message/message.js' %}
{% require 'wzapp:static/message/message.scss' %}

{% require 'wzapp:static/scss/base.scss' %}

<div class="block" id="expListBox">
    <ul id="expList">
        {% for item in list %}
        <li class="block-item">
            <span>{{ item.text }}</span>
        </li>
        {% endfor %}
        <div class="ui-refresh-down"></div>
    </ul>
</div>