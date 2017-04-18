webpackJsonp([15],{

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(23)

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(25),
	  /* template */
	  __webpack_require__(26),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\mk\\project\\SimpleUI\\demo\\src\\index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-37b26be6", Component.options)
	  } else {
	    hotAPI.reload("data-v-37b26be6", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(16)("5fafbdca", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/.0.27.3@css-loader/index.js!../../node_modules/.11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-37b26be6\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/.11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
	     var newContent = require("!!../../node_modules/.0.27.3@css-loader/index.js!../../node_modules/.11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-37b26be6\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/.11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)(undefined);
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ }),

/***/ 25:
/***/ (function(module, exports) {

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

	exports.default = {
	    name: 'index'
	};

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('Button', [_vm._v("Default")]), _vm._v(" "), _c('Button', {
	    attrs: {
	      "type": "primary"
	    }
	  }, [_vm._v("Primary")]), _vm._v(" "), _c('Button', {
	    attrs: {
	      "type": "danger"
	    }
	  }, [_vm._v("Danger")]), _vm._v(" "), _c('Button', {
	    attrs: {
	      "type": "success"
	    }
	  }, [_vm._v("Success")]), _vm._v(" "), _c('Button', {
	    attrs: {
	      "type": "warning"
	    }
	  }, [_vm._v("Warning")]), _vm._v(" "), _c('Button', {
	    attrs: {
	      "type": "primary",
	      "pull": "",
	      "edge": ""
	    }
	  }, [_vm._v("Pull+Edge")]), _vm._v(" "), _c('Button', {
	    attrs: {
	      "type": "primary",
	      "edge": ""
	    }
	  }, [_vm._v("Edge")]), _vm._v(" "), _c('Icon', {
	    attrs: {
	      "type": "check",
	      "color": "#00f",
	      "size": "24"
	    }
	  }), _vm._v(" "), _c('Button', {
	    attrs: {
	      "type": "success",
	      "icon": "loading"
	    }
	  }, [_vm._v("icon")]), _vm._v(" "), _c('Button', {
	    attrs: {
	      "type": "warning",
	      "icon": "check"
	    }
	  }, [_vm._v("icon")]), _vm._v(" "), _c('Button', {
	    attrs: {
	      "type": "danger",
	      "icon": "search"
	    }
	  }, [_vm._v("icon")])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-37b26be6", module.exports)
	  }
	}

/***/ })

});