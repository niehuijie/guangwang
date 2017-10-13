$(function() {
//弹出框按钮
$('#close').click(function(){
	$('#pop_upa').css({display:'none'})
	$('#pop_upb').css({display:'block'})
})
$('#confirm').click(function(){
	$('.pop,#pop_upa').css({display:'none'})
})
$('#confirmb').click(function(){
	$('.pop,#pop_upb').css({display:'none'})
})
$('.save').click(function(){
	$('.pop,#pop_upa').css({display:'block'})
})
$('data_fu')
$('#gerendata').click(function(e){
	e.preventDefault()
	$('triangle-up').css({'left':'60px'})
    $('.nright_mian').show()
    $('.nright_mianphotograph').hide()
    $('#gerendata').css({color:'red'})
    $('#gerenphotg').css({color:'#8e8e8e'})
    $('.imgareaselect-outer').hide()
    $('div:last').prev().prev().prev().prev().hide()
    
})

$('#gerenphotg').click(function(e){
	e.preventDefault()
    $('.nright_mian').hide()
    $('#gerendata').css({color:'#8e8e8e'})
    $('.nright_mianphotograph').show()
    $('#gerenphotg').css({color:'red'})    
})
integrity(50)
function integrity(widthh){
	$('.data_full2').css({width:widthh+'px'}).text(widthh+'%')
}
})