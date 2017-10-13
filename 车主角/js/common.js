$(function(){
	// 弹出框
	$('a[data-dialog]').click(function(e){
		e.preventDefault();
		var idELem=$(this).data('dialog');
		$(idELem).show();
		$('html,body').addClass('shade-body');
	});
	$('.dialog-close[data-hide],.dialog-cancle[data-hide]').click(function(e){
		e.preventDefault();
		var classELem=$(this).data('hide');
		$(this).parents('.'+classELem).hide();
		$('html,body').removeClass('shade-body');
		
	});
	// 回到顶部
	$(window).scroll(function(){
		var clickElem=$('.backHead');
		if($(this).scrollTop()>=100){
			clickElem.show().bind('click',function(e){
				e.preventDefault();
				$('html,body').stop().animate({scrollTop:0},500);
			});
		}else{
			clickElem.hide();
		}
	});
	// 顶部下拉菜单
	function downShow(ele) {
		$(ele).hover(function() {
			$(this).find('>a').toggleClass('current').next().toggle();
		});
	}
	downShow('.myInfoItem li');
	(function() {
		var searchInput = $('.inputBox input'),
			searchzUp = $('.search-zUp');
		searchInput.focus();
		searchInput.keydown(function() {
			searchzUp.hide();
		});
		searchInput.blur(function() {
			if (searchInput.val() == '') {
				searchzUp.show();
			}
		});
	})();
	// tab
	function tab(ulBox, divBox,eType) {
		$(divBox).find('>div').eq(0).show();
		function ti(ev,elem){
			ev.preventDefault();
			var index = $(elem).index();
			$(elem).addClass('cur').siblings().removeClass('cur');
			$(divBox).find('>div').eq(index).show().siblings().hide();
		}
		if(eType==0){
			$(ulBox).find('>li').click(function(e) {
				var ev=e,_self=$(this);
				ti(ev,_self);
			});
		}else{
			$(ulBox).find('>li').hover(function(e) {
				var ev=e,_self=$(this);
				ti(ev,_self);
			});
		}
		
	}
	// 热门车型 切换
	tab('.hct-product-tab','.hct-product');
	// 详情切换
	tab('.cm-down-hd>ul','.cm-down-bd',0);
	// 猜你喜欢
	tab('.tabCircle','.guess-bd');
	// 悬浮广告
	$('.susp-close').click(function(e){
		e.preventDefault();
		$(this).parent().hide();
	});
});