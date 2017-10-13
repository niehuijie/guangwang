$(function() {
	//浏览器版本检测
	var uaMatch = function(ua) {
		ua = ua.toLowerCase();
		var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
			/(webkit)[ \/]([\w.]+)/.exec(ua) ||
			/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
			/(msie) ([\w.]+)/.exec(ua) ||
			ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
			[];
		return {
			browser: match[1] || "",
			version: match[2] || "0"
		};
	};
	var browser = {},
		matched;
	matched = uaMatch(navigator.userAgent);
	if (matched.browser) {
		browser[matched.browser] = matched.browser;
		browser.version = matched.version;
	}
	if (browser.chrome) {
		browser.webkit = true;
	}
	$.browser = browser;
});