webpackJsonp([17],{

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(475)

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(477),
	  /* template */
	  __webpack_require__(478),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\mk\\project\\SimpleUI\\demo\\src\\number.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] number.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7d52a765", Component.options)
	  } else {
	    hotAPI.reload("data-v-7d52a765", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(476);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(16)("0e6122c6", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/.0.27.3@css-loader/index.js!../../node_modules/.11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7d52a765\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/.11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./number.vue", function() {
	     var newContent = require("!!../../node_modules/.0.27.3@css-loader/index.js!../../node_modules/.11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7d52a765\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/.11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./number.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)(undefined);
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ }),

/***/ 477:
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

	exports.default = {
	    name: 'number',
	    data: function data() {
	        return {
	            num: 1,
	            num2: 1,
	            num3: 1,
	            num4: 1
	        };
	    },

	    methods: {
	        handleChange: function handleChange(value) {
	            console.log(value);
	        }
	    }
	};

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('PlusMinus', {
	    attrs: {
	      "step": 1,
	      "min": -10,
	      "max": 100
	    },
	    on: {
	      "change": _vm.handleChange
	    },
	    model: {
	      value: (_vm.num),
	      callback: function($$v) {
	        _vm.num = $$v
	      },
	      expression: "num"
	    }
	  }), _vm._v(" "), _c('PlusMinus', {
	    attrs: {
	      "disabled": true
	    },
	    model: {
	      value: (_vm.num2),
	      callback: function($$v) {
	        _vm.num2 = $$v
	      },
	      expression: "num2"
	    }
	  }), _vm._v(" "), _c('PlusMinus', {
	    attrs: {
	      "size": "large"
	    },
	    model: {
	      value: (_vm.num3),
	      callback: function($$v) {
	        _vm.num3 = $$v
	      },
	      expression: "num3"
	    }
	  }), _vm._v(" "), _c('PlusMinus', {
	    attrs: {
	      "size": "small"
	    },
	    model: {
	      value: (_vm.num4),
	      callback: function($$v) {
	        _vm.num4 = $$v
	      },
	      expression: "num4"
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7d52a765", module.exports)
	  }
	}

/***/ })

});