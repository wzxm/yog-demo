{% extends 'vipcenter:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "vipcenter:widget/message/message.tpl"%}
        {% widget "vipcenter:widget/users/users.tpl" %}
     </div>
{% endblock %}