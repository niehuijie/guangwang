	
			 //======
		function loadJScript() {
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "http://api.map.baidu.com/api?v=2.0&ak=HlfTqMpABNN9r88CmVsPN0T698NcoKun&callback=init";
			document.body.appendChild(script);
			init() 
		}
		function init() {
			var map = new BMap.Map("allmap");            // 创建Map实例
			var point = new BMap.Point(113.741693,34.779534); // 创建点坐标			
			var marker = new BMap.Marker(point);  // 创建标注
		    map.addOverlay(marker);              // 将标注添加到地图中
			map.centerAndZoom(point,12); 			
			var label = new BMap.Label("绿驰汽车服务销售（北京）有限公司",{offset:new BMap.Size(-10,20)});
			marker.setLabel(label);			
		    function SquareOverlay(center, width,height, color,bclor){  
				this._center = center;  
				this._width = width;
				this._height = height;
				this._color = color;
				this._bclor = bclor;
			}
		    // 继承API的BMap.Overlay  
			SquareOverlay.prototype = new BMap.Overlay();
			SquareOverlay.prototype.initialize = function(map){  
				// 保存map对象实例  
				this._map = map;
				// 创建div元素，作为自定义覆盖物的容器  
				var div = document.createElement("div");
				div.style.position = "absolute";
				// 可以根据参数设置元素外观  
				div.style.width = this._length + "px";
				div.style.height = this._length + "px";
				div.style.background = this._color;
				// 将div添加到覆盖物容器中  
				map.getPanes().markerPane.appendChild(div);
				// 保存div实例  
				this._div = div;
				// 需要将div元素作为方法的返回值，当调用该覆盖物的show、  
				// hide方法，或者对覆盖物进行移除时，API都将操作此元素。  
				return div;
			}
			// 继承API的BMap.Overlay  
			SquareOverlay.prototype = new BMap.Overlay();
			SquareOverlay.prototype.initialize = function(map){  
				// 保存map对象实例  
				this._map = map;
				// 创建div元素，作为自定义覆盖物的容器  
				var div = document.createElement("div");
				div.style.position = "absolute";
				// 可以根据参数设置元素外观  
				div.style.width = this._width + "px";
				div.style.height = this._height + "px";
				div.style.background = this._color;
				div.style.border = "1px solid"+this._bclor
				div.style.lineHeight = "40px";
				div.style.textAlign = "center";
				div.innerHTML = "中国人保大厦";
				// 将div添加到覆盖物容器中  
				map.getPanes().markerPane.appendChild(div);
				// 保存div实例  
				this._div = div;
				// 需要将div元素作为方法的返回值，当调用该覆盖物的show、  
				// hide方法，或者对覆盖物进行移除时，API都将操作此元素。  
				return div;
			}
			SquareOverlay.prototype.draw = function(){  
				// 根据地理坐标转换为像素坐标，并设置给容器 
				 var position = this._map.pointToOverlayPixel(this._center);
				 this._div.style.left = position.x - this._height + "px";  
				 this._div.style.top = position.y - this._height-30 + "px";  
			}
		
			//添加自定义覆盖物  
			var mySquare = new SquareOverlay(map.getCenter(), 100,40, "#fff","#ddd");  
			map.addOverlay(mySquare);
			
		}  
		window.onload = loadJScript;  //异步加载地图
		

