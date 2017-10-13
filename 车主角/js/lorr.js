$(function(){
	$('.btn-enter').click(function(event) {
		event.preventDefault();
		var unameInput = $('.loginC input[name="uname"]'),
			psdInput = $('.loginC input[name=psd]'),
			rpsdInput = $('.loginC input[name="rpsd"]');
			codeInput=$('.loginC input[name="code"]');
		var resdRuleT = rpsdInput.attr('rule'),
			unameRuleT = unameInput.attr('placeholder'),
			uname = unameInput.val(),
			psd = psdInput.val(),
			rpsd = rpsdInput.val(),
			rpsdPlace = rpsdInput.attr('placeholder'),
			psdRuleT = psdInput.attr('placeholder');
			codeInputRule=codeInput.attr('placeholder');

		function checkUname() {
			var unameRule = /^[a-z0-9_-]{3,16}$/;
			if (unameRule.test(uname)) {
				return true;
			} else {
				unameInput.val(unameRuleT).parent().addClass('brClor');
				unameInput.focus(function(event) {
					$(this).val('').parent().removeClass('brClor');
				});
			}
		}

		function checkPsd() {
			var psdRule = /^[a-z0-9_]{6,18}$/;
			if (psd == '' || !psdRule.test(psd)) {
				psdInput.attr('type', 'text').val(psdRuleT).parent().addClass('brClor');
				psdInput.focus(function(event) {
					$(this).attr('type', 'password').parent().removeClass('brClor');
				});
				rpsdInput.attr('type', 'text').val(rpsdPlace).parent().addClass('brClor');
				rpsdInput.focus(function(event) {
					$(this).attr('type', 'password').parent().removeClass('brClor');
				});
			} else {
				if (rpsd != psd) {
					rpsdInput.attr('type', 'text').val(resdRuleT).parent().addClass('brClor');
					rpsdInput.focus(function(event) {
						$(this).attr('type', 'password').parent().removeClass('brClor');
					});
				} else {
					return true;
				}
			}
		}
		function code(){
			if(codeInput.val()==''){
				codeInput.val(codeInputRule).parent().addClass('brClor');
			}else{
				return true;
			}
		}
		$('#regForm input').focus(function(){
			$(this).parent().removeClass('brClor');
		});
		var resultUname = checkUname(),
			resultPsd = checkPsd(),
			codeR=code();
		if (resultUname && resultPsd&&codeR) {
			return true;
		} else {
			return false;
		}
	});
});