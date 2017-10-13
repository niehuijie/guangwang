$(function(){
	//商品 放大镜
	(function() {
		$('.smallPic li').mouseenter(function() {
			var dataSrc = $(this).attr('data-src');
			var dataArr = dataSrc.split("+");
			$(this).parent().parent().parent().prev().find('img').attr({
				'src':dataArr[0]
			});
			$(this).parent().parent().parent().prev().prev().find('img').attr({
				'src':dataArr[1]
			});
			$(this).addClass('current').siblings('').removeClass('current');
		});
		var c=0,rbtn=$('.sP-rightBtn'),lbtn=$('.sP-leftBtn'),smallpic=$('.sP-middlePic-ul'),num=5,smallpicliw=smallpic.children().eq(0).outerWidth(),smallpiclen=smallpic.children('li').length;
		var scaleShade, scaleShadeR, offsetY, offsetX, relativePx, relativePy, middlePic;
		middlePic = $(".middlePic");
		scaleShade = $('.scaleShade');
		middlePic.mouseenter(function(e) {
			scaleShade.show();
			$(this).prev().show();
		});
		middlePic.mouseleave(function(e) {
			scaleShade.hide();
			$(this).prev().hide();
		});
		middlePic.mousemove(function(e) {
			var bigPic = $(this).prev().find('img');
			scaleShadeR = scaleShade.height() / 2;
			offsetY = $(this).offset().top;
			offsetX = $(this).offset().left;
			relativePy = (e.pageY - 1) - offsetY;
			relativePx = (e.pageX - 1) - offsetX;
			if (relativePy >= scaleShadeR || relativePy <= scaleShadeR * 3) {
				scaleShade.css({
					top: relativePy - scaleShadeR
				});
				bigPic.css({
					top: -(relativePy - scaleShadeR) * 2
				});
			}
			if (relativePy < scaleShadeR) {
				scaleShade.css({
					top: 0
				});
				bigPic.css({
					top: 0
				});
			}
			if (relativePy > scaleShadeR * 3) {
				scaleShade.css({
					top: scaleShadeR * 2
				});
				bigPic.css({
					top: -scaleShadeR * 4
				});
			}
			if (relativePx >= scaleShadeR || relativePx <= scaleShadeR * 3) {
				scaleShade.css({
					left: relativePx - scaleShadeR
				});
				bigPic.css({
					left: -(relativePx - scaleShadeR) * 2
				});

			}
			if (relativePx < scaleShadeR) {
				scaleShade.css({
					left: 0
				});
				bigPic.css({
					left: 0
				});
			}
			if (relativePx > scaleShadeR * 3) {
				scaleShade.css({
					left: scaleShadeR * 2
				});
				bigPic.css({
					left: -scaleShadeR * 4
				});
			}
		}); 
		var muchnum=Math.ceil(smallpiclen/num);
		if(muchnum<=1){
			return;
		}
		rbtn.click(function(event) {
			if(c==(muchnum-1)){
				return;
			}
			c++;
			smallpic.animate({left:-(smallpicliw*num)*c},'fast');
		});
		lbtn.click(function(event) {
			if(c===0){
				return;
			}
			c--;
			smallpic.animate({left:-(smallpicliw*num)*c},'fast');
		});
	})();
	// 数量
	(function(){
		var num=1,rule=/^[1-9]{1}[0-9]{1,}$/;
		$('.c-con-goodsNum input').keyup(function(event) {
			num1=$(this).val();
			if(!rule.test(num1)){
				$(this).val(num);
			}
		});
		$('.c-con-goodsNum .sale').click(function() {
			num--;
			if (num < 1) {
				num = 1;
				return false;
			}
			$(this).next().val(num);
		});
		$('.c-con-goodsNum .add').click(function() {
			num++;
			$(this).prev().val(num);
		});
	})();
	// 预约订单信息 确认信息选项
	$('.carYlchoice li').click(function(e){
		e.preventDefault();
		$(this).addClass('cur').siblings().removeClass('cur');
	});
	function aa(e){
		$(this).addClass('changed').html('( <em>5</em> ) s').unbind('click');
		var _self=$(this),num=5,t;
		t=setInterval(function(){
			num--;
			console.log(num);
			if(num==0){
				_self.html('免费获取短信验证码').bind('click',aa);
			
				clearInterval(t);
			}else{
				_self.find('em').text(num);
			}
		},1000);
	}
	$('.wii-getCode').bind('click',aa);
	
	$('.addCarTypeC').click(function(e){
		e.preventDefault();
		var goodsId=$(this).data('id');
		$.cookie('compare',21);
	});
	$('.rightNav a.rF0').click(function(e){
		e.preventDefault();
		$(this).next().toggle();
	});
});