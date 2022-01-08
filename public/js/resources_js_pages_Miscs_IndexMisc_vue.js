(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Miscs_IndexMisc_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Miscs/IndexMisc.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Miscs/IndexMisc.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "page_variables": () => (/* binding */ page_variables),
/* harmony export */   "fields": () => (/* reexport safe */ _FormFields_miscs__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _FormFields_miscs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../FormFields/miscs */ "./resources/js/FormFields/miscs.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions */ "./resources/js/functions/index.js");
/* harmony import */ var _functions_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/validator */ "./resources/js/functions/validator.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var page_variables = {
  variable_name: "misc",
  variable_name_plural: "miscs",
  parent_url: "/miscs",
  add_url: "/add-misc/",
  edit_url: "/miscs/edit/",
  get_url: "/get-misc/",
  getter: "getMiscs",
  setter: "setVarMiscs"
};

var field_values = {
  misc_name: ""
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    var _this = this;

    if (this.$route.path.includes(page_variables.edit_url)) {
      this.edit = true;
      this.miscGetter();
    } else {
      this.edit = false;
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().post(page_variables.get_url).then(function (res) {
      _this.menuItems = res.data.result;
    });
  },
  data: function data() {
    return _objectSpread(_objectSpread({
      fields: _FormFields_miscs__WEBPACK_IMPORTED_MODULE_1__.default,
      page_variables: page_variables,
      successes: {},
      errors: {},
      that: this,
      submitting: false,
      edit: false
    }, field_values), {}, {
      menuItems: []
    });
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapState)(["auth", "miscs"])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)([page_variables.getter, page_variables.setter])), {}, {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_2__.isEmpty,
    cancel: function cancel() {
      this.$router.push(parent_url);
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_2__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_3__.validateAll)(_FormFields_miscs__WEBPACK_IMPORTED_MODULE_1__.default, this))) {
        var id = this.$route.params.id;
        var data = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.dataSetter)(field_values, this);
        this.submitting = true;
        var url = page_variables.add_url;

        if (this.edit) {
          url = page_variables.edit_url;
          data.edit = this.edit;
          data.id = id;
        }

        axios__WEBPACK_IMPORTED_MODULE_0___default().post(url, data).then(function (res) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_2__.toast)(res.data.status, res.data.message);

          if (res.data.status == "success") {
            (0,_functions__WEBPACK_IMPORTED_MODULE_2__.formClearer)(field_values, _this2);

            if (_this2.edit) {
              _this2.$router.push(page_variables.parent_url);
            }

            _this2[page_variables.getter]({
              filter: _this2[page_variables.variable_name_plural].filter,
              order: _this2[page_variables.variable_name_plural].order,
              page: _this2[page_variables.variable_name_plural].page,
              rowsPerPage: _this2[page_variables.variable_name_plural].rowsPerPage,
              type: _this2[page_variables.variable_name_plural].type
            });
          }
        })["catch"](function (err) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_2__.commonCatchBlock)(_this2, err);
        });
      }
    },
    miscGetter: function miscGetter() {
      var _this3 = this;

      var id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(page_variables.get_url, {
        id: id
      }).then(function (res) {
        if (res.data.status == "success") {
          (0,_functions__WEBPACK_IMPORTED_MODULE_2__.formSetter)(field_values, _FormFields_miscs__WEBPACK_IMPORTED_MODULE_1__.default, res.data.result, _this3);
        } else {
          (0,_functions__WEBPACK_IMPORTED_MODULE_2__.toast)(res.data.status, res.data.message);

          _this3.$router.push(page_variables.parent_url);
        }
      })["catch"](function (err) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_2__.commonCatchBlock)(_this3, err);
      });
    }
  }),
  components: {
    Submitting: function Submitting() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Submitting_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Submitting */ "./resources/js/components/Submitting.vue"));
    },
    CustomInput: function CustomInput() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomInput_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/CustomInput */ "./resources/js/components/CustomInput.vue"));
    },
    CustomButton: function CustomButton() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomButton_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/CustomButton */ "./resources/js/components/CustomButton.vue"));
    }
  },
  watch: {
    $route: function $route() {
      this.errors = {};
      this.successes = {};

      if (this.$route.path.includes(page_variables.edit_url)) {
        this.edit = true;
        var id = this.$route.params.id;
        var variable_name = page_variables.variable_name_plural;

        if (!(0,_functions__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(this[variable_name][variable_name])) {
          var res = this[variable_name][variable_name].filter(function (res) {
            return res.id == id;
          })[0];
          (0,_functions__WEBPACK_IMPORTED_MODULE_2__.formSetter)(field_values, _FormFields_miscs__WEBPACK_IMPORTED_MODULE_1__.default, res, this);
        } else this.miscGetter();
      } else {
        this.edit = false;
        (0,_functions__WEBPACK_IMPORTED_MODULE_2__.formClearer)(field_values, this);
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/Miscs/IndexMisc.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/Miscs/IndexMisc.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fields": () => (/* reexport safe */ _IndexMisc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.fields),
/* harmony export */   "page_variables": () => (/* reexport safe */ _IndexMisc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.page_variables),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexMisc_vue_vue_type_template_id_46dcf83d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexMisc.vue?vue&type=template&id=46dcf83d& */ "./resources/js/pages/Miscs/IndexMisc.vue?vue&type=template&id=46dcf83d&");
/* harmony import */ var _IndexMisc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexMisc.vue?vue&type=script&lang=js& */ "./resources/js/pages/Miscs/IndexMisc.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _IndexMisc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _IndexMisc_vue_vue_type_template_id_46dcf83d___WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexMisc_vue_vue_type_template_id_46dcf83d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Miscs/IndexMisc.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Miscs/IndexMisc.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Miscs/IndexMisc.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fields": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMisc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.fields),
/* harmony export */   "page_variables": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMisc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.page_variables)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMisc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexMisc.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Miscs/IndexMisc.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMisc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Miscs/IndexMisc.vue?vue&type=template&id=46dcf83d&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/Miscs/IndexMisc.vue?vue&type=template&id=46dcf83d& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMisc_vue_vue_type_template_id_46dcf83d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMisc_vue_vue_type_template_id_46dcf83d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMisc_vue_vue_type_template_id_46dcf83d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexMisc.vue?vue&type=template&id=46dcf83d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Miscs/IndexMisc.vue?vue&type=template&id=46dcf83d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Miscs/IndexMisc.vue?vue&type=template&id=46dcf83d&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Miscs/IndexMisc.vue?vue&type=template&id=46dcf83d& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "flex flex-wrap justify-end" },
      [
        _c(
          "router-link",
          {
            staticClass: "btn btn-success",
            attrs: { to: "/miscellaneous/add", tag: "button" }
          },
          [_vm._v("Add New")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        class: {
          "rounded p-4 transition-all duration-300": true,
          "bg-white": !_vm.edit,
          "bg-green-50": _vm.edit
        }
      },
      [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.onSubmit($event)
              }
            }
          },
          [
            _c(
              "div",
              { staticClass: "grid grid-cols-1" },
              [
                _c("CustomInput", {
                  attrs: {
                    inputData: {
                      field: _vm.fields.misc_name,
                      value: _vm.misc_name,
                      that: _vm.that,
                      menuItems: _vm.menuItems.map(function(res, key) {
                        return {
                          id: res[0],
                          text: res[1] + " - " + res[2] + " - " + res[3]
                        }
                      })
                    }
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn-primary", attrs: { type: "submit" } },
              [_vm._v("GO")]
            )
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);