function CharMode(iN){
        if (iN>=48 && iN <=57) //数字    
            return 1;    
        if (iN>=65 && iN <=90) //大写    
            return 2;    
        if (iN>=97 && iN <=122) //小写    
            return 4;    
        else    
            return 8;     
    }  
    //bitTotal函数    
    //计算密码模式    
    function bitTotal(num){   	
        modes=0;    
        for (i=0;i<4;i++){    
            if (num & 1) modes++;    
            num>>>=1;    
        }  
        return modes;    
    }  
    //返回强度级别
    function checkStrong(sPW){    	
        if (sPW.length<1)    
            return 0; //密码太短，不检测级别  
        Modes=0;    
        for (i=0;i<sPW.length;i++){    
            //密码模式    
            Modes|=CharMode(sPW.charCodeAt(i));    
        }  
        return bitTotal(Modes);    
    }  
    
//    显示颜色  
//    向内传值
        $('#password').bind('input propertychange', function() {  
        	var pwd =$('#password').val()        	
            Dfault_color="#eeeeee";     //默认颜色  
            L_color="#FF0000";      //低强度的颜色，且只显示在最左边的单元格中  
            M_color="#FF9900";      //中等强度的颜色，且只显示在左边两个单元格中  
            H_color="#33CC00";
            Lcolor1 = '弱'
            Lcolor2 = '中'
            Lcolor3 = '强'
            //高强度的颜色，三个单元格都显示
            if (pwd==null||pwd==''){    
                Lcolor=Mcolor=Hcolor=Dfault_color;  
            }    
        else{    
            S_level=checkStrong(pwd);    
            switch(S_level) {    
            case 0:    
                Lcolor=Mcolor=Hcolor=Dfault_color;  
                break;  
            case 1:    
                Ycolor=Lcolor=L_color;
                Lcolora =Lcolor1
                Mcolor=Hcolor=Dfault_color;  
                break;    
            case 2:    
                Ycolor=Lcolor=Mcolor=M_color;
                Lcolora =Lcolor2
                Hcolor=Dfault_color;    
                break;    
            default:    
                Ycolor=Lcolor=Mcolor=Hcolor=H_color;
                Lcolora =Lcolor3
        }       
        }
        document.getElementById("strength_LL").style.background=Lcolor;
        document.getElementById("qiangdub").innerHTML= Lcolora
        document.getElementById("strength_MM").style.background=Mcolor;
        document.getElementById("strength_HH").style.background=Hcolor;
        
    })
//发送验证码
    function checkPhone(phon){
    	if(phon.length==11){
        var phone = document.getElementById('phone').value;
        if(!(/^1[34578]\d{9}$/.test(phone))){         
        return false; 
        }
        if(/^1[34578]\d{9}$/.test(phone)){       	       	        	             	        	
        }
      }   	   	
    }
    $(function(){ 
	$('.yzminput2').click(function(){
        		console.log('111')        		
                 time(this)
                 $('.yzminput2').css({color:'#a2a2a2',border:'none','background-color':'#DCDCDC' })
                 $('.yzminput2').html('<i>'+60+'</i>'+"秒后重新发送 ")
                var wait=60;
                function time(o) {                	
		        if (wait == 0) {
			    o.removeAttribute("disabled");			
			    $('.yzminput2').text('重新发送')
			    $('.yzminput2').css({'border':'1px solid #e11919','background-color':'#feeeef','color':'#e11919'})
			    $('.tishi').hide()
			      wait = 60;
		        }else{
			    o.setAttribute("disabled", true);
                 wait--;
                 if(wait<=60){
                 		     
			     $('.yzminput2').html('<i class="c_c30001">'+wait+'</i>'+"秒后重新发送 ")
			    }
			setTimeout(function(){				
				time(o)				
			},
			1000)
		}
	}                 		
    	$('.tishi').show()
   })
	$(function(){
	$('.xiugai1').click(function(){
		location.href = '#xiugai'
		$('#login_message').hide()
		$('#password_modification').show()
	});
	$('.bangding1').click(function(){
		location.href = '#bangding'
		$('#login_message').hide()
		$('#phone_bound').show()
	})		
	//手机绑定重复弹出框
$('.yzminput3').click(function(event){
    var a = $('#password').val()
    var b = $('#passwordc').val()
    if(a==b){    	
       $('.merchant').show()
       $('.up_merchant').show()
    }else{
    	alert('两次输入密码不一致')
    }
    
})
$('#guanb').click(function(){    
    $('.merchant').hide()
    $('.up_merchant').hide()
})
$('#next').click(function(){
	$('.merchant').hide()
	$('.up_merchant').hide()
})
anquan(1)
$('#find_send').click(function RecommandProduct(){       		     		
      time(this)               
      $('#find_send').addClass("red").html('信息已发送(60)')
      var wait=60;
      function time(o) {                	
		if (wait == 0) {
			o.removeAttribute("disabled");			
			$('#find_send').removeClass("red").text('重新发送').bind('click', RecommandProduct);			   			    
			wait = 60;
		}else{
			o.setAttribute("disabled", true);
            wait--;
            if(wait<=60){
            $('#find_send').unbind("click");		     
			$('#find_send').html('信息已发送('+wait+")")
			}
	    setTimeout(function(){				
		     time(o)				
		},1000)
		}
	}                 		
    	
   })
})
 $('.amend_pay_main .input .button').click(function Recomm(){
 	var nb = $(this);
 	$(nb).css({color:'#999'});
 	$(nb).next().show();
 	  time(this) ;              
      var wait=60;
      function time(o) {                	
		if (wait == 0) {
			o.removeAttribute("disabled");
			$(nb).css({color:'#333'}).bind('click', Recomm);
			$(nb).next('p').hide();			   			    
			wait = 60;
		}else{
			o.setAttribute("disabled", true);
            wait--;
            if(wait<=60){
            $(nb).unbind("click");		     
			$(nb).next('p').show();
			$(nb).next().find('span').text(wait);
			}
	    setTimeout(function(){				
		     time(o);				
		},1000)
		}
	}         
 })
    $('input[data-show]').click(function(){
    	$('.n-mianyou').hide();
		var idELem=$(this).data('show');
		$('#'+idELem).show();		
	});
	$('a[data-show]').click(function(e){
		e.preventDefault();
		$('.n-mianyou').hide();
		var idELem=$(this).data('show');
		$('#'+idELem).show();		
	});
})    
//安全级别
function anquan(b){		
	if(b==1){
		$('#strength_H').removeClass("intermediate advanced").addClass('primary'); 
	    $('#text').text('低').css('color','#ff5351');
	    $('.yuanquan').css({'background-color': '#ff5351'});
	}else if(b==2){
		$('#strength_H').removeClass("primary advanced").addClass('intermediate');
	    $('#text').text('中').css('color','#ff9247');
	    $('.yuanquan').css({'background-color': '#ff9247'});
	}else{
		$('#strength_H').removeClass("intermediate primary").addClass('advanced');
	    $('#text').text('高').css('color','#66cc99 ');
	    $('.yuanquan').css({'background-color': '#66cc99'});
	}	
}


 