exports.ids = [1,33];
exports.modules = {

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShapeWithAnimation.vue?vue&type=template&id=cf9abc0e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"scene",class:_vm.addClassName},[_vm._ssrNode("<span"+(_vm._ssrAttr("data-depth",_vm.dataDepth))+" class=\"scene-layer\"><img"+(_vm._ssrAttr("src",_vm.imgSrc))+" alt=\"shape image\"></span>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue?vue&type=template&id=cf9abc0e&

// EXTERNAL MODULE: external "parallax-js"
var external_parallax_js_ = __webpack_require__(23);
var external_parallax_js_default = /*#__PURE__*/__webpack_require__.n(external_parallax_js_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShapeWithAnimation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var ShapeWithAnimationvue_type_script_lang_js_ = ({
  props: ['addClassName', 'imgSrc', 'dataDepth'],

  mounted() {
    var scene = document.querySelectorAll('.scene');

    if (scene) {
      scene.forEach((el, i) => {
        new external_parallax_js_default.a(el);
      });
    }

    ;
  }

});
// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ShapeWithAnimationvue_type_script_lang_js_ = (ShapeWithAnimationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShapeWithAnimationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "63d1d87c"
  
)

/* harmony default export */ var ShapeWithAnimation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutOne.vue?vue&type=template&id=78c41b42&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"about-area about-default-area"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-5 md-text-center\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"layer-style\">","</div>",[_vm._ssrNode("<div class=\"thumb tilt-animation\"><img src=\"/images/about/01.jpg\" alt=\"Images\"></div> <div class=\"shape-style1\"><img src=\"/images/shape/circle-line1.png\" alt=\"Images\"></div> "),_c('ShapeWithAnimation',{attrs:{"addClassName":"shape-style2","imgSrc":"/images/shape/circle-shape1.png","data-depth":".6"}}),_vm._ssrNode(" <div class=\"experience-time\"><div class=\"content\">4<sup>+</sup> <span>Años de experiencia</span></div></div>")],2)]),_vm._ssrNode(" <div class=\"col-lg-6 offset-lg-1\"><div class=\"about-content\"><div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"section-title xs-text-center\"><h2 class=\"title\">Experiencia en<span class=\"bottom-style\"> Proyectos</span> de Innovación Tecnologica.</h2> <div class=\"desc\"><p class=\"mt-20\">Innovamos y desarrollamos soluciones tecnológicas para la industria, minería, petroleo, transporte, gas y agricultura.<u class=\"text-theme-color2\"> Nuestras soluciones integran las mejores tecnologías que existen en la actualidad.</u> Como son Inteligencia Artificial, Machine Learning, Procesamiento de señales e imágenes, sistemas embebidos, sistemas operativos robóticos (ROS), Internet de las Cosas(IoT), Redes Industriales, etc.</p></div></div> <div data-aos=\"fade-up\" data-aos-duration=\"1200\" class=\"list-icon-style\"><ul><li><i class=\"icon icofont-clock-time\"></i> Ahorre Tiempo</li> <li><i class=\"icon icofont-money-bag\"></i> Reduce costos</li> <li><i class=\"icon icofont-chart-growth\"></i>Solución inmediata</li> <li><i class=\"icon icofont-live-support\"></i> Soporte 24/7</li> <li><i class=\"icon icofont-badge\"></i> Socio de confianza</li> <li><i class=\"icon icofont-unique-idea\"></i> Ideas innovadoras</li></ul></div></div></div>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AboutOne.vue?vue&type=template&id=78c41b42&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutOne.vue?vue&type=script&lang=js&
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
/* harmony default export */ var AboutOnevue_type_script_lang_js_ = ({
  components: {
    ShapeWithAnimation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 46))
  }
});
// CONCATENATED MODULE: ./components/AboutOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AboutOnevue_type_script_lang_js_ = (AboutOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AboutOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AboutOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2d187398"
  
)

/* harmony default export */ var AboutOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShapeWithAnimation: __webpack_require__(46).default})


/***/ })

};;
//# sourceMappingURL=about-one.js.map