$(function(){
	// 品牌显示二级
	(function(){
		var nTwoType=$(".n-brandLevelTwo");
		$(".n-brandItems").mouseenter(function(e){
			$(this).addClass("active");
			nTwoType.show();
		})
		$(".n-brandItems").mouseleave(function(){
			nTwoType.hide();
			$(this).removeClass("active");
		})
	})();
	// 分类导航
	(function(){
		$('body').not('.indexPage').find('.n-allType').mouseenter(function(){
			var _self=$(this);
			 _self.next().show();
			 _self.parent().bind('mouseleave',function(){
			 	_self.next().hide();
			});
		});
	})();
});
(function($){
	$.tab=function(ulBox, divBox,eType){
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
})(jQuery);
