exports.ids = [26];
exports.modules = {

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PortfolioWrapper.vue?vue&type=template&id=816be7f8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"portfolio-area"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\"><div class=\"col-lg-12\"><div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"section-title text-center\"><div class=\"portfolio-filter-menu mb-0\"><button data-filter=\"all\">Todos los proyectos</button> <button data-filter=\".automatizacion\">Automatización</button> <button data-filter=\".iot\">Internet de las Cosas</button> <button data-filter=\".biomedica\">Biomédica</button> <button data-filter=\".fablab\">Fabricación Digital</button></div></div></div></div> "),_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"row portfolio-grid gutter-50 box\">","</div>",_vm._l((_vm.portfolios),function(portfolio,index){return _vm._ssrNode("<div"+(_vm._ssrClass("col-md-6 portfolio-item mix",portfolio.category))+">","</div>",[_vm._ssrNode("<div class=\"inner-content\">","</div>",[_vm._ssrNode("<div class=\"thumb\">","</div>",[_c('n-link',{attrs:{"to":"/project"}},[_c('img',{attrs:{"src":portfolio.imgSrc,"alt":portfolio.title}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"portfolio-info\">","</div>",[_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<img src=\"/images/shape/line-s1.png\" alt=\"shape image\" class=\"shape-line-img\"> "),_vm._ssrNode("<h3 class=\"title\">","</h3>",[_c('n-link',{attrs:{"to":"/project"}},[_vm._v(_vm._s(portfolio.title))])],1),_vm._ssrNode(" "),_c('n-link',{staticClass:"category",attrs:{"to":"/project"}},[_vm._v(_vm._s(portfolio.category))])],2),_vm._ssrNode(" "),_c('n-link',{staticClass:"btn-icon",attrs:{"to":"/project"}},[_c('i',{staticClass:"icofont-long-arrow-right"})])],2)],2)])}),0),_vm._ssrNode(" <div data-aos=\"fade-up\" data-aos-duration=\"1300\" class=\"portfolio-footer text-center\"></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PortfolioWrapper.vue?vue&type=template&id=816be7f8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PortfolioWrapper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PortfolioWrappervue_type_script_lang_js_ = ({
  data() {
    return {
      mixer: null,
      portfolios: [{
        imgSrc: "/images/portfolio/track.jpg",
        title: "Sistema IoT para tracking de camiones mineros",
        category: "automatizacion"
      }, {
        imgSrc: "/images/portfolio/vpn.jpg",
        title: "Implementación de Redes Privadas para Aplicaciones en Procesos Industriales.",
        category: "iot"
      }, {
        imgSrc: "/images/portfolio/laser.jpg",
        title: "Dispositivo Laser Para Proyección de mallas de perforación",
        category: "automatizacion"
      }, {
        imgSrc: "/images/portfolio/spo2.jpg",
        title: "Sistema Biométrico para lectura de Temperatura y SpO2",
        category: "biomedica"
      }, {
        imgSrc: "/images/portfolio/lora.jpg",
        title: "Dispositivos de Radiofrecuencia con LoRa",
        category: "iot"
      }, {
        imgSrc: "/images/portfolio/caballo.jpg",
        title: "Máquina de Anestesia para Caballo",
        category: "biomedica"
      }]
    };
  },

  mounted() {
    this.$nextTick(() => {
      const containerEl = document.querySelector('.box');
      this.mixer = new this.mixitup(containerEl);
    });
  }

});
// CONCATENATED MODULE: ./components/PortfolioWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PortfolioWrappervue_type_script_lang_js_ = (PortfolioWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PortfolioWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PortfolioWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "40f8ce2a"
  
)

/* harmony default export */ var PortfolioWrapper = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=portfolio-wrapper.js.map