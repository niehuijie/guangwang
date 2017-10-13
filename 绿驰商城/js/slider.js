(function($) {
	$.fn.hcjSlider = function(opts) {
		var elem = $(this),
			li = elem.children(),
			len = li.length;
		if (len <= 1 || this.length === 0) {
			return;
		}
		var defaults = {
			tabNav: true,
			pageNav: true,
			tabNavPosition: 'middle',
			tabnavCur: 'current',
			tabNavChildStyle: 'span',
			effect: 'scroll',
			tabNavMr: 6,
			prev: 'prev',
			next: 'next',
			direction: 'left',
			firstScreenShowNum: 1,
			firstScreenShowMr: 0
		};
		var options = $.extend(defaults, opts);
		var c = 0,
			timer,
			lenW = li.eq(0).width(),
			lenH = li.eq(0).height(),
			pos = elem.position(),
			controltabbox,
			controltabnav,
			next,
			prev,
			controltabboxChild;
		var eventFun = $.fn.hcjSlider.eventFun = {
			pagenClickwf: function() {
				if (eventFun._booleanAnimate()) {
					elem.animate({
						left: eventFun.returnWfRange(1)
					}, options.speed, function() {
						elem.css({
							left: 0
						});
						eventFun._replaceFirst(0);
					});
					if (c == len) {
						c = 0;
					}
				}
			},
			pagepClickwf: function() {
				if (eventFun._booleanAnimate()) {
					eventFun._replaceFirst(len);
					elem.css({
						left: eventFun.returnWfRange(1)
					});
					elem.animate({
						left: 0
					}, options.speed);
					if (c === 0) {
						c = len;
					}
					c--;
				}
			},
			pagepClickwfUp: function() {
				if (eventFun._booleanAnimate()) {
					eventFun._replaceFirst(len);
					elem.css({
						top: eventFun.returnWfRange(1)
					});
					elem.animate({
						top: 0
					}, options.speed);
					if (c === 0) {
						c = len;
					}
					c--;
				}
			},
			pagenClickwfUp: function() {
				if (eventFun._booleanAnimate()) {
					elem.animate({
						top: eventFun.returnWfRange(1)
					}, options.speed, function() {
						elem.css({
							top: 0
						});
						eventFun._replaceFirst(0);
					});
					if (c == len) {
						c = 0;
					}
				}
			},
			returnWfRange: function(m) {
				var ncRange;
				if (options.direction == 'up') {
					ncRange = pos.top - ((setStyle.elemParentH + options.firstScreenShowMr) * m);
				} else {
					ncRange = pos.left - ((setStyle.elemParentW + options.firstScreenShowMr) * m);
				}
				return ncRange;
			},
			pagenClickEfade: function() {
				c++;
				if (c == len) {
					c = 0;
				}
				eventFun.eqClass(c, controltabboxChild);
				var clor=elem.children().eq(c).attr('b-color');
				elem.children().eq(c).fadeIn(300).css({backgroundColor:clor}).siblings().fadeOut(100);
			},
			pagepClickEfade: function() {
				if (c === 0) {
					c = len;
				}
				c--;
				eventFun.eqClass(c, controltabboxChild);
				var clor=elem.children().eq(c).attr('b-color');
				elem.children().eq(c).fadeIn(300).css({backgroundColor:clor}).siblings().fadeOut(100);

			},
			pagenClickScroll: function() {
				if (eventFun._booleanAnimate()) {
					c++;
					if (c == len) {
						c = 0;
					}
					eventFun.eqClass(c, controltabboxChild);
					elem.animate({
						left: eventFun.returnWfRange(c)
					}, options.speed);
				}
			},
			pagepClickScroll: function() {
				if (eventFun._booleanAnimate()) {
					if (c === 0) {
						c = len;
					}
					c--;
					eventFun.eqClass(c, controltabboxChild);
					elem.animate({
						left: eventFun.returnWfRange(c)
					}, options.speed);
				}
			},
			lookPagepClickScroll: function() {
				if (eventFun._booleanAnimate()) {
					if (c === 0) {
						c = len;
						elem.css({
							left: (c + 1) * pos.left
						});
					}
					c--;
					eventFun.eqClass(c, controltabboxChild);
					elem.stop(true, true).animate({
						left: eventFun.returnWfRange(c)
					}, options.speed);
				}
			},
			lookPagenClickScroll: function() {
				if (eventFun._booleanAnimate()) {
					c++;
					if (c == len) {
						c = 0;
						elem.css({
							left: c * pos.left
						});
					}
					eventFun.eqClass(c, controltabboxChild);
					elem.animate({
						left: eventFun.returnWfRange(c)
					}, options.speed);
				}

			},
			lookPagepClickScrollUp: function() {
				if (eventFun._booleanAnimate()) {
					if (c === 0) {
						c = len;
						elem.css({
							top: (c + 1) * pos.top
						});
					}
					c--;
					elem.animate({
						top: eventFun.returnWfRange(c)
					}, options.speed);
				}
			},
			lookPagenClickScrollUp: function() {
				if (eventFun._booleanAnimate()) {
					c++;
					if (c == len) {
						c = 0;
						elem.css({
							top: c * pos.top
						});
					}
					elem.stop(true, true).animate({
						top: eventFun.returnWfRange(c)
					}, options.speed);
				}

			},
			elemhover: function(event) {
				next.show();
				prev.show();
				if (event.type == 'mouseenter') {
					eventFun._clearTimer();
				}
				if (event.type == 'mouseleave') {
					next.hide();
					prev.hide();
					eventFun.setTimer(effects[options.effect]);
				}
			},
			timerOut: null,
			tabnavhover: function(event) {
				var index = $(this).index();
				c = index;
				if (event.type == 'mouseenter') {
					eventFun._clearTimer();
					if (options.effect == 'scroll' || options.effect == 'lookScroll') {
						eventFun.timerOut = setTimeout(function() {
							elem.stop(true, true).animate({
								left: pos.left + c * -setStyle.elemParentW
							}, options.speed);
							eventFun.eqClass(c, controltabboxChild);
						}, 200);
					}
					if (options.effect == 'efade') {
						eventFun.timerOut = setTimeout(function() {
							eventFun.eqClass(index, controltabboxChild);
							var color=elem.children().eq(index).attr("b-color");
							elem.children().stop(true, true).eq(index).fadeIn(400).css({backgroundColor:color}).siblings().fadeOut(400);
						}, 200);
					}
				}
				if (event.type == 'mouseleave') {
					clearTimeout(eventFun.timerOut);
				}
			},
			eqClass: function(num, obj) {
				obj.eq(num).addClass(options.tabnavCur).siblings().removeClass(options.tabnavCur);
			},
			setTimer: function(fun) {
				timer = setInterval(fun, len * options.speed);
			},
			_clearTimer: function() {
				clearInterval(timer);
			},
			_booleanAnimate: function() {
				if (!elem.is(":animated")) {
					return true;
				}
			},
			_replaceFirst: function(length) {
				var elemChild = elem.find('li');
				if (length === 0) {
					if (options.firstScreenShowNum > 1) {
						elem.find('li:lt(' + options.firstScreenShowNum + ')').remove().appendTo(elem);
					} else {
						elemChild.eq(length).remove().appendTo(elem);
					}
				}
				if (length == len) {
					if (options.firstScreenShowNum > 1) {
						var gtLen = (len - options.firstScreenShowNum) - 1;
						elem.find('li:gt(' + gtLen + ')').remove().prependTo(elem);
					} else {
						elemChild.last().remove().prependTo(elem);
					}
				}
			}
		};
		var setStyle = $.fn.hcjSlider.setStyle = {};
		setStyle.elemW = 0;
		setStyle.elemH = 0;
		setStyle.elemParentW = 0;
		setStyle.elemParentH = 0;
		setStyle.setFadeCss = function() {
			var color=li.eq(0).attr("b-color");
			elem.height(lenH).parent().height(lenH);
			li.css({
				position: 'absolute',
				float: 'none',
				display: 'none'
			}).eq(0).css({backgroundColor:color}).show();
		};
		setStyle.setElemCss = function() {
			setStyle.elemParentW = (options.firstScreenShowNum * lenW) + ((options.firstScreenShowNum - 1) * options.firstScreenShowMr);
			setStyle.elemW = (len * lenW) + (len * options.firstScreenShowMr);
			setStyle.elemParentH = (options.firstScreenShowNum * lenH) + ((options.firstScreenShowNum - 1) * options.firstScreenShowMr);
			setStyle.elemH = (len * lenH) + (len * options.firstScreenShowMr);
			if (options.effect == 'lookScroll') {
				len = (len - (options.firstScreenShowNum * 2)) / options.firstScreenShowNum;
			} else {
				len = len / options.firstScreenShowNum;
			}

			if (options.direction == 'up') {
				elem.css({
					height: setStyle.elemH,
					width: lenW
				});
				li.css({
					'margin-bottom': options.firstScreenShowMr,
					'float': 'none'
				});
				elem.parent().css({
					height: setStyle.elemParentH,
					width: lenW
				});
			} else {
				elem.css({
					width: setStyle.elemW
				});
				li.css({
					'margin-right': options.firstScreenShowMr
				});
				elem.parent().css({
					width: setStyle.elemParentW >= $(window).width() ? '100%' : setStyle.elemParentW,
					height: lenH
				});
			}
		};

		function controlElem() {
			if (options.tabNav) {
				controltabbox = $('<ul></ul>');
				controltabnav = "<li></li>";
				controltabbox.appendTo(elem.parent());
				for (var i = 0; i < len; i++) {
					controltabbox.append(controltabnav);
				}
				controltabboxChild = controltabbox.children();
				controltabboxChild.addClass(options.tabNavChildStyle);
				controltabboxChild.eq(0).addClass(options.tabnavCur);
				controltabboxChild.css({
					'margin-right': options.tabNavMr
				});
				controltabboxChild.bind('mouseenter mouseleave', eventFun.tabnavhover);
				controltabbox.css({
					width: (options.tabNavMr + controltabboxChild.eq(0).width()) * len
				});
				var middleLeft;
				var windowW = $('body').width();
				if (lenW >= windowW) {
					middleLeft = windowW;
				} else {
					middleLeft = setStyle.elemParentW;
				}
				switch (options.tabNavPosition) {
					case 'middle':
						var left;
						if(options.liColor){
							left=$(".navClass").width()/2;
						}else{
							left=0;
						}
						controltabbox.css({
							bottom: 10,
							position: 'absolute',
							left: (middleLeft / 2)+left,
							'margin-left': -(controltabbox.width() - options.tabNavMr) / 2
						});
						break;
					case 'right':
						controltabbox.css({
							right: 30,
							bottom: 10,
							position: 'absolute'
						});
						break;
					case 'rightMiddle':
						controltabboxChild.css({
							'float': 'none',
							'margin-right': 0,
							'margin-bottom': options.tabNavMr
						});
						controltabbox.css({
							width: controltabboxChild.eq(0).width(),
							right: 15,
							position: 'absolute',
							top: lenH / 2,
							'margin-top': -(controltabbox.height() - options.tabNavMr) / 2
						});
						break;
				}

			}
			if (options.pageNav) {
				next = $('<div>></div>');
				prev = $('<div><</div>');
				next.addClass(options.next).appendTo(elem.parent()).hide();
				prev.addClass(options.prev).appendTo(elem.parent()).hide();
				var handlerN, handlerP;
				if (options.effect == 'efade') {
					next.bind('click', eventFun.pagenClickEfade);
					prev.bind('click', eventFun.pagepClickEfade);
				}
				if (options.effect == 'wfScroll') {
					if (options.direction == 'up') {
						handlerP = eventFun.pagepClickwfUp;
						handlerN = eventFun.pagenClickwfUp;
					} else {
						handlerP = eventFun.pagepClickwf;
						handlerN = eventFun.pagenClickwf;
					}

				}
				if (options.effect == 'lookScroll') {
					if (options.direction == 'up') {
						handlerP = eventFun.lookPagepClickScrollUp;
						handlerN = eventFun.lookPagenClickScrollUp;
					} else {
						handlerP = eventFun.lookPagepClickScroll;
						handlerN = eventFun.lookPagenClickScroll;
					}

				}
				if (options.effect == 'scroll') {
					handlerP = eventFun.pagepClickScroll;
					handlerN = eventFun.pagenClickScroll;
				}
				next.bind('click', handlerN);
				prev.bind('click', handlerP);
			}
		}
		var effects = $.fn.hcjSlider.effects = {
			wfScroll: function() {
				if (options.direction == 'up') {
					elem.animate({
						top: eventFun.returnWfRange(1)
					}, options.speed, function() {
						elem.css({
							top: 0
						});
						eventFun._replaceFirst(0);
					});
				} else {
					elem.animate({
						left: eventFun.returnWfRange(1)
					}, options.speed, function() {
						elem.css({
							left: 0
						});
						eventFun._replaceFirst(0);
					});
				}
			},
			scroll: function() {
				c++;
				if (c == len) {
					c = 0;
				}
				elem.animate({
					left: eventFun.returnWfRange(c)
				}, options.speed);
				eventFun.eqClass(c, controltabboxChild);
			},
			lookScroll: function() {
				c++;
				if (c == len) {
					c = 0;
					if (options.direction == 'up') {
						elem.css({
							top: 0
						});
					} else {
						elem.css({
							left: 0
						});
					}
				}
				if (options.direction == 'up') {
					elem.animate({
						top: eventFun.returnWfRange(c)
					}, options.speed);
				} else {
					elem.animate({
						left: eventFun.returnWfRange(c)
					}, options.speed);
					if (options.tabNav) {
						eventFun.eqClass(c, controltabboxChild);
					}
				}
			},
			efade: function() {
				c++;
				if (c == len) {
					c = 0;
				}
				if (options.tabNav) {
					eventFun.eqClass(c, controltabboxChild);
				}
				var color=elem.children().eq(c).attr("b-color");
				elem.children().eq(c).fadeIn(300).css({backgroundColor:color}).siblings().fadeOut(100);
			}
		};
		if (options.effect) {
			setStyle.setElemCss();
			if (options.effect == 'efade') {
				setStyle.setFadeCss();
			}
			if (options.tabNav || options.pageNav) {
				controlElem();
			}
			eventFun.setTimer(effects[options.effect]);
			elem.parent().bind('mouseenter mouseleave', eventFun.elemhover);
		}
	};
})(jQuery);