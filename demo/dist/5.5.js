webpackJsonp([5],{

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(37),
	  /* template */
	  __webpack_require__(38),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\mk\\project\\SimpleUI\\demo\\src\\component\\button-1.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] button-1.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-b390d078", Component.options)
	  } else {
	    hotAPI.reload("data-v-b390d078", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 37:
/***/ (function(module, exports) {

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
	//
	//

	exports.default = {
	    name: "button-1"
	};

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "box-contianer"
	  }, [_c('Button', [_vm._v("Default")]), _vm._v(" "), _c('Button', {
	    attrs: {
	      "type": "primary"
	    }
	  }, [_vm._v("Primary")]), _vm._v(" "), _c('Button', {
	    attrs: {
	      "type": "warning"
	    }
	  }, [_vm._v("Warning")]), _vm._v(" "), _c('Button', {
	    attrs: {
	      "type": "danger"
	    }
	  }, [_vm._v("Danger")]), _vm._v(" "), _c('Button', {
	    attrs: {
	      "type": "success"
	    }
	  }, [_vm._v("Success")])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-b390d078", module.exports)
	  }
	}

/***/ })

});