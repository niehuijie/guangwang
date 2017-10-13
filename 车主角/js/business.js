//店标照片
function change() {
    var pic = document.getElementById('preview'),
        file = document.getElementById('file_upload')        
    var ext=file.value.substring(file.value.lastIndexOf(".")+1).toLowerCase();    
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
        }
        // IE6浏览器设置img的src为本地路径可以直接显示图片
         if (isIE6) {
            pic.src = reallocalpath;
            picc.src = reallocalpath;
            piccto.src = reallocalpath;
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
         pic.src=this.result;
        
     }
 }
 $(function(){
   $('.shade [type="submit"],.shade input[type="button"]').click(function(){
   	$('.shade').hide()
   })
   //选择城市
   
   	    _init_area();
		var Gid = document.getElementById;		
		Gid.call(document, 's_county').setAttribute('onchange', 'showArea()');
      
	//消息通知弹出框
	
})