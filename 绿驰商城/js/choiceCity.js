$(function(){
	(function(){
		var num=0;
		$('.l-choiceCity>a').click(function(e){
			e.preventDefault();
			$(this).toggleClass('cur');
			$(this).next().toggle();
			// 只需要获取一次位置就可以了
			if(num===0){
				var letterP=$('.l-letterCityList').offset().top;
				var letterOffset=[];
				$('.l-letterCityList>ul>li').each(function(i){
					letterOffset.push($(this).offset().top-letterP-15);
				});
				$('.l-letterDl dd').bind('click',function(e){
					$(this).addClass('current').siblings().removeClass('current');
					e.preventDefault();
					index=$(this).index();
					$('.l-letterCityList>ul').scrollTop(letterOffset[index-1]);
				});
				num=1;
			}
		});
	})();
})
