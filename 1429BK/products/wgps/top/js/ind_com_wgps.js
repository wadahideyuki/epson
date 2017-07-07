// JavaScript Document
$(function() {
/*============================
ページ内共通
============================*/
//画像のオーバー
	$("img.ovr").mouseover(function(){
			$(this).attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
	}).mouseout(function(){
			$(this).attr("src",$(this).attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1$2"));
	});

//画面幅の取得
var winW;
function getWinW(){
	winW = $(window).width();
	console.log(winW);
}

/*============================
個別
============================*/
//ラインナップのPCとSPの切替
/*
$(window).bind("resize", function(){
	getWinW();
	return false;
});
*/

//カテゴリーボタン
$("main .categoryBox li a").click(function(){
	var No = $(this).parent().attr("class").replace("cateNo", "");
	getWinW();

	$("main .categoryBox li a").removeClass("on");
	$(this).addClass("on");
	
	$("main .visualBox li").removeClass("show");
	$("main .visualBox li.visNo" + No).addClass("show");
	
	$("main .lineupBox ul").removeClass();
	$("main .lineupBox ul").addClass("activeCate" + No);
	
	if(No > 1){
		$(".recoZone").show();
		$(".recoZone .ttl1 span, .recoZone .bnArea a").removeClass("show");
		$(".recoZone .ttl1 span.reco" + No + ", .recoZone .bnArea a.reco" + No).addClass("show");
	}else{
		$(".recoZone").hide();
	}
	return false;
});

//ラインナップのオーバー
	$(".lineupOvr").mouseover(function(){
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
	}).mouseout(function(){
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1$2"));
	});


//pickupのタブの切替
$(".pickupZone .tabs li a").click(function(){
	var kind = $(this).parent().attr("class").replace("tab", "");
	$(".pickupZone .tabs li a").removeClass("show");
	$(this).addClass("show");

	$(".pickupZone .conts ul").removeClass();
	$(".pickupZone .conts ul").addClass("pickup" + kind);
	
	return false;
});

//spのpickupのbtnMore
$(".pickupZone .btnMore a").click(function(){
	$(".pickupZone .conts").addClass("andMore");
	return false;
});



});//Fnc End