webpackJsonp([11],{

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(55),
	  /* template */
	  __webpack_require__(56),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\mk\\project\\SimpleUI\\demo\\src\\component\\grid-1.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] grid-1.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-00c79a58", Component.options)
	  } else {
	    hotAPI.reload("data-v-00c79a58", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 55:
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
	    name: "grid-1"
	};

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "box-contianer"
	  }, [_c('Row', [_c('Col', {
	    attrs: {
	      "col": "12"
	    }
	  }, [_c('Button', {
	    attrs: {
	      "type": "primary",
	      "pull": "",
	      "edge": ""
	    }
	  }, [_vm._v("col 12")])], 1), _vm._v(" "), _c('Col', {
	    attrs: {
	      "col": "12"
	    }
	  }, [_c('Button', {
	    attrs: {
	      "type": "success",
	      "pull": "",
	      "edge": ""
	    }
	  }, [_vm._v("col 12")])], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
	    attrs: {
	      "col": "6"
	    }
	  }, [_c('Button', {
	    attrs: {
	      "type": "primary",
	      "pull": "",
	      "edge": ""
	    }
	  }, [_vm._v("col 6")])], 1), _vm._v(" "), _c('Col', {
	    attrs: {
	      "col": "8"
	    }
	  }, [_c('Button', {
	    attrs: {
	      "type": "success",
	      "pull": "",
	      "edge": ""
	    }
	  }, [_vm._v("col 8")])], 1), _vm._v(" "), _c('Col', {
	    attrs: {
	      "col": "4"
	    }
	  }, [_c('Button', {
	    attrs: {
	      "type": "primary",
	      "pull": "",
	      "edge": ""
	    }
	  }, [_vm._v("col 4")])], 1), _vm._v(" "), _c('Col', {
	    attrs: {
	      "col": "6"
	    }
	  }, [_c('Button', {
	    attrs: {
	      "type": "success",
	      "pull": "",
	      "edge": ""
	    }
	  }, [_vm._v("col 6")])], 1)], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-00c79a58", module.exports)
	  }
	}

/***/ })

});