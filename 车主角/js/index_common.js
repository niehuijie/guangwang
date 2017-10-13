$(function(){
	var num=0;
	$('.choiceCity>a').click(function(e){
		e.preventDefault();
		$(this).toggleClass('cur');
		$(this).next().toggle();
		// 只需要获取一次位置就可以了
		if(num===0){
			var letterP=$('.letterCityList').offset().top;
			var letterOffset=[];
			$('.letterCityList>ul>li').each(function(i){
				letterOffset.push($(this).offset().top-letterP-15);
			});
			$('.letterDl dd').bind('click',function(e){
				$(this).addClass('current').siblings().removeClass('current');
				e.preventDefault();
				index=$(this).index();
				$('.letterCityList>ul').scrollTop(letterOffset[index-1]);
			});
			num=1;
		}
	});
	// 分类导航
	$('body').not('.indexPage').find('.classTitle').mouseenter(function(){
		var _self=$(this);
		 _self.next().show();
		 _self.parent().bind('mouseleave',function(){
		 	_self.next().hide();
		});
	});

});