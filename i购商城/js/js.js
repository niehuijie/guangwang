$(function() {
	// 顶部下拉菜单
	function downShow(ele, num) {
		$(ele).not(num).hover(function() {
			$(this).find('>a').toggleClass('current').next().toggle();
		});
	}
	downShow('.myInfoItem li', '.headCart');
	downShow('.myShop');
	// 搜索框焦点
	(function() {
		var searchInput = $('.inputBox input'),
			searchzUp = $('.search-zUp');
		searchInput.focus();
		searchInput.keydown(function() {
			searchzUp.hide();
		});
		searchInput.blur(function() {
			if (searchInput.val() == '') {
				searchzUp.show();
			}
		});
	})();
	// 轮播
	$(".sliderUl").hcjSlider({
		tabNav: true,
		pageNav: true,
		tabNavPosition: 'middle',
		tabnavCur: 'current',
		tabNavMr: 6,
		tabNavChildStyle: 'span',
		effect: 'efade',
		firstScreenShowNum: 1,
		firstScreenShowMr: 0,
		prev: 'prev',
		next: 'next',
		speed: 1000
	});
	// 分类导航
	(function() {
		var thbItem = $('.typeHideBox'),
			allTypeUl = $('.allTypeUl>li'),
			index;
		thbItem.find('.thb-item').eq(0).show();
		allTypeUl.eq(0).css({
			'border-top': 0,
			'margin-top': 0
		});
		allTypeUl.mouseover(function(event) {
			$(this).addClass('cur').siblings().removeClass('cur');
			index = $(this).index();
			thbItem.show().find('.thb-item').eq(index).show().siblings().hide();
		});
		$('.allTypeBox').mouseleave(function() {
			thbItem.hide();
			allTypeUl.removeClass('cur');
		});
		$('.allType h3:not(".member-h3")').mouseenter(function() {
			$(this).parent().css({
				height: 501,
				overflow: 'visible'
			});
		});
		$('.allType').mouseleave(function() {
			$(this).css({
				height: 41,
				overflow: 'hidden'
			});
		});
		$('.paging .allType').unbind();
	})();
	// 产品频道列表
	$('.proMkLink-ul li a').mouseenter(function(event) {
		$(this).find('.toThisMk').animate({
			right: 20
		}, {
			duration: 'fast',
			queue: false
		}).fadeTo('fast', 1);
	});
	$('.proMkLink-ul li a').mouseleave(function(event) {
		$(this).find('.toThisMk').fadeOut('fast', 0).animate({
			right: 10
		}, {
			duration: 'fast',
			queue: false
		});
	});
	// 底部快捷导航
	(function() {
		var rf = $('.rightNav a');
		rf.bind('mouseenter mouseleave', function(event) {
			var _self = $(this);
			if (event.type == 'mouseenter') {
				_self.find('.showBox').show().animate({
					right: 44
				});
			} else {
				_self.find('.showBox').css({
					right: 0
				}).hide();
			}
		});
		$('.rightNav .go_top').click(function(event) {
			event.preventDefault();
			$('html,body').stop().animate({
				scrollTop: 0
			});
		});
	})();
	// list页-收藏
	(function() {
		var status = 0;
		$('.addCollet').click(function(event) {
			event.preventDefault();
			if (status == 0) {
				$(this).text('已收藏').addClass('ed');
				status = 1;
			} else {
				$(this).text('收藏').removeClass('ed');
				status = 0;
			}
		});
	})();
	// 属性筛选
	(function() {
		//
		$(".attrDiv").eq(0).css({"border-top":"1px solid #dcdcdc"});
		$(".attrDiv").last().css({"border-bottom":"1px solid #dcdcdc"});
		$(".itemUl").each(function(){
			var len = $(this).children("li").length;
			console.log(len)
			if(len <= 7){
				$(this).css({'height':"36px"})
			}
		})
		// 搜索框变长
		$('.l-AttrInput').focus(function() {
			$(this).animate({
				width: 160
			});
		});
		$('.l-AttrInput').blur(function() {
			$(this).animate({
				width: 130
			});
		});
		// 什么时候显示更多
		var itemUl = $('.l-search-goodsAttr .itemUl'),
			itemUlLen = itemUl.length;
		for (var i = 0; i < itemUlLen; i++) {
			if (itemUl.eq(i).children().length >= 7) {
				itemUl.eq(i).parent().next().find('.moreAttr').css({
					'visibility': 'visible'
				});
			}
		}
		// 更多处理
		var c = 0;
		$('.moreAttr').click(function() {
			var itemUlcur = $(this).parent().prev().find('.itemUl');
			var _self = $(this);
			if (c === 0) {
				_self.addClass('current').find('a').html('<span>收起</span><i class="symbol border clore4">&and;</i>');
				itemUlcur.css({
					'overflow': 'visible'
				});
				c = 1;
			} else {
				_self.removeClass('current').find('a').html('<span>更多</span><i class="symbol border">&or;</i>');
				itemUlcur.css({
					'overflow': 'hidden'
				});
				c = 0;
			}
		});

		// 属性点击处理
		$('.l-search-goodsAttr .itemUl').find('li a').unbind().bind('click', oneFun);

		function addAndRemove(cur, value) {
			var id = cur.parents('.attrDiv').attr('data-id');
			var typeNames = cur.parents('.attrDiv').find('.attrName').text();
			$('.choosedWord').append('<a href="javascript:;" data-id="' + id + '">' + typeNames + '<em>' + value + '</em><i></i></a>');
			cur.parents('.attrDiv').remove();
			// 移除选中的
			$('.choosedWord a i').bind('click', function(event) {
				$(this).parent().remove();
				//移除之后要追加与这个对应的内容
			});
		}
		// 单选处理函数
		function oneFun(event) {
			event.preventDefault();
			var txtStr = $(this).text();
			var that = $(this);
			addAndRemove(that, txtStr);
		}
		// 多选处理
		var txtArr;

		function muchFun(event) {
			event.preventDefault();
			var thisTxt = $(this).text();
			txtArr.push(thisTxt);
			$(this).parent().toggleClass('current');
			var ll = $(this).parent().parent().next().children(':first');
			if (txtArr) {
				ll.removeClass('okBtn').addClass('current').unbind().bind('click', function() {					
					var txtStr = txtArr.slice(0,5).toString();
					var that = $(this);
					// 追加和移除
					addAndRemove(that, txtStr);
				})
			} else {
				ll.removeClass('current').addClass('okBtn');
			}
		}
		// 点击更多
		$('.moreChoose a').click(function(event) {
			txtArr = [];
			$(this).parents('.attrAction').hide();
			$(this).parents('.attrDiv').addClass('current').siblings()
				.removeClass('current').find('.itemUl li').removeClass('current').find('a').unbind('click').bind('click', oneFun).parents('.itemUl')
				.next().hide().find('>a.current').removeClass('current').addClass('okBtn');
			$(this).parents('.attrDiv').addClass('current').siblings().find('.attrAction').show();
			var parV = $(this).parents('.attrValue');
			parV.find('.cancleBtn').show();
			parV.prev().addClass('current');
			$(this).parents('.attrAction').prev().find('.itemUl li a').unbind().bind('click', muchFun);
		});
		// 点击取消按钮
		$('.cancleBtn .fBtn').click(function() {
			var _self = $(this),
				_self_ps = _self.parents('.attrList');
			_self.parent().hide();
			_self_ps.next().show();
			_self.parents('.attrDiv').removeClass('current');
			_self_ps.find('.itemUl li').removeClass('current');
			_self.prev().removeClass('current').addClass('okBtn');
			$(this).parents('.attrDiv').find('.itemUl li a').unbind('click').bind('click', oneFun);
		});

	})();
	// 规格
	$('.c-con-cItem .ge li').click(function(event) {
		event.preventDefault();
		if ($(this).attr('class') == 'disable') {
			return false;
		} else {
			$(this).addClass('current').siblings().removeClass('current');
		}
	});
	// 商品数量增减
	(function() {
		var num = $('.c-con-goodsNum input,.cartNum input').val();
		$('.c-con-goodsNum .sale,.cartNum .sale').click(function() {
			num--;
			if (num < 1) {
				num = 1;
				return false;
			}
			$(this).next().val(num);
		});
		$('.c-con-goodsNum .add,.cartNum .add').click(function() {
			num++;
			$(this).prev().val(num);
		});
	})();
	// tab
	function $tab(ulBox, divBox) {
		$(divBox).find('>div').eq(0).show();
		$(ulBox).find('>li>a').click(function(e) {
			e.preventDefault();
			var index = $(this).parent().index();
			$(this).parent().addClass('current').siblings().removeClass('current');
			$(divBox).find('>div').eq(index).show().siblings().hide();

		});
	}
	$tab('.c-con-tabUl', '.c-con-tabCon');
	$tab('.commetCon-hd-ul', '.commetCon-bd');
	$tab('.bankListUl', '.bankImgList');
	// 银行选择超出3排隐藏
	(function() {
		var bImg = $('.bankImgList div'),
			bImgLen = bImg.find('a').length;
		if (bImgLen > 12) {
			bImg.find('a:gt(10)').hide();
			$('<a href="javacript:;">更多银行</a>').insertAfter(bImg.children().eq(10)).addClass('moreBank').bind('click', function() {
				$(this).remove();
				bImg.find('a:gt(10)').show();
			});
		}
	})();
	// 银行卡号验证
	(function() {

	})();
	// 评价图片
	(function() {
		$('.sharePicList-smallPic .picCollectBox-ul li').click(function(event) {
			event.preventDefault();
			var src = $(this).attr('data-src');
			$(this).addClass('current').find('.down-sanjiao').show().end().siblings('li').removeClass('current').find('.down-sanjiao').hide();
			$(this).parent().find('li img').removeClass('cur');
			var thisP = $(this).parent().parent().next();
			thisP.show().find('img').attr('src', src);
			thisP.bind('click', function() {
				$(this).hide().prev().find('li img').addClass('cur');
				$(this).hide().prev().find('li').removeClass('current');
			});
		});
	})();
	//支付方式选择
	$('.payFunUl li').click(function() {
		$(this).toggleClass('current');
	});
	// 结算页当前选中
	$('.buyFunListUl li').click(function(event) {
		event.preventDefault();
		$(this).addClass('current').siblings().removeClass('current');
	});
	// 晒图
	(function() {
		//模拟每次请求的10条数据
		
		var picCollect=[],
			ulli = $('.picCollectBox .picCollectBox-ul'), //图片列容器
			bigPicEle = $('.bpac-bigPic img'), //大图
			commetTC = $('.commetTC'), //评论内容
			specUl = $('.specUl li'), //规格
			time = $('.avaTime'), //时间
			pic = $('.avaInfo-avatar img'), //用户头像
			username = $('.avaInfo-avatar .ava-username'), //用户名字
			obj = [], //用于存储请求好的数据数据对象
			num = 10, //每次请求几组数据
			prev = $('.picLbtn'), //上一个
			cArr = [], //c存储数组
			next = $('.picRbtn'); //下一个
		// 变更数据
		function updateDate(num, obj) {
			bigPicEle.attr('src', obj[num]['smallsrc']); //大图
			pic.attr('src', obj[num]['avatar']); //用户头像
			time.text(obj[num]['time']); //时间
			commetTC.text(obj[num]['con']); //文本内容
			username.text(obj[num]['username']); //用户名
			// 规格
			specUl.each(function(i) {
				$(this).text(obj[num]['spec'][i]);
			});
			ulli.children().eq(num).addClass('current').siblings().removeClass('current');
		}
		//切换数据
		function tabData(event) {
			event.preventDefault();
			var index = $(this).index();
			$(this).addClass('current').find('i').show().end().siblings().removeClass('current').find('i').hide();
			updateDate(index, obj);
		}
		// 追加数据
		function appendTenData(num) {
			$.ajax({
			   type:'get',
			   url: "http://localhost/znwyShop/1.php",
			   dataType: "json",
			   success: function(data){
			     console.log();
			   }
			   
			});
			var str = '';
			$.each(picCollect, function(i, data) {
				obj.push(data);
				str += '<li><a href=""><i class="ico"></i><img src="' + data.smallsrc + '" alt=""></a></li>';
			});
			ulli.append(str).children().bind('click', tabData); //追加到文档中并给绑定切换数据事件
			ulli.width((num * 87) + (num * 10)); //设置容器宽度
		}
		//动画
		function anim(c) {
			ulli.animate({
				left: -970 * c
			}, 1000, function() {
				switch (c) {
					case intN - 1: //上一张不能点击的时候样式
						next.addClass('disable').removeClass('canClick');
						break;
					case 0: //下一张不能点击的时候样式
						prev.addClass('disable').removeClass('canClick');
						break;
					default: //留下来的就是都能点击的时候样式
						prev.addClass('canClick').removeClass('disable');
						next.addClass('canClick').removeClass('disable');
						break;
				}
				// 更新当前首张默认数据
				updateDate(c * num, obj);
			});
		}
		//是否该追加
		function isAppend(c) {
			//如果没有追加追加新的10条数据
			if ($.inArray(c, cArr) == -1) {
				appendTenData((c + 1) * num);
				cArr.push(c);
			}
			anim(c);
		}
		//显示晒图事件
		var o = 0,
			total, intN;
		$('.shaipic').one('click', function() {
			// 得到总张数
			total = 45;
			intN = Math.ceil(total / num);
			// 请求10条数据
			appendTenData(num);
			// 追加默认的首个数据
			updateDate(0, obj);
			// 切换图片与内容
			ulli.children().bind('click', tabData);
			// 长度小于等于10
			if (total <= 10) {
				prev.addClass('disable');
				next.addClass('disable');
			} else {
				// 大于10右侧默认可以点
				prev.addClass('disable');
				next.addClass('canClick');
				// 因为总的晒图数量大于10 所以可以点击加载更多
				var c = 0;
				// 下一步单击
				next.bind('click', function() {
					c++;
					if (c >= intN) {
						c = intN - 1;
						return;
					} else {
						isAppend(c);
					}
				});
				// 上一步单击
				prev.bind('click', function() {
					console.log(c);
					if (c == 0) {
						return;
					}
					c--;
					anim(c);
				});
			}

		});
	})();
	// 详情页切换商品图
	(function() {
		var c = 0,
			picWrap = $('.c-picUl'), //图片容器
			picLen = picWrap.children().length, //图片的长度
			lbtn = $('.c-con-btnL i'), //左侧箭头
			rbtn = $('.c-con-btnR i'), //右侧箭头
			tbtnP = $('.c-con-tabBtnP'), //tab按钮的直接上级
			tbtnPs = $('.c-con-tabBtn'); //tab按钮祖父
		if (picLen <= 1) {
			lbtn.hide();
			rbtn.hide();
			tbtnPs.hide();
			return;
		}
		picWrap.children().eq(0).show();

		function action(num, tbtnP, picWrap) {
			if (!picWrap.children().is(':animated')) {
				tbtnP.children().eq(c).addClass('current').siblings().removeClass('current');
				picWrap.children().eq(c).fadeIn(600).siblings().fadeOut(200);
			}
		}
		lbtn.click(function() {
			if (c == 0) {
				c = picLen;
			}
			c--;
			action(c, tbtnP, picWrap);
		});
		rbtn.click(function() {
			c++;
			if (c == picLen) {
				c = 0;
			}
			action(c, tbtnP, picWrap);
		});
		tbtnPs.children().click(function() {
			$(this).addClass('current').siblings().removeClass('current');
			var index = $(this).index();
			picWrap.children().eq(index).fadeIn(600).siblings().fadeOut(200);
		});
	})();
	// 购物车 全选 全不选
	(function() {
		var sta = 1;
		$('.allC').click(function(event) {
			if (sta == 1) {
				$('.allC').prop('checked', 'checked');
				$('.goodsId').prop('checked', 'checked');
				sta = 0;
			} else {
				$('.goodsId').removeProp('checked');
				$('.allC').removeProp('checked');
				sta = 1;
			}
		});
		var ced = 0,
			len = $('.goodsId').length;
		$('.goodsId').bind('click', function(event) {
			$(this).parent().parent().parent().toggleClass("bj-ff");
			ced = $('.goodsId:checked').length;
			if (ced < len) {
				$('.allC').removeProp('checked');
				sta = 1;
			} else {
				if (ced == len) {
					$('.allC').prop('checked', 'checked');
					sta = 0;
				}
			}
		});
		
	})();
	// dialog
	(function() {
		var close = $('.close');
		close.click(function() {
			$(this).parents('#dialog').hide();
		});
		//清空所有商品
		$('.removeCartGoods').click(function(e) {
			e.preventDefault();
			$('#dialog').show();
		});
		//删除单个
		$('.handle').click(function(e) {
			e.preventDefault();
			$('#dialog').show();
		});
	})();
	$('.suc-lookCon').click(function() {
		$(this).find('i').toggleClass('sub');
		$('.suc-goodscon').toggle();
	});
	// 提交订单处 修改地址
	$('.addressList-ul>li.addOne,.handelUl li a.edit').click(function(e) {
		e.preventDefault();
		$('#dialog').show();
	});
	//删除地址
	$('.handelUl li a.del').click(function(e) {
		e.preventDefault();
		$(this).parent().parents('li').remove();
	});
	// 保存地址
	$('.ressSave').click(function(e) {
		e.preventDefault();
		$('.sucSaveBg').show();
		$('.sucSave').show();
	});
	//取消保存
	$('.cancleNew').click(function() {
		$('#dialog').hide();
	});
	$('.isDefault').click(function() {
		$(this).text('默认地址').parents('li').addClass('current').siblings().removeClass('current').find('.isDefault').text('设为默认');
	});
	// 商品标题描述限制字数
	(function() {
		var total = $('.c-con-infoDesc').text(), //总字数
			totalLen = total.length,
			num = 80; //最大字数
		if (totalLen <= 80) {
			return;
		}
		$('.c-con-infoDesc').text(total.substr(0, 80));
	})();
	$('.susp-close').click(function(e){
		e.preventDefault();
		$(this).parent().hide();
	});
});