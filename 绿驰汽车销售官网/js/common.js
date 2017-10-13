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
//	wid()
});
if($(window).scrollTop()>=240){
	win_sc();
}
//================
//function wid(){	
//	var st=$(window).scrollTop();
//		if(st==0){
//		    one()
//		}else{
//			$('.lc-benner').css({height:'280px'});
//		}
//	}
//wid()
// //one
// function one(){	
// $("body").on("mousewheel", function(event,delta) {  
//           event.preventDefault();						   
//			 var up = event.deltaY
//		    if(up==-1){
//		      var ht1 = $('.lc-benner').height() - 40;		      
//		      $('.lc-benner').css({height:ht1});
//		      if(ht1<=280){
//		      	$('body').unbind("mousewheel");
//		      	
//		      }
//		    }else{
//		        var ht1 = $('.lc-benner').height() + 40;		      
//		        $('.lc-benner').css({height:ht1});
//		      if(ht1>=560){
//		      	$('.lc-benner').css({height:'574px'});
//		      	$('body').unbind("mousewheel");
//		      	wid()
//		      	
//		      }
//		    }
//   });
// }
//=======================

$(function(){
    $('#back').click(function(){
    	$('html,body').animate({
            scrollTop: 0
        }, 500);
        return false;
    })        
})
$(function(){
	var infoTtabLi=$(".infon-tab>li");
	var infoTtabLen=infoTtabLi.length;
	if(infoTtabLen==1){
		$('.infon-tab').hide()
	}
	infoTtabLi.css({width:1200/infoTtabLen});
	infoTtabLi.eq(infoTtabLen-1).css({borderRightWidth:0});
	var navstr=navigator.userAgent;
	if(navstr.indexOf("MSIE")>-1&&navstr.indexOf("Trident")==-1){
		infoTtabLi.css({width:(1200/infoTtabLen)-1});
		infoTtabLi.eq(infoTtabLen-1).css({width:1200/infoTtabLen});
		alert(12);
	}	
})
 //tab切换
    function tabs(tabClass, tabNum,liClass){
    $('.'+liClass+' li').removeClass('bj').eq(tabNum).addClass('bj')
    $('.'+tabClass).hide();
    $('.'+tabClass+tabNum).show();	
    }
    
(function(){
	 //轮播图	
$(".sliderUl").hcjSlider({
	tabNav:true,
	pageNav:true,
	tabNavPosition:'middle',
	tabnavCur:'current',
	tabNavMr:6,
	tabNavChildStyle:'span',
	effect:'efade',
	firstScreenShowNum:1,
	firstScreenShowMr:0,	
	prev:'prev', 
	next:'next',
	speed:1000
});
})()

		
