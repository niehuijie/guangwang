$(function(){
	// 字母选品牌
	var len=$('.letter-nav a').length-1,allb=$('#aLLBrand'),allblen=allb.children().length;
	$('#hotBrand a').show();
	$('.letter-nav a').click(function(event){
		event.preventDefault();
		var _self=$(this);
		$(this).addClass('current').siblings().removeClass('current');
		var index=_self.index();
		if(index===0){
			$('#hotBrand').show();
			allb.hide();
		}else{
			var code=_self.text();
			$('#hotBrand').hide();
			allb.show();
			console.log(code);
			for (var i =0; i <allblen; i++) {
				if(allb.find('a').eq(i).attr('spell-code')==code){
					allb.children().eq(i).show().siblings('a:not([spell-code="'+code+'"])').hide();
				}else{
					allb.find('a').eq(i).hide();
				}
			}
		}
	});
	$('.item-title').click(function(){
		$(this).next().toggle();
	});
	$.tab('.tabCircle','.guess-bd');
});