$(function() {
  $('label').click(function(){
    var radioId = $(this).attr('name');
    $('label').removeAttr('class') && $(this).attr('class', 'checked');
    $('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
  });
 
}); 
//编辑图片按钮

 function change() {
    var pic = document.getElementById('preview'),
        file = document.getElementById('file_upload'),
        picc = document.getElementById('view_photo')
    var ext=file.value.substring(file.value.lastIndexOf(".")+1).toLowerCase();
    console.log(ext)
     // gif在IE浏览器暂时无法显示
     if(ext!='png'&&ext!='jpg'&&ext!='gif'){
//       alert("图片的格式必须为png或者jpg或者jpeg格式！"); 
         return;
     }
     var isIE = navigator.userAgent.match(/MSIE/)!= null,
         isIE6 = navigator.userAgent.match(/MSIE 6.0/)!= null;
      var userAgent = navigator.userAgent;
     if(isIE) {
        file.select();
        file.blur();
        var reallocalpath = document.selection.createRange().text;
        var image = new Image();
        image.src = reallocalpath;
        image.onload = function(){
        console.log(image.width);
        alert(image.height);
        }
        // IE6浏览器设置img的src为本地路径可以直接显示图片
         if (isIE6) {
            pic.src = reallocalpath;
            picc.src = reallocalpath;
         }else if(window.ActiveXObject){
         	 var reIE = new RegExp("MSIE (\\d+\\.\\d+);");  
             reIE.test(userAgent);  
             var fIEVersion = parseFloat(RegExp["$1"]);
            if(fIEVersion == 10) {
                html5Reader(file);                         	         
            }else {          	
            // 非IE6版本的IE由于安全问题直接设置img的src无法显示本地图片，但是可以通过滤镜来实现
             pic.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\"" + reallocalpath + "\")";
             // 设置img的src为base64编码的透明图片 取消显示浏览器默认图片
             pic.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';               
             picc.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\"" + reallocalpath + "\")";
             // 设置img的src为base64编码的透明图片 取消显示浏览器默认图片
             picc.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';                                     
//          var imgf =pic.offsetWidth
//				    if(imgf>425){
					  alert('ie9及以下暂不支持图片使用裁剪功能,请升级版本进行头像裁剪')
					  init(true);					
//				    }				    
            }}
     }else {
        html5Reader(file);
     } 
}
 function html5Reader(file){
     var file = file.files[0];
     var reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onload = function(e){
         var pic = document.getElementById('preview');
         var picc = document.getElementById('view_photo');
         pic.src=this.result;
         picc.src=this.result;
     }
 } 
//图片预览
   selectrate=1;
    rate=1;
    
			function preview(img, selection) {
				if (!selection.width || !selection.height)
					return;
        var img=$("#view_photo");
				var scaleX =  $("#previewb").width() / selection.width;
				var scaleY =  $("#previewb").height() / selection.height;

				$('#previewb img').css({
					width : Math.round(scaleX *  $("#preview").width()),
					height : Math.round(scaleY * $("#preview").height()),
					marginLeft : -Math.round(scaleX * selection.x1),
					marginTop : -Math.round(scaleY * selection.y1)
				});
 			}
			
			$(function() {
				init(false);
			});
      function init(fa){
        var width=$('#preview').width();
        var height=$('#preview').height();
        $('#preview').imgAreaSelect({
          aspectRatio : "1:1",
          handles : true,
          fadeSpeed : 200,
          disable : fa,
          onSelectChange : preview
          //x1: 0, y1: 0, x2: 240, y2: 240
        });
      }   