exports.ids = [31,30];
exports.modules = {

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItem.vue?vue&type=template&id=503d31bb&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon-box-item"},[_vm._ssrNode("<div class=\"icon-box\"><img"+(_vm._ssrAttr("src",_vm.service.icon))+" alt=\"Icon\" class=\"icon-img\"></div> "),_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<div class=\"separator-line\"><img src=\"/images/shape/line-s1.png\" alt=\"Image\"></div> <h4>"+_vm._ssrEscape(_vm._s(_vm.service.title))+"</h4> <p>"+_vm._ssrEscape(_vm._s(_vm.service.desc))+"</p> "),_c('n-link',{staticClass:"btn-link",attrs:{"to":"/contact"}},[_vm._v("Obtener más Información "),_c('i',{staticClass:"icon icofont-arrow-right"})])],2),_vm._ssrNode(" <div class=\"icon-shape\"><img src=\"/images/shape/s1.png\" alt=\"Icon\" class=\"shape-img1\"> <img src=\"/images/shape/s2.png\" alt=\"Icon\" class=\"shape-img2\"> <img src=\"/images/shape/s3.png\" alt=\"Icon\" class=\"shape-img3\"></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ServiceItem.vue?vue&type=template&id=503d31bb&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ServiceItemvue_type_script_lang_js_ = ({
  props: ['service']
});
// CONCATENATED MODULE: ./components/ServiceItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceItemvue_type_script_lang_js_ = (ServiceItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ServiceItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "10ff8ab9"
  
)

/* harmony default export */ var ServiceItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceOne.vue?vue&type=template&id=97ebe26e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"service-area service-default-area"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\"><div class=\"col-lg-8 col-xl-6 m-auto\"><div data-aos=\"fade-up\" data-aos-duration=\"1000\" class=\"section-title text-center\"><h2 class=\"title\">¿Qué hacemos?</h2> <div class=\"separator-line mt-14\"><img src=\"/images/shape/line-s2.png\" alt=\"Images\" class=\"me-1\"> <img src=\"/images/shape/line-s1.png\" alt=\"Images\"></div> <div class=\"desc\"><p class=\"mt-21\">Dedicamos el mayor de nuestros esfuerzos en desarrollar soluciones de Hardware y Software para nuestros clientes, haciendo uso de las herramientas tecnológicas más emergentes.</p></div></div></div></div> "),_vm._ssrNode("<div class=\"row icon-box-style1\">","</div>",_vm._l((_vm.services),function(service,index){return _vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"1100\" class=\"col-md-6 col-lg-4\">","</div>",[_c('ServiceItem',{attrs:{"service":service}})],1)}),0)],2),_vm._ssrNode(" <div class=\"layer-shape\"><img src=\"/images/shape/6.png\" alt=\"shape\" class=\"layer-shape-one\"> <img src=\"/images/shape/7.png\" alt=\"shape\" class=\"layer-shape-two\"></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ServiceOne.vue?vue&type=template&id=97ebe26e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ServiceOnevue_type_script_lang_js_ = ({
  data() {
    return {
      services: [{
        icon: "/images/icons/s1.png",
        title: "Desarrollo de software",
        desc: "Transformamos su negocio mediante la creación de aplicaciones digitales innovadoras haciendo uso de diferentes lenguajes de programación. Comience hoy mismo y permítanos ayudarlo a aprovechar el poder de las tecnologías emergentes."
      }, {
        icon: "/images/icons/s6.png",
        title: "Diseño y desarrollo de hardware IOT",
        desc: "Construimos sistemas integrados con nuestra experiencia y comprensión en diseño de hardware integrado, redes de sensores inalámbricos y diferentes protocolos de comunicación."
      }, {
        icon: "/images/icons/s3.png",
        title: "Fabricación digital y prototipado ágil",
        desc: "Te ayudamos en el desarrollo de prototipos de baja y media resolución con la ayuda de nuestros diseñadores y herramientas de impresión 3D de diferentes materiales de fabricación."
      }, {
        icon: "/images/icons/s4.png",
        title: "Consultoría en conceptualización de productos IOT",
        desc: "Con años de experiencia práctica en el trabajo con productos de hardware y software de IoT, somos conscientes de casi todo sobre IoT. Para mejorar nuestro conocimiento, brindamos servicios de consultoría para productos IoT La consulta proporcionada por nosotros puede ayudarlo a mejorar el diseño de su producto y construir dispositivos IoT."
      }, {
        icon: "/images/icons/s5.png",
        title: "Implementación en la nube y creación de dashboard personalizados ",
        desc: "IoT conecta y permite la comunicación entre cosas (hardware electrónico), personas y procesos donde la nube es vital en la colaboración de estos elementos para crear una alta visibilidad y conexión. Brindamos el despliegue de proyectos a nivel de la nube aprovechando las ventajas de esta tecnología."
      }, {
        icon: "/images/icons/s2.png",
        title: "Industria 4.0",
        desc: "La Industria 4.0 hace que todo en su cadena de suministro sea inteligente desde la fabricación y fábricas inteligentes hasta el almacenamiento y la logística inteligentes.Pero la Industria 4.0 no se detiene en la cadena de suministro. Se interconecta con sistemas de back-end, como la planificación de recursos empresariales (ERP), para brindar a las empresas un nivel de visibilidad y control sin precedentes."
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/ServiceOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceOnevue_type_script_lang_js_ = (ServiceOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ServiceOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1ceed4a0"
  
)

/* harmony default export */ var ServiceOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ServiceItem: __webpack_require__(40).default})


/***/ })

};;
//# sourceMappingURL=service-one.js.map