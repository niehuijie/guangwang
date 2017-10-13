$(function(){
	var ar = ['奥迪 ','阿尔法罗密欧','本田 ','奔驰','宝马','别克 ','标致','比亚迪','保时捷','奔腾','北汽幻速','宝沃','北汽绅宝','北汽威旺','宾利','北汽新能源 ','巴博斯','长安','长安商用','大众','东南','东风风行','东风风神 ','道奇 ','丰田','福特 ','福田乘用车','福田','广汽传祺 ','观致','GMC','华颂','华泰新能源 ','吉利汽车','Jeep','江淮','捷豹','金杯','凯迪拉克','克莱斯勒','雷克萨斯 ','路虎','铃木','林肯','雷诺','陆风','劳斯莱斯','路特斯','马自达','MG','玛莎拉蒂','MINI','纳智捷','讴歌','奇瑞','起亚','启辰','乔治·巴顿','日产','荣威','斯柯达','斯巴鲁','上汽大通','双龙','特斯拉','腾势','沃尔沃','雪佛兰  ','现代','雪铁龙','英菲尼迪 ','驭胜','依维柯','众泰','中华','中兴','知豆'];	
	for(i=0;i<ar.length;i++){
		$(".seling_brand>div>.text").append('<a href=""seling-text="">'+ar[i]+'</a>');
	}
	$('label').click(function(){    
    $(this).toggleClass("checked");
    var la =$('.seling_main .checked');
    $('.submit_right .num').text(la.length);
    });
    $('label>i').click(function(){
    $(this).toggleClass("checked");
    if ($('label>i').hasClass('checked')) {
            $('.seling_main label').addClass('checked');
      }else{
      	$('.seling_main label').removeClass('checked');
      };    
    });
    var vehcle =$('.vehicle_xx')
    var ve = vehcle.length
    for(i=2;i<vehcle.length;i=i+3){   	
        $('.vehicle_xx').eq(i).css({'margin':'0'});
    }
})