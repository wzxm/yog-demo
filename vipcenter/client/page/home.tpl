{% extends 'vipcenter:page/layout.tpl' %}

{% block content %}
	<!--content start-->
	<div class="pop-tips">
        <center>
            <div class="tips-panel">
                <p class="tips"></p>
                <div class="buttons clearfix">
                    <div class="ok">知道了</div>
                </div>
            </div>
        </center>
    </div>
    <div class="box-100 banner"></div>
            <p class="title" id="title1"><img src="static/vipcenter/static/img/intro/icon.png" />什么是PP合伙人</p>
            <div class="box-90 box01">
                <p>PP合伙人是PPmoney全新推出的推广佣金奖励计划，用户通过招募好友成为其合伙人并由PPmoney给出丰厚的推广佣金。<span class="strong">你可在【P友圈】页面参加本次邀请好友活动。</span></p>
            </div>
            <!--<p class="title" id="title2"><img src="img/intro/icon.png" />参加条件</p>-->
            <!--<div class="box-90 box02 clearfix">
                <div class="col-6">
                    <p>投资金额≥5000元</p>
                </div>
                <div class="col-6">
                    <button class="active">成为创始人</button>
                </div>
            </div>-->
            <p class="title" id="title3"><img src="static/vipcenter/static/img/intro/icon.png" />PP合伙人佣金组成</p>
            <div class="box-90 box03">
                <div class="bg clearfix">
                    <div class="col-6">
                        <div class="how how1"></div>
                    </div>
                    <div class="col-6">
                        <div class="how how2"></div>
                    </div>
                </div>
            </div>
           <!-- <div class="tips-bg">
                <p>你已经成功邀请了<span class="data">10</span>个用户！<br />他们的<span class="strong">待收越高</span>，你的<span class="strong">佣金就越高</span>哦！</p>
            </div>-->
            <p class="title" id="title4"><img src="static/vipcenter/static/img/intro/icon.png" />合伙人佣金计算</p>
            <div class="box-90 box04">
                <p class="formula">合伙人每日佣金=<span class="due-in">所有合伙人待收</span>*<span class="rate">佣金利率</span>/365</p>
                <div class="box-94 calculator">
                    <div class="brokerage clearfix">
                        <div class="col-6 left">
                            <p>合伙人每日佣金</p>
                        </div>
                        <div class="col-6 right">
                            <p><span class="strong">0.00</span>元</p>
                        </div>
                    </div>
                    <div class="calculator-box clearfix">
                        <div class="clearfix">
                            <div class="col-8">
                                <div class="input-box clearfix">
                                    <p class="f-left"><span class="strong">我的待收</span></p>
                                    <p class="f-right"><input id="personal-dueIn" />元</p>
                                </div>
                                <div class="input-box">
                                    <p class="tips">* 待收需≥5000才能获得收益</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="input-box">
                                    <p class="rate">佣金利率<br /><span class="data">0.0%</span></p>
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div class="clearfix">
                            <div class="col-8">
                                <div class="input-box clearfix">
                                    <p class="f-left"><span class="strong">合伙人数量</span></p>
                                    <p class="f-right"><input id="member-count" />个</p>
                                </div>
                                <div class="input-box clearfix">
                                    <p class="f-left"><span class="strong">人均待收</span></p>
                                    <p class="f-right"><input id="avg-dueIn" />元</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="input-box">
                                    <p class="partner-dueIn">总待收<br /><span class="data">0.00</span>元</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {% widget "vipcenter:widget/homepage/bottom.tpl" mode="async" id="locationSearch" %}
        </div>
        <!--content end-->
{% endblock %}