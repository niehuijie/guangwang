$(function() {
	// 领取积分
	$("#conitem1 a").on('click', function(e) {
		e.preventDefault();
		var targetE = $(this).find(".sprite-55-monney");
		if (!targetE.hasClass("sprite-55-monney-hui")) {
			targetE.addClass("sprite-55-monney-hui");
			$.confirm("成功领取26积分1", function(argument) {
				console.log(121232);
			});
		}
	});
	$.goodsNum("#goodsnum-order"); //商品加减
	$(".btn-dui").click(function() {
		$.alert("兑换成功！");
	});
	$.countDownH('2017/08/15', '.downtime');
	$(".ling-j").click(function() {
		var _self = $(this);
		if (_self.hasClass('disabled')) {
			return;
		} else {
			_self.addClass('disabled');
			$.alert("领取成功！");
		}
	});
	// 删除收藏操作
	$(".shoucang-ul").on('click', '.sprite-32-del', function() {
		$.confirm('确定要删除此收藏吗？', function() {
			alert('确定按钮被点击了');
		});
	});
	// 取消订单操作
	$("#cancel-order").swipe({
		tap: function() {
			$.confirm('确定取消订单吗？', function() {
				alert('确定按钮被点击了');
			});
		}
	});
	// 删除地址操作
	$("#deladdress").swipe({
		tap: function() {
			$.confirm('确定要删除吗？', function() {
				console.log(111);
			});
		}
	});
	//滚动加载
	(function() {
		var loading = false;
		var ul = $('.shoucang-ul'); //数据容器
		var lastlength = ul.children().length; //默认的条数
		var maxlength = 18; //总条数
		var itemlength = 6; //每次记载几条
		$('.scrolltobm').on("scrolltobm", function() { //监听滚动到底事件
			if (loading) {
				return;
			}
			loading = true;
			setTimeout(function() {
				loading = false;
				if (lastlength >= maxlength) { //当前数据容器的数据条数大于等于总条数时
					$.detachscrolltobm($('.scrolltobm')); //移除监听
					$('.loading').remove(); //加载指示器移除
					$('.no-more').show(); //没有数据提示
					return;
				}
				var html = '';
				for (var i = lastlength + 1; i <= lastlength + itemlength; i++) {
					html += '<div class="po-g-goods bg-white">' +
						'<img src="images/placeholder.png" alt="" />' +
						'<div class="po-goods-r">' +
						'<p class="po-goods-title">美国加州猛打非木桥没了红葡萄要' + i + '</p>' +
						'<div class="po-goods-pricenum">' +
						'<span class="good-price"><em>' + i + '</em>积分</span>' +
						'<i class="sprite-32-del"></i>' +
						'</div>' +
						'</div>' +
						'</div>';
				}
				ul.append(html); //容器追加数据
				lastlength = ul.children().length; //更新容器的数据条数
			}, 1000);
		});
	})();
	(function() {
		// 订单按需加载
		var loading = false;
		$(".olitem").on("onshow", function() {
			$(this).html('');
			if (loading) {
				return;
			}
			$(".loading").removeClass("none");
			loading = true;
			var index = $(this).index();
			var fun;

			function com(type) { //type为请求参数 根据不同参数加载不同数据
				// console.log(loading);
				loading = false;
				var html = '<div class="ol-item">' +
					'<div class="ol-head">' +
					'<span class="ol-ordernum">订单号：123435552412</span>' +
					'<span class="ol-status">待付款</span>' +
					'</div>' +
					'<div class="ol-body">' +
					'<div class="po-g-goods">' +
					'<img src="images/placeholder.png" alt="" />' +
					'<div class="po-goods-r">' +
					'<p class="po-goods-title">美国加州猛打非木桥没了红葡萄要</p>' +
					'<div class="po-goods-pricenum">' +
					'<span class="good-price"><em>28</em>积分</span>' +
					'<span class="po-goods-num">x1</span>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'<div class="ol-foot">' +
					'<button class="btn btn-default">删除订单</button>' +
					'</div>' +
					'</div>';
				$(".olitem").eq(index).html(html);
				$(".loading").addClass("none");
			}
			switch (index) {
				case 0:
					// 全部订单
					fun = function() {
						com();
					};
					break;
				case 1:
					//待付款
					fun = function() {
						com();
					};
					break;
				case 2:
					// 待收货
					fun = function() {
						com();
					};
					break;
				case 3:
					// 已完成
					fun = function() {
						com();
					};
					break;
				default:
					// statements_def
					break;
			}
			setTimeout(fun, 1000);
		});
	})();
	$('.sendcode').click(function(){
		$.sendcode($(this),120);
	});
});