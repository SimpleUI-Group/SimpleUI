webpackJsonp([9],{

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(415)

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(417),
	  /* template */
	  __webpack_require__(418),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/yinhuang/github/SimpleUI/doc/src/component/grid.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] grid.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5e34d6f6", Component.options)
	  } else {
	    hotAPI.reload("data-v-5e34d6f6", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 415:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(416);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(16)("6c44f181", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../node_modules/.0.27.3@css-loader/index.js!../../../node_modules/.11.2.0@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5e34d6f6\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/.11.2.0@vue-loader/lib/selector.js?type=styles&index=0!./grid.vue", function() {
	     var newContent = require("!!../../../node_modules/.0.27.3@css-loader/index.js!../../../node_modules/.11.2.0@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5e34d6f6\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/.11.2.0@vue-loader/lib/selector.js?type=styles&index=0!./grid.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 416:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)(undefined);
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },

/***/ 417:
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

/***/ 418:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "box-contianer"
	  }, [_c('h1', [_vm._v("Grid")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('Docbox', {
	    attrs: {
	      "url": "../../demo/dist/index.html#/component/grid-1"
	    }
	  }, [_c('Dl', {
	    attrs: {
	      "type": "html"
	    }
	  }, [_vm._v("<Row>\n    <Col col=\"12\">\n        <Button type=\"primary\" pull edge>col 12</Button>\n    </Col>\n    <Col col=\"12\">\n        <Button type=\"success\" pull edge>col 12</Button>\n    </Col>\n</Row>\n<Row>\n    <Col col=\"6\">\n        <Button type=\"primary\" pull edge>col 6</Button>\n    </Col>\n    <Col col=\"8\">\n        <Button type=\"success\" pull edge>col 8</Button>\n    </Col>\n    <Col col=\"4\">\n        <Button type=\"primary\" pull edge>col 4</Button>\n    </Col>\n    <Col col=\"6\">\n        <Button type=\"success\" pull edge>col 6</Button>\n    </Col>\n</Row>\n        ")]), _vm._v(" "), _c('Dr')], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('Docbox', {
	    attrs: {
	      "url": "../../demo/dist/index.html#/component/grid-2"
	    }
	  }, [_c('Dl', {
	    attrs: {
	      "type": "html"
	    }
	  }, [_vm._v("<Row space=\"10\">\n    <Col col=\"12\">\n        <Button type=\"primary\" pull edge>col 12</Button>\n    </Col>\n    <Col col=\"12\">\n        <Button type=\"success\" pull edge>col 12</Button>\n    </Col>\n</Row>\n<Row space=\"20\">\n    <Col col=\"6\">\n        <Button type=\"primary\" pull edge>col 6</Button>\n    </Col>\n    <Col col=\"8\">\n        <Button type=\"success\" pull edge>col 8</Button>\n    </Col>\n    <Col col=\"4\">\n        <Button type=\"primary\" pull edge>col 4</Button>\n    </Col>\n    <Col col=\"6\">\n        <Button type=\"success\" pull edge>col 6</Button>\n    </Col>\n</Row>\n        ")]), _vm._v(" "), _c('Dr')], 1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('Docbox', {
	    attrs: {
	      "url": "../../demo/dist/index.html#/component/grid-3"
	    }
	  }, [_c('Dl', {
	    attrs: {
	      "type": "html"
	    }
	  }, [_vm._v("<Row>\n    <Col col=\"4\" left=\"2\">\n        <Button type=\"primary\" pull edge>2</Button>\n    </Col>\n</Row>\n<Row>\n    <Col col=\"4\" left=\"4\">\n        <Button type=\"primary\" pull edge>4</Button>\n    </Col>\n</Row>\n<Row>\n    <Col col=\"4\" left=\"6\">\n        <Button type=\"primary\" pull edge>6</Button>\n    </Col>\n</Row>\n<Row>\n    <Col col=\"4\" left=\"8\">\n        <Button type=\"primary\" pull edge>8</Button>\n    </Col>\n</Row>\n<Row>\n    <Col col=\"4\" left=\"12\">\n        <Button type=\"primary\" pull edge>12</Button>\n    </Col>\n</Row>\n<Row>\n    <Col col=\"4\" left=\"14\">\n        <Button type=\"primary\" pull edge>14</Button>\n    </Col>\n</Row>\n<Row>\n    <Col col=\"4\" left=\"16\">\n        <Button type=\"primary\" pull edge>16</Button>\n    </Col>\n</Row>\n<Row>\n    <Col col=\"4\" left=\"18\">\n        <Button type=\"primary\" pull edge>18</Button>\n    </Col>\n</Row>\n<Row>\n    <Col col=\"4\" left=\"20\">\n        <Button type=\"primary\" pull edge>20</Button>\n    </Col>\n</Row>")]), _vm._v(" "), _c('Dr', [_c('code', [_vm._v("left")]), _vm._v("取值为1-24\n        ")])], 1)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('p', [_vm._v("我们提供"), _c('code', [_vm._v("Row")]), _vm._v("和"), _c('code', [_vm._v("Col")]), _vm._v("2组标签配合使用，将栅格划分为24份")])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('p', [_vm._v("通过"), _c('code', [_vm._v("space")]), _vm._v("属性可以指定每组"), _c('code', [_vm._v("Col")]), _vm._v("之间的间隙")])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('p', [_vm._v("通过"), _c('code', [_vm._v("left")]), _vm._v("属性可以指定"), _c('code', [_vm._v("Col")]), _vm._v("的偏移量")])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5e34d6f6", module.exports)
	  }
	}

/***/ }

});