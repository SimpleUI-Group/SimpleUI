+function(window,document,Math){
	/**
	 * Tween.js
	 */
	var TWEEN = TWEEN || (function () {

		var _tweens = [];

		return {

			getAll: function () {

				return _tweens;

			},

			removeAll: function () {

				_tweens = [];

			},

			add: function (tween) {

				_tweens.push(tween);

			},

			remove: function (tween) {

				var i = _tweens.indexOf(tween);

				if (i !== -1) {
					_tweens.splice(i, 1);
				}

			},

			update: function (time, preserve) {

				if (_tweens.length === 0) {
					return false;
				}

				var i = 0;

				time = time !== undefined ? time : TWEEN.now();

				while (i < _tweens.length) {

					if (_tweens[i].update(time) || preserve) {
						i++;
					} else {
						_tweens.splice(i, 1);
					}

				}

				return true;

			}
		};

	})();


	// Include a performance.now polyfill.
	// In node.js, use process.hrtime.
	if (typeof (window) === 'undefined' && typeof (process) !== 'undefined') {
		TWEEN.now = function () {
			var time = process.hrtime();

			// Convert [seconds, nanoseconds] to milliseconds.
			return time[0] * 1000 + time[1] / 1000000;
		};
	}
	// In a browser, use window.performance.now if it is available.
	else if (typeof (window) !== 'undefined' &&
			window.performance !== undefined &&
			window.performance.now !== undefined) {
		// This must be bound, because directly assigning this function
		// leads to an invocation exception in Chrome.
		TWEEN.now = window.performance.now.bind(window.performance);
	}
	// Use Date.now if it is available.
	else if (Date.now !== undefined) {
		TWEEN.now = Date.now;
	}
	// Otherwise, use 'new Date().getTime()'.
	else {
		TWEEN.now = function () {
			return new Date().getTime();
		};
	}


	TWEEN.Tween = function (object) {

		var _object = object; //初始动画数据对象
		var _valuesStart = {}; //动画数据对象属性初始值
		var _valuesEnd = {}; //动画数据对象属性目标值
		var _valuesStartRepeat = {}; //动画循环属性初始值
		var _duration = 1000; //动画持续时间，默认1000ms
		var _repeat = 0;
		var _repeatDelayTime;
		var _yoyo = false;
		var _isPlaying = false; //动画开关
		var _reversed = false;
		var _delayTime = 0;
		var _startTime = null; //动画开始时间
		var _easingFunction = TWEEN.Easing.Linear.None; //通过缓动算法获取动画数据对象属性目标值的函数
		var _interpolationFunction = TWEEN.Interpolation.Linear;
		var _chainedTweens = [];
		var _onStartCallback = null;
		var _onStartCallbackFired = false; //onStart回调函数触发状态(已触发/未触发)
		var _onUpdateCallback = null;
		var _onCompleteCallback = null;
		var _onStopCallback = null;

		/**
		 * 设置动画数据目标值方法
		 */
		this.to = function (properties, duration) {

			_valuesEnd = properties; //获取动画数据对象属性目标值

			if (duration !== undefined) {
				_duration = duration; //获取动画持续时间
			}

			return this;

		};

		this.start = function (time) {

			TWEEN.add(this); //添加至动画列表_tweens

			_isPlaying = true; //动画开关

			_onStartCallbackFired = false; //重置onStart回调函数触发状态

			_startTime = time !== undefined ? time : TWEEN.now();
			_startTime += _delayTime; //设置动画开始时间

			for (var property in _valuesEnd) {

				// Check if an Array was provided as property value
				// 检查动画数据对象是否有数组值
				if (_valuesEnd[property] instanceof Array) {

					if (_valuesEnd[property].length === 0) {
						continue;
					}

					// Create a local copy of the Array with the start value at the front
					// 复制得到一个动画数据对象的该属性值在数组第一位的数组
					_valuesEnd[property] = [_object[property]].concat(_valuesEnd[property]);

				}

				// If `to()` specifies a property that doesn't exist in the source object,
				// we should not set that property in the object
				if (_object[property] === undefined) {
					continue;
				}

				// Save the starting value.
				// 设置动画数据对象属性初始值
				_valuesStart[property] = _object[property];

				// Ensures we're using numbers, not strings
				// 确保属性值的类型为number
				if ((_valuesStart[property] instanceof Array) === false) {
					_valuesStart[property] *= 1.0;
				}

				// 设置动画循环属性初始值
				_valuesStartRepeat[property] = _valuesStart[property] || 0;

			}

			return this;

		};

		this.stop = function () {

			if (!_isPlaying) {
				return this;
			}

			TWEEN.remove(this);
			_isPlaying = false;

			if (_onStopCallback !== null) {
				_onStopCallback.call(_object, _object);
			}

			this.stopChainedTweens();
			return this;

		};

		this.end = function () {

			this.update(_startTime + _duration);
			return this;

		};

		this.stopChainedTweens = function () {

			for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
				_chainedTweens[i].stop();
			}

		};

		this.delay = function (amount) {

			_delayTime = amount;
			return this;

		};

		this.repeat = function (times) {

			_repeat = times;
			return this;

		};

		this.repeatDelay = function (amount) {

			_repeatDelayTime = amount;
			return this;

		};

		this.yoyo = function (yoyo) {

			_yoyo = yoyo;
			return this;

		};


		this.easing = function (easing) {

			_easingFunction = easing;
			return this;

		};

		this.interpolation = function (interpolation) {

			_interpolationFunction = interpolation;
			return this;

		};

		this.chain = function () {

			_chainedTweens = arguments;
			return this;

		};

		this.onStart = function (callback) {

			_onStartCallback = callback;
			return this;

		};

		this.onUpdate = function (callback) {

			_onUpdateCallback = callback;
			return this;

		};

		this.onComplete = function (callback) {

			_onCompleteCallback = callback;
			return this;

		};

		this.onStop = function (callback) {

			_onStopCallback = callback;
			return this;

		};

		this.update = function (time) {

			var property;
			var elapsed;
			var value;

			if (time < _startTime) {
				return true;
			}

			// 如果onStart回调函数未触发，那么使其触发并执行
			if (_onStartCallbackFired === false) {

				if (_onStartCallback !== null) {
					_onStartCallback.call(_object, _object);
				}

				_onStartCallbackFired = true;
			}

			//time - _startTime动画已经执行的时间
			elapsed = (time - _startTime) / _duration;
			elapsed = elapsed > 1 ? 1 : elapsed;
			value = _easingFunction(elapsed);

			for (property in _valuesEnd) {

				// Don't update properties that do not exist in the source object
				if (_valuesStart[property] === undefined) {
					continue;
				}

				var start = _valuesStart[property] || 0;
				var end = _valuesEnd[property];
				if (end instanceof Array) {

					_object[property] = _interpolationFunction(end, value);

				} else {

					// Parses relative end values with start as base (e.g.: +10, -3)
					if (typeof (end) === 'string') {

						if (end.charAt(0) === '+' || end.charAt(0) === '-') {
							end = start + parseFloat(end);
						} else {
							end = parseFloat(end);
						}
					}

					// Protect against non numeric properties.
					if (typeof (end) === 'number') {
						// p = b + c * value;  b:初始值 c:变量值 value:缓动系数
						_object[property] = start + (end - start) * value;
					}

				}

			}

			if (_onUpdateCallback !== null) {
				_onUpdateCallback.call(_object, value);
			}

			if (elapsed === 1) {

				if (_repeat > 0) {

					if (isFinite(_repeat)) {
						_repeat--;
					}

					// Reassign starting values, restart by making startTime = now
					for (property in _valuesStartRepeat) {

						if (typeof (_valuesEnd[property]) === 'string') {
							_valuesStartRepeat[property] = _valuesStartRepeat[property] + parseFloat(_valuesEnd[property]);
						}

						if (_yoyo) {
							var tmp = _valuesStartRepeat[property];

							_valuesStartRepeat[property] = _valuesEnd[property];
							_valuesEnd[property] = tmp;
						}

						_valuesStart[property] = _valuesStartRepeat[property];

					}

					if (_yoyo) {
						_reversed = !_reversed;
					}

					if (_repeatDelayTime !== undefined) {
						_startTime = time + _repeatDelayTime;
					} else {
						_startTime = time + _delayTime;
					}

					return true;

				} else {

					if (_onCompleteCallback !== null) {

						_onCompleteCallback.call(_object, _object);
					}

					for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
						// Make the chained tweens start exactly at the time they should,
						// even if the `update()` method was called way past the duration of the tween
						_chainedTweens[i].start(_startTime + _duration);
					}

					return false;

				}

			}

			return true;

		};

	};

	// k = t/d
	TWEEN.Easing = {
		//线性匀速运动效果
		Linear: {

			None: function (k) {

				return k;

			}

		},
		//二次方的缓动（t^2）
		Quadratic: {

			In: function (k) {

				return k * k;

			},

			Out: function (k) {

				return k * (2 - k);

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k;
				}

				return - 0.5 * (--k * (k - 2) - 1);

			}

		},
		//三次方的缓动（t^2）
		Cubic: {

			In: function (k) {

				return k * k * k;

			},

			Out: function (k) {

				return --k * k * k + 1;

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k;
				}

				return 0.5 * ((k -= 2) * k * k + 2);

			}

		},
		//四次方的缓动（t^2）
		Quartic: {

			In: function (k) {

				return k * k * k * k;

			},

			Out: function (k) {

				return 1 - (--k * k * k * k);

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k;
				}

				return - 0.5 * ((k -= 2) * k * k * k - 2);

			}

		},
		//五次方的缓动（t^2）
		Quintic: {

			In: function (k) {

				return k * k * k * k * k;

			},

			Out: function (k) {

				return --k * k * k * k * k + 1;

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k * k;
				}

				return 0.5 * ((k -= 2) * k * k * k * k + 2);

			}

		},
		//正弦曲线的缓动（sin(t)）
		Sinusoidal: {

			In: function (k) {

				return 1 - Math.cos(k * Math.PI / 2);

			},

			Out: function (k) {

				return Math.sin(k * Math.PI / 2);

			},

			InOut: function (k) {

				return 0.5 * (1 - Math.cos(Math.PI * k));

			}

		},
		//指数曲线的缓动(2^t)
		Exponential: {

			In: function (k) {

				return k === 0 ? 0 : Math.pow(1024, k - 1);

			},

			Out: function (k) {

				return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);

			},

			InOut: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				if ((k *= 2) < 1) {
					return 0.5 * Math.pow(1024, k - 1);
				}

				return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);

			}

		},
		//圆形曲线的缓动(sqrt(1-t^2))
		Circular: {

			In: function (k) {

				return 1 - Math.sqrt(1 - k * k);

			},

			Out: function (k) {

				return Math.sqrt(1 - (--k * k));

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return - 0.5 * (Math.sqrt(1 - k * k) - 1);
				}

				return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);

			}

		},
		//指数衰减的正弦曲线缓动
		Elastic: {

			In: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);

			},

			Out: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;

			},

			InOut: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				k *= 2;

				if (k < 1) {
					return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
				}

				return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;

			}

		},
		//超过范围的三次方缓动((s+1)*t^3 – s*t^2)
		Back: {

			In: function (k) {

				var s = 1.70158;

				return k * k * ((s + 1) * k - s);

			},

			Out: function (k) {

				var s = 1.70158;

				return --k * k * ((s + 1) * k + s) + 1;

			},

			InOut: function (k) {

				var s = 1.70158 * 1.525;

				if ((k *= 2) < 1) {
					return 0.5 * (k * k * ((s + 1) * k - s));
				}

				return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);

			}

		},
		//指数衰减的反弹缓动
		Bounce: {

			In: function (k) {

				return 1 - TWEEN.Easing.Bounce.Out(1 - k);

			},

			Out: function (k) {

				if (k < (1 / 2.75)) {
					return 7.5625 * k * k;
				} else if (k < (2 / 2.75)) {
					return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
				} else if (k < (2.5 / 2.75)) {
					return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
				} else {
					return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
				}

			},

			InOut: function (k) {

				if (k < 0.5) {
					return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
				}

				return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;

			}

		}

	};

	TWEEN.Interpolation = {

		Linear: function (v, k) {

			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.Linear;

			if (k < 0) {
				return fn(v[0], v[1], f);
			}

			if (k > 1) {
				return fn(v[m], v[m - 1], m - f);
			}

			return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);

		},

		Bezier: function (v, k) {

			var b = 0;
			var n = v.length - 1;
			var pw = Math.pow;
			var bn = TWEEN.Interpolation.Utils.Bernstein;

			for (var i = 0; i <= n; i++) {
				b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
			}

			return b;

		},

		CatmullRom: function (v, k) {

			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.CatmullRom;

			if (v[0] === v[m]) {

				if (k < 0) {
					i = Math.floor(f = m * (1 + k));
				}

				return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);

			} else {

				if (k < 0) {
					return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
				}

				if (k > 1) {
					return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
				}

				return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);

			}

		},

		Utils: {

			Linear: function (p0, p1, t) {

				return (p1 - p0) * t + p0;

			},

			Bernstein: function (n, i) {

				var fc = TWEEN.Interpolation.Utils.Factorial;

				return fc(n) / fc(i) / fc(n - i);

			},

			Factorial: (function () {

				var a = [1];

				return function (n) {

					var s = 1;

					if (a[n]) {
						return a[n];
					}

					for (var i = n; i > 1; i--) {
						s *= i;
					}

					a[n] = s;
					return s;

				};

			})(),

			CatmullRom: function (p0, p1, p2, p3, t) {

				var v0 = (p2 - p0) * 0.5;
				var v1 = (p3 - p1) * 0.5;
				var t2 = t * t;
				var t3 = t * t2;

				return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;

			}

		}

	};

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
        self.slider = (typeof element == 'string') ? document.querySelector(element) : element;

        self.next = function(){
            self.reset();
        };
        self.stop = function(){
            self.opts.isData = false;
            self.reset();
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
            refreshHandle : null, //下拉刷新function
            refreshDOM : '', //刷新提示DOM pull2refresh , release2refresh , loading , refreshSuccess
            loadMoreDOM : '' //加載更多提示DOM pull2load , loading , loadSuccess
        },options);

        //获取滚动区域高度
        self.utils.getScrollAreaHeight(self);

        if(self.utils.getCssProperty(self.opts.scrollArea,"position") === "static"){
            self.opts.scrollArea.style.position = "relative";
        }
        self.moveEle = (typeof self.opts.scrollCont == 'string') ? document.querySelector(self.opts.scrollCont) : self.opts.scrollCont;
        //如果需要无限滚动则插入加载提示DOM
        if(self.opts.loadHandle !== null){
            self.loadEle = document.createElement("div");
            self.loadEle.innerHTML = self.opts.loadMoreDOM["pull2load"];
            self.moveEle.appendChild(self.loadEle);
        }
        //如果需要下拉刷新则插入刷新提示DOM
        if(self.opts.refreshHandle !== null){
            self.refreshEle = document.createElement("div");
            self.refreshEle.innerHTML = self.opts.refreshDOM["pull2refresh"];
            if(self.opts.scrollArea === window){
                document.body.insertBefore(self.refreshEle,self.moveEle);
            }else{
                self.opts.scrollArea.insertBefore(self.refreshEle,self.moveEle);
            }
            self.refreshEle.style.visibility = "hidden";
        }

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
                    self.refreshEle.innerHTML = self.opts.refreshDOM["pull2refresh"];
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
                            self.refreshEle.innerHTML = self.opts.refreshDOM["pull2refresh"];
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
        self.moveEle.style.position = "absolute";
        self.moveEle.style.top = "0";
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
                self.refreshEle.innerHTML = self.opts.refreshDOM["release2refresh"];
            }else{
                self.refreshEle.innerHTML = self.opts.refreshDOM["pull2refresh"];
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
            self.refreshEle.innerHTML = self.opts.refreshDOM["loading"];
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
                self.loadEle.innerHTML = self.opts.loadMoreDOM["pull2load"];
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
        self.loadEle.innerHTML = self.opts.loadMoreDOM["loading"];
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

        if(self.refreshEle.style.visibility = "hidden"){
            self.refreshEle.style.visibility = "visible";
        }

        self.opts.loading = false;
        if(self.opts.direction == 'up'){ //加载更多数据重置
            self.loadEle.innerHTML = self.opts.loadMoreDOM["loadSuccess"];
            self.triggerAutoLoad();
        }else{ //下拉刷新重置
            self.opts.direction = 'up'; //刷新之后自动加载的函数属于loadHandle,为了避免错误重置与保持统一
            self.refreshEle.innerHTML = self.opts.refreshDOM["refreshSuccess"];
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