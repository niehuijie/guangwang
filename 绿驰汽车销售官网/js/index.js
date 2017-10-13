$(function(){
//轮播图	
//$(".sliderUl").hcjSlider({
//	tabNav:true,
//	pageNav:true,
//	tabNavPosition:'middle',
//	tabnavCur:'current',
//	tabNavMr:6,
//	tabNavChildStyle:'span',
//	effect:'efade',
//	firstScreenShowNum:1,
//	firstScreenShowMr:0,
//	prev:'prev', 
//	next:'next',
//	speed:1000
//});

$('.rightScrollix-ul li a').hover(function(){
		window.clearInterval(time);
	},function(){
		time = setInterval(newScroll, 4000);
	});
	$('.j-scroll a').hover(function(){
		window.clearInterval(time);
	},function(){
		time = setInterval(newScroll, 4000);
	});
	function newScroll() {
		$('.rightScrollix-ul').animate({
			marginTop : -60
		},2000, function() {
				$(this).css({marginTop : "0px"}).find("li:first").appendTo(this);						
		});
	}
	var time = setInterval(newScroll, 4000);
	
   $('.j-scroll a.sup').click(function sup(){
   	  $(this).unbind("click")
   	  $('.rightScrollix-ul').find("li:last").prependTo('.rightScrollix-ul')
   	  $('.rightScrollix-ul').css({marginTop : "-60px"});
      $('.rightScrollix-ul').animate({
      		marginTop : 0	 		
		},1000, function() {
			$('.j-scroll a.sup').bind('click',sup );
		});	   	  
   })
   $('.j-scroll a.sub').click(function sub(){
   	 $(this).unbind("click")
   	 $('.rightScrollix-ul').animate({
			marginTop : -60
		},2000, function() {
				$(this).css({marginTop : "0px"}).find("li:first").appendTo(this);
				$('.j-scroll a.sub').bind('click',sub );
		});  
   })
   //资讯中心
   $('.j-ul li').hover(function(){			   	   
   	   $(this).siblings('li').find('p').hide();			   
   	   $(this).find('p').show();
   	   $(this).siblings('li').find('i.xh').removeClass('cur');
   	   $(this).find('i.xh').addClass('cur');
   },function(){
   	
   })
   //轮播图
  
   $('.sliderUl').carouFredSel({
		prev: '.prev',
		next: '.next',		
		scroll: 1000
	});
	$('#j-ben-ul').carouFredSel({
		prev: '#prev',
		next: '#next',
		height:280,
		scroll: 1000
	});				
	//滚动新闻文字限制			
	$('.rightScrollix-ul li a p').each(function(){
		var maxwidth=110;		
		if($(this).text().length>maxwidth){			
		$(this).text($(this).text().substring(0,maxwidth));		
		$(this).html($(this).html()+'…');
		};
	});
	
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
	
	 $('#back').click(function(){
    	$('html,body').animate({
            scrollTop: 0
        }, 500);
        return false;
    })
	
})
//tab切换
    function tabs(tabClass, tabNum,liClass){
    $('.'+liClass+' li').removeClass('bj').eq(tabNum).addClass('bj')
    $('.'+tabClass).hide();
    $('.'+tabClass+tabNum).show();	
    }