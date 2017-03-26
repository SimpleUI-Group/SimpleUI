webpackJsonp([8],{

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(33)

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(35),
	  /* template */
	  __webpack_require__(36),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/yinhuang/github/SimpleUI/doc/src/component/icon.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] icon.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-dc171790", Component.options)
	  } else {
	    hotAPI.reload("data-v-dc171790", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(16)("b331e382", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/.0.27.3@css-loader/index.js!../../../node_modules/.11.2.0@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-dc171790\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/.11.2.0@vue-loader/lib/selector.js?type=styles&index=0!./icon.vue", function() {
	     var newContent = require("!!../../../node_modules/.0.27.3@css-loader/index.js!../../../node_modules/.11.2.0@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-dc171790\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/.11.2.0@vue-loader/lib/selector.js?type=styles&index=0!./icon.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)(undefined);
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },

/***/ 35:
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

	exports.default = {
	    name: 'icon'
	};

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "box-contianer"
	  }, [_c('h1', [_vm._v("Icon")]), _vm._v(" "), _c('p', [_vm._v("我们内置了很多图标可以直接使用")]), _vm._v(" "), _c('Docbox', {
	    attrs: {
	      "url": "../../demo/dist/index.html#/component/icon-1"
	    }
	  }, [_c('Dl', {
	    attrs: {
	      "type": "html"
	    }
	  }, [_vm._v("<Icon type=\"check\"></Icon>\n<Icon type=\"loading\"></Icon>            \n<Icon type=\"search\"></Icon>")]), _vm._v(" "), _c('Dr', [_vm._v("\n            使用"), _c('code', [_vm._v("type")]), _vm._v("属性指定图标名称，具体对照见本页最下方\n            "), _c('code', [_vm._v("loading")]), _vm._v("图标将自动旋转\n        ")])], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('Docbox', {
	    attrs: {
	      "url": "../../demo/dist/index.html#/component/icon-2"
	    }
	  }, [_c('Dl', {
	    attrs: {
	      "type": "html"
	    }
	  }, [_vm._v("<Icon type=\"check\" size=\"12\"></Icon>\n<Icon type=\"check\" size=\"14\"></Icon>            \n<Icon type=\"check\" size=\"16\"></Icon>\n<Icon type=\"check\" size=\"18\"></Icon>\n<Icon type=\"check\" size=\"20\"></Icon>\n<Icon type=\"check\" size=\"22\"></Icon>\n<Icon type=\"check\" size=\"24\"></Icon>\n<Icon type=\"check\" size=\"26\"></Icon>")]), _vm._v(" "), _c('Dr', [_vm._v("\n            实际上 "), _c('code', [_vm._v("size")]), _vm._v("对应的就是字体大小属性"), _c('code', [_vm._v("font-size")])])], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('Docbox', {
	    attrs: {
	      "url": "../../demo/dist/index.html#/component/icon-3"
	    }
	  }, [_c('Dl', {
	    attrs: {
	      "type": "html"
	    }
	  }, [_vm._v("<Icon type=\"search\" size=\"22\" color=\"#f00\"></Icon>\n<Icon type=\"search\" size=\"22\" color=\"#f0f\"></Icon>            \n<Icon type=\"search\" size=\"22\" color=\"#00f\"></Icon>\n<Icon type=\"search\" size=\"22\" color=\"#0f0\"></Icon>\n<Icon type=\"search\" size=\"22\" color=\"#0ff\"></Icon>")]), _vm._v(" "), _c('Dr', [_c('code', [_vm._v("color")]), _vm._v("支持十六进制，rgb，rgba 和 英文名\n        ")])], 1), _vm._v(" "), _c('h2', [_vm._v("内置图标列表")]), _vm._v(" "), _c('p', [_vm._v("to do")])], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('p', [_vm._v("可以使用"), _c('code', [_vm._v("size")]), _vm._v("属性来调整大小")])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('p', [_vm._v("可以使用"), _c('code', [_vm._v("color")]), _vm._v("属性来指定颜色")])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-dc171790", module.exports)
	  }
	}

/***/ }

});