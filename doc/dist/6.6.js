webpackJsonp([6],{

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(44)

	var Component = __webpack_require__(19)(
	  /* script */
	  __webpack_require__(46),
	  /* template */
	  __webpack_require__(47),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\github\\group-SimpleUI\\doc\\src\\component\\input.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] input.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2d470aae", Component.options)
	  } else {
	    hotAPI.reload("data-v-2d470aae", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(45);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(17)("6003c690", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2d470aae\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./input.vue", function() {
	     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2d470aae\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./input.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)(undefined);
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },

/***/ 46:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    name: 'input'
	};

/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "box-contianer"
	  }, [_c('h1', [_vm._v("Input")]), _vm._v(" "), _c('p', [_vm._v("我们提供了Input标签来使用组件")]), _vm._v(" "), _c('Docbox', {
	    attrs: {
	      "url": "../../demo/dist/index.html#/component/input-1"
	    }
	  }, [_c('Dl', {
	    attrs: {
	      "type": "html"
	    }
	  }, [_vm._v("<Input type=\"text\"\r\n    label=\"文本\" \r\n    @input=\"getTextInfo\" \r\n    placeholder=\"文本输入\">\r\n</Input>\r\n<Input type=\"number\" \r\n    label=\"数字\"\r\n    @input=\"getNumberInfo\" \r\n    placeholder=\"数字输入\">\r\n</Input>\r\n<Input type=\"mail\" \r\n    label=\"邮箱\"\r\n    @input=\"getMailInfo\" \r\n    placeholder=\"邮箱输入\">\r\n</Input>")]), _vm._v(" "), _c('Dr', [_vm._v("\r\n            使用"), _c('code', [_vm._v("type")]), _vm._v("属性指定input 的类型，参考原生input，全部支持\r\n            使用"), _c('code', [_vm._v("label")]), _vm._v("属性指定输入框的label\r\n            使用"), _c('code', [_vm._v("placeholder")]), _vm._v("属性指定输入框的placholder\r\n            使用"), _c('code', [_vm._v("input")]), _vm._v("事件获取输入框的输入事件所返回的值\r\n            使用"), _c('code', [_vm._v("name")]), _vm._v("属性指定输入框的name\r\n\r\n        ")])], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('Docbox', {
	    attrs: {
	      "url": "../../demo/dist/index.html#/component/input-2"
	    }
	  }, [_c('Dl', {
	    attrs: {
	      "type": "html"
	    }
	  }, [_vm._v("<InputGroup>\r\n    <Input type=\"text\"\r\n        label=\"姓名\" \r\n        @input=\"getTextInfo\" \r\n        placeholder=\"请输入姓名\">\r\n    </Input>\r\n    <Input type=\"number\" \r\n        label=\"手机\"\r\n        @input=\"getNumberInfo\" \r\n        placeholder=\"请输入手机号码\">\r\n    </Input>\r\n    <Input type=\"mail\" \r\n        label=\"邮箱\"\r\n        @input=\"getMailInfo\" \r\n        placeholder=\"请输入邮箱\">\r\n    </Input>\r\n</InputGroup>")]), _vm._v(" "), _c('Dr', [_vm._v("\r\n            通过"), _c('code', [_vm._v("InputGroup")]), _vm._v("的包裹，可以让表单组更好的样式和ui呈现，我们在内部做了很多处理\r\n        ")])], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('Docbox', {
	    attrs: {
	      "url": "../../demo/dist/index.html#/component/input-3"
	    }
	  }, [_c('Dl', {
	    attrs: {
	      "type": "html"
	    }
	  }, [_vm._v("<Input type=\"text\"\r\n    label=\"姓名\" \r\n    @input=\"getTextInfo\" \r\n    placeholder=\"请输入姓名\"\r\n    underline>\r\n</Input>")]), _vm._v(" "), _c('Dr', [_vm._v("\r\n            去掉了背景和边框，只保留了下边框\r\n        ")])], 1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('Docbox', {
	    attrs: {
	      "url": "../../demo/dist/index.html#/component/input-4"
	    }
	  }, [_c('Dl', {
	    attrs: {
	      "type": "html"
	    }
	  }, [_vm._v("<Input type=\"text\"\r\n    label=\"手机\" \r\n    @input=\"getTextInfo\" \r\n    placeholder=\"请输入手机号码\">\r\n    <Button>获取验证码</Button>\r\n</Input>\r\n<Input type=\"text\"\r\n    label=\"验证码\" \r\n    @input=\"getTextInfo\" \r\n    placeholder=\"请输入图形验证码\">\r\n    <img src=\"http://i2.muimg.com/567571/fd0e77b92e0160c0.jpg\">\r\n</Input>")]), _vm._v(" "), _c('Dr')], 1)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('p', [_vm._v("如果需要一组表单可以使用"), _c('code', [_vm._v("InputGroup")]), _vm._v("组件将表单组包裹")])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('p', [_vm._v("使用"), _c('code', [_vm._v("underline")]), _vm._v("属性可以去除背景以及多余边框")])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('p', [_vm._v("嵌套"), _c('code', [_vm._v("Button")]), _vm._v("组件或者"), _c('code', [_vm._v("img")]), _vm._v("标签还可以做到功能性的效果")])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2d470aae", module.exports)
	  }
	}

/***/ }

});