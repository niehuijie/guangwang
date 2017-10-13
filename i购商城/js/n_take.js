$(function() {
  $('label').click(function(){
    var radioId = $(this).attr('name');
    $('label').removeAttr('class') && $(this).attr('class', 'checked');
    $('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
  });
 

//商品评价
var stars = [
        ['nxingxing2.jpg', 'nxingxing1.jpg', 'nxingxing1.jpg', 'nxingxing1.jpg', 'nxingxing1.jpg'],
        ['nxingxing2.jpg', 'nxingxing2.jpg', 'nxingxing1.jpg', 'nxingxing1.jpg', 'nxingxing1.jpg'],
        ['nxingxing2.jpg', 'nxingxing2.jpg', 'nxingxing2.jpg', 'nxingxing1.jpg', 'nxingxing1.jpg'],
        ['nxingxing2.jpg', 'nxingxing2.jpg', 'nxingxing2.jpg', 'nxingxing2.jpg', 'nxingxing1.jpg'],
        ['nxingxing2.jpg', 'nxingxing2.jpg', 'nxingxing2.jpg', 'nxingxing2.jpg', 'nxingxing2.jpg'],
    ];
var txt = ['失望','一般','满意','喜欢','超爱']
    $(".block li").find("img").hover(function() {
        var obj = $(this);
        var index = obj.index();
        var li = obj.closest("li");
        var star_area_index = li.index();
        for (var i = 0; i < 5; i++) {
            li.find("img").eq(i).attr("src", "images/" + stars[index][i]);//切换每个星星
            $('#txt').text(txt[index])            
        }  
    }, function() {
        var obj = $(this);
        var li = obj.closest("li");
        var star_area_index = li.index();
        var index = li.attr("data-default-index");//点击后的索引
        if (index >= 0) { //若该行点击后的索引大于等于0，说明该行星星已被点击
            for (var i = 0; i < 5; i++) {
                li.find("img").eq(i).attr("src", "images/" + stars[index][i]);//更新该行星星
            }
        } else {
            for (var i = 0; i < 5; i++) {
                li.find("img").eq(i).attr("src", "images/nxingxing1.jpg");//更新该行星星都变初始状态
                $('#txt').text('')
            }
        }
    })
    $(".block li").find("img").click(function() {
        var obj = $(this);
        var li = obj.closest("li");
        var star_area_index = li.index();
        var index = obj.index();
        li.attr("data-default-index", index);
        $('#txt').text(txt[index])
    })

//添加图片
$('.form_img').delegate('.add', 'click', function () {
    // next：与img处于同一层级的下一个标签
    $(this).next().click()   
})
$('#button').click(function(){
	var leng = $('.form_img input').length
	if(leng<5){
    var uploads = $('.form_img')
    uploads.append('<div class="pr img zfd"><img src="images/add.png" class="add"> '+
            '<input type="file" name="file'+ uploads.children().length / 2 +'"></div>')
 }
})
$('.form_img').delegate('.guanbi', 'click', function () {
   $(this).parent().remove();
})
//弹出框
$('#submit').click(function(event){
	event.preventDefault();
	$('.merchant').show()
	$('.up_merchant').show()
})
$('#gb').click(function(event){
	event.preventDefault();
	$('.merchant').hide()
	$('.up_merchant').hide()
})
$('.close').click(function(){
	$('.merchant').hide()
	$('.up_merchant').hide()
})
});
$('.form_img').delegate('input', 'change', function () {
    // 找到选中的文件
    var pic = $(this).prev()[0],
        file = $(this)[0];
    var uploads = $(this).parent()
    var ext=file.value.substring(file.value.lastIndexOf(".")+1).toLowerCase();    
     // gif在IE浏览器暂时无法显示
     if(ext!='png'&&ext!='jpg'&&ext!='jpeg'){
         alert("在ie浏览器中图片的格式必须为png或者jpg或者jpeg格式！"); 
         return;
     }
     var isIE = navigator.userAgent.match(/MSIE/)!= null,
         isIE6 = navigator.userAgent.match(/MSIE 6.0/)!= null;
      var userAgent = navigator.userAgent;
     if(isIE) {
        file.select();
        file.blur();
        var reallocalpath = document.selection.createRange().text;
        console.log(reallocalpath)
        // IE6浏览器设置img的src为本地路径可以直接显示图片
         if (isIE6) {
            pic.src = reallocalpath;
         }else if(window.ActiveXObject){
         	 var reIE = new RegExp("MSIE (\\d+\\.\\d+);");  
             reIE.test(userAgent);  
             var fIEVersion = parseFloat(RegExp["$1"]);
            if(fIEVersion == 10) {
                html5Reader(file,preview);                         	         
            }else {            	
            // 非IE6版本的IE由于安全问题直接设置img的src无法显示本地图片，但是可以通过滤镜来实现
             pic.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\"" + reallocalpath + "\")";
             // 设置img的src为base64编码的透明图片 取消显示浏览器默认图片
             pic.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';               
             uploads.append('<div class="guanbi"></div>')
        }}
     }else {
        html5Reader(file,pic,uploads);
}})
function html5Reader(file,pic,uploads){
     var file = file.files[0];     
     var reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onload = function(e){
//       var pic = document.getElementById(pic);
         pic.src=this.result;
     uploads.append('<div class="guanbi"></div>')    
     }
}
