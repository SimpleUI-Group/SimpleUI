webpackJsonp([7],{

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(28)

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(30),
	  /* template */
	  __webpack_require__(31),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/yinhuang/github/SimpleUI/doc/src/component/button.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] button.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-589b8cb1", Component.options)
	  } else {
	    hotAPI.reload("data-v-589b8cb1", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(16)("457998a2", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/.0.27.3@css-loader/index.js!../../../node_modules/.11.2.0@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-589b8cb1\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/.11.2.0@vue-loader/lib/selector.js?type=styles&index=0!./button.vue", function() {
	     var newContent = require("!!../../../node_modules/.0.27.3@css-loader/index.js!../../../node_modules/.11.2.0@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-589b8cb1\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/.11.2.0@vue-loader/lib/selector.js?type=styles&index=0!./button.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)(undefined);
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },

/***/ 30:
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

	exports.default = {
	    name: 'button'
	};

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "box-contianer"
	  }, [_c('h1', [_vm._v("Button")]), _vm._v(" "), _c('p', [_vm._v("我们提供了很多颜色供选择")]), _vm._v(" "), _c('Docbox', {
	    attrs: {
	      "url": "../../demo/dist/index.html#/component/button-1"
	    }
	  }, [_c('Dl', {
	    attrs: {
	      "type": "html"
	    }
	  }, [_vm._v("<Button>Default</Button>\n<Button type=\"primary\">Primary</Button>\n<Button type=\"warning\">Warning</Button>\n<Button type=\"danger\">Danger</Button>\n<Button type=\"success\">Success</Button>")]), _vm._v(" "), _c('Dr', [_vm._v("\n            总共有\n            "), _c('code', [_vm._v("default")]), _vm._v(" "), _c('code', [_vm._v("primary")]), _vm._v(" "), _c('code', [_vm._v("warning")]), _vm._v(" "), _c('code', [_vm._v("danger")]), _vm._v(" "), _c('code', [_vm._v("success")]), _vm._v("\n            五种类型的按钮样式，通过"), _c('code', [_vm._v("type")]), _vm._v("属性传递，\n            默认不传为"), _c('code', [_vm._v("default")])])], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('Docbox', {
	    attrs: {
	      "url": "../../demo/dist/index.html#/component/button-2"
	    }
	  }, [_c('Dl', {
	    attrs: {
	      "type": "html"
	    }
	  }, [_vm._v("<Button type=\"primary\" icon=\"loading\">Loading</Button>\n<Button type=\"warning\" icon=\"search\">Search</Button>\n<Button type=\"danger\" icon=\"check\">Check</Button>")]), _vm._v(" "), _c('Dr', [_vm._v("\n            关于icon的值可以参考Icon组件的文档\n        ")])], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('Docbox', {
	    attrs: {
	      "url": "../../demo/dist/index.html#/component/button-3"
	    }
	  }, [_c('Dl', {
	    attrs: {
	      "type": "html"
	    }
	  }, [_vm._v("<Button type=\"primary\" pull>Pull</Button>\n<Button type=\"warning\" edge>Edge</Button>\n<Button type=\"danger\" pull edge>Pull+Edge</Button>")]), _vm._v(" "), _c('Dr', [_c('code', [_vm._v("pull")]), _vm._v("使得按钮没有margin值占满外层容器\n            "), _c('code', [_vm._v("edge")]), _vm._v("去掉圆角，呈现出直角按钮\n        ")])], 1)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('p', [_vm._v("通过"), _c('code', [_vm._v("icon")]), _vm._v("属性可以生成带图标的按钮")])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('p', [_vm._v("通过"), _c('code', [_vm._v("pull")]), _vm._v("以及"), _c('code', [_vm._v("edge")]), _vm._v("可以使按钮定制更加多样化")])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-589b8cb1", module.exports)
	  }
	}

/***/ }

});