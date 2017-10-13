$(function(){
	$('.pay>li').click(function(e){
		e.preventDefault();
		$('.cur').removeClass('cur')
		$(this).addClass('cur')
	})
	$('.qcz').click(function(){
	var b = $('.cur>a').text()
	if(b=='银联充值'){
		$('#ylzf').show()
	}
	})
	$('.label').click(function(){
        $(this).parent().siblings().find('div').removeClass('checked') && $(this).attr('class', 'label checked');                
    });
    $('.dialog-close').click(function(){
        $('#ylzf').hide()
    })
})