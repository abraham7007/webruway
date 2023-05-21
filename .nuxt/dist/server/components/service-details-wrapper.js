exports.ids = [29,28,38,40];
exports.modules = {

/***/ 31:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceCategoryWidget.vue?vue&type=template&id=1929bc5d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"widget",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[_vm._ssrNode("<h3 class=\"widget-title\">Categoría de Servicios</h3> <div class=\"separator-line\"><img src=\"/images/shape/line-s2.png\" alt=\"Image-HasTech\" class=\"me-1\"> <img src=\"/images/shape/line-s1.png\" alt=\"Image-HasTech\"></div> "),_vm._ssrNode("<div class=\"widget-category\">","</div>",_vm._l((_vm.categories),function(category,index){return _c('n-link',{key:index,attrs:{"to":"/service"}},[_c('i',{staticClass:"icofont-double-right"}),_vm._v(" \n            "+_vm._s(category)+"\n        ")])}),1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ServiceCategoryWidget.vue?vue&type=template&id=1929bc5d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceCategoryWidget.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ServiceCategoryWidgetvue_type_script_lang_js_ = ({
  data() {
    return {
      categories: ['Desarrollo de Hardware', 'Software Industrial', 'Automatización', 'Fabricación digital', 'Instrumentación & Control', 'Dibujo Mecánico', 'Diseño Electrónico', 'Desarrollo Web & Móvil', 'Calibración de Sensores', 'Internet de las Cosas']
    };
  }

});
// CONCATENATED MODULE: ./components/ServiceCategoryWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceCategoryWidgetvue_type_script_lang_js_ = (ServiceCategoryWidgetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ServiceCategoryWidget.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceCategoryWidgetvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f6ddf8f0"
  
)

/* harmony default export */ var ServiceCategoryWidget = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WidgetVideo.vue?vue&type=template&id=3156d9c8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"widget",attrs:{"data-aos":"fade-up","data-aos-duration":"1100"}},[_vm._ssrNode("<div class=\"widget-video\">","</div>",[_vm._ssrNode("<div class=\"thumb\"><img src=\"/images/photos/video.jpg\" alt=\"video image\"></div> "),_c('CoolLightBox',{attrs:{"items":_vm.items,"index":_vm.index},on:{"close":function($event){_vm.index = null}}}),_vm._ssrNode(" "+(_vm._ssrList((_vm.items),function(image,imageIndex){return ("<a href=\"javascript:void(0)\" class=\"btn-play play-video-popup\"><span class=\"icon\"><img src=\"/images/icons/play.png\" alt=\"video\"></span></a>")})))],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/WidgetVideo.vue?vue&type=template&id=3156d9c8&

// EXTERNAL MODULE: external "vue-cool-lightbox"
var external_vue_cool_lightbox_ = __webpack_require__(22);
var external_vue_cool_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_vue_cool_lightbox_);

// EXTERNAL MODULE: ./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css
var vue_cool_lightbox_min = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WidgetVideo.vue?vue&type=script&lang=js&
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


/* harmony default export */ var WidgetVideovue_type_script_lang_js_ = ({
  components: {
    CoolLightBox: external_vue_cool_lightbox_default.a
  },

  data() {
    return {
      items: [{
        src: "https://www.youtube.com/watch?v=Z2DK6QJX1rs",
        autoplay: true
      }],
      index: null
    };
  }

});
// CONCATENATED MODULE: ./components/WidgetVideo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WidgetVideovue_type_script_lang_js_ = (WidgetVideovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/WidgetVideo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WidgetVideovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "647a9c68"
  
)

/* harmony default export */ var WidgetVideo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WidgetSocial.vue?vue&type=template&id=39d93441&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"widget",attrs:{"data-aos":"fade-up","data-aos-duration":"1200"}},[_vm._ssrNode("<h3 class=\"widget-title\">Comparte ahora.</h3> <div class=\"separator-line\"><img src=\"/images/shape/line-s2.png\" alt=\"Image-HasTech\" class=\"me-1\"> <img src=\"/images/shape/line-s1.png\" alt=\"Image-HasTech\"></div> <div class=\"widget-social\">"+(_vm._ssrList((_vm.socialList),function(social,index){return ("<div class=\"social-item\"><a"+(_vm._ssrAttr("href",social.url))+"><div class=\"icon\"><i"+(_vm._ssrClass(null,social.iconName))+"></i></div> <span>"+_vm._ssrEscape(_vm._s(social.title))+"</span></a></div>")}))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/WidgetSocial.vue?vue&type=template&id=39d93441&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WidgetSocial.vue?vue&type=script&lang=js&
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
/* harmony default export */ var WidgetSocialvue_type_script_lang_js_ = ({
  data() {
    return {
      socialList: [{
        iconName: "icofont-facebook",
        title: "Facebook",
        url: "#"
      }, {
        iconName: "icofont-pinterest",
        title: "Pinterest",
        url: "#"
      }, {
        iconName: "icofont-instagram",
        title: "Instagram",
        url: "#"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/WidgetSocial.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WidgetSocialvue_type_script_lang_js_ = (WidgetSocialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/WidgetSocial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WidgetSocialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1eb41b50"
  
)

/* harmony default export */ var WidgetSocial = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceDetailsWrapper.vue?vue&type=template&id=3fd9340d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"service-details-area"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div class=\"service-details-column\">","</div>",[_vm._ssrNode("<div class=\"service-details-content\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"thumb\"><img src=\"/images/photos/servicio2.jpg\" alt=\"image\"></div> "),_c('n-link',{staticClass:"category",attrs:{"to":"/service"}},[_vm._v("Proyectos / Ingeniería")]),_vm._ssrNode(" <h2 class=\"title\">Soluciones para la Industria 4.0.</h2> <div class=\"separator-line\"><img src=\"/images/shape/line-s2.png\" alt=\"shape image\" class=\"me-1\"> <img src=\"/images/shape/line-s1.png\" alt=\"shape image\"></div> <p>La industria 4.0 busca maximizar la eficiencia y eficacia de las empresas mediante la correcta organización de todos los medios productivos. Con el logro de la optimización continuada y sostenible de los diferentes procesos,s posible aumentar la satisfacción de todas las partes implicadas en la organización.</p> <p class=\"mb-0\">Nuestro fin es conseguir que las empresas asienten su desarrollo y transformación digital en la innovación como factor de competitividad y crecimiento.</p> <blockquote data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"blockquote\"><p>No se trata de ideas, Se trata de hacer que las cosas sucedan.</p></blockquote> <h2 class=\"title\">Cómo trabajamos?</h2> <div class=\"separator-line\"><img src=\"/images/shape/line-s2.png\" alt=\"shape image\" class=\"me-1\"> <img src=\"/images/shape/line-s1.png\" alt=\"shape image\"></div> <p class=\"mb-0\">Empleamos metodologías ágiles con cada uno de nuestros proyectos. Un modelo de mejora continua en el que se planifica, se crea, se comprueba los resultados y se mejora, algo que es constante y rápido. Se divide en en los siguientes pasos:   .</p> <ul class=\"list-style2\"><li><span class=\"icon\"><i class=\"icofont-checked\"></i></span> <span>Discusión / Breve del problema.</span></li> <li><span class=\"icon\"><i class=\"icofont-checked\"></i></span> <span>Propuesta de Solución.</span></li> <li><span class=\"icon\"><i class=\"icofont-checked\"></i></span> <span>Desarrollo.</span></li> <li><span class=\"icon\"><i class=\"icofont-checked\"></i></span> <span>Pruebas.</span></li> <li><span class=\"icon\"><i class=\"icofont-checked\"></i></span> <span>Entrega.</span></li></ul> <p class=\"mb-34\"></p> <h2 class=\"title\">Find Solution.</h2> <div class=\"separator-line\"><img src=\"/images/shape/line-s2.png\" alt=\"shape image\" class=\"me-1\"> <img src=\"/images/shape/line-s1.png\" alt=\"shape image\"></div> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wass popularsed in the 1960s with the release of Letraset sheets containing passages, and more recently.</p> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book.</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sidebar-area\">","</div>",[_c('ServiceCategoryWidget'),_vm._ssrNode(" "),_c('WidgetVideo'),_vm._ssrNode(" "),_c('WidgetSocial')],2)],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ServiceDetailsWrapper.vue?vue&type=template&id=3fd9340d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceDetailsWrapper.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ServiceDetailsWrappervue_type_script_lang_js_ = ({
  components: {
    ServiceCategoryWidget: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 34)),
    WidgetVideo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 35)),
    WidgetSocial: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 36))
  }
});
// CONCATENATED MODULE: ./components/ServiceDetailsWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceDetailsWrappervue_type_script_lang_js_ = (ServiceDetailsWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ServiceDetailsWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceDetailsWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3a069317"
  
)

/* harmony default export */ var ServiceDetailsWrapper = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ServiceCategoryWidget: __webpack_require__(34).default,WidgetVideo: __webpack_require__(35).default,WidgetSocial: __webpack_require__(36).default})


/***/ })

};;
//# sourceMappingURL=service-details-wrapper.js.map