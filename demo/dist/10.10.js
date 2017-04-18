webpackJsonp([10],{

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(52),
	  /* template */
	  __webpack_require__(53),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\mk\\project\\SimpleUI\\demo\\src\\component\\icon-3.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] icon-3.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-8c8cef66", Component.options)
	  } else {
	    hotAPI.reload("data-v-8c8cef66", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 52:
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

	exports.default = {
	    name: "icon-3"
	};

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "box-contianer"
	  }, [_c('Icon', {
	    attrs: {
	      "type": "search",
	      "size": "22",
	      "color": "#f00"
	    }
	  }), _vm._v(" "), _c('Icon', {
	    attrs: {
	      "type": "search",
	      "size": "22",
	      "color": "#f0f"
	    }
	  }), _vm._v(" "), _c('Icon', {
	    attrs: {
	      "type": "search",
	      "size": "22",
	      "color": "#00f"
	    }
	  }), _vm._v(" "), _c('Icon', {
	    attrs: {
	      "type": "search",
	      "size": "22",
	      "color": "#0f0"
	    }
	  }), _vm._v(" "), _c('Icon', {
	    attrs: {
	      "type": "search",
	      "size": "22",
	      "color": "#0ff"
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-8c8cef66", module.exports)
	  }
	}

/***/ })

});