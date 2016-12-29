
var browser = {
   	    versions: function() {
   	        var u = navigator.userAgent, app = navigator.appVersion;
   	        return {//移动终端浏览器版本信息 
   	            trident: u.indexOf('Trident') > -1, //IE内核
   	            presto: u.indexOf('Presto') > -1, //opera内核
   	            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
   	            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
   	            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
   	            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
   	            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
   	            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
   	            iPad: u.indexOf('iPad') > -1, //是否iPad
   	            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
   	        };
   	    }(),
   	    language: (navigator.browserLanguage || navigator.language).toLowerCase()
   	};
	
$(document).ready(function(){
//	AdjustToWindow();
	$("#personal-dueIn").on("keyup",calculate);
	$("#member-count").on("keyup",calculate);
	$("#avg-dueIn").on("keyup",calculate);
//	renderButton();
	$(".pop-tips .ok").off("click").on("click",function(){
		$(".content .pop-tips").hide();
	});
	$(".how1").on("click",function(){
		ShowPopTipsPanel("成为创始人后，被你成功邀请的用户都将为你的合伙人")
	})
	$(".how2").on("click",function(){
		ShowPopTipsPanel("平台大礼包奖励将根据各因素发生变化")
	})
	$(".how3").on("click",function(){
		ShowPopTipsPanel("组队投资？点击“P友圈”，成功加入队伍便能享受队友投资的积分！")
	})
})
$(window).resize(function(){
	AdjustToWindow();
})
function AdjustToWindow(){
	var win_width = $(window).width();
    var win_height = $(window).height();
    $(".banner").css("height",win_width*932/1080);
    $(".box03 .bg").css("height",win_width*0.9*953/1038);
    $(".box05 .bg").css("height",win_width*0.9*595/979);
    if(win_width>500){
    	$(".banner").css("background","url(img/intro/banner.jpg) no-repeat top center");
    	$(".banner").css("background-size","100%");
		$(".box03 .bg").css("background","url(img/intro/intro.png) no-repeat top center");
		$(".box05 .bg").css("background","url(img/intro/box05-bg.jpg) no-repeat");
	}else{
		$(".banner").css("background","url(img/intro/banner2.jpg) no-repeat");
		$(".banner").css("background-size","100%");
		$(".box03 .bg").css("background","url(img/intro/intro2.png) no-repeat");
		$(".box05 .bg").css("background","url(img/intro/box05-bg2.jpg) no-repeat");
	}
	$(".banner").css("background-size","cover");
	$(".box03 .bg").css("background-size","cover");
	$(".box05 .bg").css("background-size","cover");
}
function calculate () {
	var personal_dueIn = $("#personal-dueIn").val();
	console.log(isNaN(personal_dueIn))
	var member_count = $("#member-count").val();
	var avg_dueIn = $("#avg-dueIn").val();

	var rate = 0;
	var partner_dueIn = 0;

	if(isNaN(personal_dueIn) || personal_dueIn == "") {
		personal_dueIn = 0;
	} else if (personal_dueIn < 5000) {
		rate = 0;
	} else if (personal_dueIn < 50000) {
		rate = 0.5;
	} else if (personal_dueIn < 100000) {
		rate = 0.6;
	} else if (personal_dueIn < 500000) {
		rate = 0.7;
	} else {
		rate = 0.8;
	}

	if(isNaN(member_count) || member_count == "") {
		member_count = 0;
	}
	if(isNaN(avg_dueIn) || avg_dueIn == "") {
		avg_dueIn = 0;
	}
	partner_dueIn = member_count * avg_dueIn;

	var brokerage = (partner_dueIn * rate / 100 / 365).toFixed(2);

	$(".brokerage .strong").html(brokerage);
	$(".calculator-box .rate .data").html(rate + '%');
	$(".calculator-box .partner-dueIn .data").html(partner_dueIn);
}

function AdjustPopTipsPanel(){
    var win_width = $(window).width();
    var win_height = $(window).height();
    $(".content .pop-tips img").css("margin-top",0.1*win_height);
    $(".content .pop-tips .buttons").css("margin-top",160-$(".content .pop-tips .tips").height()-$(".content .pop-tips .buttons").height());
}
function ShowPopTipsPanel(text){
    $(".content .pop-tips").show();
    $(".content .pop-tips .tips-panel .tips").html(text);
    AdjustPopTipsPanel();
}

function iosLogin()
{
	window.location = "objc://Login";
}

function Login()
{
    if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
    	iosLogin();
    }
    else if (browser.versions.android) {
    window.ppmoney.Login();
    }
}