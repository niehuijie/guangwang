$(function(){
	function wWchange(){
		var wW=$(window).width();
		if(wW>750){
			wW=750;
		}
		$('html').css({fontSize:wW/7.5});
	}
	wWchange();
	$(window).resize(function(){
		wWchange();
	});
	 //回到顶部
	$(window).scroll(function() {
		var st = $(this).scrollTop();	
		if (st >= 200) {
			$("#return-top").show();
			$("#return-top").click(function(){
				$('html,body').stop().animate({
						scrollTop: 0
					}, 300, function() {
						$("#return-top").hide();
					});
			})		
			} else{
			$("#return-top").hide();
		}
	});
	
	$(".li-show").click(function(e){
		e.preventDefault();
		$(this).parent().parent().toggleClass('cur').siblings().removeClass("cur");
	});
	$(".js-menu a").click(function(){		
		$(this).parent().parent().toggleClass('nav');
		$(".menu-list").toggleClass("cur");
		$("html,body").toggleClass('hd100');
	});
	$("a.suop").click(function(){
		$(this).parent().toggleClass("A-fold")
	});
	var body = document.body.scrollHeight;
	var footer =$(window).height();
	if(body <= footer){
		$("body").addClass('h100');
	}
});

