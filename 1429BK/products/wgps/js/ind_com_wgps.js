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



/*============================
個別
============================*/
//headerのラインアップボタン
$(".headNav1").click(function(){
	if($(this).hasClass("on")){
		$(".pcLineupMenu").hide();
		$(this).removeClass("on");
	}else{
		$(".pcLineupMenu").show();
		$(this).addClass("on");
	}
	return false;
});

//カテゴリーボタン
$("main .categoryBox li a").click(function(){
	var No = $(this).parent().attr("class").replace("cateNo", "");
	
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

	if(kind == "All"){
		$(".pickupZone .conts li").show();
	}else{
		$(".pickupZone .conts li").hide();
		$(".pickupZone .conts li.bn" + kind).show();
	}
	return false;
});


//SPメニューの開閉
$(".spMenuBtn a").click(function(){
	if($(this).parent().hasClass("on")){
		$(this).parent().removeClass("on");
		$(".spMenu .in").animate({left:-650});
	}else{
		$(this).parent().addClass("on");
		$(".spMenu .in").animate({left:0});
	}
	return false;
});
//SPメニューのラインアップの開閉
$(".spMenuList1 .accordBtn a").click(function(){
	if($(this).parent().hasClass("on")){
		$(this).parent().removeClass("on");
		$(".spMenuList1 .accordion").slideUp();
	}else{
		$(this).parent().addClass("on");
		$(".spMenuList1 .accordion").slideDown();
	}
	return false;
});

});//Fnc End