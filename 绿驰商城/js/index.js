$(function(){
	$(".b-sliderUl").hcjSlider({
		tabNav: true,
		pageNav: true,
		tabNavPosition: 'middle',
		tabnavCur: 'current',
		tabNavMr: 6,
		tabNavChildStyle: 'span',
		effect: 'efade',
		firstScreenShowNum: 1,
		firstScreenShowMr: 0,
		prev: 'prev',
		next: 'next',
		speed: 1000,
		liColor:true
	});
	$(".bi-sliderInfoPic>ul").hcjSlider({
		tabNav:false,
		pageNav:true,
		effect:'wfScroll',
		firstScreenShowNum:2,
		firstScreenShowMr:10,
		prev:'prev',
		next:'next',
		speed:1000,
		autoPlay:false
	});

})