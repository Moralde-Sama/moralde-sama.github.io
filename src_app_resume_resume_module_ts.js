"use strict";
(self["webpackChunkPortfolio"] = self["webpackChunkPortfolio"] || []).push([["src_app_resume_resume_module_ts"],{

/***/ 9684:
/*!*************************************************!*\
  !*** ./src/app/resume/resume-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeRoutingModule": () => (/* binding */ ResumeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _resume_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resume.component */ 8952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _resume_component__WEBPACK_IMPORTED_MODULE_0__.ResumeComponent,
        pathMatch: 'full'
    }
];
class ResumeRoutingModule {
}
ResumeRoutingModule.ɵfac = function ResumeRoutingModule_Factory(t) { return new (t || ResumeRoutingModule)(); };
ResumeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ResumeRoutingModule });
ResumeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ResumeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8952:
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeComponent": () => (/* binding */ ResumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ResumeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 12, vars: 0, consts: [[1, "margin-top-25vh"], [1, "page-header"], [1, "page-title"], [1, "resume-btns"], ["href", "https://docs.google.com/document/d/1H2Fq5Pf_OQXDCoDAQVvW2q9jctRJ6MqfreCQuI6e6Pk/edit?usp=sharing", "aria-label", "CV Doc", "target", "_blank", "rel", "noopener", 1, "btn", "project", "animate"], ["href", "https://docs.google.com/document/u/2/export?format=pdf&id=1H2Fq5Pf_OQXDCoDAQVvW2q9jctRJ6MqfreCQuI6e6Pk&token=AC4w5Vjot1tIumdTBdC-0pievlCkIR59zQ%3A1564031597908&ouid=113806183694211663038&includes_info_params=true", "aria-label", "Download PDF", 1, "btn", "project", "animate"], ["href", "https://docs.google.com/document/u/2/export?format=docx&id=1H2Fq5Pf_OQXDCoDAQVvW2q9jctRJ6MqfreCQuI6e6Pk&token=AC4w5Vjot1tIumdTBdC-0pievlCkIR59zQ%3A1564031597908&ouid=113806183694211663038&includes_info_params=true", "aria-label", "Download Doc", 1, "btn", "project", "animate"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Resume ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " View Resume (Google Docs) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Download (PDF) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Download (MS Word) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, encapsulation: 2 });


/***/ }),

/***/ 1791:
/*!*****************************************!*\
  !*** ./src/app/resume/resume.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeModule": () => (/* binding */ ResumeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _resume_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resume-routing.module */ 9684);
/* harmony import */ var _resume_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resume.component */ 8952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class ResumeModule {
}
ResumeModule.ɵfac = function ResumeModule_Factory(t) { return new (t || ResumeModule)(); };
ResumeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ResumeModule });
ResumeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _resume_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResumeRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ResumeModule, { declarations: [_resume_component__WEBPACK_IMPORTED_MODULE_1__.ResumeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _resume_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResumeRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_resume_resume_module_ts.js.map