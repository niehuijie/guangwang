$(function() {
	//根据dpr 不同 执行不同样式
	var className = [],
		dpr;
	dpr = Math.floor(window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI) || 1);
	if (dpr >= 2) {
		className.push("retina");
	}
	className.push("dpr-" + dpr);
	if (className.length > 0) {
		$("html").addClass(className.join(' '));
	}
});