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
	function aa(e) {
	    e.stopPropagation();
	    var _selfN = $(this).next();
	    if ($(this).hasClass('disabled')) {
	        return;
	    }
	    $(this).next().show();
	    $('body').bind('click', function (e) {
	        e.stopPropagation();
	        _selfN.hide();
	    })
	}
	function changeV(obj) {
	    var k = obj.attr('p-id');
	    var v = obj.text();
	    obj.parent().parent().hide().prev().find('span').attr('p-id', k).text(v);
	    return k;
	}
	$('.selectELem').click(aa);
	$('.selectCarBrand').next().children().on('click', 'li', function () {
	    var _self1 = $(this);
	    var v = changeV(_self1);
	    $(this).parent().parent().parent().next().children().eq(0).removeClass('disabled').find('span').text('选择车型');
	});
	$('.selectCarType').bind('click', function () {
	    var ve = $(this).parent().prev().find('.selectCarBrand span').attr('p-id');
	    var _selfc = $(this);
	    $.post("/tools/submit_ajax.ashx?action=TypeProduct", { ID: ve }, function (json) {
	        if (json != "") {
	            _selfc.next().children().html(json).children().bind('click', function () {
	                _self2 = $(this);
	                var u = location.href;
	                var vv2 = $(this).attr('p-id');
	                if (u.indexOf(vv2) > 0) {
	                    JsAlert('您已选过此车型，请选择其它车型！');
	                } else {
	                    var id = changeV(_self2);
	                    var index = _self2.parents('td').data('index');
	                    var p1 = GetQueryString("p1");
	                    var p2 = GetQueryString("p2");
	                    var p3 = GetQueryString("p3");
	                    var p4 = GetQueryString("p4");
	                    if (index == 1) {
	                        p1 = id;
	                    }
	                    if (index == 2) {
	                        p2 = id;
	                    }
	                    if (index == 3) {
	                        p3 = id;
	                    }
	                    if (index == 4) {
	                        p4 = id;
	                    }
	                    var url = "/Contrast.aspx?a";
	                    if (p1 > 0) url += "&p1=" + p1;
	                    if (p2 > 0) url += "&p2=" + p2;
	                    if (p3 > 0) url += "&p3=" + p3;
	                    if (p4 > 0) url += "&p4=" + p4;
	                    location.href = url;
	                }
	            })
	        } else {
	            _selfc.next().children().html('暂无车型');
	        }
	    });
	});
});