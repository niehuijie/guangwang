$(function(){
	$('.nextTime').click(function(){
		var _self=$(this);
		$('#dialog').show().find('.phoneBox').show();

		$('#phoneSub').bind('click',function(){
			var rule=/^1[3|4|5|6|7|8|9][0-9]{9}$/;
			var inputV=$('input[name="phonenum"]');
			var v=inputV.val();
			if(!rule.test(v)){
				inputV.bind('focus',function(){
					$(this).next().hide();
				}).next().show();
				return false;
			}else{
				_self.text('已预约本场抢购');
			}
		});
		
	});

	$('.orderBox .btn-cancle,.ob-close').bind('click',function(e){
		e.preventDefault();
		$(this).parents('.orderBox').hide();
		$('#dialog').hide();
	});
	// 限时抢购
	(function() {
		var pointUl = $('.pointsTimeUl'),
			left = pointUl.position() ? pointUl.position().left : false,
			goodsNum = $('.muchRushGood'),
			hourPointp = $('.hourPointp'),
			c = 0,
			pointUlLi = pointUl.find('li'),
			currentLeft, currentIndex, goodsObj, goodsListUl = $('.timeQiang li');
		// 箭头A
		$('.timeLeftA').click(function(event) {
			event.preventDefault();
			// 执行的动画
			console.log(c);
			if (pointUl.is(':animated')) {
				return false;
			} else {
				if(c<0){
					c=0;
					return;
				}
				if (c == 0) {
					pointUl.animate({
							left: left + 378 
						},
						300,function(){
							pointUlLi.eq(c).addClass('current').siblings().removeClass('current');
						});
				} else {
					c--;
					currentLeft = pointUl.position().left;
					currentIndex = pointUl.find('li.current').index();
					pointUl.animate({
							left: currentLeft + 378
						},
						300,
						function() {
							pointUlLi.eq(currentIndex - 1).addClass('current').siblings().removeClass('current');
							var dataCc = pointUl.find('li.current').attr('data-cc'); //获取点击的场次
						});
				}
			}
		});
		// 箭头B
		$('.timeRightB').click(function(event) {
			event.preventDefault();
			// 执行的动画
			
			if (pointUl.is(':animated')) {
				return false;
			} else {
				if (c == 10) {
					return;
				} 
				c++;
				currentLeft = pointUl.position().left;
				currentIndex = pointUl.find('li.current').index();
				pointUl.animate({
						left: currentLeft - 378
					},
					300,
					function() {
						pointUlLi.eq(currentIndex + 1).addClass('current').siblings().removeClass('current');
						var dataCc = pointUl.find('li.current').attr('data-cc'); //获取点击的场次
					}
				);
			}
		});
		// 点击场次
		pointUlLi.click(function(event) {
			var index = $(this).index(),
				currentLeft = pointUl.position().left,
				dataCc = $(this).attr('data-cc');
			currentIndex = pointUl.find('li.current').index();
			if (index - currentIndex > 0) {
				c = (index - currentIndex);
			} else {
				c = -(currentIndex - index);
			}
			pointUl.animate({
					left: currentLeft - 378 * c
				},
				300,
				function() {
					pointUlLi.eq(index).addClass('current').siblings().removeClass('current');
				});
		});
	})();
	$('.toOrder').click(function(e){
		e.preventDefault();
		$('#dialog').show().find('.overBox').show();
	});
	$('.closeCode').click(function(){
		$(this).parent().hide().parents('#dialog').hide();
	});
	// a=-100;
	// setInterval(function(){
	// 	if(a<=-691){
	// 		a=-100;
	// 	}
	// 	$('.wait').css({backgroundPosition:a-=100});
	// },300);
	$('.waitBox .exitWait').click(function(e){
		e.preventDefault();
		$(this).parent().hide().parents('#dialog').hide();
	});
	
});