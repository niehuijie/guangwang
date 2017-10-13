$(function() {
$('.subtract').click(function(){
	var i = $(this).next().val()
	if(i>0){
		i--
	}	
	$(this).next().val(i)
	$('#append').css({backgroundColor:''})
	$(this).css({backgroundColor:'#fafafa'})
})
$('.append').click(function(){
	var i = $(this).prev().val()
	if(i<5){
		i++
	}
	$(this).prev().val(i)
	$('#subtract').css({backgroundColor:''})
	$(this).css({backgroundColor:'#fafafa'})
})
//按钮选择
$('label').click(function(){
    var radioId = $(this).attr('name');
     $(this).toggleClass('checked');
    $('input[type="checkbox"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
  });
  var qxb = false
$('#qxbb').click(function(){
	if(qxb==false){
		$("input[type='checkbox']").prop("checked",true);
		$("label").attr('class','checked')
		qxb=true		
		return 
	}
	if(qxb==true){
		$("input[type='checkbox']").prop("checked",false);
		$("label").attr('class','')		
		qxb=false
		return
	}
})
//弹出修改物流弹出框
$('#nmodification').click(function(event){
	event.preventDefault();
	$('.merchant').show()
	$('.up_merchant').show()
})
$('#gb').click(function(event){
	event.preventDefault();
	$('.merchant').hide()
	$('.up_merchant').hide()
})
$('#baocun').click(function(){
	$('.merchant').hide()
	$('.up_merchant').hide()
})
//信息展开
var unfold = true
$('#unfold').click(function(){
	if(unfold==true){
		$('#unfold').text('收起  ∧' )
		unfold=false
		return
	}
	if(unfold==false){
		$('#unfold').text('展开  ∨')
		unfold = true
		return
	}
})
 $('#preview').click(function(){
   	  $(this).next().click()
   })
   $('#previewb').click(function(){
   	  $(this).next().click()
   })
   $('#previewc').click(function(){
   	  $(this).next().click()
   })
   var index = $("#tcdPageCode_money>a").last().prev().text()   
   $("#tcdPageCode_money").createPage({
        pageCount:index,
        current:1,
        backFn:function(p){
            console.log(p);
        }
    });
   var indexx =$("#tcdPageCode_main>a").last().prev().text()
   $("#tcdPageCode_main").createPage({
        pageCount:indexx,
        current:1,
        backFn:function(p){
            console.log(p);
        }
});  
})

function change(f,preview) {
    var pic = document.getElementById(preview),
        file = document.getElementById(f);
 
    var ext=file.value.substring(file.value.lastIndexOf(".")+1).toLowerCase();
    console.log(ext)
     // gif在IE浏览器暂时无法显示
     if(ext!='png'&&ext!='jpg'&&ext!='jpeg'){
         alert("图片的格式必须为png或者jpg或者jpeg格式！"); 
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
        
        }}
     }else {
        html5Reader(file,preview);
     }
}
 
 function html5Reader(file,preview){
     var file = file.files[0];
     var reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onload = function(e){
         var pic = document.getElementById(preview);
         pic.src=this.result;
     }
 } 
   function changone(){
   	change('f','preview')
   }
   function changto(){
   	change('ff','previewb')
   }
   function changsan(){
   	change('fff','previewc')
   }
