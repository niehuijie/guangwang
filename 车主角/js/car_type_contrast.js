$(function(){
	var mudiLoca=$('.car_type_top').offset().top,car_type_top=$('.car_type_top'),li=$('.car_type_aside>ul>li');
	
	var letterOffset=[],loca=[];
	li.each(function(){
		loca.push($(this).offset().top);
	});
	$('.car_type_bottom>table').each(function(i){
		letterOffset.push($(this).offset().top+328-loca[i]-58);
	});
	li.find('a').bind('click',function(e){
		e.preventDefault();
		var _self=$(this);
		var index=_self.parent().index();
		console.log(index);
		$('html,body').animate({scrollTop:letterOffset[index]},'fast',function(){
			_self.parent().addClass('cur').siblings().removeClass('cur');
		});
	});
	$(window).scroll(function(){
		var st=$(this).scrollTop();
		if(st>=mudiLoca){
			car_type_top.addClass('fixed');
			$('.car_type_bottom').css({marginTop:328});
		}else{
			car_type_top.removeClass('fixed');
			$('.car_type_bottom').css({marginTop:0});
		}
		$.each(letterOffset,function(i,n){
			console.log(i);
			if(i==0){
				if(st>=letterOffset[i]){
					li.eq(i).addClass('cur').siblings().removeClass('cur');
				}
			}else{
				if(st>=letterOffset[i]){
					li.eq(i).addClass('cur').siblings().removeClass('cur');
				}else{
					li.eq(i).removeClass('cur');
				}
			}
			
		});
	});
	function aa(){
		console.log(1);
		$(this).next().toggle();
	}
	$('.selectCarBrand').click(aa);
	$('.selectOptionsUl li').click(function(){
		console.log(1);
		var _self=$(this);
		var k=_self.data('key');
		var v=_self.text();
		console.log(k+','+v);
		_self.parent().parent().hide().prev().find('span').data('key',k).text(v);
		$('.selectCarType').addClass('active').bind('click',function(){
			$(this).next().toggle();
		});
	});
});