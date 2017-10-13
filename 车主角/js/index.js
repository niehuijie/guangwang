$(function(){
	// 轮播图
	$(".sliderUl").Slider({
		tabNav:true,
		pageNav:true,
		tabNavPosition:'middle',
		tabnavCur:'current',
		tabNavMr:6,
		tabNavChildStyle:'span',
		effect:'efade',
		firstScreenShowNum:1,
		firstScreenShowMr:0,
		prev:'prev',
		next:'next',
		speed:1500
	});
	// 品牌
	$(".brandSliderUl").Slider({
		tabNav:true,
		pageNav:true,
		pageNavL:true,
		tabNavPosition:'middle',
		tabnavCur:'current',
		tabNavChildStyle:'span',
		effect:'scroll',
		tabNavMr:6,
		firstScreenShowNum:1,
		firstScreenShowMr:0,
		prev:'prev',
		next:'next',
		direction:'left',
		speed:1000,
		autoPlay:false
	});
	$('.brandShow .bs-brandList').css({height:242,width:1200});
	//资讯
	$(".bi-sliderInfoPic>ul").Slider({
		tabNav:false,
		pageNav:true,
		effect:'wfScroll',
		firstScreenShowNum:2,
		firstScreenShowMr:10,
		prev:'prev',
		next:'next',
		speed:500,
		autoPlay:false
	});
	
});	
	