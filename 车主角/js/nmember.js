$(function() {
	$('.i').click(function() {
		$(this).parent().next().toggleClass("show");
		$(this).toggleClass('background');
	});
});