webpackJsonp([34],{

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(401),
	  /* template */
	  __webpack_require__(402),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/yinhuang/github/SimpleUI/demo/src/component/button-2.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] button-2.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-b374a176", Component.options)
	  } else {
	    hotAPI.reload("data-v-b374a176", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 401:
/***/ function(module, exports) {

	"use strict";

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

	exports.default = {
	    name: "button-2"
	};

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "box-contianer"
	  }, [_c('Button', {
	    attrs: {
	      "type": "primary",
	      "icon": "loading"
	    }
	  }, [_vm._v("Loading")]), _vm._v(" "), _c('Button', {
	    attrs: {
	      "type": "warning",
	      "icon": "search"
	    }
	  }, [_vm._v("Search")]), _vm._v(" "), _c('Button', {
	    attrs: {
	      "type": "danger",
	      "icon": "check"
	    }
	  }, [_vm._v("Check")])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-b374a176", module.exports)
	  }
	}

/***/ }

});