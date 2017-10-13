function win_sc(){
	var st=$(window).scrollTop();
 	if(st>=240){
 		$('.back-fixed').show();
 	}else{	 		
 		$('.back-fixed').hide();		
 	}
}
$(window).scroll(function(){
	win_sc();
});
if($(window).scrollTop()>=240){
	win_sc();
}
$(function(){
    $('#back').click(function(){
    	$('html,body').animate({
            scrollTop: 0
        }, 500);
        return false; 
    });     
});