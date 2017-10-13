$(function(){
	jiaxian()	
})
//多个商品样式
function jiaxian(){
	var td = $('.w210')	
	for(i=1;i<td.length;i++){
		var eqq = $('.w210').eq(i).find('.tdto')
		for(j=1;j<eqq.length;j++){
		$('.w210').eq(i).find('.tdto').eq(j).css({'border-top':'1px solid #e4e4e4'})
		$('.w205').eq(i).find('.tdto').eq(j).css({'border-top':'1px solid #e4e4e4'})
		$('.w170').eq(i).find('.tdto').eq(j).css({'border-top':'1px solid #e4e4e4'})
		}
		       
	}
	var commodity = $('.w330')
	for(i=1;i<commodity.length;i++){
		var eq = $('.w330').eq(i).find('.commodity')
		for(j=1;j<eq.length;j++){
		$('.w330').eq(i).find('.commodity').eq(j).css({'border-top':'1px solid #e4e4e4'})
		}
	}
}
