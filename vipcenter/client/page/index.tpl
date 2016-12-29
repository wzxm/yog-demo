{% extends 'vipcenter:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "vipcenter:widget/message/message.tpl"%}
        {{ name }}
     </div>
{% endblock %}