$(function(){
	function wWchange(){
		var wW=$(window).width();
		if(wW>750){
			wW=750;
		}
		$('html').css({fontSize:wW/750});
	}
	wWchange();
	$(window).resize(function(){
		wWchange();
	});		
});

