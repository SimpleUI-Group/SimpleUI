+function(window,document,Math){
/**
 * 存在兼容性的web API
 * touchEvent : Firefox Mobile (Gecko) 6.0 以上版本支持 , IE Mobile 11 以上版本支持
 * document.querySelector() : Opera Mobile 10.0 以上版本支持 , IE Mobile 9 以上版本支持
 * window.innerHeight : IE Mobile 9 以上版本支持 , Opera Mobile 9 以上版本支持
 * 
 * 浏览器兼容性(iOS 7.0+ , Android 4.4+) : Safari Mobile , iOS webview , Chrome for iOS
 *                                        Android , Android Webview , Chrome for Android
 *                                        Firefox Mobile (Gecko) 6.0+ , IE Mobile 11+ , Opera Mobile 9+
 *                                        UC browser , QQ browser
 * 
 * 已真机测试并支持的浏览器 : (iOS 10.1.1) webview , (iOS 10.1.1) Safari , (iOS 10.1.1) Chrome 56.0.2924.79
 *                          (iOS 10.1.1) Firefox Mobile (Gecko) 6.1(1) , (iOS 10.1.1)Opera Mobile 11.0.1.107866
 *                          (iOS 10.1.1)UC browser 11.4.7.931 , (iOS 10.1.1)QQ browser 7.2.1.2879 
 */
var Slideload = function(element,options){
	var self = this;
	self.slider = element;

	self.next = function(){
		self.reset();
	};
	self.stop = function(){
		self.opts.isData = false;
		self.reset();
	};
	self.recover = function(){
		self.opts.isData = true;
	};

	self.eventList = [];
	self.initEventProgress = 0;
	self.on = function(eventName,cb){ //事件监听API load refresh
		self.eventList.push(eventName);
		options[eventName + 'Handle'] = cb;
		setTimeout(function(){
			self.initEventProgress += 1;
			if(self.eventList.length == self.initEventProgress){
				self.init(options);
			}
		},0);
	};
};
//初始化
Slideload.prototype.init = function(options){
	var self = this;
	self.opts = self.utils.extend({
		scrollArea : self.slider, //滑动区域
		scrollAreaHeight : 0, //滑动区域高度
		scrollCont : undefined, //列表容器
		loading : false, //loading状态
		isLockLoad : false, //无线滚动是否锁定
		isLockRefresh : false, //下拉刷新是否锁定
		isData : true, //请求结果是否有数据
		direction : 'up', //滑动方向
		scrollTop : 0, //滚动条位置
		scrollContentHeight : 0, //列表容器高度
		limitNo : 0, //触发上拉加载的阈值
		threshold : 50, //滚动提前加载距离
		distance : 50, //出发下拉刷新的阈值
		loadHandle : null, //上拉加载function
		refreshHandle : null //下拉刷新function
	},options);

	//获取滚动区域高度
	self.utils.getScrollAreaHeight(self);

	self.moveEle = self.opts.scrollCont;

	//自动加载
	self.autoLoad(self);

	// 窗口调整
	document.addEventListener('resize',function(){
		setTimeout(function(){
			self.utils.getScrollContentHeight(self);
			self.utils.getScrollAreaHeight(self);
			self.autoLoad(self);
		},0);
	},false);

	//設置transform & transition 浏览器厂商前缀
	self.transformVendor = self.utils.vendor("transform");
	self.transitionVendor = self.utils.vendor("transition");
	
	//获取当前浏览器支持的animatePropertyName
	if(self.transformVendor !== false){
		self.animatePropertyName = self.utils.prefixStyle(self.transformVendor,"transform");
		self.animatePropertyValue = function(num){
			return "translate3d(0px, " + num + "px, 0.01px)";
		};
		self.getAnimatePropertyValue = function(animatePropertyValue){
			var re = /^.*translate3d\(0px\,\s+(\d+\.?\d?)px\,\s+0.01px\)$/i;
			return Math.floor(animatePropertyValue.match(re)[1]);
		};
	}else{
		self.animatePropertyName = "top";
		self.animatePropertyValue = function(num){
			return num + "px";
		};
		self.getAnimatePropertyValue = function(animatePropertyValue){
			return animatePropertyValue.slice(0,-2);
		};
	}

	//判断当前浏览器是否支持transition
	self.supportTransition = false;
	if(self.transitionVendor !== false){
		self.supportTransition = true;
		self.transition = self.utils.prefixStyle(self.transitionVendor,"transition");

		var transEndEventNames = {
			WebkitTransition:"webkitTransitionEnd",
			MozTransition:"transitionend",
			msTransition:"transitionend",        
			OTransition:"oTransitionEnd otransitionend",
			transition:"transitionend"
		}
		self.transEndEventNames = transEndEventNames[self.transition];
		self.moveEle.addEventListener(self.transEndEventNames,function(){
			this.style[self.transition] = "";
			if(self.translateY == 0){
				self.triggerAutoLoad();
			}
		},false);
		//缓动动画
		self.animate = function(startNum,endNum){
			self.moveEle.style[self.animatePropertyName] = self.animatePropertyValue(endNum);
		};
	}else{
		//缓动动画
		self.animate = function(startNum,endNum){
			var translateY = { y:startNum };
			var tween = new TWEEN.Tween(translateY)
				.easing(TWEEN.Easing.Quadratic.Out)
				.to({ y:endNum },260)
				.onUpdate(function() {
					self.moveEle.style[self.animatePropertyName] = self.animatePropertyValue(this.y);
				})
				.onComplete(function(obj){
					if(obj.y == 0){
						self.triggerAutoLoad();
					}
				})
				.start();
			self.utils.rAF(animate);
			function animate(time) {
				self.utils.rAF(animate);
				TWEEN.update();
			}
		};
	}
	
	self.moveEle.style[self.animatePropertyName] = self.animatePropertyValue(0);
	self.translateY = 0;
	self.touchmoveY = 0;
	
	//判断浏览器是否支持 Passive event listeners
	var supportPassive = false;
	if("defineProperty" in Object){
		try{
			var opts = Object.defineProperty({},"passive",{
				get:function(){
					supportPassive = true;
				}
			});
			window.addEventListener("test",null,opts);
		}catch(e){}
	}

	//绑定触摸
	self.slider.addEventListener('touchstart',function(e){
		if(!self.opts.loading){
			self.touchesHandle(e);
			self.touchstartHandle(e);
		}
	},supportPassive ? {passive:true} : false);
	self.slider.addEventListener('touchmove',function(e){
		if(!self.opts.loading){
			self.touchesHandle(e);
			self.touchmoveHandle(e);
		}
	},supportPassive ? {passive:false} : false);
	self.slider.addEventListener('touchend',function(){
		if(!self.opts.loading){
			self.touchendHandle();
		}
	},supportPassive ? {passive:true} : false);

	//监听列表滚动，到底部自动加载数据
	self.slider.addEventListener('scroll',function(){
		self.utils.getScrollAreaHeight(self);
		self.opts.limitNo = Number(self.opts.scrollContentHeight - self.opts.scrollAreaHeight);
		self.opts.scrollTop = self.utils.getScrollTop(self);
		//滚动页面触发加载数据
		if(self.opts.limitNo > 0 && self.opts.direction == 'up' && self.opts.loadHandle !== null && !self.opts.loading && !self.opts.isLockLoad && self.opts.limitNo-self.opts.threshold <= self.opts.scrollTop){
			self.lock("load");
			self.triggerLoad();
		}
	},supportPassive ? {passive:true} : false);

};

//touches
Slideload.prototype.touchesHandle= function(e){
	e.touches = e.changedTouches;
};

//touchstart
Slideload.prototype.touchstartHandle = function(e){
	var self = this;
	if(!self.opts.loading && self.opts.isData){
		self.unlock("load");
	}
	//滑动起点
	self._startY = e.touches[0].pageY;
	
	//获取滚动条位置
	self.opts.scrollTop = self.utils.getScrollTop(self);

	if(self.supportTransition){
		self.moveEle.style[self.transition] = "";
	}
};

//touchmove
Slideload.prototype.touchmoveHandle = function(e){
	var self = this;
	self._curY = e.touches[0].pageY;
	self._moveY = self._curY - self._startY;
	//获取滑动方向
	if(self._moveY > 0){
		self.opts.direction = 'down';
	}else if(self._moveY < 0){
		self.opts.direction = 'up';
	}
	//下拉刷新
	if(!self.opts.loading && self.opts.refreshHandle !== null && self.opts.scrollTop <= 0 && !self.opts.isLockRefresh && self.opts.direction == 'down'){
		e.preventDefault();
		if(self.touchmoveY <= self.opts.distance){
			self.touchmoveY = Math.floor(self._moveY*0.6);
		}else if(self.touchmoveY > self.opts.distance && self.touchmoveY <= self.opts.distance*2){
			self.touchmoveY = Math.floor(self.opts.distance + (self._moveY*0.6 - self.opts.distance)*0.5);
		}else if(self.touchmoveY > self.opts.distance*2){
			self.touchmoveY = Math.floor(self.opts.distance*2 + ((self.opts.distance + (self._moveY*0.6 - self.opts.distance)*0.5) - self.opts.distance*2)*0.5);
		}
		self.moveEle.style[self.animatePropertyName] = self.animatePropertyValue(self.touchmoveY);
		self.translateY = self.getAnimatePropertyValue(self.moveEle.style[self.animatePropertyName]);
		if(self.translateY > 50){
			self.opts.vm.refreshStatus = 1;
		}else{
			self.opts.vm.refreshStatus = 0;
		}
	}
};

//touchend
Slideload.prototype.touchendHandle = function(){
	var self = this;
	self.opts.scrollTop = self.utils.getScrollTop(self);
	if(self.opts.scrollTop > 0) return;
	var returnTarget = 0;
	if(self.translateY > self.opts.distance){
		returnTarget = 50;
		self.triggerRefresh();
	}
	//判断浏览器是否支持 transition过渡
	if(self.supportTransition){
		self.moveEle.style[self.transition] = "260ms ease-out";
	}
	self.animate(self.translateY,returnTarget);
	self.translateY = returnTarget;
	self.touchmoveY = returnTarget;
};

//触发自动加载
Slideload.prototype.triggerAutoLoad = function(){
	var self = this;
	//如果有数据
	if(self.opts.isData){
		setTimeout(function(){
			self.utils.getScrollContentHeight(self);
			self.autoLoad(self);
		},0);
	}
};

// 如果列表容器高度不大于滚动区域高度，数据较少，自动加载更多数据
Slideload.prototype.autoLoad = function(){
	var self = this;
	if((self.opts.scrollContentHeight - self.opts.threshold) > self.opts.scrollAreaHeight) return;
	if(self.opts.loadHandle !== null){
		self.opts.loading = true;
		self.unlock("load");
		self.triggerLoad();
	}
};

//刷新數據
Slideload.prototype.triggerRefresh = function(){
	var self = this;
	self.opts.loading = true;
	self.opts.refreshHandle(self.next,self.stop);
};

//加载更多数据
Slideload.prototype.triggerLoad = function(){
	var self = this;
	self.opts.loading = true;
	self.opts.loadHandle(self.next,self.stop);
};

//锁定
Slideload.prototype.lock = function(type){
	var self = this;
	if(type == 'load'){
		self.opts.isLockLoad = true;
	}
};

//解锁
Slideload.prototype.unlock = function(type){
	var self = this;
	if(type == 'load'){
		self.opts.isLockLoad = false;
	}
};

//重置
Slideload.prototype.reset = function(){
	var self = this;

	self.opts.loading = false;
	if(self.opts.direction == 'up'){ //加载更多数据重置
		self.triggerAutoLoad();
	}else{ //下拉刷新重置
		self.opts.direction = 'up'; //刷新之后自动加载的函数属于loadHandle,为了避免错误重置与保持统一
		if(self.supportTransition){
			self.moveEle.style[self.transition] = "260ms ease-out";
		}
		setTimeout(function(){
			self.animate(self.translateY,0);
			self.translateY = 0;
			self.touchmoveY = 0;
		},500);
	}
};

/**
 * 工具函数
 */
Slideload.prototype.utils = {
	//对象扩展（浅拷贝）
	extend:function(target, obj) {
		for ( var i in obj ) {
			target[i] = obj[i];
		}
		return target;
	},
	//获取滚动条位置
	getScrollTop:function(self){
		var t = 0;
		if(self.opts.scrollArea == window){
			var supportPageOffset = window.pageYOffset !== undefined;
			var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
			t = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
		}else{
			t = self.opts.scrollArea.scrollTop;
		}
		return t;
	},
	//获取滚动区域高度
	getScrollAreaHeight:function(self){
		if(self.opts.scrollArea == window){
			self.opts.scrollAreaHeight = window.innerHeight;            
		}else{
			self.opts.scrollAreaHeight = self.opts.scrollArea.clientHeight;
		}
	},
	//获取列表容器高度
	getScrollContentHeight:function(self){
		self.opts.scrollContentHeight = Math.floor(self.moveEle.scrollHeight);
	},
	//獲取css屬性(不需要駝峰式寫法)
	getCssProperty:function(Element,CssProperty){
		var style = ("getComputedStyle" in window) ? getComputedStyle(Element) : Element.currentStyle;
		var _getPropertyValue = function(CssProperty){
			if("getPropertyValue" in style){
				return style.getPropertyValue(CssProperty);
			}{
				return style.getAttribute(CssProperty);
			}
		}
		return _getPropertyValue(CssProperty);
	},
	//获取各浏览器对应的css属性的兼容性前缀
	vendor:function (property) {
		var _elementStyle = document.createElement('div').style;
		var property = property.slice(1);
		var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			transform = vendors[i] + property;
			if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
		}

		return false;
	},
	//给传入的样式添加兼容性前缀
	prefixStyle:function(vendor,property){
		if ( vendor === false ) return false;
		if ( vendor === '' ) return property;
		return vendor + property.charAt(0).toUpperCase() + property.substr(1);
	},
	//js动画引擎
	rAF:function(cb){
		var rAF = window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (cb) { window.setTimeout(cb, 1000 / 60); };
		return rAF(cb);
	}
};

if(typeof(module) !== 'undefined' && module.exports){
	module.exports = Slideload;
}else if(typeof define == "function" && define.amd){
	define(function(){ return Slideload; });
}else{
	window.Slideload = Slideload;
}
}(window,document,Math);