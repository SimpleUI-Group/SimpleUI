webpackJsonp([8],{

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(24)

	var Component = __webpack_require__(19)(
	  /* script */
	  __webpack_require__(26),
	  /* template */
	  __webpack_require__(27),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\github\\group-SimpleUI\\doc\\src\\component\\index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-537c87b1", Component.options)
	  } else {
	    hotAPI.reload("data-v-537c87b1", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(17)("709042f6", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-537c87b1\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
	     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-537c87b1\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)(undefined);
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },

/***/ 26:
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

	exports.default = {
	    name: 'index',
	    mounted: function mounted() {
	        document.querySelectorAll('pre code').forEach(function (v, i, a) {
	            window.hljs.highlightBlock(v);
	        });
	    }
	};

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "box-contianer"
	  }, [_c('h1', [_vm._v("起步")]), _vm._v(" "), _c('h2', [_vm._v("下载")]), _vm._v(" "), _c('p', [_vm._v("github 地址："), _c('a', {
	    attrs: {
	      "href": "https://github.com/SimpleUI-Group/SimpleUI"
	    }
	  }, [_vm._v("https://github.com/SimpleUI-Group/SimpleUI")])]), _vm._v(" "), _c('h2', [_vm._v("打包")]), _vm._v(" "), _c('pre', [_c('code', {
	    staticClass: "shell"
	  }, [_vm._v("npm run build")])]), _vm._v(" "), _c('h2', [_vm._v("使用")]), _vm._v(" "), _c('pre', {
	    staticClass: "javascript"
	  }, [_c('code', [_vm._v("//引入vue\r\nimport Vue from \"vue\";\r\n//引入 SimpleUI\r\nimport SimpleUI form 'SimpleUI';\r\n//vue 挂载 SimpleUI\r\nVue.use(SimpleUI);")])]), _vm._v(" "), _c('p', [_vm._v("我们预设了在375px逻辑像素下"), _c('code', [_vm._v("1rem = 100px")]), _vm._v("你也可以手动设置")]), _vm._v(" "), _c('pre', [_c('code', {
	    staticClass: "javascript"
	  }, [_vm._v("SimpleUI.init({\r\n    rem:2, //1 为 1rem:50px 相当于在750 的ui稿上是1:1 的关系   2 为 1rem:100px 1:2的关系  默认 2\r\n    ui:750 //ui 稿宽度， 默认 750\r\n});")])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-537c87b1", module.exports)
	  }
	}

/***/ }

});