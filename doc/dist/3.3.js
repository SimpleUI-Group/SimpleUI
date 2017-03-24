webpackJsonp([3],{

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
	Component.options.__file = "/Users/yinhuang/github/SimpleUI/doc/src/grid.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] grid.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-dba7cc1a", Component.options)
	  } else {
	    hotAPI.reload("data-v-dba7cc1a", Component.options)
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
	var update = __webpack_require__(16)("9755c062", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/.0.27.3@css-loader/index.js!../../node_modules/.11.2.0@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-dba7cc1a\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/.11.2.0@vue-loader/lib/selector.js?type=styles&index=0!./grid.vue", function() {
	     var newContent = require("!!../../node_modules/.0.27.3@css-loader/index.js!../../node_modules/.11.2.0@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-dba7cc1a\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/.11.2.0@vue-loader/lib/selector.js?type=styles&index=0!./grid.vue");
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
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

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
	    name: 'grid'
	};

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('Row', [_c('Col', {
	    attrs: {
	      "col": "6"
	    }
	  }, [_c('Button', {
	    attrs: {
	      "type": "success",
	      "pull": "",
	      "edge": ""
	    }
	  }, [_vm._v("col-6")])], 1), _vm._v(" "), _c('Col', {
	    attrs: {
	      "col": "12"
	    }
	  }, [_c('Button', {
	    attrs: {
	      "type": "danger",
	      "pull": "",
	      "edge": ""
	    }
	  }, [_vm._v("col-12")])], 1), _vm._v(" "), _c('Col', {
	    attrs: {
	      "col": "6"
	    }
	  }, [_c('Button', {
	    attrs: {
	      "type": "warning",
	      "pull": "",
	      "edge": ""
	    }
	  }, [_vm._v("col-6")])], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
	    attrs: {
	      "col": "24"
	    }
	  }, [_c('Button', {
	    attrs: {
	      "type": "warning"
	    }
	  }, [_vm._v("col-24")])], 1)], 1), _vm._v(" "), _c('Row', {
	    attrs: {
	      "space": "10"
	    }
	  }, [_c('Col', {
	    attrs: {
	      "col": "6"
	    }
	  }, [_c('Button', {
	    attrs: {
	      "type": "danger",
	      "pull": ""
	    }
	  }, [_vm._v("col-6")])], 1), _vm._v(" "), _c('Col', {
	    attrs: {
	      "col": "12"
	    }
	  }, [_c('Button', {
	    attrs: {
	      "type": "primary",
	      "pull": ""
	    }
	  }, [_vm._v("col-12 (10px space)")])], 1), _vm._v(" "), _c('Col', {
	    attrs: {
	      "col": "6"
	    }
	  }, [_c('Button', {
	    attrs: {
	      "type": "success",
	      "pull": ""
	    }
	  }, [_vm._v("col-6")])], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
	    attrs: {
	      "col": "4",
	      "left": "2"
	    }
	  }, [_c('Button', {
	    attrs: {
	      "type": "success"
	    }
	  }, [_vm._v("left 2")])], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
	    attrs: {
	      "col": "4",
	      "left": "4"
	    }
	  }, [_c('Button', {
	    attrs: {
	      "type": "success"
	    }
	  }, [_vm._v("left 4")])], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
	    attrs: {
	      "col": "4",
	      "left": "8"
	    }
	  }, [_c('Button', {
	    attrs: {
	      "type": "success"
	    }
	  }, [_vm._v("left 8")])], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
	    attrs: {
	      "col": "12",
	      "left": "12"
	    }
	  }, [_c('Button', {
	    attrs: {
	      "type": "success"
	    }
	  }, [_vm._v("col-12 (left 12)")])], 1)], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-dba7cc1a", module.exports)
	  }
	}

/***/ }

});