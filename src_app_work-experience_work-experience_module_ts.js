"use strict";
(self["webpackChunkPortfolio"] = self["webpackChunkPortfolio"] || []).push([["src_app_work-experience_work-experience_module_ts"],{

/***/ 89:
/*!****************************************************************************************!*\
  !*** ./src/app/work-experience/work-experience-item/work-experience-item.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkExperienceItemComponent": () => (/* binding */ WorkExperienceItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class WorkExperienceItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorkExperienceItemComponent.ɵfac = function WorkExperienceItemComponent_Factory(t) { return new (t || WorkExperienceItemComponent)(); };
WorkExperienceItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkExperienceItemComponent, selectors: [["app-work-experience-item"]], inputs: { experience: "experience" }, decls: 18, vars: 6, consts: [[1, "timeline-item"], [1, "timeline-item--date"], [1, "circle"], [1, "timeline-content"], [1, "timeline-content--company"], [1, "timeline-content--position"], [1, "timeline-content--experience"], [1, "timeline-content--description"]], template: function WorkExperienceItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experience.end);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.experience.company, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.experience.position, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.experience.experience, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.experience.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experience.start);
    } }, encapsulation: 2 });


/***/ }),

/***/ 3053:
/*!*******************************************************************!*\
  !*** ./src/app/work-experience/work-experience-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkExperienceRoutingModule": () => (/* binding */ WorkExperienceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _work_experience_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work-experience.component */ 5714);
/* harmony import */ var _workexperience_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workexperience.service */ 3674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _work_experience_component__WEBPACK_IMPORTED_MODULE_0__.WorkExperienceComponent,
        pathMatch: 'full',
        resolve: { experiences: _workexperience_service__WEBPACK_IMPORTED_MODULE_1__.WorkexperienceService }
    }
];
class WorkExperienceRoutingModule {
}
WorkExperienceRoutingModule.ɵfac = function WorkExperienceRoutingModule_Factory(t) { return new (t || WorkExperienceRoutingModule)(); };
WorkExperienceRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WorkExperienceRoutingModule });
WorkExperienceRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        _workexperience_service__WEBPACK_IMPORTED_MODULE_1__.WorkexperienceService
    ], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WorkExperienceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5714:
/*!**************************************************************!*\
  !*** ./src/app/work-experience/work-experience.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkExperienceComponent": () => (/* binding */ WorkExperienceComponent)
/* harmony export */ });
/* harmony import */ var _workexperience_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workexperience.service */ 3674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _work_experience_item_work_experience_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./work-experience-item/work-experience-item.component */ 89);






function WorkExperienceComponent_app_work_experience_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-work-experience-item", 5);
} if (rf & 2) {
    const experience_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("experience", experience_r1);
} }
class WorkExperienceComponent {
    constructor(workService, activatedRoute) {
        this.workService = workService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        // this.workService.getWorkExperience().then((result) => {
        //   this.experiences = result;
        // });
        window.scrollTo(0, 0);
        this.activatedRoute.data.subscribe((resolveData) => {
            this.experiences = resolveData.experiences;
        });
    }
}
WorkExperienceComponent.ɵfac = function WorkExperienceComponent_Factory(t) { return new (t || WorkExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_workexperience_service__WEBPACK_IMPORTED_MODULE_0__.WorkexperienceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
WorkExperienceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WorkExperienceComponent, selectors: [["app-work-experience"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_workexperience_service__WEBPACK_IMPORTED_MODULE_0__.WorkexperienceService])], decls: 7, vars: 1, consts: [[1, "margin-top-25vh"], [1, "page-header"], [1, "page-title"], [1, "timeline"], [3, "experience", 4, "ngFor", "ngForOf"], [3, "experience"]], template: function WorkExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Work Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, WorkExperienceComponent_app_work_experience_item_6_Template, 1, 1, "app-work-experience-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.experiences);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _work_experience_item_work_experience_item_component__WEBPACK_IMPORTED_MODULE_1__.WorkExperienceItemComponent], encapsulation: 2 });


/***/ }),

/***/ 1202:
/*!***********************************************************!*\
  !*** ./src/app/work-experience/work-experience.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkExperienceModule": () => (/* binding */ WorkExperienceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _work_experience_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work-experience-routing.module */ 3053);
/* harmony import */ var _work_experience_item_work_experience_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./work-experience-item/work-experience-item.component */ 89);
/* harmony import */ var _work_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work-experience.component */ 5714);
/* harmony import */ var _workexperience_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workexperience.service */ 3674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class WorkExperienceModule {
}
WorkExperienceModule.ɵfac = function WorkExperienceModule_Factory(t) { return new (t || WorkExperienceModule)(); };
WorkExperienceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: WorkExperienceModule });
WorkExperienceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _workexperience_service__WEBPACK_IMPORTED_MODULE_3__.WorkexperienceService
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _work_experience_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkExperienceRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](WorkExperienceModule, { declarations: [_work_experience_component__WEBPACK_IMPORTED_MODULE_2__.WorkExperienceComponent,
        _work_experience_item_work_experience_item_component__WEBPACK_IMPORTED_MODULE_1__.WorkExperienceItemComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _work_experience_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkExperienceRoutingModule] }); })();


/***/ }),

/***/ 3674:
/*!***********************************************************!*\
  !*** ./src/app/work-experience/workexperience.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkexperienceService": () => (/* binding */ WorkexperienceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class WorkexperienceService {
    constructor(http) {
        this.http = http;
    }
    resolve(route, state) {
        return this.getWorkExperience();
    }
    getWorkExperience() {
        return this.http.get('assets/data/workexperience.json').toPromise();
    }
}
WorkexperienceService.ɵfac = function WorkexperienceService_Factory(t) { return new (t || WorkexperienceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
WorkexperienceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WorkexperienceService, factory: WorkexperienceService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_work-experience_work-experience_module_ts.js.map