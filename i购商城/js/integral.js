$(function(){ 
$(".gzgz a").hover(
function (e) {
    $(this).next().show()
    
},function () {
	if($(".track").hover())
    $(this).next().hide()
}
);
$(".sign_in>img").one("click", function(){
  $(this).attr({ src: "images/qianyi.png", alt: "已签到" });
	$('#sign_in').show()
});
$('#sign_in').click(function(){
	$('#sign_in').hide()
})
//轮播图
$('#img').carouFredSel({
	prev: '#left',
	next: '#right',
	pagination: "#numbernone",
	scroll: 1000
});
setInterval(function(){
	var nn =$('#numbernone .selected span').text()	
	$('#number').text(nn)
},1000)
$(".track").hover(
    function () {
	$(this).show()
},
    function () {
    $(this).hide();
}
);
$(".details a").hover(
    function (){
	$(this).find('img').css({'border': '1px solid #E11919'})
	$(this).find('span').eq(0).css({'color':'#E11919','text-decoration': 'underline'})
},
    function () {
    $(this).find('img').css({'border': ''})
	$(this).find('span').eq(0).css({'color':'','text-decoration': ''})
}
);
//男女选择
 $('label').click(function(){
		var radioId = $(this).attr('name');
		$('label').removeAttr('class') && $(this).attr('class', 'checked');
		$('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
	});
	//信息认证弹框
$('a[data-showide]').click(function(e){
	e.preventDefault()
	var _class =$(this).data('showide');	
	$(this).addClass('selected').siblings().removeClass('selected')
	$(_class).show().siblings().hide();
})
})