$(function() {
	var wW = $(window).height(),
		zeroPage = $('.zeroPage'),
		len = zeroPage.children().length,
		x = 0,
		footH = $('.footer').height(),
		controlTab=$('.controlTab');
	zeroPage.children().css({
		height: wW
	});
	$(window).resize(function(){
		wW=$(this).height();
		zeroPage.children().css({
			height: wW
		});
	});
	var html='';
	for(var i=0;i<len;i++){
		html+='<li><a href=""></a></li>';
	}
	controlTab.append(html).css({'margin-top':-controlTab.height()/2});
	controlTab.children().eq(0).addClass('cur');
	zeroPage.bind('DOMMouseScroll mousewheel', function(event) {
		var topV = $(this).position().top;
		var orientateV = event.originalEvent.wheelDelta || event.originalEvent.detail;
		if (orientateV == -120 || orientateV == 3) {
			if (!$(this).is(':animated')) {
				x++;
				if (x > len) {
					x = len;
					return;
				}
				if (x == len) {
					$(this).animate({
						top: topV - footH
					}, 200);
					return;
				}
				controlTab.children().eq(x).addClass('cur').siblings().removeClass('cur');
				$(this).animate({
					top: wW * -x
				}, 1500);
			}
		} else {
			if (!$(this).is(':animated')) {
				if (x == 0) {
					return;
				}
				if (x == len) {
					x = len - 1;
					$(this).animate({
						top: (topV + footH)
					}, 200);
					return;
				}
				x--;
				controlTab.children().eq(x).addClass('cur').siblings().removeClass('cur');
				$(this).animate({
					top: wW * -x
				}, 1500);
			}
		}
	});
	controlTab.children().bind('click',function(e){
		e.preventDefault();
		var index=$(this).index();
		$(this).addClass('cur').siblings().removeClass('cur');
		zeroPage.animate({top:wW*-index},1500);
		x=index;
	});
});