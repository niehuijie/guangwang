$(function(){
$('#affirm').click(function(event){
	event.preventDefault();
	$('.merchant').show()
	$('.up_merchant').show()
})
$('.gb').click(function(event){
	event.preventDefault();
	$('.merchant').hide()
	$('.up_merchant').hide()
	$('.up_merchanta').hide()
})
$('.close').click(function(){
	$('.merchant').hide()
	$('.up_merchant').hide()
	$('.up_merchanta').hide()
})
$('#quedinga').click(function(){
	$('.up_merchant').hide()
	$('.up_merchanta').show()
})
$('#quedingb').click(function(){
	location.href = 'n_evaluate.html'
})
qu()
function qu(){
	var browser=navigator.appName
    var b_version=navigator.appVersion
    var version=b_version.split(";");
    var trim_Version=version[1].replace(/[ ]/g,"");
    if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0"){
     
     $('.radius').css({'backgroundColor':'#ffffff'})
     $('.radius2').css({'backgroundColor':'transparent'})
     $('.particulars_main_lc .red').css({color:'#e11919'})
     
    } 
   }
})