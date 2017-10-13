$(function(){
	var _mq = $("#mq")
	var _mqLi = $("#mq li")
	function win_sc(){
		var st=_mq.scrollTop();
		var sh = st/100;
		var shh = Math.round(sh);
	
	 	var stt = st%100;
	 	_mqLi.eq(shh).addClass('top').siblings().removeClass('top');
        _mqLi.eq(shh+1).addClass("clor2").siblings().removeClass('clor2');
        _mqLi.eq(shh+2).addClass("bottom").siblings().removeClass('bottom');
        
	 	if(stt<50){	 		
	 		_mq.stop().animate({
				scrollTop: st -stt
			},100)
	 	}else{
	 		_mq.stop().animate({
				scrollTop: (sh+2)*100
			},100)
	 	}
	}
	_mq.scroll(function(){
		win_sc();
	});
	console.log(111)
//	$("#mq").on('tapend', function(e) {
//          alert('tapend');
//      });
})


