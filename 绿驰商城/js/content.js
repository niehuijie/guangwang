$(function(){
	//商品 放大镜
	(function() {
		$('.ps-smallPic li').mouseenter(function() {
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
		var c=0,rbtn=$('.ps-sP-rightBtn'),lbtn=$('.ps-sP-leftBtn'),smallpic=$('.ps-sP-middlePic-ul'),num=5,smallpicliw=smallpic.children().eq(0).outerWidth(),smallpiclen=smallpic.children('li').length;
		var scaleShade, scaleShadeR, offsetY, offsetX, relativePx, relativePy, middlePic;
		middlePic = $(".ps-middlePic");
		scaleShade = $('.ps-scaleShade');
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
	(function(){
		var specCity=$('.ps-si-specUl-city');
		// 城市选择
		specCity.click(function(event) {		
			$(this).toggleClass("active");
			$(this).next().toggle();
		});
		// 城市选择改变值
		$(".ps-si-specUl-downList a").click(function(e){
			e.preventDefault();
			var text=$(this).text();
			specCity.find("span").text(text);
			specCity.find("input").val(text);
			$(this).parent().hide().prev().removeClass("active");
		})
	})();
	$.tab('.cm-down-hd>ul','.cm-down-bd',0);
})