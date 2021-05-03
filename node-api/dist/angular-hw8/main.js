(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Yueting/newhw8/angular-hw8/src/main.ts */"zUnb");


/***/ }),

/***/ "4cG8":
/*!*********************************************************************!*\
  !*** ./src/app/components/movie-details/movie-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-service.service */ "O+Oc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _localstorageservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../localstorageservice.service */ "TGut");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");











const _c0 = ["selfClosingAlert"];
function MovieDetailsComponent_h1_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.MdetailsTitle);
} }
function MovieDetailsComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.MdetailsTagline);
} }
function MovieDetailsComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r2.MdetailsReleaseDate, " | ");
} }
function MovieDetailsComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u2605 ", ctx_r3.MdetailsVoteAvg, " | ");
} }
function MovieDetailsComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4.MdetailsRuntimeHour, "hrs ");
} }
function MovieDetailsComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r5.MdetailsRuntimeMin, " mins");
} }
function MovieDetailsComponent_div_27_span_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MovieDetailsComponent_div_27_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MovieDetailsComponent_div_27_span_2_span_1_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const geners_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r21 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](geners_r20);
} }
function MovieDetailsComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Geners : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MovieDetailsComponent_div_27_span_2_Template, 4, 2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.MdetailsGenres);
} }
function MovieDetailsComponent_div_28_span_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MovieDetailsComponent_div_28_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MovieDetailsComponent_div_28_span_2_span_1_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r24 = ctx.$implicit;
    const j_r25 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", j_r25 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](lang_r24);
} }
function MovieDetailsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Spoken Languages : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MovieDetailsComponent_div_28_span_2_Template, 4, 2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.MdetailsSpokenLanguage);
} }
function MovieDetailsComponent_ngb_alert_31_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function MovieDetailsComponent_ngb_alert_31_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r28.isclose = true; return ctx_r28.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.successMessage, " ");
} }
function MovieDetailsComponent_ng_template_32_ngb_alert_0_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 50, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function MovieDetailsComponent_ng_template_32_ngb_alert_0_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); ctx_r32.isclose = true; return ctx_r32.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r30.successMessage, " ");
} }
function MovieDetailsComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MovieDetailsComponent_ng_template_32_ngb_alert_0_Template, 3, 1, "ngb-alert", 49);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.isRemoved && !ctx_r10.isclose);
} }
function MovieDetailsComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Destription");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r11.MdetailsOverview);
} }
function MovieDetailsComponent_div_50_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MovieDetailsComponent_div_50_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38); const i_r36 = ctx.index; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); ctx_r37.clickCast(ctx_r37.MCastId[i_r36]); return ctx_r37.clickPersonExId(ctx_r37.MCastId[i_r36]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MovieDetailsComponent_div_50_div_6_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](52); return ctx_r39.openModal(_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profile_r35 = ctx.$implicit;
    const i_r36 = ctx.index;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", profile_r35, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r34.MCastName[i_r36]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r34.MCastChar[i_r36]);
} }
function MovieDetailsComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MovieDetailsComponent_div_50_div_6_Template, 9, 3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r12.MCastProfile);
} }
function MovieDetailsComponent_ng_template_51_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r41.CastName, " ");
} }
function MovieDetailsComponent_ng_template_51_div_5_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Birth: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r45.CastBirthday);
} }
function MovieDetailsComponent_ng_template_51_div_5_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Birth Place: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r46.CastBirthPlc);
} }
function MovieDetailsComponent_ng_template_51_div_5_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Gender: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r47.CastGender);
} }
function MovieDetailsComponent_ng_template_51_div_5_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " HomePage: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r48.CastHomepage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r48.CastHomepage, " ");
} }
function MovieDetailsComponent_ng_template_51_div_5_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Known for: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r49.CastKFD);
} }
function MovieDetailsComponent_ng_template_51_div_5_div_12_span_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MovieDetailsComponent_ng_template_51_div_5_div_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MovieDetailsComponent_ng_template_51_div_5_div_12_span_2_span_1_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const aka_r57 = ctx.$implicit;
    const i_r58 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r58 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", aka_r57, " ");
} }
function MovieDetailsComponent_ng_template_51_div_5_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Also Known as: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MovieDetailsComponent_ng_template_51_div_5_div_12_span_2_Template, 3, 2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r50.CastAKA);
} }
function MovieDetailsComponent_ng_template_51_div_5_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r51.imdb_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function MovieDetailsComponent_ng_template_51_div_5_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r52.facebook_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function MovieDetailsComponent_ng_template_51_div_5_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r53.instagram_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function MovieDetailsComponent_ng_template_51_div_5_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r54.twitter_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function MovieDetailsComponent_ng_template_51_div_5_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r55.CastBiography, " ");
} }
function MovieDetailsComponent_ng_template_51_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MovieDetailsComponent_ng_template_51_div_5_div_7_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MovieDetailsComponent_ng_template_51_div_5_div_8_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MovieDetailsComponent_ng_template_51_div_5_div_9_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MovieDetailsComponent_ng_template_51_div_5_div_10_Template, 4, 2, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MovieDetailsComponent_ng_template_51_div_5_div_11_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, MovieDetailsComponent_ng_template_51_div_5_div_12_Template, 3, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MovieDetailsComponent_ng_template_51_div_5_span_14_Template, 3, 1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, MovieDetailsComponent_ng_template_51_div_5_span_15_Template, 3, 1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, MovieDetailsComponent_ng_template_51_div_5_span_16_Template, 4, 1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, MovieDetailsComponent_ng_template_51_div_5_span_17_Template, 3, 1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, MovieDetailsComponent_ng_template_51_div_5_div_19_Template, 5, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r42.CastProfile_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.CastBirthday == null ? null : ctx_r42.CastBirthday.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.CastBirthPlc == null ? null : ctx_r42.CastBirthPlc.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.CastGender == null ? null : ctx_r42.CastGender.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.CastHomepage == null ? null : ctx_r42.CastHomepage.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.CastKFD == null ? null : ctx_r42.CastKFD.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.CastAKA == null ? null : ctx_r42.CastAKA.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.imdb_id == null ? null : ctx_r42.imdb_id.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.facebook_id == null ? null : ctx_r42.facebook_id.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.instagram_id == null ? null : ctx_r42.instagram_id.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.twitter_id == null ? null : ctx_r42.twitter_id.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.CastBiography == null ? null : ctx_r42.CastBiography.length) > 0);
} }
function MovieDetailsComponent_ng_template_51_ng_template_6_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Birth: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r60.CastBirthday);
} }
function MovieDetailsComponent_ng_template_51_ng_template_6_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Birth Place: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r61.CastBirthPlc);
} }
function MovieDetailsComponent_ng_template_51_ng_template_6_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Gender: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r62.CastGender);
} }
function MovieDetailsComponent_ng_template_51_ng_template_6_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " HomePage: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r63.CastHomepage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r63.CastHomepage, " ");
} }
function MovieDetailsComponent_ng_template_51_ng_template_6_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Known for: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r64.CastKFD);
} }
function MovieDetailsComponent_ng_template_51_ng_template_6_div_12_span_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MovieDetailsComponent_ng_template_51_ng_template_6_div_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MovieDetailsComponent_ng_template_51_ng_template_6_div_12_span_2_span_1_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const aka_r72 = ctx.$implicit;
    const i_r73 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r73 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", aka_r72, " ");
} }
function MovieDetailsComponent_ng_template_51_ng_template_6_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Also Known as: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MovieDetailsComponent_ng_template_51_ng_template_6_div_12_span_2_Template, 3, 2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r65.CastAKA);
} }
function MovieDetailsComponent_ng_template_51_ng_template_6_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r66.imdb_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function MovieDetailsComponent_ng_template_51_ng_template_6_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r67.facebook_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function MovieDetailsComponent_ng_template_51_ng_template_6_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r68.instagram_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function MovieDetailsComponent_ng_template_51_ng_template_6_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r69.twitter_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function MovieDetailsComponent_ng_template_51_ng_template_6_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r70.CastBiography, " ");
} }
function MovieDetailsComponent_ng_template_51_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MovieDetailsComponent_ng_template_51_ng_template_6_div_7_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MovieDetailsComponent_ng_template_51_ng_template_6_div_8_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MovieDetailsComponent_ng_template_51_ng_template_6_div_9_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MovieDetailsComponent_ng_template_51_ng_template_6_div_10_Template, 4, 2, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MovieDetailsComponent_ng_template_51_ng_template_6_div_11_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, MovieDetailsComponent_ng_template_51_ng_template_6_div_12_Template, 3, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MovieDetailsComponent_ng_template_51_ng_template_6_span_14_Template, 3, 1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, MovieDetailsComponent_ng_template_51_ng_template_6_span_15_Template, 3, 1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, MovieDetailsComponent_ng_template_51_ng_template_6_span_16_Template, 4, 1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, MovieDetailsComponent_ng_template_51_ng_template_6_span_17_Template, 3, 1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, MovieDetailsComponent_ng_template_51_ng_template_6_div_19_Template, 5, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r44.CastProfile_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r44.CastBirthday == null ? null : ctx_r44.CastBirthday.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r44.CastBirthPlc == null ? null : ctx_r44.CastBirthPlc.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r44.CastGender == null ? null : ctx_r44.CastGender.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r44.CastHomepage == null ? null : ctx_r44.CastHomepage.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r44.CastKFD == null ? null : ctx_r44.CastKFD.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r44.CastAKA == null ? null : ctx_r44.CastAKA.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r44.imdb_id == null ? null : ctx_r44.imdb_id.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r44.facebook_id == null ? null : ctx_r44.facebook_id.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r44.instagram_id == null ? null : ctx_r44.instagram_id.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r44.twitter_id == null ? null : ctx_r44.twitter_id.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r44.CastBiography == null ? null : ctx_r44.CastBiography.length) > 0);
} }
function MovieDetailsComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MovieDetailsComponent_ng_template_51_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MovieDetailsComponent_ng_template_51_Template_button_click_2_listener() { const modal_r40 = ctx.$implicit; return modal_r40.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MovieDetailsComponent_ng_template_51_div_5_Template, 20, 12, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MovieDetailsComponent_ng_template_51_ng_template_6_Template, 20, 12, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r14.CastName == null ? null : ctx_r14.CastName.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r14.isSmallScreen)("ngIfElse", _r43);
} }
function MovieDetailsComponent_div_54_div_8_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const author_r77 = ctx_r83.$implicit;
    const i_r78 = ctx_r83.index;
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("A review created by ", author_r77, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u2605 ", ctx_r79.reviewRating[i_r78], " ");
} }
function MovieDetailsComponent_div_54_div_8_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const author_r77 = ctx_r84.$implicit;
    const i_r78 = ctx_r84.index;
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Written by ", author_r77, " on ", ctx_r80.reviewCreated[i_r78], "");
} }
function MovieDetailsComponent_div_54_div_8_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r81.reviewContent[i_r78]);
} }
function MovieDetailsComponent_div_54_div_8_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r82.reviewURL[i_r78], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function MovieDetailsComponent_div_54_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MovieDetailsComponent_div_54_div_8_div_7_Template, 4, 2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MovieDetailsComponent_div_54_div_8_p_8_Template, 3, 2, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MovieDetailsComponent_div_54_div_8_p_9_Template, 2, 1, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MovieDetailsComponent_div_54_div_8_a_10_Template, 2, 1, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const author_r77 = ctx.$implicit;
    const i_r78 = ctx.index;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r76.reviewAvaPath[i_r78], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (author_r77 == null ? null : author_r77.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r76.reviewCreated[i_r78] == null ? null : ctx_r76.reviewCreated[i_r78].length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r76.reviewContent[i_r78] == null ? null : ctx_r76.reviewContent[i_r78].length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r76.reviewURL[i_r78] == null ? null : ctx_r76.reviewURL[i_r78].length) > 0);
} }
function MovieDetailsComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MovieDetailsComponent_div_54_div_8_Template, 12, 5, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r15.reviewLen);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r15.reviewAuthor);
} }
function MovieDetailsComponent_div_56_div_1_9_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r94 = ctx.$implicit;
    const j_r95 = ctx.index;
    const i_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r93.movieRecIdMatrix[i_r91][j_r95], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r94, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r93.movieRecTitleMatrix[i_r91][j_r95]);
} }
function MovieDetailsComponent_div_56_div_1_9_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MovieDetailsComponent_div_56_div_1_9_ng_template_0_div_1_Template, 7, 3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imgArray_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", imgArray_r90);
} }
function MovieDetailsComponent_div_56_div_1_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MovieDetailsComponent_div_56_div_1_9_ng_template_0_Template, 2, 1, "ng-template", 117);
} }
function MovieDetailsComponent_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Recommended Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ngb-carousel", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MovieDetailsComponent_div_56_div_1_9_Template, 1, 0, undefined, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r87.movieRecPosterMatrix);
} }
function MovieDetailsComponent_div_56_div_3_9_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r103 = ctx.$implicit;
    const j_r104 = ctx.index;
    const i_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r102.SimIdMatrix[i_r100][j_r104], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r103, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r102.SimTitleMatrix[i_r100][j_r104]);
} }
function MovieDetailsComponent_div_56_div_3_9_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MovieDetailsComponent_div_56_div_3_9_ng_template_0_div_1_Template, 7, 3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imgArray_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", imgArray_r99);
} }
function MovieDetailsComponent_div_56_div_3_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MovieDetailsComponent_div_56_div_3_9_ng_template_0_Template, 2, 1, "ng-template", 117);
} }
function MovieDetailsComponent_div_56_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Similar Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ngb-carousel", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MovieDetailsComponent_div_56_div_3_9_Template, 1, 0, undefined, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r88.SimPosterMatrix);
} }
function MovieDetailsComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MovieDetailsComponent_div_56_div_1_Template, 10, 4, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MovieDetailsComponent_div_56_div_3_Template, 10, 4, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r16.movieRecPosterMatrix[0] == null ? null : ctx_r16.movieRecPosterMatrix[0].length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r16.SimPosterMatrix[0] == null ? null : ctx_r16.SimPosterMatrix[0].length) > 0);
} }
function MovieDetailsComponent_ng_template_57_div_0_9_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r111 = ctx_r113.index;
    const imgArray_r110 = ctx_r113.$implicit;
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r112.RecIdArray[i_r111], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", imgArray_r110, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r112.RecTitleArray[i_r111]);
} }
function MovieDetailsComponent_ng_template_57_div_0_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MovieDetailsComponent_ng_template_57_div_0_9_ng_template_0_Template, 7, 3, "ng-template", 117);
} }
function MovieDetailsComponent_ng_template_57_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Recommended Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ngb-carousel", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MovieDetailsComponent_ng_template_57_div_0_9_Template, 1, 0, undefined, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r107.RecPosterArray);
} }
function MovieDetailsComponent_ng_template_57_div_2_9_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r116 = ctx_r118.index;
    const imgArray_r115 = ctx_r118.$implicit;
    const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r117.SimIdArray[i_r116], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", imgArray_r115, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r117.SimTitleArray[i_r116]);
} }
function MovieDetailsComponent_ng_template_57_div_2_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MovieDetailsComponent_ng_template_57_div_2_9_ng_template_0_Template, 7, 3, "ng-template", 117);
} }
function MovieDetailsComponent_ng_template_57_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Similar Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ngb-carousel", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MovieDetailsComponent_ng_template_57_div_2_9_Template, 1, 0, undefined, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r108.SimPosterArray);
} }
function MovieDetailsComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MovieDetailsComponent_ng_template_57_div_0_Template, 10, 4, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MovieDetailsComponent_ng_template_57_div_2_Template, 10, 4, "div", 112);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r18.RecIdArray == null ? null : ctx_r18.RecIdArray.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r18.SimPosterArray == null ? null : ctx_r18.SimPosterArray.length) > 0);
} }
class MovieDetailsComponent {
    constructor(modalService, breakpointObserver, service, route, _sanitizer, storageLocal, router) {
        this.modalService = modalService;
        this.breakpointObserver = breakpointObserver;
        this.service = service;
        this.route = route;
        this._sanitizer = _sanitizer;
        this.storageLocal = storageLocal;
        this.router = router;
        //public movieGenredictionary : any;
        this.MonthConvertMap = new Map();
        // public tvGenredictionary : any;
        //  public url:any;
        // private _Adding = new Subject<string>();
        // private _Removing = new Subject<string>();
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.successMessage = '';
        this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 560px)');
        // getmovieGenredictionary(){
        //   this.service.getmovieGenredictionary().subscribe((response) => {
        //     //console.log(response);
        //     //console.log(this.movieGenredictionary = response["genres"]);
        //     this.movieGenredictionary = response["genres"].reduce(function(map, tag){
        //       map[tag.id] = tag.name;
        //       return map;
        //     }, {});
        //      //console.log(this.movieGenredictionary);      
        //   });
        // }
        // gettvGenredictionary(){
        //   this.service.gettvGenredictionary().subscribe((response) => {
        //     //console.log(response);
        //     //console.log(this.tvGenredictionary = response["genres"]);
        //     this.tvGenredictionary = response["genres"].reduce(function(map, tag){
        //       map[tag.id] = tag.name;
        //       return map;
        //     }, {});
        //     //console.log(this.tvGenredictionary);
        //   });
        // }
        this.MvideoType = "";
        this.MvideoName = "";
        this.MvideoKey = "";
        this.MdetailsGenres = [];
        this.MdetailsSpokenLanguage = [];
        this.MdetailsTitle = "";
        this.MdetailsReleaseDate = "";
        this.MdetailsRuntimeHour = 0;
        this.MdetailsRuntimeMin = 0;
        this.MdetailsOverview = "";
        this.MdetailsTagline = "";
        this.MdetailsVoteAvg = 0;
        this.MdetailsPoster = "";
        this.MCastProfile = [];
        this.MCastId = [];
        this.MCastName = [];
        this.MCastChar = [];
        this.CastBirthday = "";
        this.CastBirthPlc = "";
        this.CastGender = "";
        this.CastName = "";
        this.CastHomepage = "";
        this.CastAKA = [];
        this.CastKFD = "";
        this.CastBiography = "";
        this.CastProfile_path = "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png";
        this.imdb_id = "";
        this.facebook_id = "";
        this.instagram_id = "";
        this.twitter_id = "";
        this.reviewAuthor = [];
        this.reviewContent = [];
        this.reviewCreated = [];
        this.reviewURL = [];
        this.reviewRating = [];
        this.reviewAvaPath = [];
        this.reviewLen = 0;
        this.createT = "";
        this.AorPM = "";
        this.movieRecId1 = [];
        this.movieRecId2 = [];
        this.movieRecId3 = [];
        this.movieRecId4 = [];
        this.movieRecTitle1 = [];
        this.movieRecTitle2 = [];
        this.movieRecTitle3 = [];
        this.movieRecTitle4 = [];
        this.movieRecPoster1 = [];
        this.movieRecPoster2 = [];
        this.movieRecPoster3 = [];
        this.movieRecPoster4 = [];
        this.movieRecIdMatrix = [];
        this.movieRecTitleMatrix = [];
        this.movieRecPosterMatrix = [];
        this.RecIdArray = [];
        this.RecTitleArray = [];
        this.RecPosterArray = [];
        this.SimId1 = [];
        this.SimId2 = [];
        this.SimId3 = [];
        this.SimId4 = [];
        this.SimTitle1 = [];
        this.SimTitle2 = [];
        this.SimTitle3 = [];
        this.SimTitle4 = [];
        this.SimPoster1 = [];
        this.SimPoster2 = [];
        this.SimPoster3 = [];
        this.SimPoster4 = [];
        this.SimIdMatrix = [];
        this.SimTitleMatrix = [];
        this.SimPosterMatrix = [];
        this.SimIdArray = [];
        this.SimTitleArray = [];
        this.SimPosterArray = [];
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    ngOnInit() {
        this._success.subscribe(message => this.successMessage = message);
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(5000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
        // this.category = this.route.snapshot.paramMap.get('category');
        this.id = this.route.snapshot.paramMap.get('id');
        //this.getmovieGenredictionary();
        // this.gettvGenredictionary();
        this.getMovieVideo();
        this.getMovieDetails();
        this.getMovieCast();
        this.getMovieReviews();
        this.constructMonthMap();
        this.getMovieRecommended();
        this.getMovieSimilar();
        this.checkMyList();
    }
    ngOnChanges() {
        this._success.subscribe(message => this.successMessage = message);
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(5000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
        // this.category = this.route.snapshot.paramMap.get('category');
        this.id = this.route.snapshot.paramMap.get('id');
        //this.getmovieGenredictionary();
        // this.gettvGenredictionary();
        this.getMovieVideo();
        this.getMovieDetails();
        this.getMovieCast();
        this.getMovieReviews();
        this.constructMonthMap();
        this.getMovieRecommended();
        this.getMovieSimilar();
        this.checkMyList();
    }
    openModal(content) {
        if (this.breakpointObserver.isMatched('(max-width: 560px)')) {
            this.modalService.open(content, { size: 'xs' });
        }
        else {
            this.modalService.open(content, { size: 'lg' });
        }
    }
    constructMonthMap() {
        this.MonthConvertMap.set("01", 'January');
        //console.log(this.MonthConvertMap.get("1"));
        this.MonthConvertMap.set("02", 'February');
        this.MonthConvertMap.set("03", 'March');
        this.MonthConvertMap.set("04", 'April');
        this.MonthConvertMap.set("05", 'May');
        this.MonthConvertMap.set("06", 'June');
        this.MonthConvertMap.set("07", 'July');
        this.MonthConvertMap.set("08", 'August');
        this.MonthConvertMap.set("09", 'September');
        this.MonthConvertMap.set("10", 'October');
        this.MonthConvertMap.set("11", 'November');
        this.MonthConvertMap.set("12", 'December');
    }
    getMovieVideo() {
        this.service.getMoviesVideo(this.id).subscribe((response) => {
            // console.log("getMovieVideo",response["videoList"]);
            if (response["videoList"] != null && response["videoList"].length > 0) {
                for (var i = 0; i < response["videoList"].length; i++) {
                    if (response["videoList"][i]["type"] === "Trailer") {
                        this.MvideoType = "Trailer";
                        this.MvideoName = response["videoList"][i]["name"];
                        this.MvideoKey = response["videoList"][i]["key"];
                        break;
                    }
                    else if (response["videoList"][i]["type"] === "Teaser") {
                        if (this.MvideoType == "") {
                            this.MvideoType = "Teaser";
                            this.MvideoName = response["videoList"][i]["name"];
                            this.MvideoKey = response["videoList"][i]["key"];
                        }
                    }
                }
            }
            if (this.MvideoKey == "") {
                this.MvideoKey = "tzkWB85ULJY";
            }
            this.movieURL = "www.youtube.com/watch?v=" + this.MvideoKey;
            // console.log(this.movieURL);
        });
    }
    getMovieDetails() {
        this.service.getMoviesDetails(this.id).subscribe((response) => {
            //console.log(response);
            this.MdetailsTitle = response["movDetails"]["title"];
            if (response["movDetails"]["release_date"] != null && response["movDetails"]["release_date"] != undefined)
                this.MdetailsReleaseDate = response["movDetails"]["release_date"].substring(0, 4);
            if (response["movDetails"]["runtime"] != null && response["movDetails"]["runtime"] != undefined) {
                if (response["movDetails"]["runtime"] < 60) {
                    this.MdetailsRuntimeMin = response["movDetails"]["runtime"];
                }
                else {
                    this.MdetailsRuntimeMin = response["movDetails"]["runtime"] % 60;
                    this.MdetailsRuntimeHour = (response["movDetails"]["runtime"] - this.MdetailsRuntimeMin) / 60;
                }
                // console.log(this.MdetailsRuntimeMin);
                // console.log(this.MdetailsRuntimeHour);
            }
            this.MdetailsOverview = response["movDetails"]["overview"];
            this.MdetailsTagline = response["movDetails"]["tagline"];
            this.MdetailsVoteAvg = response["movDetails"]["vote_average"];
            //console.log(response["movDetails"]["spoken_languages"].length);
            var len = response["movDetails"]["spoken_languages"].length;
            for (var i = 0; i < len; i++) {
                //console.log(response["movDetails"]["spoken_languages"][i]["english_name"]);
                this.MdetailsSpokenLanguage.push(response["movDetails"]["spoken_languages"][i]["english_name"]);
            }
            //console.log(this.MdetailsSpokenLanguage);
            var GenresLen = response["movDetails"]["genres"].length;
            for (var i = 0; i < GenresLen; i++) {
                //console.log(response["movDetails"]["genres"][i]["id"]);
                //console.log(response["movDetails"]["genres"][i]["name"]);
                this.MdetailsGenres.push(response["movDetails"]["genres"][i]["name"]);
            }
            if (response["movDetails"]["poster_path"] != null && response["movDetails"]["poster_path"].length > 0) {
                this.MdetailsPoster = 'https://image.tmdb.org/t/p/w500/' + response["movDetails"]["poster_path"];
            }
            else {
                this.MdetailsPoster = 'https://cinemaone.net/images/movie_placeholder.png';
            }
            var current = new Date();
            var timestamp = current.getTime();
            var keyStringML = "ml" + "^" + this.id + "^" + "movie";
            var keyStringCW = "cw" + "^" + this.id + "^" + "movie";
            //console.log(this.MdetailsGenres);
            if (this.storageLocal.get(keyStringML) !== null) {
                this.storageLocal.set(keyStringML, timestamp + "^" + this.MdetailsTitle + "^" + this.MdetailsPoster);
            }
            this.storageLocal.set(keyStringCW, timestamp + "^" + this.MdetailsTitle + "^" + this.MdetailsPoster);
        });
    }
    checkMyList() {
        // var current = new Date();
        // var timestamp = current.getTime();
        document.getElementById("button-text").innerHTML = "";
        var keyString = "ml" + "^" + this.id + "^" + "movie";
        if (this.storageLocal.get(keyString) === null) {
            document.getElementById("button-text").innerHTML = "Add to Watchlist";
        }
        else {
            document.getElementById("button-text").innerHTML = "Remove from Watchlist";
        }
    }
    updateMyList() {
        this.isclose = false;
        var current = new Date();
        var timestamp = current.getTime();
        var keyString = "ml" + "^" + this.id + "^" + "movie";
        if (this.storageLocal.get(keyString) === null) {
            this.storageLocal.set(keyString, timestamp + "^" + this.MdetailsTitle + "^" + this.MdetailsPoster);
            this.isAdded = true;
            this.isRemoved = false;
            this._success.next(`Added to watchlists.`);
            document.getElementById("button-text").innerHTML = "Remove from Watchlist";
        }
        else {
            this.storageLocal.remove(keyString);
            document.getElementById("button-text").innerHTML = "Add to Watchlist";
            this.isRemoved = true;
            this.isAdded = false;
            this._success.next(`Removed from watchlist.`);
        }
        // this.storageLocal.print();
    }
    getMovieCast() {
        this.service.getMovieCast(this.id).subscribe((response) => {
            // console.log(response["castList"]);
            for (var i = 0; i < response["castList"].length; i++) {
                // console.log(response["castList"][i]["id"]);
                if (response["castList"][i]["id"] != null) {
                    this.MCastId.push(response["castList"][i]["id"]);
                }
                if (response["castList"][i]["profile_path"] != null && response["castList"][i]["profile_path"].length > 0) {
                    this.MCastProfile.push('https://image.tmdb.org/t/p/w500/' + response["castList"][i]["profile_path"]);
                }
                else {
                    this.MCastProfile.push('https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png');
                }
                if (response["castList"][i]["name"] != null && response["castList"][i]["name"].length > 0) {
                    this.MCastName.push(response["castList"][i]["name"]);
                }
                else {
                    this.MCastName.push('');
                }
                if (response["castList"][i]["character"] != null && response["castList"][i]["character"].length > 0) {
                    this.MCastChar.push(response["castList"][i]["character"]);
                }
                else {
                    this.MCastChar.push('');
                }
            }
            // console.log(this.MCastId);
        });
    }
    clickCast(id) {
        this.CastId = id;
        this.service.getCastDetails(this.CastId).subscribe((response) => {
            //console.log(response);
            this.CastBirthday = "";
            this.CastBirthPlc = "";
            this.CastGender = "";
            this.CastName = "";
            this.CastHomepage = "";
            this.CastAKA = [];
            this.CastKFD = "";
            this.CastBiography = "";
            this.CastProfile_path = "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png";
            if (response["castDetails"]["profile_path"] != null && response["castDetails"]["profile_path"].length > 0) {
                this.CastProfile_path = 'https://image.tmdb.org/t/p/w500/' + response["castDetails"]["profile_path"];
            }
            else {
                this.CastProfile_path = "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png";
            }
            //console.log(this.CastProfile_path);
            if (response["castDetails"]["birthday"] != null && response["castDetails"]["birthday"].length > 0) {
                this.CastBirthday = response["castDetails"]["birthday"];
            }
            if (response["castDetails"]["place_of_birth"] != null && response["castDetails"]["place_of_birth"].length > 0) {
                this.CastBirthPlc = response["castDetails"]["place_of_birth"];
            }
            if (response["castDetails"]["gender"] != null) {
                if (response["castDetails"]["gender"] == 1)
                    this.CastGender = "Female";
                if (response["castDetails"]["gender"] == 2)
                    this.CastGender = "Male";
            }
            if (response["castDetails"]["name"] != null && response["castDetails"]["name"].length > 0) {
                this.CastName = response["castDetails"]["name"];
            }
            if (response["castDetails"]["homepage"] != null && response["castDetails"]["homepage"].length > 0) {
                this.CastHomepage = response["castDetails"]["homepage"];
            }
            if (response["castDetails"]["known_for_department"] != null && response["castDetails"]["known_for_department"].length > 0) {
                this.CastKFD = response["castDetails"]["known_for_department"];
            }
            if (response["castDetails"]["biography"] != null && response["castDetails"]["biography"].length > 0) {
                this.CastBiography = response["castDetails"]["biography"];
            }
            if (response["castDetails"]["also_known_as"] != null) {
                this.CastAKA = [];
                for (var i = 0; i < response["castDetails"]["also_known_as"].length; i++) {
                    this.CastAKA.push(response["castDetails"]["also_known_as"][i]);
                }
            }
            //console.log(this.CastAKA);
        });
    }
    clickPersonExId(PersonId) {
        console.log(PersonId);
        this.service.getPersonExId(PersonId).subscribe((response) => {
            this.imdb_id = "";
            this.facebook_id = "";
            this.instagram_id = "";
            this.twitter_id = "";
            console.log(response);
            //console.log(response["PersonExId"]["imdb_id"]);
            if (response["PersonExId"]["imdb_id"] != null && response["PersonExId"]["imdb_id"].length > 0) {
                this.imdb_id = "https://www.imdb.com/name/" + response["PersonExId"]["imdb_id"] + "/";
            }
            if (response["PersonExId"]["facebook_id"] != null && response["PersonExId"]["facebook_id"].length > 0) {
                this.facebook_id = "https://www.facebook.com/" + response["PersonExId"]["facebook_id"];
            }
            if (response["PersonExId"]["instagram_id"] != null && response["PersonExId"]["instagram_id"].length > 0) {
                this.instagram_id = "https://www.instagram.com/" + response["PersonExId"]["instagram_id"];
            }
            if (response["PersonExId"]["twitter_id"] != null && response["PersonExId"]["twitter_id"].length > 0) {
                this.twitter_id = "https://www.twitter.com/" + response["PersonExId"]["Twitter_id"];
            }
            console.log(this.imdb_id);
            console.log(this.facebook_id);
            console.log(this.instagram_id);
            console.log(this.twitter_id);
        });
    }
    getMovieReviews() {
        this.service.getMovieReviews(this.id).subscribe((response) => {
            //console.log(this.id);
            //console.log(response["reviewsList"]);
            this.reviewLen = Math.min(10, response["reviewsList"].length);
            var time = [];
            //console.log(response["reviewsList"][0]["author"]);
            for (var i = 0; i < this.reviewLen; i++) {
                if (response["reviewsList"][i]["author"] != null || response["reviewsList"][i]["author"].length != 0) {
                    this.reviewAuthor.push(response["reviewsList"][i]["author"]);
                }
                else {
                    this.reviewAuthor.push("");
                }
                if (response["reviewsList"][i]["content"] != null || response["reviewsList"][i]["content"].length != 0) {
                    this.reviewContent.push(response["reviewsList"][i]["content"]);
                }
                else {
                    this.reviewContent.push("");
                }
                if (response["reviewsList"][i]["created_at"] != null || response["reviewsList"][i]["created_at"].length != 0) {
                    this.createT = "";
                    this.AorPM = "";
                    this.clock = "";
                    time = response["reviewsList"][i]["created_at"].split('-');
                    // console.log(time);
                    this.clock = time[2].substring(3, 5);
                    if (this.clock > "12") {
                        this.createT = this.MonthConvertMap.get(time[1]) + " " + time[2].substring(0, 2) + ", " + time[0] + ", " + (this.clock - 12) + time[2].substring(5, 11) + " PM";
                        //console.log(this.createT);
                    }
                    else if (this.clock < "12") {
                        this.createT = this.MonthConvertMap.get(time[1]) + " " + time[2].substring(0, 2) + ", " + time[0] + ", " + time[2].substring(4, 5) + time[2].substring(5, 11) + " AM";
                    }
                    else {
                        this.createT = this.MonthConvertMap.get(time[1]) + " " + time[2].substring(0, 2) + ", " + time[0] + ", " + this.clock + time[2].substring(5, 11) + " PM";
                    }
                    //console.log(this.createT);
                    this.reviewCreated.push(this.createT);
                }
                else {
                    this.reviewCreated.push("");
                }
                if (response["reviewsList"][i]["url"] != null || response["reviewsList"][i]["url"].length != 0) {
                    this.reviewURL.push(response["reviewsList"][i]["url"]);
                }
                else {
                    this.reviewURL.push("");
                }
                if (response["reviewsList"][i]["author_details"]["rating"] != null) {
                    this.reviewRating.push(response["reviewsList"][i]["author_details"]["rating"]);
                }
                else {
                    this.reviewRating.push(0);
                }
                // console.log(response["reviewsList"][i]["author_details"]["avatar_path"].split('/').length);
                // console.log(response["reviewsList"][i]["author_details"]["avatar_path"].substr(1))
                if (response["reviewsList"][i]["author_details"]["avatar_path"] != null) {
                    if (response["reviewsList"][i]["author_details"]["avatar_path"].split('/').length > 2) {
                        this.reviewAvaPath.push(response["reviewsList"][i]["author_details"]["avatar_path"].substr(1));
                    }
                    else {
                        this.reviewAvaPath.push("https://image.tmdb.org/t/p/original" + response["reviewsList"][i]["author_details"]["avatar_path"]);
                    }
                }
                else {
                    this.reviewAvaPath.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU");
                }
            }
            //console.log(this.reviewAvaPath); 
        });
    }
    getMovieRecommended() {
        this.service.getMovieRecommended(this.id).subscribe((response) => {
            //console.log(response);
            var theLen = response["recomendList"].length;
            for (var i = 0; i < theLen; i++) {
                this.RecIdArray.push(response["recomendList"][i]["id"]);
                this.RecTitleArray.push(response["recomendList"][i]["title"]);
                if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                    this.RecPosterArray.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                }
                else {
                    this.RecPosterArray.push('https://cinemaone.net/images/movie_placeholder.png');
                }
            }
            if (theLen > 18) {
                for (var i = 0; i < theLen; i++) {
                    if (i <= 5 && i >= 0) {
                        this.movieRecId1.push(response["recomendList"][i]["id"]);
                        if (response["recomendList"][i]["title"] != null && response["recomendList"][i]["title"].length > 0) {
                            this.movieRecTitle1.push(response["recomendList"][i]["title"]);
                        }
                        else {
                            this.movieRecTitle1.push("");
                        }
                        if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                            this.movieRecPoster1.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                        }
                        else {
                            this.movieRecPoster1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 11 && i >= 6) {
                        this.movieRecId2.push(response["recomendList"][i]["id"]);
                        if (response["recomendList"][i]["title"] != null && response["recomendList"][i]["title"].length > 0) {
                            this.movieRecTitle2.push(response["recomendList"][i]["title"]);
                        }
                        else {
                            this.movieRecTitle2.push("");
                        }
                        if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                            this.movieRecPoster2.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                        }
                        else {
                            this.movieRecPoster2.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 17 && i >= 12) {
                        this.movieRecId3.push(response["recomendList"][i]["id"]);
                        if (response["recomendList"][i]["title"] != null && response["recomendList"][i]["title"].length > 0) {
                            this.movieRecTitle3.push(response["recomendList"][i]["title"]);
                        }
                        else {
                            this.movieRecTitle3.push("");
                        }
                        if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                            this.movieRecPoster3.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                        }
                        else {
                            this.movieRecPoster3.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 19 && i >= 18) {
                        this.movieRecId4.push(response["recomendList"][i]["id"]);
                        if (response["recomendList"][i]["title"] != null && response["recomendList"][i]["title"].length > 0) {
                            this.movieRecTitle4.push(response["recomendList"][i]["title"]);
                        }
                        else {
                            this.movieRecTitle4.push("");
                        }
                        if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                            this.movieRecPoster4.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                        }
                        else {
                            this.movieRecPoster4.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                this.movieRecIdMatrix = [this.movieRecId1, this.movieRecId2, this.movieRecId3, this.movieRecId4];
                this.movieRecTitleMatrix = [this.movieRecTitle1, this.movieRecTitle2, this.movieRecTitle3, this.movieRecTitle4];
                this.movieRecPosterMatrix = [this.movieRecPoster1, this.movieRecPoster2, this.movieRecPoster3, this.movieRecPoster4];
                // console.log(this.movieRecIdMatrix);
                // console.log(this.movieRecTitleMatrix);
                // console.log(this.movieRecPosterMatrix);
            }
            else if (theLen > 12) {
                for (var i = 0; i < theLen; i++) {
                    if (i <= 5 && i >= 0) {
                        this.movieRecId1.push(response["recomendList"][i]["id"]);
                        if (response["recomendList"][i]["title"] != null && response["recomendList"][i]["title"].length > 0) {
                            this.movieRecTitle1.push(response["recomendList"][i]["title"]);
                        }
                        else {
                            this.movieRecTitle1.push("");
                        }
                        if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                            this.movieRecPoster1.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                        }
                        else {
                            this.movieRecPoster1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 11 && i >= 6) {
                        this.movieRecId2.push(response["recomendList"][i]["id"]);
                        if (response["recomendList"][i]["title"] != null && response["recomendList"][i]["title"].length > 0) {
                            this.movieRecTitle2.push(response["recomendList"][i]["title"]);
                        }
                        else {
                            this.movieRecTitle2.push("");
                        }
                        if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                            this.movieRecPoster2.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                        }
                        else {
                            this.movieRecPoster2.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 17 && i >= 12) {
                        this.movieRecId3.push(response["recomendList"][i]["id"]);
                        if (response["recomendList"][i]["title"] != null && response["recomendList"][i]["title"].length > 0) {
                            this.movieRecTitle3.push(response["recomendList"][i]["title"]);
                        }
                        else {
                            this.movieRecTitle3.push("");
                        }
                        if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                            this.movieRecPoster3.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                        }
                        else {
                            this.movieRecPoster3.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                this.movieRecIdMatrix = [this.movieRecId1, this.movieRecId2, this.movieRecId3];
                this.movieRecTitleMatrix = [this.movieRecTitle1, this.movieRecTitle2, this.movieRecTitle3];
                this.movieRecPosterMatrix = [this.movieRecPoster1, this.movieRecPoster2, this.movieRecPoster3];
                // console.log(this.movieRecIdMatrix);
                // console.log(this.movieRecTitleMatrix);
                // console.log(this.movieRecPosterMatrix);
            }
            else if (theLen > 6) {
                for (var i = 0; i < theLen; i++) {
                    if (i <= 5 && i >= 0) {
                        this.movieRecId1.push(response["recomendList"][i]["id"]);
                        if (response["recomendList"][i]["title"] != null && response["recomendList"][i]["title"].length > 0) {
                            this.movieRecTitle1.push(response["recomendList"][i]["title"]);
                        }
                        else {
                            this.movieRecTitle1.push("");
                        }
                        if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                            this.movieRecPoster1.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                        }
                        else {
                            this.movieRecPoster1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 11 && i >= 6) {
                        this.movieRecId2.push(response["recomendList"][i]["id"]);
                        if (response["recomendList"][i]["title"] != null && response["recomendList"][i]["title"].length > 0) {
                            this.movieRecTitle2.push(response["recomendList"][i]["title"]);
                        }
                        else {
                            this.movieRecTitle2.push("");
                        }
                        if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                            this.movieRecPoster2.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                        }
                        else {
                            this.movieRecPoster2.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                this.movieRecIdMatrix = [this.movieRecId1, this.movieRecId2];
                this.movieRecTitleMatrix = [this.movieRecTitle1, this.movieRecTitle2];
                this.movieRecPosterMatrix = [this.movieRecPoster1, this.movieRecPoster2];
                // console.log(this.movieRecIdMatrix);
                // console.log(this.movieRecTitleMatrix);
                // console.log(this.movieRecPosterMatrix);
            }
            else if (theLen > 0) {
                for (var i = 0; i < theLen; i++) {
                    if (i <= 5 && i >= 0) {
                        this.movieRecId1.push(response["recomendList"][i]["id"]);
                        if (response["recomendList"][i]["title"] != null && response["recomendList"][i]["title"].length > 0) {
                            this.movieRecTitle1.push(response["recomendList"][i]["title"]);
                        }
                        else {
                            this.movieRecTitle1.push("");
                        }
                        if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                            this.movieRecPoster1.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                        }
                        else {
                            this.movieRecPoster1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                this.movieRecIdMatrix = [this.movieRecId1];
                this.movieRecTitleMatrix = [this.movieRecTitle1];
                this.movieRecPosterMatrix = [this.movieRecPoster1];
                // console.log(this.movieRecIdMatrix);
                // console.log(this.movieRecTitleMatrix);
                // console.log(this.movieRecPosterMatrix);
            }
            theLen = null;
        });
    }
    getMovieSimilar() {
        this.service.getMovieSimilar(this.id).subscribe((response) => {
            //console.log(response);
            var theLen = response["similarList"].length;
            for (var i = 0; i < theLen; i++) {
                this.SimIdArray.push(response["similarList"][i]["id"]);
                this.SimTitleArray.push(response["similarList"][i]["title"]);
                if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                    this.SimPosterArray.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                }
                else {
                    this.SimPosterArray.push('https://cinemaone.net/images/movie_placeholder.png');
                }
            }
            if (theLen > 18) {
                for (var i = 0; i < theLen; i++) {
                    if (i <= 5 && i >= 0) {
                        this.SimId1.push(response["similarList"][i]["id"]);
                        if (response["similarList"][i]["title"] != null && response["similarList"][i]["title"].length > 0) {
                            this.SimTitle1.push(response["similarList"][i]["title"]);
                        }
                        else {
                            this.SimTitle1.push("");
                        }
                        if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                            this.SimPoster1.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                        }
                        else {
                            this.SimPoster1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 11 && i >= 6) {
                        this.SimId2.push(response["similarList"][i]["id"]);
                        if (response["similarList"][i]["title"] != null && response["similarList"][i]["title"].length > 0) {
                            this.SimTitle2.push(response["similarList"][i]["title"]);
                        }
                        else {
                            this.SimTitle2.push("");
                        }
                        if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                            this.SimPoster2.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                        }
                        else {
                            this.SimPoster2.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 17 && i >= 12) {
                        this.SimId3.push(response["similarList"][i]["id"]);
                        if (response["similarList"][i]["title"] != null && response["similarList"][i]["title"].length > 0) {
                            this.SimTitle3.push(response["similarList"][i]["title"]);
                        }
                        else {
                            this.SimTitle3.push("");
                        }
                        if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                            this.SimPoster3.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                        }
                        else {
                            this.SimPoster3.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 19 && i >= 18) {
                        this.SimId4.push(response["similarList"][i]["id"]);
                        if (response["similarList"][i]["title"] != null && response["similarList"][i]["title"].length > 0) {
                            this.SimTitle4.push(response["similarList"][i]["title"]);
                        }
                        else {
                            this.SimTitle4.push("");
                        }
                        if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                            this.SimPoster4.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                        }
                        else {
                            this.SimPoster4.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                this.SimIdMatrix = [this.SimId1, this.SimId2, this.SimId3, this.SimId4];
                this.SimTitleMatrix = [this.SimTitle1, this.SimTitle2, this.SimTitle3, this.SimTitle4];
                this.SimPosterMatrix = [this.SimPoster1, this.SimPoster2, this.SimPoster3, this.SimPoster4];
                // console.log(this.SimIdMatrix);
                // console.log(this.SimTitleMatrix);
                // console.log(this.SimPosterMatrix);
            }
            else if (theLen > 12) {
                for (var i = 0; i < theLen; i++) {
                    if (i <= 5 && i >= 0) {
                        this.SimId1.push(response["similarList"][i]["id"]);
                        if (response["similarList"][i]["title"] != null && response["similarList"][i]["title"].length > 0) {
                            this.SimTitle1.push(response["similarList"][i]["title"]);
                        }
                        else {
                            this.SimTitle1.push("");
                        }
                        if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                            this.SimPoster1.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                        }
                        else {
                            this.SimPoster1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 11 && i >= 6) {
                        this.SimId2.push(response["similarList"][i]["id"]);
                        if (response["similarList"][i]["title"] != null && response["similarList"][i]["title"].length > 0) {
                            this.SimTitle2.push(response["similarList"][i]["title"]);
                        }
                        else {
                            this.SimTitle2.push("");
                        }
                        if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                            this.SimPoster2.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                        }
                        else {
                            this.SimPoster2.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 17 && i >= 12) {
                        this.SimId3.push(response["similarList"][i]["id"]);
                        if (response["similarList"][i]["title"] != null && response["similarList"][i]["title"].length > 0) {
                            this.SimTitle3.push(response["similarList"][i]["title"]);
                        }
                        else {
                            this.SimTitle3.push("");
                        }
                        if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                            this.SimPoster3.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                        }
                        else {
                            this.SimPoster3.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                this.SimIdMatrix = [this.SimId1, this.SimId2, this.SimId3];
                this.SimTitleMatrix = [this.SimTitle1, this.SimTitle2, this.SimTitle3];
                this.SimPosterMatrix = [this.SimPoster1, this.SimPoster2, this.SimPoster3];
                // console.log(this.SimIdMatrix);
                // console.log(this.SimTitleMatrix);
                // console.log(this.SimPosterMatrix);
            }
            else if (theLen > 6) {
                for (var i = 0; i < theLen; i++) {
                    if (i <= 5 && i >= 0) {
                        this.SimId1.push(response["similarList"][i]["id"]);
                        if (response["similarList"][i]["title"] != null && response["similarList"][i]["title"].length > 0) {
                            this.SimTitle1.push(response["similarList"][i]["title"]);
                        }
                        else {
                            this.SimTitle1.push("");
                        }
                        if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                            this.SimPoster1.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                        }
                        else {
                            this.SimPoster1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 11 && i >= 6) {
                        this.SimId2.push(response["similarList"][i]["id"]);
                        if (response["similarList"][i]["title"] != null && response["similarList"][i]["title"].length > 0) {
                            this.SimTitle2.push(response["similarList"][i]["title"]);
                        }
                        else {
                            this.SimTitle2.push("");
                        }
                        if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                            this.SimPoster2.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                        }
                        else {
                            this.SimPoster2.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                this.SimIdMatrix = [this.SimId1, this.SimId2];
                this.SimTitleMatrix = [this.SimTitle1, this.SimTitle2];
                this.SimPosterMatrix = [this.SimPoster1, this.SimPoster2];
                // console.log(this.SimIdMatrix);
                // console.log(this.SimTitleMatrix);
                // console.log(this.SimPosterMatrix);
            }
            else if (theLen > 0) {
                for (var i = 0; i < theLen; i++) {
                    if (i <= 5 && i >= 0) {
                        this.SimId1.push(response["similarList"][i]["id"]);
                        if (response["similarList"][i]["title"] != null && response["similarList"][i]["title"].length > 0) {
                            this.SimTitle1.push(response["similarList"][i]["title"]);
                        }
                        else {
                            this.SimTitle1.push("");
                        }
                        if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                            this.SimPoster1.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                        }
                        else {
                            this.SimPoster1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                this.SimIdMatrix = [this.SimId1];
                this.SimTitleMatrix = [this.SimTitle1];
                this.SimPosterMatrix = [this.SimPoster1];
                // console.log(this.SimIdMatrix);
                // console.log(this.SimTitleMatrix);
                // console.log(this.SimPosterMatrix);
            }
            theLen = null;
        });
    }
}
MovieDetailsComponent.ɵfac = function MovieDetailsComponent_Factory(t) { return new (t || MovieDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_5__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_localstorageservice_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
MovieDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MovieDetailsComponent, selectors: [["app-movie-details"]], viewQuery: function MovieDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 59, vars: 19, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["rel", "preconnect", "href", "https://fonts.gstatic.com"], ["href", "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap", "rel", "stylesheet"], ["href", "https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap", "rel", "stylesheet"], [2, "min-height", "700px"], [1, "container", "pt-sm-5", 2, "height", "auto"], [1, "row"], [1, "col-sm-1"], [1, "col-sm-7"], [1, "embed-responsive", "embed-responsive-16by9"], ["suggestedQuality", "highres", 3, "videoId"], [1, "col-sm-3", "details", 2, "color", "white"], ["style", "font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 35px;", 4, "ngIf"], ["style", "font-family: 'Noto Sans', sans-serif; font-weight: 400; font-style: italic;font-size: 17px; opacity: 0.7;", 4, "ngIf"], ["style", "font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 17px; opacity: 0.7;", 4, "ngIf"], ["class", "mt-sm-2", "style", "font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 13px;", 4, "ngIf"], ["style", "font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 13px;", 4, "ngIf"], ["id", "button-text", 1, "btn", "btn-primary", 2, "margin-top", "-5px", 3, "click"], ["type", "success", "class", "mt-sm-2", "style", "font-size: 15px;", 3, "closed", 4, "ngIf", "ngIfElse"], ["Removed", ""], ["class", "row mt-sm-2", "style", "color: white;", 4, "ngIf"], [1, "row", 2, "color", "white"], [1, "col-sm-10"], [2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "17px"], ["target", "_blank", 2, "padding-right", "5px", 3, "href"], [1, "fa", "fa-twitter", 2, "font-size", "36px", "color", "#1aa3ff"], ["data-href", "https://developers.facebook.com/docs/plugins/", "data-layout", "button", "data-size", "large", 1, "fb-share-button"], ["target", "_blank", 3, "href"], [1, "fa", "fa-facebook-square", 2, "font-size", "36px", "color", "#1a1aff"], ["class", "row row-horizon ml-sm-5", 4, "ngIf"], ["content", ""], ["class", "row", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["inMobile", ""], [2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "35px"], [2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-style", "italic", "font-size", "17px", "opacity", "0.7"], [2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "17px", "opacity", "0.7"], [1, "mt-sm-2", 2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "13px"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "opacity", "0.7", "font-size", "15px"], [2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "13px"], ["type", "success", 1, "mt-sm-2", 2, "font-size", "15px", 3, "closed"], ["selfClosingAlert", ""], ["type", "danger", "class", "mt-sm-2", "style", "font-size: 14px;", 3, "closed", 4, "ngIf"], ["type", "danger", 1, "mt-sm-2", 2, "font-size", "14px", 3, "closed"], [1, "row", "mt-sm-2", 2, "color", "white"], [2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "18px"], [2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "15px", "opacity", "0.7", "line-height", "1.8"], [1, "row", "row-horizon", "ml-sm-5"], [1, "col-sm-11"], [1, "container-fluid", "py-2"], [2, "color", "white", "margin-bottom", "20px"], [1, "d-flex", "flex-row", "flex-nowrap", "castScroll", 2, "overflow-x", "scroll"], ["id", "Cast", "class", "d-flex flex-row flex-nowrap", 3, "click", 4, "ngFor", "ngForOf"], ["id", "Cast", 1, "d-flex", "flex-row", "flex-nowrap", 3, "click"], [1, "card", "card-block", "mx-1", 3, "click"], [1, "card-img-top", "mx-auto", 2, "width", "146px", "height", "230px", "border-top-left-radius", "25px", "border-top-right-radius", "25px", 3, "src"], [1, "card-title", "mt-sm-2", 2, "font-family", "'Noto Sans', sans-serif", "font-weight", "700", "font-size", "14px"], [2, "font-family", "'Poppins', sans-serif", "font-size", "14px", "margin-top", "-12px"], [1, "card-text", 2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "13px"], [1, "modal-header"], ["class", "modal-title", "style", "font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 18px;", 4, "ngIf"], ["type", "button", "aria-label", "Close", "autofocus", "", 1, "close", 3, "click"], ["aria-hidden", "true"], ["class", "modal-body", "style", "max-height:400px; overflow-y: scroll;", 4, "ngIf", "ngIfElse"], [1, "modal-title", 2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "18px"], [1, "modal-body", 2, "max-height", "400px", "overflow-y", "scroll"], [1, "card", "mb-3", 2, "border", "none"], [1, "row", "no-gutters"], [1, "col-md-3"], ["alt", "...", 1, "card-img", 3, "src"], [1, "col-md-8", 2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "14px"], [1, "card-body", 2, "text-align", "left"], ["class", "card-text", "style", " opacity: 0.7;", 4, "ngIf"], [1, "card-text", 2, "margin-top", "20px"], ["style", "padding-right: 5px;", 4, "ngIf"], [1, "row", "no-gutters", 2, "text-align", "left", "padding-top", "10px"], [1, "card-text", 2, "opacity", "0.7"], [2, "padding-right", "5px"], ["ngbTooltip", "Visit IMDB", "tooltipClass", "my-custom-class", 1, "fa", "fa-imdb", 2, "font-size", "36px", "color", "#ffcc00"], ["ngbTooltip", "Visit Facebook", "tooltipClass", "my-custom-class", 1, "fa", "fa-facebook-square", 2, "font-size", "36px", "color", "#1a1aff"], [1, "instagram"], ["ngbTooltip", "Visit Instagram", "tooltipClass", "my-custom-class", 1, "fa", "fa-instagram"], ["ngbTooltip", "Visit Twitter", "tooltipClass", "my-custom-class", 1, "fa", "fa-twitter", 2, "font-size", "36px", "color", "#1aa3ff"], [2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "22px", "opacity", "0.9"], [2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "13px", "opacity", "0.7", "line-height", "1.8", "margin-top", "8px"], [1, "modal-body"], [2, "color", "white", "padding-bottom", "20px"], [2, "color", "lightgrey", "padding-left", "8px"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], [1, "card", "mb-3"], [1, "col-md-2", 2, "padding-top", "20px"], ["alt", "...", 1, "rounded-circle", 2, "width", "80px", "height", "80px", "margin-left", "40px", 3, "src"], [1, "col-md-9", 2, "padding-top", "10px"], [1, "card-body", 2, "text-align", "left", "margin-right", "10px"], ["class", "card-title", "style", "font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 22px; padding-bottom: 10px;", 4, "ngIf"], ["class", "card-text", "style", "opacity: 0.7;", 4, "ngIf"], ["class", "card-text comment", "style", "font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 13px; opacity: 0.7;", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], [1, "col-md-2"], [1, "card-title", 2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "22px", "padding-bottom", "10px"], [2, "color", "white", "font-size", "15px", "border-radius", "15px", "padding", "6px", "background-color", "black", "margin-left", "12px"], [1, "text-muted"], [1, "card-text", "comment", 2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "13px", "opacity", "0.7"], ["class", "row", "style", "padding-top: 30px;", 4, "ngIf"], ["class", "row", "style", "padding-top: 10px; padding-bottom: 40px;", 4, "ngIf"], [1, "row", 2, "padding-top", "30px"], ["id", "RecomMov"], [2, "color", "white", "padding-bottom", "20px", "padding-left", "10px"], [3, "pauseOnHover", "pauseOnFocus", "interval"], ["ngbSlide", ""], [1, "Poster"], [1, "posterIn", 2, "display", "inline", "float", "left"], [3, "routerLink"], ["alt", "", 3, "src"], [1, "titleORname"], [1, "row", 2, "padding-top", "10px", "padding-bottom", "40px"], ["id", "SimilarMov"], ["id", "RecomMovMobile"], [2, "color", "white", "padding-bottom", "20px", "padding-left", "50px"], [1, "no-indicators", 3, "pauseOnHover", "pauseOnFocus", "interval"], [1, "PosterMobile"], [1, "posterInMobile", 2, "display", "inline", "float", "left"], [1, "titleORnameMobile"], ["id", "SimilarMovMobile"], [2, "color", "white", "padding-bottom", "20px", "padding-left", "70px"]], template: function MovieDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "body", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "youtube-player", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, MovieDetailsComponent_h1_19_Template, 2, 1, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, MovieDetailsComponent_p_20_Template, 2, 1, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, MovieDetailsComponent_span_22_Template, 2, 1, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, MovieDetailsComponent_span_23_Template, 2, 1, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, MovieDetailsComponent_span_25_Template, 2, 1, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, MovieDetailsComponent_span_26_Template, 2, 1, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, MovieDetailsComponent_div_27_Template, 3, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, MovieDetailsComponent_div_28_Template, 3, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MovieDetailsComponent_Template_button_click_30_listener() { return ctx.updateMyList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, MovieDetailsComponent_ngb_alert_31_Template, 3, 1, "ngb-alert", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, MovieDetailsComponent_ng_template_32_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, MovieDetailsComponent_div_36_Template, 9, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, MovieDetailsComponent_div_50_Template, 8, 1, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, MovieDetailsComponent_ng_template_51_Template, 8, 3, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, MovieDetailsComponent_div_54_Template, 10, 2, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, MovieDetailsComponent_div_56_Template, 4, 2, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, MovieDetailsComponent_ng_template_57_Template, 3, 2, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](33);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("videoId", ctx.MvideoKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.MdetailsTitle == null ? null : ctx.MdetailsTitle.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.MdetailsTagline == null ? null : ctx.MdetailsTagline.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.MdetailsReleaseDate == null ? null : ctx.MdetailsReleaseDate.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.MdetailsVoteAvg !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.MdetailsRuntimeHour !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.MdetailsRuntimeMin !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.MdetailsGenres == null ? null : ctx.MdetailsGenres.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.MdetailsSpokenLanguage == null ? null : ctx.MdetailsSpokenLanguage.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAdded && !ctx.isclose)("ngIfElse", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.MdetailsOverview == null ? null : ctx.MdetailsOverview.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=Watch+", ctx.MdetailsTitle, "%0A", ctx.movieURL, "%0A&hashtags=USC,CSCI571,FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=", ctx.movieURL, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.MCastName == null ? null : ctx.MCastName.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.reviewAuthor == null ? null : ctx.reviewAuthor.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isSmallScreen)("ngIfElse", _r17);
    } }, directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_9__["YouTubePlayer"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlert"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltip"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: ["html[_ngcontent-%COMP%]   body[_ngcontent-%COMP%]{\n    background-color:#000033;\n  \n}\n.card[_ngcontent-%COMP%]{\n    border-radius: 25px; \n}\n#Cast[_ngcontent-%COMP%]{\n    margin-bottom: 20px;\n}\n#Cast[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]{\n    width:146px; \n    min-height: 300px; \n    text-align: center;\n}\n#Cast[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n}\n\n.comment[_ngcontent-%COMP%]{\n    word-wrap: break-word;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 3;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n#RecomMov[_ngcontent-%COMP%], #SimilarMov[_ngcontent-%COMP%]{\n    \n    position: relative;\n    width: 100%;\n    \n    \n}\n#RecomMovMobile[_ngcontent-%COMP%], #SimilarMovMobile[_ngcontent-%COMP%]{\n    \n    position: relative;\n    width: 100%;\n    \n    \n}\n#RecomMov[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%], #SimilarMov[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%]{\n    padding-left: 110px;\n    padding-right: 110px;\n}\n#RecomMovMobile[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%], #SimilarMovMobile[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%]{\n    padding-left: 70px;\n    padding-right: 70px;\n}\n.Poster[_ngcontent-%COMP%]{\n    width: 1250px;\n    height: 260px;\n    \n}\n.PosterMobile[_ngcontent-%COMP%]{\n    \n}\n.Poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 152px;\n    height: 210px;\n    padding-right: 15px;\n    \n    \n}\n.posterInMobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 250px;\n    height: 350px;\n}\n.titleORname[_ngcontent-%COMP%]{\n    width: 137px; \n    height: 60px; \n    color: white; \n    margin-top: -55px; \n    padding-left: 5px;\n    opacity: 0;\n    overflow-wrap:break-word;\n    word-wrap: break-word;\n    padding-top: 25px;\n    background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1),rgba(0,0,0,1));\n    font-family: 'Noto Sans', sans-serif; \n    font-weight: 400; \n    font-size: 8px;\n}\n.titleORnameMobile[_ngcontent-%COMP%]{\n    position:absolute;\n    width: 100%;\n    height: 150px;\n    \n    color: white; \n    font-size: 30px; \n    margin-top: -145px; \n    padding-left: 20px;\n    padding-top: 80px;\n    overflow-wrap:break-word;\n    word-wrap: break-word;\n    background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1),rgba(0,0,0,1));\n    font-family: 'Noto Sans', sans-serif; \n    font-weight: 400; \n    font-size: 15px;\n    \n}\n.posterIn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover, .posterIn[_ngcontent-%COMP%]:hover    > .titleORname[_ngcontent-%COMP%]{\n    opacity: 1;\n    cursor: pointer;\n    transform: scale(1.05);\n    cursor: pointer;  \n}\n.posterInMobile[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n    transform: scale(1.05);\n    cursor: pointer;\n}\n.castScroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n    height: 7px;\n  }\n\n.castScroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: rgba(255, 255, 255, 0.157) ; \n    border-radius: 10px;\n  }\n\n.castScroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #b6b5b5; ; \n    border-radius: 10px;\n  }\n\n.castScroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: #555; \n  }\n\n\n\n\n\n.instagram[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{\n    font-size:36px;\n    background: #d6249f;\n    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3Qjs7QUFFNUI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBOzs7O0dBSUc7QUFDSDtJQUNJLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCO0FBSUE7O0lBRUksd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsbUJBQW1COztBQUV2QjtBQUNBOztJQUVJLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1CQUFtQjs7QUFFdkI7QUFDQTs7SUFFSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFHQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHVGQUF1RjtJQUN2RixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsdUZBQXVGO0lBQ3ZGLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZUFBZTs7QUFFbkI7QUFDQTs7SUFFSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztFQUNiO0FBRUEsVUFBVTtBQUNWO0lBQ0UsdUNBQXVDO0lBQ3ZDLG1CQUFtQjtFQUNyQjtBQUVBLFdBQVc7QUFDWDtJQUNFLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7QUFFQSxvQkFBb0I7QUFDcEI7SUFDRSxnQkFBZ0I7RUFDbEI7QUFNRjs7Ozs7O0dBTUc7QUFDSCxXQUFXO0FBQ1g7OztHQUdHO0FBRUgsb0JBQW9CO0FBQ3BCOztHQUVHO0FBRUg7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLDRHQUE0RztJQUM1Ryw2QkFBNkI7SUFDN0Isb0NBQW9DO0FBQ3hDIiwiZmlsZSI6Im1vdmllLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwgYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDAwMzM7XG4gIFxufVxuLmNhcmR7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDsgXG59XG4jQ2FzdHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuI0Nhc3QgPi5jYXJke1xuICAgIHdpZHRoOjE0NnB4OyBcbiAgICBtaW4taGVpZ2h0OiAzMDBweDsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI0Nhc3QgPiAuY2FyZDpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKiAubW9kYWwtY29udGVudHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGwgO1xufSAqL1xuLmNvbW1lbnR7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cblxuXG4jUmVjb21Nb3YsXG4jU2ltaWxhck1vdntcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAxODEsIDIpOyAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xuICAgIFxufVxuI1JlY29tTW92TW9iaWxlLFxuI1NpbWlsYXJNb3ZNb2JpbGV7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMTgxLCAyKTsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogaGVpZ2h0OiAzMDBweDsgKi9cbiAgICBcbn1cbiNSZWNvbU1vdiA+IG5nYi1jYXJvdXNlbCxcbiNTaW1pbGFyTW92ID4gbmdiLWNhcm91c2Vse1xuICAgIHBhZGRpbmctbGVmdDogMTEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTEwcHg7XG59XG4jUmVjb21Nb3ZNb2JpbGUgPiBuZ2ItY2Fyb3VzZWwsXG4jU2ltaWxhck1vdk1vYmlsZSA+IG5nYi1jYXJvdXNlbHtcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNzBweDtcbn1cbi5Qb3N0ZXJ7XG4gICAgd2lkdGg6IDEyNTBweDtcbiAgICBoZWlnaHQ6IDI2MHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXG59XG4uUG9zdGVyTW9iaWxle1xuICAgIC8qIGhlaWdodDogNTBweDsgKi9cbn1cbi5Qb3N0ZXIgaW1ne1xuICAgIHdpZHRoOiAxNTJweDtcbiAgICBoZWlnaHQ6IDIxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgLyogbWFyZ2luLXJpZ2h0OiAyNXB4OyAqL1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xufVxuLnBvc3RlckluTW9iaWxlIGltZ3tcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAzNTBweDtcbn1cblxuXG4udGl0bGVPUm5hbWV7XG4gICAgd2lkdGg6IDEzN3B4OyBcbiAgICBoZWlnaHQ6IDYwcHg7IFxuICAgIGNvbG9yOiB3aGl0ZTsgXG4gICAgbWFyZ2luLXRvcDogLTU1cHg7IFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgb3ZlcmZsb3ctd3JhcDpicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMSkscmdiYSgwLDAsMCwxKSk7XG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmOyBcbiAgICBmb250LXdlaWdodDogNDAwOyBcbiAgICBmb250LXNpemU6IDhweDtcbn1cbi50aXRsZU9SbmFtZU1vYmlsZXtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgICBjb2xvcjogd2hpdGU7IFxuICAgIGZvbnQtc2l6ZTogMzBweDsgXG4gICAgbWFyZ2luLXRvcDogLTE0NXB4OyBcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgb3ZlcmZsb3ctd3JhcDpicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMSkscmdiYSgwLDAsMCwxKSk7XG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmOyBcbiAgICBmb250LXdlaWdodDogNDAwOyBcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgXG59XG4ucG9zdGVySW4gaW1nOmhvdmVyLFxuLnBvc3RlckluOmhvdmVyID4gLnRpdGxlT1JuYW1le1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgY3Vyc29yOiBwb2ludGVyOyAgXG59XG4ucG9zdGVySW5Nb2JpbGU6aG92ZXIgaW1ne1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhc3RTY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDdweDtcbiAgfVxuICBcbiAgLyogVHJhY2sgKi9cbiAgLmNhc3RTY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTU3KSA7IFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgIFxuICAvKiBIYW5kbGUgKi9cbiAgLmNhc3RTY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjYjZiNWI1OyA7IFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuICAuY2FzdFNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM1NTU7IFxuICB9XG5cblxuXG5cblxuLyogLndob2xlUGFnZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA3cHg7XG59XG4ud2hvbGVQYWdlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1NykgOyBcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSAqL1xuLyogSGFuZGxlICovXG4vKiAud2hvbGVQYWdlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogI2I2YjViNTsgOyBcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSAqL1xuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbi8qIC53aG9sZVBhZ2U6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1OyBcbn0gKi9cblxuLmluc3RhZ3JhbSAuZmF7XG4gICAgZm9udC1zaXplOjM2cHg7XG4gICAgYmFja2dyb3VuZDogI2Q2MjQ5ZjtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDMwJSAxMDclLCAjZmRmNDk3IDAlLCAjZmRmNDk3IDUlLCAjZmQ1OTQ5IDQ1JSwjZDYyNDlmIDYwJSwjMjg1QUVCIDkwJSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */", "*[_ngcontent-%COMP%]:focus {\n            border: none !important;\n            outline:0 !important;\n            box-shadow: none;\n            -moz-box-shadow: none;\n            -webkit-box-shadow: none;\n            border-color: inherit;\n        }\n        @media screen and (max-width: 560px){\n            body[_ngcontent-%COMP%]{\n                min-height: 630px;\n            }\n        }\n        @media screen and (max-width: 560px){\n            .details[_ngcontent-%COMP%]{\n                margin-top: 20px;\n            }\n        }"] });


/***/ }),

/***/ "6DPj":
/*!*******************************************************!*\
  !*** ./src/app/components/mylist/mylist.component.ts ***!
  \*******************************************************/
/*! exports provided: MylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistComponent", function() { return MylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _localstorageservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../localstorageservice.service */ "TGut");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MylistComponent_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MylistComponent_div_1_div_1_div_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const media_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.updateMyList(media_r7["id"], media_r7["category"], media_r7["title"], media_r7["poster"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const media_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", media_r7["category"], "/", media_r7["id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", media_r7["poster"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](media_r7["title"]);
} }
function MylistComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MylistComponent_div_1_div_1_div_5_Template, 6, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.watchlist);
} }
function MylistComponent_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No items found in Watchlist.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MylistComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MylistComponent_div_1_div_1_Template, 7, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MylistComponent_div_1_ng_template_2_Template, 4, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.watchlist == null ? null : ctx_r0.watchlist.length) > 0)("ngIfElse", _r4);
} }
function MylistComponent_ng_template_2_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MylistComponent_ng_template_2_div_1_div_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const media_r15 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.updateMyList(media_r15["id"], media_r15["category"], media_r15["title"], media_r15["poster"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const media_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", media_r15["category"], "/", media_r15["id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", media_r15["poster"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](media_r15["title"]);
} }
function MylistComponent_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MylistComponent_ng_template_2_div_1_div_5_Template, 6, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.watchlist);
} }
function MylistComponent_ng_template_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No items found in Watchlist.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MylistComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MylistComponent_ng_template_2_div_1_Template, 7, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MylistComponent_ng_template_2_ng_template_2_Template, 4, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.watchlist == null ? null : ctx_r2.watchlist.length) > 0)("ngIfElse", _r12);
} }
class MylistComponent {
    // public id: any;
    constructor(route, storageLocal, breakpointObserver) {
        this.route = route;
        this.storageLocal = storageLocal;
        this.breakpointObserver = breakpointObserver;
        this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 560px)');
        this.watchlist = [];
        this.watchListKey = [];
        this.keyArray = [];
        this.valueArray = [];
    }
    ngOnInit() {
        // this.id = this.route.snapshot.paramMap.get('id');
        this.showList();
        //console.log("inmylist");
    }
    showList() {
        this.watchListKey = Object.keys(localStorage);
        for (let i = 0; i < this.watchListKey.length; i++) {
            //console.log(this.watchListKey[i].substring(1,3));
            if (this.watchListKey[i].substring(1, 3) == "ml") {
                // console.log(localStorage.getItem(this.watchListKey[i]));
                var key = this.watchListKey[i].replace('"', "");
                var value = localStorage.getItem(this.watchListKey[i]).replace('"', "");
                // console.log(str);
                this.keyArray = key.substr(0, key.length - 1).split('^');
                this.valueArray = value.substr(0, value.length - 1).split('^');
                // this.valueArray = this.storageLocal.get(this.watchListKey[i]).split('^');
                this.watchlist.push({ id: this.keyArray[1], category: this.keyArray[2], time: this.valueArray[0], title: this.valueArray[1], poster: this.valueArray[2] });
            }
        }
        // console.log(this.watchlist);
        if (this.watchlist != null && this.watchlist.length != 0) {
            this.watchlist.sort(function (a, b) { return a.time - b.time; }).reverse();
            // console.log(this.watchlist);
        }
        // this.storageLocal.print();
    }
    updateMyList(id, category, title, poster) {
        var current = new Date();
        var timestamp = current.getTime();
        var keyString = "ml" + "^" + id + "^" + category;
        this.storageLocal.set(keyString, timestamp + "^" + title + "^" + poster);
        // this.showList();
        // this.storageLocal.print();
    }
}
MylistComponent.ɵfac = function MylistComponent_Factory(t) { return new (t || MylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_localstorageservice_service__WEBPACK_IMPORTED_MODULE_2__["LocalstorageserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
MylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MylistComponent, selectors: [["app-mylist"]], decls: 4, vars: 2, consts: [[2, "background-color", "#000033"], ["class", "container", "style", "min-height: 700px;", 4, "ngIf", "ngIfElse"], ["inMobile", ""], [1, "container", 2, "min-height", "700px"], ["class", "row", 4, "ngIf", "ngIfElse"], ["noWatchList", ""], [1, "row"], [1, "col-sm-1"], [1, "col-sm-10"], [2, "color", "white", "padding-bottom", "70px"], ["id", "theMedia", "class", "col-sm-6 col-md-4 col-lg-2", 4, "ngFor", "ngForOf"], ["id", "theMedia", 1, "col-sm-6", "col-md-4", "col-lg-2"], [3, "routerLink", "click"], [3, "src"], ["id", "title", 1, "title"], [1, "col-sm-3"], [1, "col-sm-9", 2, "color", "white", "padding-top", "30px"], [1, "container", 2, "min-height", "630px"], [2, "color", "white", "padding-bottom", "30px", "padding-left", "50px"], ["id", "theMediaMobile", 4, "ngFor", "ngForOf"], ["id", "theMediaMobile"], [1, "titleMobile"], [1, "col-sm-9", "text-center", 2, "color", "white", "padding-top", "30px"]], template: function MylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MylistComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MylistComponent_ng_template_2_Template, 4, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSmallScreen)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#theMedia[_ngcontent-%COMP%]{\n    float: left;\n    margin-bottom: 50px;\n    height: 200px; \n    \n}\n#theMediaMobile[_ngcontent-%COMP%]{\n    margin-bottom: 50px;\n    margin-left: 60px;\n    margin-right: 60px;\n    height: 400px;\n\n    \n}\n#theMedia[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 120px;\n}\n#theMediaMobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    \n    width: 100%;\n    height: 400px;\n}\n#theMedia[_ngcontent-%COMP%] > .title[_ngcontent-%COMP%]{\n    text-align: left;\n    padding-left: 10px;\n    opacity:0;\n    color: white;\n    margin-top: -35px;\n    font-size: 10px;\n    overflow-wrap:break-word;\n    word-wrap: break-word;\n    -webkit-hyphens: auto;\n            hyphens: auto;\n    width: 120px;\n    min-height: 40px;\n    max-height: 50px;\n    \n    background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1),rgba(0,0,0,1));\n    font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 8px;\n\n}\n.titleMobile[_ngcontent-%COMP%]{\n    position: absolute;\n    text-align: left;\n    padding-left: 20px;\n    color: white;\n    margin-top: -165px;\n    overflow-wrap:break-word;\n    word-wrap: break-word;\n    width: 265px;\n    height: 170px;\n    padding-top: 130px;\n    \n    \n    background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1),rgba(0,0,0,1));\n    font-family: 'Noto Sans', sans-serif; font-weight: 400; \n    font-size: 15px;\n}\n#theMedia[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], #theMedia[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%]{\n    cursor: pointer;\n    transform: scale(1.05);\n    opacity: 1; \n    \n}\n#theMediaMobile[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], #theMediaMobile[_ngcontent-%COMP%]:hover   .titleMobile[_ngcontent-%COMP%]{\n    transform: scale(1.05);\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15bGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhOztJQUViLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0k7MEJBQ3NCO0lBQ3RCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHFCQUFhO1lBQWIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1Qix1RkFBdUY7SUFDdkYsb0NBQW9DLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYzs7QUFFMUU7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQjt1QkFDbUI7SUFDbkIsNEJBQTRCO0lBQzVCLHVGQUF1RjtJQUN2RixvQ0FBb0MsRUFBRSxnQkFBZ0I7SUFDdEQsZUFBZTtBQUNuQjtBQUVBOztJQUVJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsVUFBVTs7QUFFZDtBQUNBOztJQUVJLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CIiwiZmlsZSI6Im15bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RoZU1lZGlhe1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDsgXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgb3JhbmdlOyAqL1xufVxuI3RoZU1lZGlhTW9iaWxle1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG5cbiAgICAvKiBoZWlnaHQ6IDIwMHB4OyAqL1xufVxuI3RoZU1lZGlhIGltZ3tcbiAgICB3aWR0aDogMTIwcHg7XG59XG4jdGhlTWVkaWFNb2JpbGUgaW1ne1xuICAgIC8qIHBhZGRpbmctbGVmdDogNjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4OyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAwcHg7XG59XG4jdGhlTWVkaWE+LnRpdGxle1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIG9wYWNpdHk6MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogLTM1cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG92ZXJmbG93LXdyYXA6YnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgaHlwaGVuczogYXV0bztcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDEpLHJnYmEoMCwwLDAsMSkpO1xuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjsgZm9udC13ZWlnaHQ6IDQwMDsgZm9udC1zaXplOiA4cHg7XG5cbn1cbi50aXRsZU1vYmlsZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IC0xNjVweDtcbiAgICBvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdpZHRoOiAyNjVweDtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMzBweDtcbiAgICAvKiBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIG1heC1oZWlnaHQ6IDUwcHg7ICovXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMSkscmdiYSgwLDAsMCwxKSk7XG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmOyBmb250LXdlaWdodDogNDAwOyBcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbiN0aGVNZWRpYTpob3ZlciBpbWcsXG4jdGhlTWVkaWE6aG92ZXIgLnRpdGxle1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIG9wYWNpdHk6IDE7IFxuICAgIFxufVxuI3RoZU1lZGlhTW9iaWxlOmhvdmVyIGltZyxcbiN0aGVNZWRpYU1vYmlsZTpob3ZlciAudGl0bGVNb2JpbGV7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[2, "background-color", "#00001a", "color", "white", "height", "30px", "text-align", "center"], [2, "font-size", "13px"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Powered by TMDB. Developed by Yueting Wu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "O+Oc":
/*!****************************************!*\
  !*** ./src/app/app-service.service.ts ***!
  \****************************************/
/*! exports provided: AppServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServiceService", function() { return AppServiceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppServiceService {
    constructor(http) {
        this.http = http;
    }
    //homepage
    getCurrentMovies() {
        // return this.http.get('http://localhost:8080/currentMovies');
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/currentMovies');
    }
    getPopularMovies() {
        // return this.http.get('http://localhost:8080/popularMovies');
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/popularMovies');
    }
    getTopRatedMovies() {
        // return this.http.get('http://localhost:8080/topRatedMovies');
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/topRatedMovies');
    }
    getTrendingMovies() {
        // return this.http.get('http://localhost:8080/trendingMovies');
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/trendingMovies');
    }
    getPopularTvShows() {
        // return this.http.get('http://localhost:8080/popularTvshows');
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/popularTvshows');
    }
    getTopRatedTvShows() {
        // return this.http.get('http://localhost:8080/topRatedTvShows');
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/topRatedTvShows');
    }
    getTrendingTvShows() {
        // return this.http.get('http://localhost:8080/trendingTvShows');
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/trendingTvShows');
    }
    getMoviesVideo(id) {
        const theId = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                movieId: id
            }
        });
        // return this.http.get('http://localhost:8080/MoviesVideo/', {params: theId});
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/MoviesVideo/', { params: theId });
    }
    getMoviesDetails(id) {
        const theId = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                movieId: id
            }
        });
        // return this.http.get('http://localhost:8080/MoviesDetails/',{params: theId});
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/MoviesDetails/', { params: theId });
    }
    getMovieCast(id) {
        const theId = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                movieId: id
            }
        });
        // return this.http.get('http://localhost:8080/MovieCast/',{params: theId});
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/MovieCast/', { params: theId });
    }
    getMovieReviews(id) {
        const theId = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                movieId: id
            }
        });
        // return this.http.get('http://localhost:8080/MovieReviews/',{params: theId});
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/MovieReviews/', { params: theId });
    }
    getMovieRecommended(id) {
        const theId = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                movieId: id
            }
        });
        // return this.http.get('http://localhost:8080/MovieRecommended/',{params: theId});
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/MovieRecommended/', { params: theId });
    }
    getMovieSimilar(id) {
        const theId = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                movieId: id
            }
        });
        // return this.http.get('http://localhost:8080/MovieSimilar/',{params: theId});
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/MovieSimilar/', { params: theId });
    }
    ////////////////////////////////////////////////////////////////////////////////////////////
    getTvVideo(id) {
        const theId = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                tvId: id
            }
        });
        // return this.http.get('http://localhost:8080/TvVideo/', {params: theId});
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/TvVideo/', { params: theId });
    }
    getTvDetails(id) {
        const theId = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                tvId: id
            }
        });
        // return this.http.get('http://localhost:8080/TvDetails/',{params: theId});
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/TvDetails/', { params: theId });
    }
    getTvCast(id) {
        const theId = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                tvId: id
            }
        });
        // return this.http.get('http://localhost:8080/TvCast/',{params: theId});
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/TvCast/', { params: theId });
    }
    getTvReviews(id) {
        const theId = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                tvId: id
            }
        });
        // return this.http.get('http://localhost:8080/TvReviews/',{params: theId});
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/TvReviews/', { params: theId });
    }
    getTvRecommended(id) {
        const theId = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                tvId: id
            }
        });
        // return this.http.get('http://localhost:8080/TvRecommended/',{params: theId});
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/TvRecommended/', { params: theId });
    }
    getTvSimilar(id) {
        const theId = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                tvId: id
            }
        });
        // return this.http.get('http://localhost:8080/TvSimilar/',{params: theId});
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/TvSimilar/', { params: theId });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    getCastDetails(id) {
        const theId = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                CastId: id
            }
        });
        // return this.http.get('http://localhost:8080/CastDetails/',{params: theId});
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/CastDetails/', { params: theId });
    }
    getPersonExId(id) {
        const theId = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                CastId: id
            }
        });
        // return this.http.get('http://localhost:8080/PersonExternal/',{params: theId});
        return this.http.get('https://hw8-angular-310200.wl.r.appspot.com/PersonExternal/', { params: theId });
    }
    getSearchResult(userInput) {
        const theInput = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                inputString: userInput
            }
        });
        if (userInput === '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
        console.log(userInput);
        // var temp = this.http.get<any[]>('http://localhost:8080/getSearchResult',{params: theInput});
        var temp = this.http.get('https://hw8-angular-310200.wl.r.appspot.com/getSearchResult', { params: theInput });
        return temp;
    }
}
AppServiceService.ɵfac = function AppServiceService_Factory(t) { return new (t || AppServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AppServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AppServiceService, factory: AppServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
    constructor() {
        this.title = 'angular-hw8';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[2, "background-color", "#000033", "height", "810px", "overflow-y", "auto", "overflow-x", "hidden"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */", "div[_ngcontent-%COMP%]::-webkit-scrollbar {\n      width: 9px;\n    }\n\n    \n    div[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n      background: rgba(255, 255, 255, 0.157); \n      border-radius:10px;\n    }\n    \n    \n    div[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n      background: #b6b5b5;\n      border-radius:10px;\n    }\n\n    \n    div[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n      background: #555; \n    }"] });


/***/ }),

/***/ "TGut":
/*!************************************************!*\
  !*** ./src/app/localstorageservice.service.ts ***!
  \************************************************/
/*! exports provided: LocalstorageserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalstorageserviceService", function() { return LocalstorageserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LocalstorageserviceService {
    constructor() { }
    // public mylist = [];
    set(key, value) {
        const keyString = JSON.stringify(key);
        // this.mylist.unshift(keyString);
        localStorage.setItem(keyString, JSON.stringify(value));
    }
    remove(key) {
        const keyString = JSON.stringify(key);
        localStorage.removeItem(keyString);
        // delete this.mylist[keyString];
    }
    get(key) {
        const keyString = JSON.stringify(key);
        //console.log(localStorage.getItem(keyString));
        return localStorage.getItem(keyString);
    }
}
LocalstorageserviceService.ɵfac = function LocalstorageserviceService_Factory(t) { return new (t || LocalstorageserviceService)(); };
LocalstorageserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalstorageserviceService, factory: LocalstorageserviceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mylist/mylist.component */ "6DPj");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/movie-details/movie-details.component */ "4cG8");
/* harmony import */ var _components_tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tv-details/tv-details.component */ "mv0o");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _localstorageservice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./localstorageservice.service */ "TGut");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");





// import { FirstpageComponent } from './components/firstpage/firstpage.component';
// import { SecondpageComponent } from './components/secondpage/secondpage.component';
// import { CommonpageComponent } from './components/commonpage/commonpage.component';



// import { FirstChildComponent } from './components/first-child/first-child.component';








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [_localstorageservice_service__WEBPACK_IMPORTED_MODULE_12__["LocalstorageserviceService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__["YouTubePlayerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"],
        // FirstpageComponent,
        // SecondpageComponent,
        // CommonpageComponent,
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
        _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_6__["MylistComponent"],
        // FirstChildComponent,
        _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_8__["MovieDetailsComponent"],
        _components_tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_9__["TvDetailsComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__["YouTubePlayerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"]] }); })();


/***/ }),

/***/ "g/Dx":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app-service.service */ "O+Oc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["instance"];
function NavBarComponent_ng_template_20_div_0_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const r_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).result;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w780" + r_r4.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function NavBarComponent_ng_template_20_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function NavBarComponent_ng_template_20_div_0_ngb_highlight_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngb-highlight", 23);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const r_r4 = ctx_r12.result;
    const t_r5 = ctx_r12.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("result", r_r4.title || r_r4.name)("term", t_r5);
} }
function NavBarComponent_ng_template_20_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavBarComponent_ng_template_20_div_0_img_2_Template, 1, 1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NavBarComponent_ng_template_20_div_0_ng_template_3_Template, 1, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NavBarComponent_ng_template_20_div_0_ngb_highlight_5_Template, 1, 2, "ngb-highlight", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const r_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().result;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", r_r4.media_type, "/", r_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", r_r4.backdrop_path != null && r_r4.backdrop_path.length > 0)("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", r_r4.title != null && (r_r4.title == null ? null : r_r4.title.length) > 0 || r_r4.name != null && (r_r4.name == null ? null : r_r4.name.length) > 0);
} }
function NavBarComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NavBarComponent_ng_template_20_div_0_Template, 6, 5, "div", 17);
} if (rf & 2) {
    const r_r4 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", r_r4.media_type == "movie" || r_r4.media_type == "tv");
} }
function NavBarComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Sorry, suggestions could not be loaded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["active"]; };
const _c2 = function () { return { exact: true }; };
const _c3 = function () { return ["/"]; };
const _c4 = function () { return ["/mylist"]; };
class NavBarComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.titleArray = [];
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.click$ = " ";
        this.searching = false;
        this.searchFailed = false;
        // public search: any;
        this.formatter = (value) => " ";
        // search: OperatorFunction<any, any[]> = (text$: Observable<any>) =>
        //   text$.pipe(
        //     debounceTime(1000),
        //     distinctUntilChanged(),
        //     switchMap(response =>
        //       this.service.getSearchResult(response).pipe( 
        //         // tap(response => console.log('tap ' + response[0]["media_type"])),
        //         tap(response => console.log('tap ' +response.length)),
        //       )
        //     ),
        //   )
        this.search = (text$) => {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(response => this.service.getSearchResult(response)));
        };
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    ngOnInit() {
    }
    resultFormatBandListValue(value) {
        if (value.title) {
            return value.title;
        }
        else if (value.name) {
            return value.name;
        }
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_3__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], viewQuery: function NavBarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.instance = _t.first);
    } }, decls: 25, vars: 18, consts: [["href", "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap", "rel", "stylesheet"], [1, "navbar", "navbar-expand-md", "navbar-dark", "sticky-top", 2, "background-color", "#00001a", "text-align", "right", "color", "white"], ["routerLink", "/", 1, "navbar-brand", 2, "color", "white"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", 3, "routerLinkActive", "routerLinkActiveOptions"], [1, "nav-link", 3, "routerLink"], [1, "sr-only"], [1, "nav-item", 3, "routerLinkActive"], [1, "form-inline", "my-2", "my-lg-0", "mr-sm-5"], [1, "form-group"], ["rt", ""], ["id", "typeahead-http", "type", "text", "placeholder", "Search", 1, "form-control", "mr-sm-2", 2, "color", "white", "background-color", "#00001a", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "resultFormatter", "ngModelChange", "focus"], ["instance", "ngbTypeahead"], ["class", "invalid-feedback", 4, "ngIf"], [4, "ngIf"], [2, "color", "white", 3, "routerLink"], ["class", "mr-1", "style", "width: 70px", 3, "src", 4, "ngIf", "ngIfElse"], ["noPath", ""], [3, "result", "term", 4, "ngIf"], [1, "mr-1", 2, "width", "70px", 3, "src"], [3, "result", "term"], [1, "invalid-feedback"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "USCFilm");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "fieldset", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, NavBarComponent_ng_template_20_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NavBarComponent_Template_input_ngModelChange_22_listener($event) { return ctx.model = $event; })("focus", function NavBarComponent_Template_input_focus_22_listener($event) { return ctx.focus$.next($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, NavBarComponent_div_24_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](14, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](15, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.searchFailed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model)("ngbTypeahead", ctx.search)("resultTemplate", _r0)("inputFormatter", ctx.formatter)("resultFormatter", ctx.resultFormatBandListValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.searchFailed);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbHighlight"]], styles: ["ngb-typeahead-window.dropdown-menu { \n    width: 400px;\n    \n    background-color:#000033 !important;\n    color: white !important;\n    border: thin;\n    font-family: 'Noto Sans', sans-serif; \n    font-weight: 400; \n    font-size: 15px;    \n}\na[_ngcontent-%COMP%]:hover{\n    text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7R0FLRztBQUNIO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixtQ0FBbUM7SUFDbkMsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAubmF2LWxpbmt7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5uYXYtbGluazphY3RpdmV7XG4gICAgY29sb3I6IHdoaXRlO1xufSAqL1xuOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93LmRyb3Bkb3duLW1lbnUgeyBcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgLyogd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwMDAzMyAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogdGhpbjtcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucycsIHNhbnMtc2VyaWY7IFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7IFxuICAgIGZvbnQtc2l6ZTogMTVweDsgICAgXG59XG5hOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiJdfQ== */", "input[_ngcontent-%COMP%]{\n            outline: none;\n            border-left-style: none;\n            border-right-style: none; \n            border-top-style: none;\n            border-radius: 0%;\n        }\n        textarea[_ngcontent-%COMP%]:focus, [_ngcontent-%COMP%]:focus, input.form-control[_ngcontent-%COMP%]:focus {\n            outline:0;\n            outline-width: 0 !important;\n            box-shadow: none;\n            -moz-box-shadow: none;\n            -webkit-box-shadow: none;\n            border-color: inherit;\n            \n        }"] });


/***/ }),

/***/ "kHmC":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-service.service */ "O+Oc");
/* harmony import */ var _localstorageservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../localstorageservice.service */ "TGut");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








function HomepageComponent_div_3_7_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r13.currMoviesid[i_r12], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r13.currMoviesimages[i_r12], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.currMoviestitle[i_r12]);
} }
function HomepageComponent_div_3_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_3_7_ng_template_0_Template, 7, 3, "ng-template", 22);
} }
function HomepageComponent_div_3_div_9_7_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", item_r20["category"], "/", item_r20["id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r20["poster"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r20["title"]);
} }
function HomepageComponent_div_3_div_9_7_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomepageComponent_div_3_div_9_7_ng_template_0_div_1_Template, 7, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const media_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", media_r16);
} }
function HomepageComponent_div_3_div_9_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_3_div_9_7_ng_template_0_Template, 2, 1, "ng-template", 22);
} }
function HomepageComponent_div_3_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ngb-carousel", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomepageComponent_div_3_div_9_7_Template, 1, 0, undefined, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.cwlistMatrix);
} }
function HomepageComponent_div_3_17_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r27 = ctx.$implicit;
    const j_r28 = ctx.index;
    const i_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r26.popMoviesidMatrix[i_r24][j_r28], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r26.popMoviestitleMatrix[i_r24][j_r28], " ");
} }
function HomepageComponent_div_3_17_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomepageComponent_div_3_17_ng_template_0_div_1_Template, 6, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imgArray_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", imgArray_r23);
} }
function HomepageComponent_div_3_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_3_17_ng_template_0_Template, 2, 1, "ng-template", 22);
} }
function HomepageComponent_div_3_25_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r35 = ctx.$implicit;
    const j_r36 = ctx.index;
    const i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r34.trMoviesidMatrix[i_r32][j_r36], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r34.trMoviestitleMatrix[i_r32][j_r36]);
} }
function HomepageComponent_div_3_25_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomepageComponent_div_3_25_ng_template_0_div_1_Template, 7, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imgArray_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", imgArray_r31);
} }
function HomepageComponent_div_3_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_3_25_ng_template_0_Template, 2, 1, "ng-template", 22);
} }
function HomepageComponent_div_3_33_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r43 = ctx.$implicit;
    const j_r44 = ctx.index;
    const i_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r42.trendMoviesidMatrix[i_r40][j_r44], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r43, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r42.trendMoviestitleMatrix[i_r40][j_r44]);
} }
function HomepageComponent_div_3_33_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomepageComponent_div_3_33_ng_template_0_div_1_Template, 7, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imgArray_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", imgArray_r39);
} }
function HomepageComponent_div_3_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_3_33_ng_template_0_Template, 2, 1, "ng-template", 22);
} }
function HomepageComponent_div_3_41_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r51 = ctx.$implicit;
    const j_r52 = ctx.index;
    const i_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", ctx_r50.popTvidMatrix[i_r48][j_r52], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r51, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r50.popTvnameMatrix[i_r48][j_r52]);
} }
function HomepageComponent_div_3_41_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomepageComponent_div_3_41_ng_template_0_div_1_Template, 7, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imgArray_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", imgArray_r47);
} }
function HomepageComponent_div_3_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_3_41_ng_template_0_Template, 2, 1, "ng-template", 22);
} }
function HomepageComponent_div_3_49_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r59 = ctx.$implicit;
    const j_r60 = ctx.index;
    const i_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", ctx_r58.trTvidMatrix[i_r56][j_r60], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r59, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r58.trTvnameMatrix[i_r56][j_r60]);
} }
function HomepageComponent_div_3_49_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomepageComponent_div_3_49_ng_template_0_div_1_Template, 7, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imgArray_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", imgArray_r55);
} }
function HomepageComponent_div_3_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_3_49_ng_template_0_Template, 2, 1, "ng-template", 22);
} }
function HomepageComponent_div_3_57_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r67 = ctx.$implicit;
    const j_r68 = ctx.index;
    const i_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", ctx_r66.trendTvidMatrix[i_r64][j_r68], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r67, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r66.trendTvnameMatrix[i_r64][j_r68]);
} }
function HomepageComponent_div_3_57_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomepageComponent_div_3_57_ng_template_0_div_1_Template, 7, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imgArray_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", imgArray_r63);
} }
function HomepageComponent_div_3_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_div_3_57_ng_template_0_Template, 2, 1, "ng-template", 22);
} }
function HomepageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ngb-carousel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomepageComponent_div_3_7_Template, 1, 0, undefined, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HomepageComponent_div_3_div_9_Template, 8, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Popular Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ngb-carousel", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HomepageComponent_div_3_17_Template, 1, 0, undefined, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Top Rated Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ngb-carousel", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, HomepageComponent_div_3_25_Template, 1, 0, undefined, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Trending Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ngb-carousel", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, HomepageComponent_div_3_33_Template, 1, 0, undefined, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Popular TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ngb-carousel", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, HomepageComponent_div_3_41_Template, 1, 0, undefined, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Top Rated TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ngb-carousel", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, HomepageComponent_div_3_49_Template, 1, 0, undefined, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Trending TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ngb-carousel", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, HomepageComponent_div_3_57_Template, 1, 0, undefined, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.currMoviesimages);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.cwlist == null ? null : ctx_r0.cwlist.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.popMoviesimagesMatrix);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.trMoviesimagesMatrix);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.trendMoviesimagesMatrix);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.popTvimagesMatrix);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.trTvimagesMatrix);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.trendTvimagesMatrix);
} }
function HomepageComponent_ng_template_4_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r81.currMoviesid[i_r80], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r81.currMoviesimages[i_r80], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r81.currMoviestitle[i_r80]);
} }
function HomepageComponent_ng_template_4_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_ng_template_4_6_ng_template_0_Template, 7, 3, "ng-template", 22);
} }
function HomepageComponent_ng_template_4_div_8_7_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", ctx_r86.cwMobileCate[i_r85], "/", ctx_r86.cwMobileId[i_r85], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r86.cwMobilePoster[i_r85], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r86.cwMobileTitle[i_r85]);
} }
function HomepageComponent_ng_template_4_div_8_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_ng_template_4_div_8_7_ng_template_0_Template, 7, 4, "ng-template", 22);
} }
function HomepageComponent_ng_template_4_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ngb-carousel", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomepageComponent_ng_template_4_div_8_7_Template, 1, 0, undefined, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r72.cwMobileId);
} }
function HomepageComponent_ng_template_4_16_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r89 = ctx_r91.index;
    const imgArray_r88 = ctx_r91.$implicit;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r90.popMoviesidArray[i_r89], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", imgArray_r88, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r90.popMoviestitleArray[i_r89], " ");
} }
function HomepageComponent_ng_template_4_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_ng_template_4_16_ng_template_0_Template, 6, 3, "ng-template", 22);
} }
function HomepageComponent_ng_template_4_24_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r93 = ctx_r95.index;
    const imgArray_r92 = ctx_r95.$implicit;
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r94.trMoviesidArray[i_r93], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", imgArray_r92, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r94.trMoviestitleArray[i_r93]);
} }
function HomepageComponent_ng_template_4_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_ng_template_4_24_ng_template_0_Template, 7, 3, "ng-template", 22);
} }
function HomepageComponent_ng_template_4_32_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r97 = ctx_r99.index;
    const imgArray_r96 = ctx_r99.$implicit;
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r98.trendMoviesidArray[i_r97], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", imgArray_r96, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r98.trendMoviestitleArray[i_r97]);
} }
function HomepageComponent_ng_template_4_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_ng_template_4_32_ng_template_0_Template, 7, 3, "ng-template", 22);
} }
function HomepageComponent_ng_template_4_40_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r101 = ctx_r103.index;
    const imgArray_r100 = ctx_r103.$implicit;
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", ctx_r102.popTvidArray[i_r101], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", imgArray_r100, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r102.popTvnameArray[i_r101]);
} }
function HomepageComponent_ng_template_4_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_ng_template_4_40_ng_template_0_Template, 7, 3, "ng-template", 22);
} }
function HomepageComponent_ng_template_4_48_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r105 = ctx_r107.index;
    const imgArray_r104 = ctx_r107.$implicit;
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", ctx_r106.trTvidArray[i_r105], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", imgArray_r104, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r106.trTvnameArray[i_r105]);
} }
function HomepageComponent_ng_template_4_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_ng_template_4_48_ng_template_0_Template, 7, 3, "ng-template", 22);
} }
function HomepageComponent_ng_template_4_56_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r109 = ctx_r111.index;
    const imgArray_r108 = ctx_r111.$implicit;
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", ctx_r110.trendTvidArray[i_r109], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", imgArray_r108, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r110.trendTvnameArray[i_r109]);
} }
function HomepageComponent_ng_template_4_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomepageComponent_ng_template_4_56_ng_template_0_Template, 7, 3, "ng-template", 22);
} }
function HomepageComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngb-carousel", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomepageComponent_ng_template_4_6_Template, 1, 0, undefined, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomepageComponent_ng_template_4_div_8_Template, 8, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h1", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Popular Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ngb-carousel", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HomepageComponent_ng_template_4_16_Template, 1, 0, undefined, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h1", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Top Rated Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ngb-carousel", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, HomepageComponent_ng_template_4_24_Template, 1, 0, undefined, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h1", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Trending Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ngb-carousel", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, HomepageComponent_ng_template_4_32_Template, 1, 0, undefined, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h1", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Popular TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ngb-carousel", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, HomepageComponent_ng_template_4_40_Template, 1, 0, undefined, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h1", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Top Rated TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ngb-carousel", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, HomepageComponent_ng_template_4_48_Template, 1, 0, undefined, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h1", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Trending TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ngb-carousel", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, HomepageComponent_ng_template_4_56_Template, 1, 0, undefined, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.currMoviesimages);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r2.cwlist == null ? null : ctx_r2.cwlist.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.popMoviesimgesArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.trMoviesimgesArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.trendMoviesimgesArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.popTvimagesArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.trTvimagesArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.trendTvimagesArray);
} }
class HomepageComponent {
    //title = 'angular-hw8';  
    constructor(service, config, storageLocal, breakpointObserver) {
        this.service = service;
        this.storageLocal = storageLocal;
        this.breakpointObserver = breakpointObserver;
        this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 560px)');
        this.cwlist = [];
        this.cwlist1 = [];
        this.cwlist2 = [];
        this.cwlist3 = [];
        this.cwlist4 = [];
        this.cwlistMatrix = [];
        this.watchListKey = [];
        this.keyArray = [];
        this.valueArray = [];
        this.cwMobileId = [];
        this.cwMobileCate = [];
        this.cwMobilePoster = [];
        this.cwMobileTitle = [];
        this.currMoviesimages = [];
        this.currMoviesid = [];
        this.currMoviestitle = [];
        this.popMoviesimages1 = [];
        this.popMoviesid1 = [];
        this.popMoviestitle1 = [];
        this.popMoviesimages2 = [];
        this.popMoviesid2 = [];
        this.popMoviestitle2 = [];
        this.popMoviesimages3 = [];
        this.popMoviesid3 = [];
        this.popMoviestitle3 = [];
        this.popMoviesimages4 = [];
        this.popMoviesid4 = [];
        this.popMoviestitle4 = [];
        //popMovies Matrix
        this.popMoviesimagesMatrix = [];
        this.popMoviestitleMatrix = [];
        this.popMoviesidMatrix = [];
        this.popMoviesimgesArray = [];
        this.popMoviestitleArray = [];
        this.popMoviesidArray = [];
        // @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
        this.trMoviesimages1 = [];
        this.trMoviesid1 = [];
        this.trMoviestitle1 = [];
        this.trMoviesimages2 = [];
        this.trMoviesid2 = [];
        this.trMoviestitle2 = [];
        this.trMoviesimages3 = [];
        this.trMoviesid3 = [];
        this.trMoviestitle3 = [];
        this.trMoviesimages4 = [];
        this.trMoviesid4 = [];
        this.trMoviestitle4 = [];
        //topRatedMovies Matrix
        this.trMoviesimagesMatrix = [];
        this.trMoviestitleMatrix = [];
        this.trMoviesidMatrix = [];
        this.trMoviesimgesArray = [];
        this.trMoviestitleArray = [];
        this.trMoviesidArray = [];
        this.trendMoviesimages1 = [];
        this.trendMoviesid1 = [];
        this.trendMoviestitle1 = [];
        this.trendMoviesimages2 = [];
        this.trendMoviesid2 = [];
        this.trendMoviestitle2 = [];
        this.trendMoviesimages3 = [];
        this.trendMoviesid3 = [];
        this.trendMoviestitle3 = [];
        this.trendMoviesimages4 = [];
        this.trendMoviesid4 = [];
        this.trendMoviestitle4 = [];
        //trendingMovies Matrix
        this.trendMoviesimagesMatrix = [];
        this.trendMoviestitleMatrix = [];
        this.trendMoviesidMatrix = [];
        this.trendMoviesimgesArray = [];
        this.trendMoviestitleArray = [];
        this.trendMoviesidArray = [];
        this.popTvimages1 = [];
        this.popTvid1 = [];
        this.popTvname1 = [];
        this.popTvimages2 = [];
        this.popTvid2 = [];
        this.popTvname2 = [];
        this.popTvimages3 = [];
        this.popTvid3 = [];
        this.popTvname3 = [];
        this.popTvimages4 = [];
        this.popTvid4 = [];
        this.popTvname4 = [];
        //popMovies Matrix
        this.popTvimagesMatrix = [];
        this.popTvnameMatrix = [];
        this.popTvidMatrix = [];
        this.popTvimagesArray = [];
        this.popTvnameArray = [];
        this.popTvidArray = [];
        this.trTvimages1 = [];
        this.trTvid1 = [];
        this.trTvname1 = [];
        this.trTvimages2 = [];
        this.trTvid2 = [];
        this.trTvname2 = [];
        this.trTvimages3 = [];
        this.trTvid3 = [];
        this.trTvname3 = [];
        this.trTvimages4 = [];
        this.trTvid4 = [];
        this.trTvname4 = [];
        //topRatedTv Matrix
        this.trTvimagesMatrix = [];
        this.trTvidMatrix = [];
        this.trTvnameMatrix = [];
        this.trTvimagesArray = [];
        this.trTvidArray = [];
        this.trTvnameArray = [];
        this.trendTvimages1 = [];
        this.trendTvid1 = [];
        this.trendTvname1 = [];
        this.trendTvimages2 = [];
        this.trendTvid2 = [];
        this.trendTvname2 = [];
        this.trendTvimages3 = [];
        this.trendTvid3 = [];
        this.trendTvname3 = [];
        this.trendTvimages4 = [];
        this.trendTvid4 = [];
        this.trendTvname4 = [];
        //trendingTv Matrix
        this.trendTvimagesMatrix = [];
        this.trendTvnameMatrix = [];
        this.trendTvidMatrix = [];
        this.trendTvimagesArray = [];
        this.trendTvidArray = [];
        this.trendTvnameArray = [];
    }
    ngOnInit() {
        this.currentMovies();
        this.popularMovies();
        this.topRatedMovies();
        this.trendingMovies();
        this.popularTvshows();
        this.topRatedTvShows();
        this.trendingTvShows();
        this.continueWatching();
        if (this.isSmallScreen) {
            console.log("SmallScreen!");
        }
    }
    continueWatching() {
        this.watchListKey = Object.keys(localStorage);
        for (let i = 0; i < this.watchListKey.length; i++) {
            //console.log(this.watchListKey[i].substring(1,3));
            if (this.watchListKey[i].substring(1, 3) == "cw") {
                // console.log(localStorage.getItem(this.watchListKey[i]));
                var key = this.watchListKey[i].replace('"', "");
                var value = localStorage.getItem(this.watchListKey[i]).replace('"', "");
                // console.log(str);
                this.keyArray = key.substr(0, key.length - 1).split('^');
                this.valueArray = value.substr(0, value.length - 1).split('^');
                // this.valueArray = this.storageLocal.get(this.watchListKey[i]).split('^');
                this.cwlist.push({ id: this.keyArray[1], category: this.keyArray[2], time: this.valueArray[0], title: this.valueArray[1], poster: this.valueArray[2] });
            }
        }
        // console.log(this.watchlist);
        if (this.cwlist != null && this.cwlist.length != 0) {
            this.cwlist.sort(function (a, b) { return a.time - b.time; }).reverse();
            // console.log(this.cwlist);
            // this.cwMobile=this.cwlist.splice(0,24);
            // console.log(this.cwMobile);
        }
        var theLen = Math.min(this.cwlist.length, 24);
        for (var i = 0; i < theLen; i++) {
            this.cwMobileId.push(this.cwlist[i]["id"]);
            this.cwMobilePoster.push(this.cwlist[i]["poster"]);
            this.cwMobileCate.push(this.cwlist[i]["category"]);
            this.cwMobileTitle.push(this.cwlist[i]["title"]);
        }
        // console.log(this.cwMobilePoster);
        if (theLen > 18) {
            for (let i = 0; i < theLen; i++) {
                if (i >= 18 && i <= 23) {
                    this.cwlist4.push(this.cwlist[i]);
                }
                else if (i >= 12 && i <= 17) {
                    this.cwlist3.push(this.cwlist[i]);
                }
                else if (i >= 6 && i <= 11) {
                    this.cwlist2.push(this.cwlist[i]);
                }
                else {
                    this.cwlist1.push(this.cwlist[i]);
                }
            }
            this.cwlistMatrix = [this.cwlist1, this.cwlist2, this.cwlist3, this.cwlist4];
        }
        else if (theLen > 12) {
            for (let i = 0; i < theLen; i++) {
                if (i >= 12 && i <= 17) {
                    this.cwlist3.push(this.cwlist[i]);
                }
                else if (i >= 6 && i <= 11) {
                    this.cwlist2.push(this.cwlist[i]);
                }
                else {
                    this.cwlist1.push(this.cwlist[i]);
                }
            }
            this.cwlistMatrix = [this.cwlist1, this.cwlist2, this.cwlist3];
        }
        else if (theLen > 6) {
            for (let i = 0; i < theLen; i++) {
                if (i >= 6 && i <= 11) {
                    this.cwlist2.push(this.cwlist[i]);
                }
                else {
                    this.cwlist1.push(this.cwlist[i]);
                }
            }
            this.cwlistMatrix = [this.cwlist1, this.cwlist2];
        }
        else if (theLen > 0) {
            for (let i = 0; i < theLen; i++) {
                this.cwlist1.push(this.cwlist[i]);
            }
            this.cwlistMatrix = [this.cwlist1];
        }
        //console.log(this.cwlistMatrix);
    }
    currentMovies() {
        this.service.getCurrentMovies().subscribe((response) => {
            //console.log('Response from currentMovies API is ', response);
            for (var prop in response) {
                //console.log(this.currMoviesimages =[0,1,2,3,4].map((i) =>"https://image.tmdb.org/t/p/w780"+[response[prop]][0][i]["backdrop_path"]));
                this.currMoviesimages = [0, 1, 2, 3, 4].map((i) => "https://image.tmdb.org/t/p/w780" + [response[prop]][0][i]["backdrop_path"]);
                //console.log(this.currMoviesid = [0,1,2,3,4].map((i) => [response[prop]][0][i]["id"]));
                this.currMoviesid = [0, 1, 2, 3, 4].map((i) => [response[prop]][0][i]["id"]);
                //console.log(this.name = this.name.map((i) => response[prop][this.name[i]]["title"])
                this.currMoviestitle = [0, 1, 2, 3, 4].map((i) => [response[prop]][0][i]["title"]);
            }
        }, (error) => {
            console.log('Error is ', error);
        });
    }
    popularMovies() {
        this.service.getPopularMovies().subscribe((response) => {
            // console.log('Response from popularMovies API is ', response);
            var theLen = response["popularMovies"].length;
            for (var i = 0; i < theLen; i++) {
                if (i >= 18 && i <= 19) {
                    for (var i = 18; i < 20; i++) {
                        this.popMoviesid4.push(response["popularMovies"][i]["id"]);
                        this.popMoviestitle4.push(response["popularMovies"][i]["title"]);
                        if (response["popularMovies"][i]["poster_path"] != null || response["popularMovies"][i]["poster_path"].length > 0) {
                            this.popMoviesimages4.push('https://image.tmdb.org/t/p/w500' + response["popularMovies"][i]["poster_path"]);
                        }
                        else {
                            this.popMoviesimages4.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                if (i >= 12 && i <= 17) {
                    for (var i = 12; i < 18; i++) {
                        this.popMoviesid3.push(response["popularMovies"][i]["id"]);
                        this.popMoviestitle3.push(response["popularMovies"][i]["title"]);
                        if (response["popularMovies"][i]["poster_path"] != null || response["popularMovies"][i]["poster_path"].length > 0) {
                            this.popMoviesimages3.push('https://image.tmdb.org/t/p/w500' + response["popularMovies"][i]["poster_path"]);
                        }
                        else {
                            this.popMoviesimages3.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                if (i >= 6 && i <= 11) {
                    for (var i = 6; i < 12; i++) {
                        this.popMoviesid2.push(response["popularMovies"][i]["id"]);
                        this.popMoviestitle2.push(response["popularMovies"][i]["title"]);
                        if (response["popularMovies"][i]["poster_path"] != null || response["popularMovies"][i]["poster_path"].length > 0) {
                            this.popMoviesimages2.push('https://image.tmdb.org/t/p/w500' + response["popularMovies"][i]["poster_path"]);
                        }
                        else {
                            this.popMoviesimages2.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                if (i >= 0 && i <= 5) {
                    for (var i = 0; i < 6; i++) {
                        this.popMoviesid1.push(response["popularMovies"][i]["id"]);
                        this.popMoviestitle1.push(response["popularMovies"][i]["title"]);
                        if (response["popularMovies"][i]["poster_path"] != null || response["popularMovies"][i]["poster_path"].length > 0) {
                            this.popMoviesimages1.push('https://image.tmdb.org/t/p/w500' + response["popularMovies"][i]["poster_path"]);
                        }
                        else {
                            this.popMoviesimages1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
            }
            this.popMoviesimagesMatrix = [this.popMoviesimages1, this.popMoviesimages2, this.popMoviesimages3, this.popMoviesimages4];
            //console.log(this.popMoviesimagesMatrix);
            this.popMoviestitleMatrix = [this.popMoviestitle1, this.popMoviestitle2, this.popMoviestitle3, this.popMoviestitle4];
            //console.log(this.popMoviestitleMatrix);
            this.popMoviesidMatrix = [this.popMoviesid1, this.popMoviesid2, this.popMoviesid3, this.popMoviesid4];
            //console.log(this.popMoviesidMatrix);
            for (var i = 0; i < response["popularMovies"].length; i++) {
                if (response["popularMovies"][i]["poster_path"] != null && response["popularMovies"][i]["poster_path"] != undefined) {
                    this.popMoviesimgesArray.push("https://image.tmdb.org/t/p/w500" + response["popularMovies"][i]["poster_path"]);
                }
                else {
                    this.popMoviesimgesArray.push('https://cinemaone.net/images/movie_placeholder.png');
                }
                this.popMoviestitleArray.push(response["popularMovies"][i]["title"]);
                this.popMoviesidArray.push(response["popularMovies"][i]["id"]);
            }
            // console.log(this.popMoviesimgesArray);
            // console.log(this.popMoviestitleArray);
            // console.log(this.popMoviesidArray);
        }, (error) => {
            console.log('Error is ', error);
        });
    }
    topRatedMovies() {
        this.service.getTopRatedMovies().subscribe((response) => {
            //console.log('Response from topRatedMovies API is ', response);
            for (var i = 0; i < response["topRatedMovies"].length; i++) {
                if (response["topRatedMovies"][i]["poster_path"] != null || response["topRatedMovies"][i]["poster_path"] != undefined) {
                    this.trMoviesimgesArray.push("https://image.tmdb.org/t/p/w500" + response["topRatedMovies"][i]["poster_path"]);
                }
                else {
                    this.trMoviesimgesArray.push('https://cinemaone.net/images/movie_placeholder.png');
                }
                this.trMoviestitleArray.push(response["topRatedMovies"][i]["title"]);
                this.trMoviesidArray.push(response["topRatedMovies"][i]["id"]);
            }
            // console.log(this.trMoviesimgesArray);
            // console.log(this.trMoviestitleArray);
            // console.log(this.trMoviesidArray);
            var theLen = response["topRatedMovies"].length;
            for (var i = 0; i < theLen; i++) {
                if (i >= 18 && i <= 19) {
                    for (var i = 18; i < 20; i++) {
                        this.trMoviesid4.push(response["topRatedMovies"][i]["id"]);
                        this.trMoviestitle4.push(response["topRatedMovies"][i]["title"]);
                        if (response["topRatedMovies"][i]["poster_path"] != null || response["topRatedMovies"][i]["poster_path"] != undefined) {
                            this.trMoviesimages4.push("https://image.tmdb.org/t/p/w500" + response["topRatedMovies"][i]["poster_path"]);
                        }
                        else {
                            this.trMoviesimages4.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                if (i >= 12 && i <= 17) {
                    for (var i = 12; i < 18; i++) {
                        this.trMoviesid3.push(response["topRatedMovies"][i]["id"]);
                        this.trMoviestitle3.push(response["topRatedMovies"][i]["title"]);
                        if (response["topRatedMovies"][i]["poster_path"] != null || response["topRatedMovies"][i]["poster_path"] != undefined) {
                            this.trMoviesimages3.push("https://image.tmdb.org/t/p/w500" + response["topRatedMovies"][i]["poster_path"]);
                        }
                        else {
                            this.trMoviesimages3.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                if (i >= 6 && i <= 11) {
                    for (var i = 6; i < 12; i++) {
                        this.trMoviesid2.push(response["topRatedMovies"][i]["id"]);
                        this.trMoviestitle2.push(response["topRatedMovies"][i]["title"]);
                        if (response["topRatedMovies"][i]["poster_path"] != null || response["topRatedMovies"][i]["poster_path"] != undefined) {
                            this.trMoviesimages2.push("https://image.tmdb.org/t/p/w500" + response["topRatedMovies"][i]["poster_path"]);
                        }
                        else {
                            this.trMoviesimages2.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                if (i >= 0 && i <= 5) {
                    for (var i = 0; i < 6; i++) {
                        this.trMoviesid1.push(response["topRatedMovies"][i]["id"]);
                        this.trMoviestitle1.push(response["topRatedMovies"][i]["title"]);
                        if (response["topRatedMovies"][i]["poster_path"] != null || response["topRatedMovies"][i]["poster_path"] != undefined) {
                            this.trMoviesimages1.push("https://image.tmdb.org/t/p/w500" + response["topRatedMovies"][i]["poster_path"]);
                        }
                        else {
                            this.trMoviesimages1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
            }
            this.trMoviesimagesMatrix = [this.trMoviesimages1, this.trMoviesimages2, this.trMoviesimages3, this.trMoviesimages4];
            //console.log(this.trMoviesimagesMatrix);
            this.trMoviestitleMatrix = [this.trMoviestitle1, this.trMoviestitle2, this.trMoviestitle3, this.trMoviestitle4];
            //console.log(this.trMoviestitleMatrix);
            this.trMoviesidMatrix = [this.trMoviesid1, this.trMoviesid2, this.trMoviesid3, this.trMoviesid4];
            //console.log(this.trMoviesidMatrix);
        }, (error) => {
            console.log('Error is ', error);
        });
    }
    trendingMovies() {
        this.service.getTrendingMovies().subscribe((response) => {
            //console.log('Response from trendingMovies API is ', response);
            for (var i = 0; i < response["trendingMovies"].length; i++) {
                if (response["trendingMovies"][i]["poster_path"] != null || response["trendingMovies"][i]["poster_path"] != undefined) {
                    this.trendMoviesimgesArray.push("https://image.tmdb.org/t/p/w500" + response["trendingMovies"][i]["poster_path"]);
                }
                else {
                    this.trendMoviesimgesArray.push('https://cinemaone.net/images/movie_placeholder.png');
                }
                this.trendMoviestitleArray.push(response["trendingMovies"][i]["title"]);
                this.trendMoviesidArray.push(response["trendingMovies"][i]["id"]);
            }
            // console.log(this.trendMoviesimgesArray);
            // console.log(this.trendMoviestitleArray);
            // console.log(this.trendMoviesidArray);
            var theLen = response["trendingMovies"].length;
            for (var i = 0; i < theLen; i++) {
                if (i >= 18 && i <= 19) {
                    for (var i = 18; i < 20; i++) {
                        this.trendMoviesid4.push(response["trendingMovies"][i]["id"]);
                        this.trendMoviestitle4.push(response["trendingMovies"][i]["title"]);
                        if (response["trendingMovies"][i]["poster_path"] != null || response["trendingMovies"][i]["poster_path"] != undefined) {
                            this.trendMoviesimages4.push("https://image.tmdb.org/t/p/w500" + response["trendingMovies"][i]["poster_path"]);
                        }
                        else {
                            this.trendMoviesimages4.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                if (i >= 12 && i <= 17) {
                    for (var i = 12; i < 18; i++) {
                        this.trendMoviesid3.push(response["trendingMovies"][i]["id"]);
                        this.trendMoviestitle3.push(response["trendingMovies"][i]["title"]);
                        if (response["trendingMovies"][i]["poster_path"] != null || response["trendingMovies"][i]["poster_path"] != undefined) {
                            this.trendMoviesimages3.push("https://image.tmdb.org/t/p/w500" + response["trendingMovies"][i]["poster_path"]);
                        }
                        else {
                            this.trendMoviesimages3.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                if (i >= 6 && i <= 11) {
                    for (var i = 6; i < 12; i++) {
                        this.trendMoviesid2.push(response["trendingMovies"][i]["id"]);
                        this.trendMoviestitle2.push(response["trendingMovies"][i]["title"]);
                        if (response["trendingMovies"][i]["poster_path"] != null || response["trendingMovies"][i]["poster_path"] != undefined) {
                            this.trendMoviesimages2.push("https://image.tmdb.org/t/p/w500" + response["trendingMovies"][i]["poster_path"]);
                        }
                        else {
                            this.trendMoviesimages2.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                if (i >= 0 && i <= 5) {
                    for (var i = 0; i < 6; i++) {
                        this.trendMoviesid1.push(response["trendingMovies"][i]["id"]);
                        this.trendMoviestitle1.push(response["trendingMovies"][i]["title"]);
                        if (response["trendingMovies"][i]["poster_path"] != null || response["trendingMovies"][i]["poster_path"] != undefined) {
                            this.trendMoviesimages1.push("https://image.tmdb.org/t/p/w500" + response["trendingMovies"][i]["poster_path"]);
                        }
                        else {
                            this.trendMoviesimages1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
            }
            this.trendMoviesimagesMatrix = [this.trendMoviesimages1, this.trendMoviesimages2, this.trendMoviesimages3, this.trendMoviesimages4];
            //console.log(this.trendMoviesimagesMatrix);
            this.trendMoviestitleMatrix = [this.trendMoviestitle1, this.trendMoviestitle2, this.trendMoviestitle3, this.trendMoviestitle4];
            //console.log(this.trMoviestitleMatrix);
            this.trendMoviesidMatrix = [this.trendMoviesid1, this.trendMoviesid2, this.trendMoviesid3, this.trendMoviesid4];
            //console.log(this.trMoviesidMatrix);
        }, (error) => {
            console.log('Error is ', error);
        });
    }
    popularTvshows() {
        this.service.getPopularTvShows().subscribe((response) => {
            //console.log('Response from getPopularTvShows API is ', response);
            for (var i = 0; i < response["popularTvShows"].length; i++) {
                if (response["popularTvShows"][i]["poster_path"] != null || response["popularTvShows"][i]["poster_path"] != undefined) {
                    this.popTvimagesArray.push("https://image.tmdb.org/t/p/w500" + response["popularTvShows"][i]["poster_path"]);
                }
                else {
                    this.popTvimagesArray.push('https://cinemaone.net/images/movie_placeholder.png');
                }
                this.popTvnameArray.push(response["popularTvShows"][i]["name"]);
                this.popTvidArray.push(response["popularTvShows"][i]["id"]);
            }
            // console.log(this.popTvimagesArray);
            // console.log(this.popTvnameArray);
            // console.log(this.popTvidArray);
            var theLen = response["popularTvShows"].length;
            for (var i = 0; i < theLen; i++) {
                if (i >= 18 && i <= 19) {
                    for (var i = 18; i < 20; i++) {
                        this.popTvid4.push(response["popularTvShows"][i]["id"]);
                        this.popTvname4.push(response["popularTvShows"][i]["name"]);
                        if (response["popularTvShows"][i]["poster_path"] != null || response["popularTvShows"][i]["poster_path"] != undefined) {
                            this.popTvimages4.push("https://image.tmdb.org/t/p/w500" + response["popularTvShows"][i]["poster_path"]);
                        }
                        else {
                            this.popTvimages4.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                if (i >= 12 && i <= 17) {
                    for (var i = 12; i < 18; i++) {
                        this.popTvid3.push(response["popularTvShows"][i]["id"]);
                        this.popTvname3.push(response["popularTvShows"][i]["name"]);
                        if (response["popularTvShows"][i]["poster_path"] != null || response["popularTvShows"][i]["poster_path"] != undefined) {
                            this.popTvimages3.push("https://image.tmdb.org/t/p/w500" + response["popularTvShows"][i]["poster_path"]);
                        }
                        else {
                            this.popTvimages3.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                if (i >= 6 && i <= 11) {
                    for (var i = 6; i < 12; i++) {
                        this.popTvid2.push(response["popularTvShows"][i]["id"]);
                        this.popTvname2.push(response["popularTvShows"][i]["name"]);
                        if (response["popularTvShows"][i]["poster_path"] != null || response["popularTvShows"][i]["poster_path"] != undefined) {
                            this.popTvimages2.push("https://image.tmdb.org/t/p/w500" + response["popularTvShows"][i]["poster_path"]);
                        }
                        else {
                            this.popTvimages2.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                if (i >= 0 && i <= 5) {
                    for (var i = 0; i < 6; i++) {
                        this.popTvid1.push(response["popularTvShows"][i]["id"]);
                        this.popTvname1.push(response["popularTvShows"][i]["name"]);
                        if (response["popularTvShows"][i]["poster_path"] != null || response["popularTvShows"][i]["poster_path"] != undefined) {
                            this.popTvimages1.push("https://image.tmdb.org/t/p/w500" + response["popularTvShows"][i]["poster_path"]);
                        }
                        else {
                            this.popTvimages1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
            }
            this.popTvimagesMatrix = [this.popTvimages1, this.popTvimages2, this.popTvimages3, this.popTvimages4];
            //console.log(this.popTvimagesMatrix);
            this.popTvnameMatrix = [this.popTvname1, this.popTvname2, this.popTvname3, this.popTvname4];
            //console.log(this.popTvnameMatrix);
            this.popTvidMatrix = [this.popTvid1, this.popTvid2, this.popTvid3, this.popTvid4];
            //console.log(this.popTvidMatrix);
        }, (error) => {
            console.log('Error is ', error);
        });
    }
    topRatedTvShows() {
        this.service.getTopRatedTvShows().subscribe((response) => {
            //console.log('Response from topRatedTvShows API is ', response);
            for (var i = 0; i < response["topRatedTvShows"].length; i++) {
                if (response["topRatedTvShows"][i]["poster_path"] != null || response["topRatedTvShows"][i]["poster_path"] != undefined) {
                    this.trTvimagesArray.push("https://image.tmdb.org/t/p/w500" + response["topRatedTvShows"][i]["poster_path"]);
                }
                else {
                    this.trTvimagesArray.push('https://cinemaone.net/images/movie_placeholder.png');
                }
                this.trTvnameArray.push(response["topRatedTvShows"][i]["name"]);
                this.trTvidArray.push(response["topRatedTvShows"][i]["id"]);
            }
            // console.log(this.trTvimagesArray);
            // console.log(this.trTvnameArray);
            // console.log(this.trTvidArray);
            var theLen = response["topRatedTvShows"].length;
            for (var i = 0; i < theLen; i++) {
                if (i >= 18 && i <= 19) {
                    for (var i = 18; i < 20; i++) {
                        this.trTvid4.push(response["topRatedTvShows"][i]["id"]);
                        this.trTvname4.push(response["topRatedTvShows"][i]["name"]);
                        if (response["topRatedTvShows"][i]["poster_path"] != null || response["topRatedTvShows"][i]["poster_path"] != undefined) {
                            this.trTvimages4.push("https://image.tmdb.org/t/p/w500" + response["topRatedTvShows"][i]["poster_path"]);
                        }
                        else {
                            this.trTvimages4.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                if (i >= 12 && i <= 17) {
                    for (var i = 12; i < 18; i++) {
                        this.trTvid3.push(response["topRatedTvShows"][i]["id"]);
                        this.trTvname3.push(response["topRatedTvShows"][i]["name"]);
                        if (response["topRatedTvShows"][i]["poster_path"] != null || response["topRatedTvShows"][i]["poster_path"] != undefined) {
                            this.trTvimages3.push("https://image.tmdb.org/t/p/w500" + response["topRatedTvShows"][i]["poster_path"]);
                        }
                        else {
                            this.trTvimages3.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                if (i >= 6 && i <= 11) {
                    for (var i = 6; i < 12; i++) {
                        this.trTvid2.push(response["topRatedTvShows"][i]["id"]);
                        this.trTvname2.push(response["topRatedTvShows"][i]["name"]);
                        if (response["topRatedTvShows"][i]["poster_path"] != null || response["topRatedTvShows"][i]["poster_path"] != undefined) {
                            this.trTvimages2.push("https://image.tmdb.org/t/p/w500" + response["topRatedTvShows"][i]["poster_path"]);
                        }
                        else {
                            this.trTvimages2.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                if (i >= 0 && i <= 5) {
                    for (var i = 0; i < 6; i++) {
                        this.trTvid1.push(response["topRatedTvShows"][i]["id"]);
                        this.trTvname1.push(response["topRatedTvShows"][i]["name"]);
                        if (response["topRatedTvShows"][i]["poster_path"] != null || response["topRatedTvShows"][i]["poster_path"] != undefined) {
                            this.trTvimages1.push("https://image.tmdb.org/t/p/w500" + response["topRatedTvShows"][i]["poster_path"]);
                        }
                        else {
                            this.trTvimages1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
            }
            this.trTvimagesMatrix = [this.trTvimages1, this.trTvimages2, this.trTvimages3, this.trTvimages4];
            //console.log(this.trTvimagesMatrix);
            this.trTvnameMatrix = [this.trTvname1, this.trTvname2, this.trTvname3, this.trTvname4];
            //console.log(this.trTvnameMatrix);
            this.trTvidMatrix = [this.trTvid1, this.trTvid2, this.trTvid3, this.trTvid4];
            //console.log(this.trTvidMatrix);
        }, (error) => {
            console.log('Error is ', error);
        });
    }
    trendingTvShows() {
        this.service.getTrendingTvShows().subscribe((response) => {
            //console.log('Response from trendingTvShows API is ', response);
            for (var i = 0; i < response["trendingTvShows"].length; i++) {
                if (response["trendingTvShows"][i]["poster_path"] != null || response["trendingTvShows"][i]["poster_path"] != undefined) {
                    this.trendTvimagesArray.push("https://image.tmdb.org/t/p/w500" + response["trendingTvShows"][i]["poster_path"]);
                }
                else {
                    this.trendTvimagesArray.push('https://cinemaone.net/images/movie_placeholder.png');
                }
                this.trendTvnameArray.push(response["trendingTvShows"][i]["name"]);
                this.trendTvidArray.push(response["trendingTvShows"][i]["id"]);
            }
            // console.log(this.trendTvimagesArray);
            // console.log(this.trendTvnameArray);
            // console.log(this.trendTvidArray);
            var theLen = response["trendingTvShows"].length;
            for (var i = 0; i < theLen; i++) {
                if (i >= 18 && i <= 19) {
                    for (var i = 18; i < 20; i++) {
                        this.trendTvid4.push(response["trendingTvShows"][i]["id"]);
                        this.trendTvname4.push(response["trendingTvShows"][i]["name"]);
                        if (response["trendingTvShows"][i]["poster_path"] != null || response["trendingTvShows"][i]["poster_path"] != undefined) {
                            this.trendTvimages4.push("https://image.tmdb.org/t/p/w500" + response["trendingTvShows"][i]["poster_path"]);
                        }
                        else {
                            this.trendTvimages4.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                if (i >= 12 && i <= 17) {
                    for (var i = 12; i < 18; i++) {
                        this.trendTvid3.push(response["trendingTvShows"][i]["id"]);
                        this.trendTvname3.push(response["trendingTvShows"][i]["name"]);
                        if (response["trendingTvShows"][i]["poster_path"] != null || response["trendingTvShows"][i]["poster_path"] != undefined) {
                            this.trendTvimages3.push("https://image.tmdb.org/t/p/w500" + response["trendingTvShows"][i]["poster_path"]);
                        }
                        else {
                            this.trendTvimages3.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                if (i >= 6 && i <= 11) {
                    for (var i = 6; i < 12; i++) {
                        this.trendTvid2.push(response["trendingTvShows"][i]["id"]);
                        this.trendTvname2.push(response["trendingTvShows"][i]["name"]);
                        if (response["trendingTvShows"][i]["poster_path"] != null || response["trendingTvShows"][i]["poster_path"] != undefined) {
                            this.trendTvimages2.push("https://image.tmdb.org/t/p/w500" + response["trendingTvShows"][i]["poster_path"]);
                        }
                        else {
                            this.trendTvimages2.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                if (i >= 0 && i <= 5) {
                    for (var i = 0; i < 6; i++) {
                        this.trendTvid1.push(response["trendingTvShows"][i]["id"]);
                        this.trendTvname1.push(response["trendingTvShows"][i]["name"]);
                        if (response["trendingTvShows"][i]["poster_path"] != null || response["trendingTvShows"][i]["poster_path"] != undefined) {
                            this.trendTvimages1.push("https://image.tmdb.org/t/p/w500" + response["trendingTvShows"][i]["poster_path"]);
                        }
                        else {
                            this.trendTvimages1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
            }
            this.trendTvimagesMatrix = [this.trendTvimages1, this.trendTvimages2, this.trendTvimages3, this.trendTvimages4];
            // console.log(this.trendTvimagesMatrix);
            this.trendTvnameMatrix = [this.trendTvname1, this.trendTvname2, this.trendTvname3, this.trendTvname4];
            //console.log(this.trendTvnameMatrix);
            this.trendTvidMatrix = [this.trendTvid1, this.trendTvid2, this.trendTvid3, this.trendTvid4];
            //console.log(this.trendTvidMatrix);
        }, (error) => {
            console.log('Error is ', error);
        });
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarouselConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_localstorageservice_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarouselConfig"]])], decls: 6, vars: 2, consts: [["href", "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap", "rel", "stylesheet"], [2, "background-color", "#000033", "color", "white"], [4, "ngIf", "ngIfElse"], ["isMobile", ""], [1, "container"], [1, "row"], [1, "col-sm-1", "col-xs-1"], [1, "col-sm-10", "col-xs-10"], ["id", "CurrentMov"], ["interval", "5000", 3, "pauseOnHover", "pauseOnFocus"], [4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "col-sm-12"], [2, "padding-left", "150px"], ["id", "PopularMov"], [3, "pauseOnHover", "pauseOnFocus", "interval"], ["id", "TopRatedMov"], ["id", "TrendingMov"], ["id", "PopularTv"], ["id", "TopRatedTv"], [1, "row", 2, "padding-bottom", "100px"], ["id", "TrendingTv"], ["ngbSlide", ""], ["id", "CurrentMovPoster"], ["id", "CurrentMovImg", 1, "wrapper"], [3, "routerLink"], ["alt", "", 3, "src"], [1, "currentMovTitle", 2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "15px"], ["id", "CWing"], [1, "Poster"], [1, "posterIn", 2, "display", "inline", "float", "left"], ["alt", "", 1, "img-responsive", 3, "src"], [1, "titleORname"], [1, "col-xs-1"], [1, "col-xs-10"], ["id", "CurrentMovMobile"], ["interval", "5000", 1, "no-indicators", 3, "pauseOnHover", "pauseOnFocus"], [2, "padding-left", "100px"], ["id", "PopularMovMobile"], [1, "no-indicators", 3, "pauseOnHover", "pauseOnFocus", "interval"], [2, "padding-left", "80px"], ["id", "TopRatedMovMobile"], [2, "padding-left", "90px"], ["id", "TrendingMovMobile"], ["id", "PopularTvMobile"], [2, "padding-left", "110px"], ["id", "TopRatedTvMobile"], ["id", "TrendingTvMobile"], ["id", "CurrentMovPosterMobile"], [1, "currentMovTitleMobile", 2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "15px"], ["id", "CWingMobile"], [1, "PosterMobile"], [1, "posterInMobile", 2, "display", "inline", "float", "left"], [1, "titleORnameMobile"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "body", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomepageComponent_div_3_Template, 58, 28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomepageComponent_ng_template_4_Template, 57, 28, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isSmallScreen)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: ["#CurrentMov[_ngcontent-%COMP%]{\n    position: relative;\n    \n    padding-bottom: 30px;\n    \n    width: 100%;\n    height: 100%;\n}\n#CurrentMovMobile[_ngcontent-%COMP%]{\n    padding-bottom: 30px;\n    width: 100%;\n    \n    height: 100%;\n}\n#CurrentMov[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%]{\n    \n}\n#CurrentMovMobile[_ngcontent-%COMP%] > ngb-carousel[_ngcontent-%COMP%]{\n    margin-left: 30px;\n    margin-right: 30px;\n    \n\n  \n}\n\n#CurrentMovPoster[_ngcontent-%COMP%] {\n    \n    height: 100%;\n    \n}\n#CurrentMovPosterMobile[_ngcontent-%COMP%]{\n    \n    height: 200px;\n    \n}\n#CurrentMov[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    \n    width: 100%;\n    height: 100%;\n}\n#CurrentMovMobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n}\n#CurrentMovPoster[_ngcontent-%COMP%]   .currentMovTitle[_ngcontent-%COMP%]{\n    opacity:0;\n    color: (255,255,255,0.3); \n    margin-top: -250px;\n    padding-left: 80px;\n    padding-top: 80px;\n    text-align: left;\n    \n    \n    height: 150px;\n    background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1),rgba(0,0,0,1));\n    \n}\n#CurrentMovPosterMobile[_ngcontent-%COMP%]   .currentMovTitleMobile[_ngcontent-%COMP%]{\n    position: absolute;\n    width: 100%;\n    color: (255,255,255,0.3); \n    margin-top: -105px;\n    padding-left: 50px;\n    padding-top: 60px;\n    text-align: left;\n    \n    \n    height: 110px;\n    background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1),rgba(0,0,0,1));\n}\n#CurrentMov[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], #CurrentMov[_ngcontent-%COMP%]:hover   .currentMovTitle[_ngcontent-%COMP%]{\n    transform: scale(1.05);\n    cursor: pointer;\n    opacity: 1;\n}\n#CurrentMovMobile[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], #CurrentMovMobile[_ngcontent-%COMP%]:hover   .currentMovTitleMobile[_ngcontent-%COMP%]{\n    transform: scale(1.1);\n}\n#CWing[_ngcontent-%COMP%], #PopularMov[_ngcontent-%COMP%], #TopRatedMov[_ngcontent-%COMP%], #TrendingMov[_ngcontent-%COMP%], #PopularTv[_ngcontent-%COMP%], #TopRatedTv[_ngcontent-%COMP%], #TrendingTv[_ngcontent-%COMP%]{\n    \n    position: relative;\n    width: 100%;\n    \n    padding-bottom: 30px;\n    padding-top: 20px;\n}\n#CWingMobile[_ngcontent-%COMP%], #PopularMovMobile[_ngcontent-%COMP%], #TopRatedMovMobile[_ngcontent-%COMP%], #TrendingMovMobile[_ngcontent-%COMP%], #PopularTvMobile[_ngcontent-%COMP%], #TopRatedTvMobile[_ngcontent-%COMP%], #TrendingTvMobile[_ngcontent-%COMP%]{\n    position: relative;\n    width: 100%;\n    \n    padding-bottom: 30px;\n    padding-top: 20px;\n}\n#CWing[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%], #PopularMov[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%], #TopRatedMov[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%], #TrendingMov[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%], #PopularTv[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%], #TopRatedTv[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%], #TrendingTv[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%]{\n    padding-left: 130px;\n    padding-right: 130px;\n    \n}\n#CWingMobile[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%], #PopularMovMobile[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%], #TopRatedMovMobile[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%], #TrendingMovMobile[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%], #PopularTvMobile[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%], #TopRatedTvMobile[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%], #TrendingTvMobile[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%]{\n    padding-left: 80px;\n    padding-right: 80px;\n}\n.Poster[_ngcontent-%COMP%]{\n    width: 1250px;\n    height: 320px;\n    \n}\n.PosterMobile[_ngcontent-%COMP%]{\n    height: 50px;\n}\n.Poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 170px;\n    padding-right: 20px;\n    \n}\n.posterInMobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    \n    width: 266.7px;\n    height: 400px;\n}\n.Poster[_ngcontent-%COMP%]   .titleORname[_ngcontent-%COMP%]{\n    width: 149px;\n    height: 100px;\n    \n    color: white; \n    font-size: 10px; \n    margin-top: -95px; \n    padding-left: 5px;\n    opacity: 0;\n    overflow-wrap:break-word;\n    word-wrap: break-word;\n    padding-top: 50px;\n    background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1),rgba(0,0,0,1));\n    font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 8px;\n}\n.titleORnameMobile[_ngcontent-%COMP%]{\n    position:absolute;\n    width: 100%;\n    height: 150px;\n    \n    color: white; \n    font-size: 30px; \n    margin-top: -145px; \n    padding-left: 20px;\n    padding-top: 100px;\n    overflow-wrap:break-word;\n    word-wrap: break-word;\n    background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1),rgba(0,0,0,1));\n    font-family: 'Noto Sans', sans-serif; \n    font-weight: 400; \n    font-size: 15px;\n    \n}\n.posterIn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover, .posterIn[_ngcontent-%COMP%]:hover    > .titleORname[_ngcontent-%COMP%]{\n    opacity: 1;\n    cursor: pointer;\n    transform: scale(1.05);\n    cursor: pointer;  \n}\n.posterInMobile[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n    transform: scale(1.05);\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEI7b0JBQ2dCO0lBQ2hCLG9CQUFvQjs7SUFFcEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixXQUFXOztJQUVYLFlBQVk7QUFDaEI7QUFDQTtJQUNJOzBCQUNzQjtBQUMxQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQjswQkFDc0I7OztBQUcxQjtBQUVBLGdFQUFnRTtBQUNoRTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksU0FBUztJQUNULHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUZBQXVGOztBQUUzRjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVGQUF1RjtBQUMzRjtBQUNBOztJQUVJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsVUFBVTtBQUNkO0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCO0FBR0E7Ozs7Ozs7SUFPSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjtBQUNBOzs7Ozs7O0lBT0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjtBQUVBOzs7Ozs7O0lBT0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQiwyQkFBMkI7QUFDL0I7QUFDQTs7Ozs7OztJQU9JLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHVGQUF1RjtJQUN2RixvQ0FBb0MsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjO0FBQzFFO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHVGQUF1RjtJQUN2RixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGVBQWU7O0FBRW5CO0FBRUE7O0lBRUksVUFBVTtJQUNWLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkIiLCJmaWxlIjoiaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNDdXJyZW50TW92e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwMHB4OyAqL1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbiNDdXJyZW50TW92TW9iaWxle1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgIGhlaWdodDogMTAwJTtcbn1cbiNDdXJyZW50TW92ID4gbmdiLWNhcm91c2Vse1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEyMHB4OyAqL1xufSBcbiNDdXJyZW50TW92TW9iaWxlPiBuZ2ItY2Fyb3VzZWx7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIC8qIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyAqL1xuXG4gIFxufVxuXG4vKiAjQ3VycmVudE1vdlBvc3RlciAmJiAjQ3VycmVudE1vdkltZyBpbWcgc2hvdWxkIGJlIHNhbWUgc2l6ZSAqL1xuI0N1cnJlbnRNb3ZQb3N0ZXIge1xuICAgIC8qIHdpZHRoOiAxMjAwcHg7Ki9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cbn1cbiNDdXJyZW50TW92UG9zdGVyTW9iaWxle1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgLyogd2lkdGg6IDM1NHB4OyAqL1xufVxuI0N1cnJlbnRNb3YgaW1nIHtcbiAgICAvKiB3aWR0aDogOTAwcHg7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuI0N1cnJlbnRNb3ZNb2JpbGUgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuI0N1cnJlbnRNb3ZQb3N0ZXIgLmN1cnJlbnRNb3ZUaXRsZXtcbiAgICBvcGFjaXR5OjA7XG4gICAgY29sb3I6ICgyNTUsMjU1LDI1NSwwLjMpOyBcbiAgICBtYXJnaW4tdG9wOiAtMjUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xuICAgIC8qIHdpZHRoOiA4NzBweDsgKi9cbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwwKSwgcmdiYSgwLDAsMCwxKSxyZ2JhKDAsMCwwLDEpKTtcbiAgICBcbn1cbiNDdXJyZW50TW92UG9zdGVyTW9iaWxlIC5jdXJyZW50TW92VGl0bGVNb2JpbGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAoMjU1LDI1NSwyNTUsMC4zKTsgXG4gICAgbWFyZ2luLXRvcDogLTEwNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgICAvKiB3aWR0aDogODcwcHg7ICovXG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMSkscmdiYSgwLDAsMCwxKSk7XG59XG4jQ3VycmVudE1vdjpob3ZlciBpbWcsXG4jQ3VycmVudE1vdjpob3ZlciAuY3VycmVudE1vdlRpdGxle1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbiNDdXJyZW50TW92TW9iaWxlOmhvdmVyIGltZyxcbiNDdXJyZW50TW92TW9iaWxlOmhvdmVyIC5jdXJyZW50TW92VGl0bGVNb2JpbGV7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG5cbiNDV2luZyxcbiNQb3B1bGFyTW92LFxuI1RvcFJhdGVkTW92LFxuI1RyZW5kaW5nTW92LFxuI1BvcHVsYXJUdixcbiNUb3BSYXRlZFR2LFxuI1RyZW5kaW5nVHZ7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIGhlaWdodDogMzAwcHg7ICovXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4jQ1dpbmdNb2JpbGUsXG4jUG9wdWxhck1vdk1vYmlsZSxcbiNUb3BSYXRlZE1vdk1vYmlsZSxcbiNUcmVuZGluZ01vdk1vYmlsZSxcbiNQb3B1bGFyVHZNb2JpbGUsXG4jVG9wUmF0ZWRUdk1vYmlsZSxcbiNUcmVuZGluZ1R2TW9iaWxle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4jQ1dpbmcgPiBuZ2ItY2Fyb3VzZWwsXG4jUG9wdWxhck1vdiA+IG5nYi1jYXJvdXNlbCxcbiNUb3BSYXRlZE1vdiA+IG5nYi1jYXJvdXNlbCxcbiNUcmVuZGluZ01vdiA+IG5nYi1jYXJvdXNlbCxcbiNQb3B1bGFyVHYgPiBuZ2ItY2Fyb3VzZWwsXG4jVG9wUmF0ZWRUdiA+IG5nYi1jYXJvdXNlbCxcbiNUcmVuZGluZ1R2ID4gbmdiLWNhcm91c2Vse1xuICAgIHBhZGRpbmctbGVmdDogMTMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTMwcHg7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xufVxuI0NXaW5nTW9iaWxlID4gbmdiLWNhcm91c2VsLFxuI1BvcHVsYXJNb3ZNb2JpbGUgPiBuZ2ItY2Fyb3VzZWwsXG4jVG9wUmF0ZWRNb3ZNb2JpbGUgPiBuZ2ItY2Fyb3VzZWwsXG4jVHJlbmRpbmdNb3ZNb2JpbGUgPiBuZ2ItY2Fyb3VzZWwsXG4jUG9wdWxhclR2TW9iaWxlID4gbmdiLWNhcm91c2VsLFxuI1RvcFJhdGVkVHZNb2JpbGUgPiBuZ2ItY2Fyb3VzZWwsXG4jVHJlbmRpbmdUdk1vYmlsZSA+IG5nYi1jYXJvdXNlbHtcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gICAgcGFkZGluZy1yaWdodDogODBweDtcbn1cbi5Qb3N0ZXJ7XG4gICAgd2lkdGg6IDEyNTBweDtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXG59XG4uUG9zdGVyTW9iaWxle1xuICAgIGhlaWdodDogNTBweDtcbn1cbi5Qb3N0ZXIgaW1ne1xuICAgIHdpZHRoOiAxNzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xufVxuLnBvc3RlckluTW9iaWxlIGltZ3tcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICB3aWR0aDogMjY2LjdweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4uUG9zdGVyIC50aXRsZU9SbmFtZXtcbiAgICB3aWR0aDogMTQ5cHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xuICAgIGNvbG9yOiB3aGl0ZTsgXG4gICAgZm9udC1zaXplOiAxMHB4OyBcbiAgICBtYXJnaW4tdG9wOiAtOTVweDsgXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICBvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwwKSwgcmdiYSgwLDAsMCwxKSxyZ2JhKDAsMCwwLDEpKTtcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucycsIHNhbnMtc2VyaWY7IGZvbnQtd2VpZ2h0OiA0MDA7IGZvbnQtc2l6ZTogOHB4O1xufVxuLnRpdGxlT1JuYW1lTW9iaWxle1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xuICAgIGNvbG9yOiB3aGl0ZTsgXG4gICAgZm9udC1zaXplOiAzMHB4OyBcbiAgICBtYXJnaW4tdG9wOiAtMTQ1cHg7IFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgb3ZlcmZsb3ctd3JhcDpicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMSkscmdiYSgwLDAsMCwxKSk7XG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmOyBcbiAgICBmb250LXdlaWdodDogNDAwOyBcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgXG59XG5cbi5wb3N0ZXJJbiBpbWc6aG92ZXIsXG4ucG9zdGVySW46aG92ZXIgPiAudGl0bGVPUm5hbWV7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICBcbn1cbi5wb3N0ZXJJbk1vYmlsZTpob3ZlciBpbWd7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuXG4iXX0= */", "*[_ngcontent-%COMP%]:focus \n    {\n            border: none !important;\n            outline:0 !important;\n            box-shadow: none;\n            -moz-box-shadow: none;\n            -webkit-box-shadow: none;\n            border-color: inherit;\n    }"] });


/***/ }),

/***/ "mv0o":
/*!***************************************************************!*\
  !*** ./src/app/components/tv-details/tv-details.component.ts ***!
  \***************************************************************/
/*! exports provided: TvDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvDetailsComponent", function() { return TvDetailsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-service.service */ "O+Oc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _localstorageservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../localstorageservice.service */ "TGut");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = ["selfClosingAlert"];
function TvDetailsComponent_h1_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.TdetailsName);
} }
function TvDetailsComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.TdetailsTagline);
} }
function TvDetailsComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r2.TdetailsFirstAirDate, " | ");
} }
function TvDetailsComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u2605 ", ctx_r3.TdetailsVoteAvg, " | ");
} }
function TvDetailsComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4.TdetailsEpRuntimeHour, "hrs ");
} }
function TvDetailsComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r5.TdetailsEpRuntimeMin, " mins");
} }
function TvDetailsComponent_div_25_span_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TvDetailsComponent_div_25_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TvDetailsComponent_div_25_span_2_span_1_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const geners_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r20 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](geners_r19);
} }
function TvDetailsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Geners : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TvDetailsComponent_div_25_span_2_Template, 4, 2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.TdetailsGenres);
} }
function TvDetailsComponent_div_26_span_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TvDetailsComponent_div_26_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TvDetailsComponent_div_26_span_2_span_1_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r23 = ctx.$implicit;
    const j_r24 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", j_r24 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](lang_r23);
} }
function TvDetailsComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Spoken Languages : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TvDetailsComponent_div_26_span_2_Template, 4, 2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.TdetailsSpokenLanguage);
} }
function TvDetailsComponent_ngb_alert_29_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function TvDetailsComponent_ngb_alert_29_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r27.isclose = true; return ctx_r27.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Added to watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TvDetailsComponent_ngb_alert_30_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 48, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function TvDetailsComponent_ngb_alert_30_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r30.isclose = true; return ctx_r30.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Removed from watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TvDetailsComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Destription");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.TdetailsOverview);
} }
function TvDetailsComponent_div_47_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TvDetailsComponent_div_47_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const i_r34 = ctx.index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); ctx_r35.clickCast(ctx_r35.TCastId[i_r34]); return ctx_r35.clickPersonExId(ctx_r35.TCastId[i_r34]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TvDetailsComponent_div_47_div_6_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](49); return ctx_r37.openModal(_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profile_r33 = ctx.$implicit;
    const i_r34 = ctx.index;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", profile_r33, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r32.TCastName[i_r34]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r32.TCastChar[i_r34]);
} }
function TvDetailsComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TvDetailsComponent_div_47_div_6_Template, 9, 3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r11.TCastProfile);
} }
function TvDetailsComponent_ng_template_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r39.CastName, " ");
} }
function TvDetailsComponent_ng_template_48_div_5_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Birth: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r43.CastBirthday);
} }
function TvDetailsComponent_ng_template_48_div_5_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Birth Place: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r44.CastBirthPlc);
} }
function TvDetailsComponent_ng_template_48_div_5_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Gender: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r45.CastGender);
} }
function TvDetailsComponent_ng_template_48_div_5_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " HomePage: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r46.CastHomepage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r46.CastHomepage, " ");
} }
function TvDetailsComponent_ng_template_48_div_5_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Known for: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r47.CastKFD);
} }
function TvDetailsComponent_ng_template_48_div_5_div_12_span_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TvDetailsComponent_ng_template_48_div_5_div_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TvDetailsComponent_ng_template_48_div_5_div_12_span_2_span_1_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const aka_r55 = ctx.$implicit;
    const i_r56 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r56 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", aka_r55, " ");
} }
function TvDetailsComponent_ng_template_48_div_5_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Also Known as: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TvDetailsComponent_ng_template_48_div_5_div_12_span_2_Template, 3, 2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r48.CastAKA);
} }
function TvDetailsComponent_ng_template_48_div_5_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r49.imdb_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function TvDetailsComponent_ng_template_48_div_5_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r50.facebook_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function TvDetailsComponent_ng_template_48_div_5_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r51.instagram_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function TvDetailsComponent_ng_template_48_div_5_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r52.twitter_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function TvDetailsComponent_ng_template_48_div_5_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r53.CastBiography, " ");
} }
function TvDetailsComponent_ng_template_48_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TvDetailsComponent_ng_template_48_div_5_div_7_Template, 4, 1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TvDetailsComponent_ng_template_48_div_5_div_8_Template, 4, 1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TvDetailsComponent_ng_template_48_div_5_div_9_Template, 4, 1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TvDetailsComponent_ng_template_48_div_5_div_10_Template, 4, 2, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, TvDetailsComponent_ng_template_48_div_5_div_11_Template, 4, 1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TvDetailsComponent_ng_template_48_div_5_div_12_Template, 3, 1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, TvDetailsComponent_ng_template_48_div_5_span_14_Template, 3, 1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, TvDetailsComponent_ng_template_48_div_5_span_15_Template, 3, 1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TvDetailsComponent_ng_template_48_div_5_span_16_Template, 4, 1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, TvDetailsComponent_ng_template_48_div_5_span_17_Template, 3, 1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, TvDetailsComponent_ng_template_48_div_5_div_19_Template, 5, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r40.CastProfile_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r40.CastBirthday == null ? null : ctx_r40.CastBirthday.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r40.CastBirthPlc == null ? null : ctx_r40.CastBirthPlc.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r40.CastGender == null ? null : ctx_r40.CastGender.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r40.CastHomepage == null ? null : ctx_r40.CastHomepage.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r40.CastKFD == null ? null : ctx_r40.CastKFD.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r40.CastAKA == null ? null : ctx_r40.CastAKA.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r40.imdb_id == null ? null : ctx_r40.imdb_id.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r40.facebook_id == null ? null : ctx_r40.facebook_id.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r40.instagram_id == null ? null : ctx_r40.instagram_id.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r40.twitter_id == null ? null : ctx_r40.twitter_id.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r40.CastBiography == null ? null : ctx_r40.CastBiography.length) > 0);
} }
function TvDetailsComponent_ng_template_48_ng_template_6_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Birth: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r58.CastBirthday);
} }
function TvDetailsComponent_ng_template_48_ng_template_6_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Birth Place: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r59.CastBirthPlc);
} }
function TvDetailsComponent_ng_template_48_ng_template_6_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Gender: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r60.CastGender);
} }
function TvDetailsComponent_ng_template_48_ng_template_6_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " HomePage: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r61.CastHomepage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r61.CastHomepage, " ");
} }
function TvDetailsComponent_ng_template_48_ng_template_6_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Known for: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r62.CastKFD);
} }
function TvDetailsComponent_ng_template_48_ng_template_6_div_12_span_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TvDetailsComponent_ng_template_48_ng_template_6_div_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TvDetailsComponent_ng_template_48_ng_template_6_div_12_span_2_span_1_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const aka_r70 = ctx.$implicit;
    const i_r71 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r71 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", aka_r70, " ");
} }
function TvDetailsComponent_ng_template_48_ng_template_6_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Also Known as: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TvDetailsComponent_ng_template_48_ng_template_6_div_12_span_2_Template, 3, 2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r63.CastAKA);
} }
function TvDetailsComponent_ng_template_48_ng_template_6_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r64.imdb_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function TvDetailsComponent_ng_template_48_ng_template_6_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r65.facebook_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function TvDetailsComponent_ng_template_48_ng_template_6_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r66.instagram_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function TvDetailsComponent_ng_template_48_ng_template_6_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r67.twitter_id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function TvDetailsComponent_ng_template_48_ng_template_6_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r68.CastBiography, " ");
} }
function TvDetailsComponent_ng_template_48_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TvDetailsComponent_ng_template_48_ng_template_6_div_7_Template, 4, 1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TvDetailsComponent_ng_template_48_ng_template_6_div_8_Template, 4, 1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TvDetailsComponent_ng_template_48_ng_template_6_div_9_Template, 4, 1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TvDetailsComponent_ng_template_48_ng_template_6_div_10_Template, 4, 2, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, TvDetailsComponent_ng_template_48_ng_template_6_div_11_Template, 4, 1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TvDetailsComponent_ng_template_48_ng_template_6_div_12_Template, 3, 1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, TvDetailsComponent_ng_template_48_ng_template_6_span_14_Template, 3, 1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, TvDetailsComponent_ng_template_48_ng_template_6_span_15_Template, 3, 1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TvDetailsComponent_ng_template_48_ng_template_6_span_16_Template, 4, 1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, TvDetailsComponent_ng_template_48_ng_template_6_span_17_Template, 3, 1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, TvDetailsComponent_ng_template_48_ng_template_6_div_19_Template, 5, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r42.CastProfile_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.CastBirthday == null ? null : ctx_r42.CastBirthday.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.CastBirthPlc == null ? null : ctx_r42.CastBirthPlc.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.CastGender == null ? null : ctx_r42.CastGender.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.CastHomepage == null ? null : ctx_r42.CastHomepage.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.CastKFD == null ? null : ctx_r42.CastKFD.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.CastAKA == null ? null : ctx_r42.CastAKA.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.imdb_id == null ? null : ctx_r42.imdb_id.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.facebook_id == null ? null : ctx_r42.facebook_id.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.instagram_id == null ? null : ctx_r42.instagram_id.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.twitter_id == null ? null : ctx_r42.twitter_id.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r42.CastBiography == null ? null : ctx_r42.CastBiography.length) > 0);
} }
function TvDetailsComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TvDetailsComponent_ng_template_48_div_1_Template, 2, 1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TvDetailsComponent_ng_template_48_Template_button_click_2_listener() { const modal_r38 = ctx.$implicit; return modal_r38.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TvDetailsComponent_ng_template_48_div_5_Template, 20, 12, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TvDetailsComponent_ng_template_48_ng_template_6_Template, 20, 12, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r13.CastName == null ? null : ctx_r13.CastName.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r13.isSmallScreen)("ngIfElse", _r41);
} }
function TvDetailsComponent_div_51_div_8_h4_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const author_r75 = ctx_r81.$implicit;
    const i_r76 = ctx_r81.index;
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("A review created by ", author_r75, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u2605 ", ctx_r77.reviewRating[i_r76], " ");
} }
function TvDetailsComponent_div_51_div_8_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const author_r75 = ctx_r82.$implicit;
    const i_r76 = ctx_r82.index;
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Written by ", author_r75, " on ", ctx_r78.reviewCreated[i_r76], "");
} }
function TvDetailsComponent_div_51_div_8_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r79.reviewContent[i_r76]);
} }
function TvDetailsComponent_div_51_div_8_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r80.reviewURL[i_r76], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function TvDetailsComponent_div_51_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TvDetailsComponent_div_51_div_8_h4_7_Template, 4, 2, "h4", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TvDetailsComponent_div_51_div_8_p_8_Template, 3, 2, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TvDetailsComponent_div_51_div_8_p_9_Template, 2, 1, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TvDetailsComponent_div_51_div_8_a_10_Template, 2, 1, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const author_r75 = ctx.$implicit;
    const i_r76 = ctx.index;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r74.reviewAvaPath[i_r76], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (author_r75 == null ? null : author_r75.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r74.reviewCreated[i_r76] == null ? null : ctx_r74.reviewCreated[i_r76].length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r74.reviewContent[i_r76] == null ? null : ctx_r74.reviewContent[i_r76].length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r74.reviewURL[i_r76] == null ? null : ctx_r74.reviewURL[i_r76].length) > 0);
} }
function TvDetailsComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TvDetailsComponent_div_51_div_8_Template, 12, 5, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r14.reviewLen);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r14.reviewAuthor);
} }
function TvDetailsComponent_div_53_div_1_9_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r92 = ctx.$implicit;
    const j_r93 = ctx.index;
    const i_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", ctx_r91.tvRecIdMatrix[i_r89][j_r93], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r92, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r91.tvRecNameMatrix[i_r89][j_r93]);
} }
function TvDetailsComponent_div_53_div_1_9_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TvDetailsComponent_div_53_div_1_9_ng_template_0_div_1_Template, 7, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imgArray_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", imgArray_r88);
} }
function TvDetailsComponent_div_53_div_1_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TvDetailsComponent_div_53_div_1_9_ng_template_0_Template, 2, 1, "ng-template", 113);
} }
function TvDetailsComponent_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Recommended Tv Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ngb-carousel", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TvDetailsComponent_div_53_div_1_9_Template, 1, 0, undefined, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r85.tvRecPosterMatrix);
} }
function TvDetailsComponent_div_53_div_3_9_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r101 = ctx.$implicit;
    const j_r102 = ctx.index;
    const i_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", ctx_r100.SimIdMatrix[i_r98][j_r102], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r101, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r100.SimNameMatrix[i_r98][j_r102]);
} }
function TvDetailsComponent_div_53_div_3_9_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TvDetailsComponent_div_53_div_3_9_ng_template_0_div_1_Template, 7, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imgArray_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", imgArray_r97);
} }
function TvDetailsComponent_div_53_div_3_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TvDetailsComponent_div_53_div_3_9_ng_template_0_Template, 2, 1, "ng-template", 113);
} }
function TvDetailsComponent_div_53_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Similar Tv Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ngb-carousel", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TvDetailsComponent_div_53_div_3_9_Template, 1, 0, undefined, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r86.SimPosterMatrix);
} }
function TvDetailsComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TvDetailsComponent_div_53_div_1_Template, 10, 4, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TvDetailsComponent_div_53_div_3_Template, 10, 4, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r15.tvRecPosterMatrix[0] == null ? null : ctx_r15.tvRecPosterMatrix[0].length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r15.SimPosterMatrix[0] == null ? null : ctx_r15.SimPosterMatrix[0].length) > 0);
} }
function TvDetailsComponent_ng_template_54_div_0_9_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r109 = ctx_r111.index;
    const imgArray_r108 = ctx_r111.$implicit;
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r110.RecIdArray[i_r109], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", imgArray_r108, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r110.RecTitleArray[i_r109]);
} }
function TvDetailsComponent_ng_template_54_div_0_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TvDetailsComponent_ng_template_54_div_0_9_ng_template_0_Template, 7, 3, "ng-template", 113);
} }
function TvDetailsComponent_ng_template_54_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Recommended Tv Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ngb-carousel", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TvDetailsComponent_ng_template_54_div_0_9_Template, 1, 0, undefined, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r105.RecPosterArray);
} }
function TvDetailsComponent_ng_template_54_div_2_9_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r114 = ctx_r116.index;
    const imgArray_r113 = ctx_r116.$implicit;
    const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r115.SimIdArray[i_r114], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", imgArray_r113, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r115.SimTitleArray[i_r114]);
} }
function TvDetailsComponent_ng_template_54_div_2_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TvDetailsComponent_ng_template_54_div_2_9_ng_template_0_Template, 7, 3, "ng-template", 113);
} }
function TvDetailsComponent_ng_template_54_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Similar Tv Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ngb-carousel", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TvDetailsComponent_ng_template_54_div_2_9_Template, 1, 0, undefined, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pauseOnHover", true)("pauseOnFocus", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r106.SimPosterArray);
} }
function TvDetailsComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TvDetailsComponent_ng_template_54_div_0_Template, 10, 4, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TvDetailsComponent_ng_template_54_div_2_Template, 10, 4, "div", 108);
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r17.RecIdArray == null ? null : ctx_r17.RecIdArray.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r17.SimPosterArray == null ? null : ctx_r17.SimPosterArray.length) > 0);
} }
class TvDetailsComponent {
    constructor(modalService, breakpointObserver, service, route, storageLocal, router) {
        this.modalService = modalService;
        this.breakpointObserver = breakpointObserver;
        this.service = service;
        this.route = route;
        this.storageLocal = storageLocal;
        this.router = router;
        this.MonthConvertMap = new Map();
        //public tvGenredictionary : any;
        this._Adding = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._Removing = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.successMessage = '';
        this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 560px)');
        this.TvideoType = "";
        this.TvideoName = "";
        this.TvideoKey = "";
        this.TvURL = "";
        this.TdetailsGenres = [];
        this.TdetailsSpokenLanguage = [];
        this.TdetailsName = "";
        this.TdetailsFirstAirDate = "";
        this.TdetailsEpRuntimeHour = 0;
        this.TdetailsEpRuntimeMin = 0;
        this.TdetailsOverview = "";
        this.TdetailsTagline = "";
        this.TdetailsVoteAvg = 0;
        this.TdetailsPoster = "";
        this.TCastProfile = [];
        this.TCastId = [];
        this.TCastName = [];
        this.TCastChar = [];
        this.CastBirthday = "";
        this.CastBirthPlc = "";
        this.CastGender = "";
        this.CastName = "";
        this.CastHomepage = "";
        this.CastAKA = [];
        this.CastKFD = "";
        this.CastBiography = "";
        this.CastProfile_path = "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png";
        this.imdb_id = "";
        this.facebook_id = "";
        this.instagram_id = "";
        this.twitter_id = "";
        this.reviewAuthor = [];
        this.reviewContent = [];
        this.reviewCreated = [];
        this.reviewURL = [];
        this.reviewRating = [];
        this.reviewAvaPath = [];
        this.reviewLen = 0;
        this.createT = "";
        this.AorPM = "";
        this.tvRecId1 = [];
        this.tvRecId2 = [];
        this.tvRecId3 = [];
        this.tvRecId4 = [];
        this.tvRecName1 = [];
        this.tvRecName2 = [];
        this.tvRecName3 = [];
        this.tvRecName4 = [];
        this.tvRecPoster1 = [];
        this.tvRecPoster2 = [];
        this.tvRecPoster3 = [];
        this.tvRecPoster4 = [];
        this.tvRecIdMatrix = [];
        this.tvRecNameMatrix = [];
        this.tvRecPosterMatrix = [];
        this.RecIdArray = [];
        this.RecTitleArray = [];
        this.RecPosterArray = [];
        this.SimId1 = [];
        this.SimId2 = [];
        this.SimId3 = [];
        this.SimId4 = [];
        this.SimName1 = [];
        this.SimName2 = [];
        this.SimName3 = [];
        this.SimName4 = [];
        this.SimPoster1 = [];
        this.SimPoster2 = [];
        this.SimPoster3 = [];
        this.SimPoster4 = [];
        this.SimIdMatrix = [];
        this.SimNameMatrix = [];
        this.SimPosterMatrix = [];
        this.SimIdArray = [];
        this.SimTitleArray = [];
        this.SimPosterArray = [];
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    ngOnInit() {
        this._Adding.subscribe(message => this.successMessage = message);
        this._Adding.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(5000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
        this._Removing.subscribe(message => this.successMessage = message);
        this._Removing.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(5000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
        //this.category = this.route.snapshot.paramMap.get('category');
        this.id = this.route.snapshot.paramMap.get('id');
        //this.gettvGenredictionary();
        this.getTvVideo();
        this.getTvDetails();
        this.getTvCast();
        this.getTvReviews();
        this.constructMonthMap();
        this.getTvRecommended();
        this.getTvSimilar();
        this.checkMyList();
    }
    // gettvGenredictionary(){
    //   this.service.gettvGenredictionary().subscribe((response) => {
    //     this.tvGenredictionary = response["genres"].reduce(function(map, tag){
    //       map[tag.id] = tag.name;
    //       return map;
    //     }, {});
    //     //console.log(this.tvGenredictionary);
    //   });
    // }
    openModal(content) {
        if (this.breakpointObserver.isMatched('(max-width: 560px)')) {
            this.modalService.open(content, { size: 'xs' });
        }
        else {
            this.modalService.open(content, { size: 'lg' });
        }
    }
    constructMonthMap() {
        this.MonthConvertMap.set("01", 'January');
        //console.log(this.MonthConvertMap.get("1"));
        this.MonthConvertMap.set("02", 'February');
        this.MonthConvertMap.set("03", 'March');
        this.MonthConvertMap.set("04", 'April');
        this.MonthConvertMap.set("05", 'May');
        this.MonthConvertMap.set("06", 'June');
        this.MonthConvertMap.set("07", 'July');
        this.MonthConvertMap.set("08", 'August');
        this.MonthConvertMap.set("09", 'September');
        this.MonthConvertMap.set("10", 'October');
        this.MonthConvertMap.set("11", 'November');
        this.MonthConvertMap.set("12", 'December');
    }
    getTvVideo() {
        this.service.getTvVideo(this.id).subscribe((response) => {
            // console.log("getTvVideo",response["videoList"]);
            if (response["videoList"] != null && response["videoList"].length > 0) {
                for (var i = 0; i < response["videoList"].length; i++) {
                    if (response["videoList"][i]["type"] === "Trailer") {
                        this.TvideoType = "Trailer";
                        this.TvideoName = response["videoList"][i]["name"];
                        this.TvideoKey = response["videoList"][i]["key"];
                        break;
                    }
                    else if (response["videoList"][i]["type"] === "Teaser") {
                        if (this.TvideoType == "") {
                            this.TvideoType = "Teaser";
                            this.TvideoName = response["videoList"][i]["name"];
                            this.TvideoKey = response["videoList"][i]["key"];
                        }
                    }
                }
            }
            if (this.TvideoKey == "") {
                this.TvideoKey = "tzkWB85ULJY";
            }
            this.TvURL = "www.youtube.com/watch?v=" + this.TvideoKey;
            // console.log(this.TvURL);
        });
    }
    getTvDetails() {
        this.service.getTvDetails(this.id).subscribe((response) => {
            //console.log(response);
            this.TdetailsName = response["tvDetails"]["name"];
            this.TdetailsFirstAirDate = response["tvDetails"]["first_air_date"].substring(0, 4);
            // console.log(response["tvDetails"]["episode_run_time"][0]);
            if (response["tvDetails"]["episode_run_time"][0] != null && response["tvDetails"]["episode_run_time"][0] != undefined) {
                if (response["tvDetails"]["episode_run_time"][0] < 60) {
                    this.TdetailsEpRuntimeMin = response["tvDetails"]["episode_run_time"][0];
                }
                else {
                    this.TdetailsEpRuntimeMin = response["tvDetails"]["episode_run_time"][0] % 60;
                    this.TdetailsEpRuntimeHour = (response["tvDetails"]["episode_run_time"][0] - this.TdetailsEpRuntimeMin) / 60;
                }
                // console.log(this.TdetailsEpRuntimeMin);
                // console.log(this.TdetailsEpRuntimeHour);
            }
            this.TdetailsOverview = response["tvDetails"]["overview"];
            this.TdetailsTagline = response["tvDetails"]["tagline"];
            this.TdetailsVoteAvg = response["tvDetails"]["vote_average"];
            //console.log(response["movDetails"]["spoken_languages"].length);
            var len = response["tvDetails"]["spoken_languages"].length;
            for (var i = 0; i < len; i++) {
                //console.log(response["movDetails"]["spoken_languages"][i]["english_name"]);
                this.TdetailsSpokenLanguage.push(response["tvDetails"]["spoken_languages"][i]["english_name"]);
            }
            //console.log(this.MdetailsSpokenLanguage);
            var GenresLen = response["tvDetails"]["genres"].length;
            for (var i = 0; i < GenresLen; i++) {
                //console.log(response["movDetails"]["genres"][i]["id"]);
                //console.log(response["tvDetails"]["genres"][i]["name"]);
                this.TdetailsGenres.push(response["tvDetails"]["genres"][i]["name"]);
            }
            //console.log(this.TdetailsGenres);
            if (response["tvDetails"]["poster_path"] != null && response["tvDetails"]["poster_path"].length > 0) {
                this.TdetailsPoster = 'https://image.tmdb.org/t/p/w500/' + response["tvDetails"]["poster_path"];
            }
            else {
                this.TdetailsPoster = 'https://cinemaone.net/images/movie_placeholder.png';
            }
            var current = new Date();
            var timestamp = current.getTime();
            var keyStringML = "ml" + "^" + this.id + "^" + "tv";
            var keyStringCW = "cw" + "^" + this.id + "^" + "tv";
            //console.log(this.MdetailsGenres);
            if (this.storageLocal.get(keyStringML) !== null) {
                this.storageLocal.set(keyStringML, timestamp + "^" + this.TdetailsName + "^" + this.TdetailsPoster);
            }
            this.storageLocal.set(keyStringCW, timestamp + "^" + this.TdetailsName + "^" + this.TdetailsPoster);
        });
    }
    checkMyList() {
        // var current = new Date();
        // var timestamp = current.getTime();
        document.getElementById("button-text").innerHTML = "";
        var keyString = "ml" + "^" + this.id + "^" + "tv";
        if (this.storageLocal.get(keyString) === null) {
            document.getElementById("button-text").innerHTML = "Add to Watchlist";
        }
        else {
            document.getElementById("button-text").innerHTML = "Remove from Watchlist";
        }
    }
    updateMyList() {
        this.isclose = false;
        var current = new Date();
        var timestamp = current.getTime();
        var keyString = "ml" + "^" + this.id + "^" + "tv";
        if (this.storageLocal.get(keyString) === null) {
            // console.log("call set func");
            this.storageLocal.set(keyString, timestamp + "^" + this.TdetailsName + "^" + this.TdetailsPoster);
            this.isAdded = true;
            this.isRemoved = false;
            this._Adding.next(` - Message successfully changed.`);
            document.getElementById("button-text").innerHTML = "Remove from Watchlist";
        }
        else {
            this.storageLocal.remove(keyString);
            document.getElementById("button-text").innerHTML = "Add to Watchlist";
            this.isRemoved = true;
            this.isAdded = false;
            this._Removing.next(` - Message successfully changed.`);
        }
        // this.storageLocal.print();
    }
    getTvCast() {
        this.service.getTvCast(this.id).subscribe((response) => {
            //console.log(response["castList"]);
            for (var i = 0; i < response["castList"].length; i++) {
                // console.log(response["castList"][i]["id"]);
                if (response["castList"][i]["id"] != null) {
                    this.TCastId.push(response["castList"][i]["id"]);
                }
                if (response["castList"][i]["profile_path"] != null && response["castList"][i]["profile_path"].length > 0) {
                    this.TCastProfile.push('https://image.tmdb.org/t/p/w500/' + response["castList"][i]["profile_path"]);
                }
                else {
                    this.TCastProfile.push('https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png');
                }
                if (response["castList"][i]["name"] != null && response["castList"][i]["name"].length > 0) {
                    this.TCastName.push(response["castList"][i]["name"]);
                }
                else {
                    this.TCastName.push('');
                }
                if (response["castList"][i]["character"] != null && response["castList"][i]["character"].length > 0) {
                    this.TCastChar.push(response["castList"][i]["character"]);
                }
                else {
                    this.TCastChar.push('');
                }
            }
            // console.log(this.MCastId);
        });
    }
    clickCast(id) {
        this.CastId = id;
        this.service.getCastDetails(this.CastId).subscribe((response) => {
            //console.log(response);
            this.CastBirthday = "";
            this.CastBirthPlc = "";
            this.CastGender = "";
            this.CastName = "";
            this.CastHomepage = "";
            this.CastAKA = [];
            this.CastKFD = "";
            this.CastBiography = "";
            this.CastProfile_path = "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png";
            if (response["castDetails"]["profile_path"] != null && response["castDetails"]["profile_path"].length > 0) {
                this.CastProfile_path = 'https://image.tmdb.org/t/p/w500/' + response["castDetails"]["profile_path"];
            }
            else {
                this.CastProfile_path = "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png";
            }
            //console.log(this.CastProfile_path);
            if (response["castDetails"]["birthday"] != null && response["castDetails"]["birthday"].length > 0) {
                this.CastBirthday = response["castDetails"]["birthday"];
            }
            if (response["castDetails"]["place_of_birth"] != null && response["castDetails"]["place_of_birth"].length > 0) {
                this.CastBirthPlc = response["castDetails"]["place_of_birth"];
            }
            if (response["castDetails"]["gender"] != null) {
                if (response["castDetails"]["gender"] == 1)
                    this.CastGender = "Female";
                if (response["castDetails"]["gender"] == 2)
                    this.CastGender = "Male";
            }
            if (response["castDetails"]["name"] != null && response["castDetails"]["name"].length > 0) {
                this.CastName = response["castDetails"]["name"];
            }
            if (response["castDetails"]["homepage"] != null && response["castDetails"]["homepage"].length > 0) {
                this.CastHomepage = response["castDetails"]["homepage"];
            }
            if (response["castDetails"]["known_for_department"] != null && response["castDetails"]["known_for_department"].length > 0) {
                this.CastKFD = response["castDetails"]["known_for_department"];
            }
            if (response["castDetails"]["biography"] != null && response["castDetails"]["biography"].length > 0) {
                this.CastBiography = response["castDetails"]["biography"];
            }
            if (response["castDetails"]["also_known_as"] != null) {
                this.CastAKA = [];
                for (var i = 0; i < response["castDetails"]["also_known_as"].length; i++) {
                    this.CastAKA.push(response["castDetails"]["also_known_as"][i]);
                }
            }
            //console.log(this.CastAKA);
        });
    }
    clickPersonExId(PersonId) {
        //console.log(PersonId);
        this.service.getPersonExId(PersonId).subscribe((response) => {
            this.imdb_id = "";
            this.facebook_id = "";
            this.instagram_id = "";
            this.twitter_id = "";
            //console.log(response);
            //console.log(response["PersonExId"]["imdb_id"]);
            if (response["PersonExId"]["imdb_id"] != null && response["PersonExId"]["imdb_id"].length > 0) {
                this.imdb_id = "https://www.imdb.com/name/" + response["PersonExId"]["imdb_id"] + "/";
            }
            if (response["PersonExId"]["facebook_id"] != null && response["PersonExId"]["facebook_id"].length > 0) {
                this.facebook_id = "https://www.facebook.com/" + response["PersonExId"]["facebook_id"];
            }
            if (response["PersonExId"]["instagram_id"] != null && response["PersonExId"]["instagram_id"].length > 0) {
                this.instagram_id = "https://www.instagram.com/" + response["PersonExId"]["instagram_id"];
            }
            if (response["PersonExId"]["twitter_id"] != null && response["PersonExId"]["twitter_id"].length > 0) {
                this.twitter_id = "https://www.twitter.com/" + response["PersonExId"]["Twitter_id"];
            }
            // console.log(this.imdb_id);
            // console.log(this.facebook_id);
            // console.log(this.instagram_id);
            // console.log(this.twitter_id);
        });
    }
    getTvReviews() {
        this.service.getTvReviews(this.id).subscribe((response) => {
            //console.log(this.id);
            //console.log(response["reviewsList"]);
            this.reviewLen = Math.min(10, response["reviewsList"].length);
            var time = [];
            //console.log(response["reviewsList"][0]["author"]);
            for (var i = 0; i < this.reviewLen; i++) {
                if (response["reviewsList"][i]["author"] != null || response["reviewsList"][i]["author"].length != 0) {
                    this.reviewAuthor.push(response["reviewsList"][i]["author"]);
                }
                else {
                    this.reviewAuthor.push("");
                }
                if (response["reviewsList"][i]["content"] != null || response["reviewsList"][i]["content"].length != 0) {
                    this.reviewContent.push(response["reviewsList"][i]["content"]);
                }
                else {
                    this.reviewContent.push("");
                }
                if (response["reviewsList"][i]["created_at"] != null || response["reviewsList"][i]["created_at"].length != 0) {
                    this.createT = "";
                    this.AorPM = "";
                    this.clock = "";
                    time = response["reviewsList"][i]["created_at"].split('-');
                    // console.log(time);
                    this.clock = time[2].substring(3, 5);
                    if (this.clock > "12") {
                        this.createT = this.MonthConvertMap.get(time[1]) + " " + time[2].substring(0, 2) + ", " + time[0] + ", " + (this.clock - 12) + time[2].substring(5, 11) + " PM";
                        //console.log(this.createT);
                    }
                    else if (this.clock < "12") {
                        this.createT = this.MonthConvertMap.get(time[1]) + " " + time[2].substring(0, 2) + ", " + time[0] + ", " + time[2].substring(4, 5) + time[2].substring(5, 11) + " AM";
                    }
                    else {
                        this.createT = this.MonthConvertMap.get(time[1]) + " " + time[2].substring(0, 2) + ", " + time[0] + ", " + this.clock + time[2].substring(5, 11) + " PM";
                    }
                    //console.log(this.createT);
                    this.reviewCreated.push(this.createT);
                }
                else {
                    this.reviewCreated.push("");
                }
                if (response["reviewsList"][i]["url"] != null || response["reviewsList"][i]["url"].length != 0) {
                    this.reviewURL.push(response["reviewsList"][i]["url"]);
                }
                else {
                    this.reviewURL.push("");
                }
                if (response["reviewsList"][i]["author_details"]["rating"] != null) {
                    this.reviewRating.push(response["reviewsList"][i]["author_details"]["rating"]);
                }
                else {
                    this.reviewRating.push(0);
                }
                // console.log(response["reviewsList"][i]["author_details"]["avatar_path"].split('/').length);
                // console.log(response["reviewsList"][i]["author_details"]["avatar_path"].substr(1))
                if (response["reviewsList"][i]["author_details"]["avatar_path"] != null) {
                    if (response["reviewsList"][i]["author_details"]["avatar_path"].split('/').length > 2) {
                        this.reviewAvaPath.push(response["reviewsList"][i]["author_details"]["avatar_path"].substr(1));
                    }
                    else {
                        this.reviewAvaPath.push("https://image.tmdb.org/t/p/original" + response["reviewsList"][i]["author_details"]["avatar_path"]);
                    }
                }
                else {
                    this.reviewAvaPath.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU");
                }
            }
            //console.log(this.reviewAvaPath); 
        });
    }
    getTvRecommended() {
        this.service.getTvRecommended(this.id).subscribe((response) => {
            //console.log(response);
            var theLen = response["recomendList"].length;
            for (var i = 0; i < theLen; i++) {
                this.RecIdArray.push(response["recomendList"][i]["id"]);
                this.RecTitleArray.push(response["recomendList"][i]["name"]);
                if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                    this.RecPosterArray.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                }
                else {
                    this.RecPosterArray.push('https://cinemaone.net/images/movie_placeholder.png');
                }
            }
            if (theLen > 18) {
                for (var i = 0; i < response["recomendList"].length; i++) {
                    if (i <= 5 && i >= 0) {
                        this.tvRecId1.push(response["recomendList"][i]["id"]);
                        if (response["recomendList"][i]["name"] != null && response["recomendList"][i]["name"].length > 0) {
                            this.tvRecName1.push(response["recomendList"][i]["name"]);
                        }
                        else {
                            this.tvRecName1.push("");
                        }
                        if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                            this.tvRecPoster1.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                        }
                        else {
                            this.tvRecPoster1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 11 && i >= 6) {
                        this.tvRecId2.push(response["recomendList"][i]["id"]);
                        if (response["recomendList"][i]["name"] != null && response["recomendList"][i]["name"].length > 0) {
                            this.tvRecName2.push(response["recomendList"][i]["name"]);
                        }
                        else {
                            this.tvRecName2.push("");
                        }
                        if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                            this.tvRecPoster2.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                        }
                        else {
                            this.tvRecPoster2.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 17 && i >= 12) {
                        this.tvRecId3.push(response["recomendList"][i]["id"]);
                        if (response["recomendList"][i]["name"] != null && response["recomendList"][i]["name"].length > 0) {
                            this.tvRecName3.push(response["recomendList"][i]["name"]);
                        }
                        else {
                            this.tvRecName3.push("");
                        }
                        if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                            this.tvRecPoster3.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                        }
                        else {
                            this.tvRecPoster3.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 19 && i >= 18) {
                        this.tvRecId4.push(response["recomendList"][i]["id"]);
                        if (response["recomendList"][i]["name"] != null && response["recomendList"][i]["name"].length > 0) {
                            this.tvRecName4.push(response["recomendList"][i]["name"]);
                        }
                        else {
                            this.tvRecName4.push("");
                        }
                        if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                            this.tvRecPoster4.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                        }
                        else {
                            this.tvRecPoster4.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                this.tvRecIdMatrix = [this.tvRecId1, this.tvRecId2, this.tvRecId3, this.tvRecId4];
                this.tvRecNameMatrix = [this.tvRecName1, this.tvRecName2, this.tvRecName3, this.tvRecName4];
                this.tvRecPosterMatrix = [this.tvRecPoster1, this.tvRecPoster2, this.tvRecPoster3, this.tvRecPoster4];
                // console.log(this.tvRecIdMatrix);
                // console.log(this.tvRecNameMatrix);
                // console.log(this.tvRecPosterMatrix);
            }
            else if (theLen > 12) {
                for (var i = 0; i < response["recomendList"].length; i++) {
                    if (i <= 5 && i >= 0) {
                        this.tvRecId1.push(response["recomendList"][i]["id"]);
                        if (response["recomendList"][i]["name"] != null && response["recomendList"][i]["name"].length > 0) {
                            this.tvRecName1.push(response["recomendList"][i]["name"]);
                        }
                        else {
                            this.tvRecName1.push("");
                        }
                        if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                            this.tvRecPoster1.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                        }
                        else {
                            this.tvRecPoster1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 11 && i >= 6) {
                        this.tvRecId2.push(response["recomendList"][i]["id"]);
                        if (response["recomendList"][i]["name"] != null && response["recomendList"][i]["name"].length > 0) {
                            this.tvRecName2.push(response["recomendList"][i]["name"]);
                        }
                        else {
                            this.tvRecName2.push("");
                        }
                        if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                            this.tvRecPoster2.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                        }
                        else {
                            this.tvRecPoster2.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 17 && i >= 12) {
                        this.tvRecId3.push(response["recomendList"][i]["id"]);
                        if (response["recomendList"][i]["name"] != null && response["recomendList"][i]["name"].length > 0) {
                            this.tvRecName3.push(response["recomendList"][i]["name"]);
                        }
                        else {
                            this.tvRecName3.push("");
                        }
                        if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                            this.tvRecPoster3.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                        }
                        else {
                            this.tvRecPoster3.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                this.tvRecIdMatrix = [this.tvRecId1, this.tvRecId2, this.tvRecId3];
                this.tvRecNameMatrix = [this.tvRecName1, this.tvRecName2, this.tvRecName3];
                this.tvRecPosterMatrix = [this.tvRecPoster1, this.tvRecPoster2, this.tvRecPoster3];
                // console.log(this.tvRecIdMatrix);
                // console.log(this.tvRecNameMatrix);
                // console.log(this.tvRecPosterMatrix);
            }
            else if (theLen > 6) {
                for (var i = 0; i < response["recomendList"].length; i++) {
                    if (i <= 5 && i >= 0) {
                        this.tvRecId1.push(response["recomendList"][i]["id"]);
                        if (response["recomendList"][i]["name"] != null && response["recomendList"][i]["name"].length > 0) {
                            this.tvRecName1.push(response["recomendList"][i]["name"]);
                        }
                        else {
                            this.tvRecName1.push("");
                        }
                        if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                            this.tvRecPoster1.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                        }
                        else {
                            this.tvRecPoster1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 11 && i >= 6) {
                        this.tvRecId2.push(response["recomendList"][i]["id"]);
                        if (response["recomendList"][i]["name"] != null && response["recomendList"][i]["name"].length > 0) {
                            this.tvRecName2.push(response["recomendList"][i]["name"]);
                        }
                        else {
                            this.tvRecName2.push("");
                        }
                        if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                            this.tvRecPoster2.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                        }
                        else {
                            this.tvRecPoster2.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                this.tvRecIdMatrix = [this.tvRecId1, this.tvRecId2];
                this.tvRecNameMatrix = [this.tvRecName1, this.tvRecName2];
                this.tvRecPosterMatrix = [this.tvRecPoster1, this.tvRecPoster2];
                // console.log(this.tvRecIdMatrix);
                // console.log(this.tvRecNameMatrix);
                // console.log(this.tvRecPosterMatrix);
            }
            else if (theLen > 0) {
                for (var i = 0; i < response["recomendList"].length; i++) {
                    if (i <= 5 && i >= 0) {
                        this.tvRecId1.push(response["recomendList"][i]["id"]);
                        if (response["recomendList"][i]["name"] != null && response["recomendList"][i]["name"].length > 0) {
                            this.tvRecName1.push(response["recomendList"][i]["name"]);
                        }
                        else {
                            this.tvRecName1.push("");
                        }
                        if (response["recomendList"][i]["poster_path"] != null && response["recomendList"][i]["poster_path"].length > 0) {
                            this.tvRecPoster1.push('https://image.tmdb.org/t/p/w500' + response["recomendList"][i]["poster_path"]);
                        }
                        else {
                            this.tvRecPoster1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                this.tvRecIdMatrix = [this.tvRecId1];
                this.tvRecNameMatrix = [this.tvRecName1];
                this.tvRecPosterMatrix = [this.tvRecPoster1];
                // console.log(this.tvRecIdMatrix);
                // console.log(this.tvRecNameMatrix);
                // console.log(this.tvRecPosterMatrix);
            }
            theLen = null;
        });
    }
    getTvSimilar() {
        this.service.getTvSimilar(this.id).subscribe((response) => {
            //console.log(response);
            var theLen = response["similarList"].length;
            for (var i = 0; i < theLen; i++) {
                this.SimIdArray.push(response["similarList"][i]["id"]);
                this.SimTitleArray.push(response["similarList"][i]["name"]);
                if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                    this.SimPosterArray.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                }
                else {
                    this.SimPosterArray.push('https://cinemaone.net/images/movie_placeholder.png');
                }
            }
            if (theLen > 18) {
                for (var i = 0; i < theLen; i++) {
                    if (i <= 5 && i >= 0) {
                        this.SimId1.push(response["similarList"][i]["id"]);
                        if (response["similarList"][i]["name"] != null && response["similarList"][i]["name"].length > 0) {
                            this.SimName1.push(response["similarList"][i]["name"]);
                        }
                        else {
                            this.SimName1.push("");
                        }
                        if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                            this.SimPoster1.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                        }
                        else {
                            this.SimPoster1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 11 && i >= 6) {
                        this.SimId2.push(response["similarList"][i]["id"]);
                        if (response["similarList"][i]["name"] != null && response["similarList"][i]["name"].length > 0) {
                            this.SimName2.push(response["similarList"][i]["name"]);
                        }
                        else {
                            this.SimName2.push("");
                        }
                        if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                            this.SimPoster2.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                        }
                        else {
                            this.SimPoster2.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 17 && i >= 12) {
                        this.SimId3.push(response["similarList"][i]["id"]);
                        if (response["similarList"][i]["name"] != null && response["similarList"][i]["name"].length > 0) {
                            this.SimName3.push(response["similarList"][i]["name"]);
                        }
                        else {
                            this.SimName3.push("");
                        }
                        if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                            this.SimPoster3.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                        }
                        else {
                            this.SimPoster3.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 19 && i >= 18) {
                        this.SimId4.push(response["similarList"][i]["id"]);
                        if (response["similarList"][i]["name"] != null && response["similarList"][i]["name"].length > 0) {
                            this.SimName4.push(response["similarList"][i]["name"]);
                        }
                        else {
                            this.SimName4.push("");
                        }
                        if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                            this.SimPoster4.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                        }
                        else {
                            this.SimPoster4.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                this.SimIdMatrix = [this.SimId1, this.SimId2, this.SimId3, this.SimId4];
                this.SimNameMatrix = [this.SimName1, this.SimName2, this.SimName3, this.SimName4];
                this.SimPosterMatrix = [this.SimPoster1, this.SimPoster2, this.SimPoster3, this.SimPoster4];
                // console.log(this.SimIdMatrix);
                // console.log(this.SimTitleMatrix);
                // console.log(this.SimPosterMatrix);
            }
            else if (theLen > 12) {
                for (var i = 0; i < theLen; i++) {
                    if (i <= 5 && i >= 0) {
                        this.SimId1.push(response["similarList"][i]["id"]);
                        if (response["similarList"][i]["name"] != null && response["similarList"][i]["name"].length > 0) {
                            this.SimName1.push(response["similarList"][i]["name"]);
                        }
                        else {
                            this.SimName1.push("");
                        }
                        if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                            this.SimPoster1.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                        }
                        else {
                            this.SimPoster1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 11 && i >= 6) {
                        this.SimId2.push(response["similarList"][i]["id"]);
                        if (response["similarList"][i]["name"] != null && response["similarList"][i]["name"].length > 0) {
                            this.SimName2.push(response["similarList"][i]["name"]);
                        }
                        else {
                            this.SimName2.push("");
                        }
                        if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                            this.SimPoster2.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                        }
                        else {
                            this.SimPoster2.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 17 && i >= 12) {
                        this.SimId3.push(response["similarList"][i]["id"]);
                        if (response["similarList"][i]["name"] != null && response["similarList"][i]["name"].length > 0) {
                            this.SimName3.push(response["similarList"][i]["name"]);
                        }
                        else {
                            this.SimName3.push("");
                        }
                        if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                            this.SimPoster3.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                        }
                        else {
                            this.SimPoster3.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                this.SimIdMatrix = [this.SimId1, this.SimId2, this.SimId3];
                this.SimNameMatrix = [this.SimName1, this.SimName2, this.SimName3];
                this.SimPosterMatrix = [this.SimPoster1, this.SimPoster2, this.SimPoster3];
                // console.log(this.SimIdMatrix);
                // console.log(this.SimTitleMatrix);
                // console.log(this.SimPosterMatrix);
            }
            else if (theLen > 6) {
                for (var i = 0; i < theLen; i++) {
                    if (i <= 5 && i >= 0) {
                        this.SimId1.push(response["similarList"][i]["id"]);
                        if (response["similarList"][i]["name"] != null && response["similarList"][i]["name"].length > 0) {
                            this.SimName1.push(response["similarList"][i]["name"]);
                        }
                        else {
                            this.SimName1.push("");
                        }
                        if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                            this.SimPoster1.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                        }
                        else {
                            this.SimPoster1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                    else if (i <= 11 && i >= 6) {
                        this.SimId2.push(response["similarList"][i]["id"]);
                        if (response["similarList"][i]["name"] != null && response["similarList"][i]["name"].length > 0) {
                            this.SimName2.push(response["similarList"][i]["name"]);
                        }
                        else {
                            this.SimName2.push("");
                        }
                        if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                            this.SimPoster2.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                        }
                        else {
                            this.SimPoster2.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                this.SimIdMatrix = [this.SimId1, this.SimId2];
                this.SimNameMatrix = [this.SimName1, this.SimName2];
                this.SimPosterMatrix = [this.SimPoster1, this.SimPoster2];
                // console.log(this.SimIdMatrix);
                // console.log(this.SimTitleMatrix);
                // console.log(this.SimPosterMatrix);
            }
            else if (theLen > 0) {
                for (var i = 0; i < theLen; i++) {
                    if (i <= 5 && i >= 0) {
                        this.SimId1.push(response["similarList"][i]["id"]);
                        if (response["similarList"][i]["name"] != null && response["similarList"][i]["name"].length > 0) {
                            this.SimName1.push(response["similarList"][i]["name"]);
                        }
                        else {
                            this.SimName1.push("");
                        }
                        if (response["similarList"][i]["poster_path"] != null && response["similarList"][i]["poster_path"].length > 0) {
                            this.SimPoster1.push('https://image.tmdb.org/t/p/w500' + response["similarList"][i]["poster_path"]);
                        }
                        else {
                            this.SimPoster1.push('https://cinemaone.net/images/movie_placeholder.png');
                        }
                    }
                }
                this.SimIdMatrix = [this.SimId1];
                this.SimNameMatrix = [this.SimName1];
                this.SimPosterMatrix = [this.SimPoster1];
                // console.log(this.SimIdMatrix);
                // console.log(this.SimTitleMatrix);
                // console.log(this.SimPosterMatrix);
            }
            theLen = null;
        });
    }
}
TvDetailsComponent.ɵfac = function TvDetailsComponent_Factory(t) { return new (t || TvDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_5__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_localstorageservice_service__WEBPACK_IMPORTED_MODULE_7__["LocalstorageserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
TvDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TvDetailsComponent, selectors: [["app-tv-details"]], viewQuery: function TvDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
    } }, decls: 56, vars: 19, consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap", "rel", "stylesheet"], ["href", "https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap", "rel", "stylesheet"], [2, "background-color", "#000033", "min-height", "700px"], [1, "container", "pt-sm-5"], [1, "row"], [1, "col-sm-1"], [1, "col-sm-7"], [1, "embed-responsive", "embed-responsive-16by9"], ["suggestedQuality", "highres", 3, "videoId"], [1, "col-sm-3", "details", 2, "color", "white"], ["style", "font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 35px;", 4, "ngIf"], ["style", "font-family: 'Noto Sans', sans-serif; font-weight: 400; font-style: italic;font-size: 17px; opacity: 0.7;", 4, "ngIf"], ["style", "font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 17px; opacity: 0.7;", 4, "ngIf"], ["class", "mt-sm-2", "style", "font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 13px;", 4, "ngIf"], ["style", "font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 13px;", 4, "ngIf"], ["id", "button-text", 1, "btn", "btn-primary", 2, "margin-top", "-5px", 3, "click"], ["type", "success", "class", "mt-sm-2", "style", "font-size: 15px;", 3, "closed", 4, "ngIf"], ["type", "danger", "class", "mt-sm-2", "style", "font-size: 14px;", 3, "closed", 4, "ngIf"], ["class", "row mt-sm-2", "style", "color: white;", 4, "ngIf"], [1, "row", 2, "color", "white"], [1, "col-sm-10"], [2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "17px"], ["target", "_blank", 2, "padding-right", "5px", 3, "href"], [1, "fa", "fa-twitter", 2, "font-size", "36px", "color", "#1aa3ff"], ["data-href", "https://developers.facebook.com/docs/plugins/", "data-layout", "button", "data-size", "large", 1, "fb-share-button"], ["target", "_blank", 3, "href"], [1, "fa", "fa-facebook-square", 2, "font-size", "36px", "color", "#1a1aff"], ["class", "row row-horizon ml-sm-5", 4, "ngIf"], ["content", ""], ["class", "row", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["inMobile", ""], [2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "35px"], [2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-style", "italic", "font-size", "17px", "opacity", "0.7"], [2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "17px", "opacity", "0.7"], [1, "mt-sm-2", 2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "13px"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "opacity", "0.7", "font-size", "15px"], [2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "13px"], ["type", "success", 1, "mt-sm-2", 2, "font-size", "15px", 3, "closed"], ["selfClosingAlert", ""], ["type", "danger", 1, "mt-sm-2", 2, "font-size", "14px", 3, "closed"], [1, "row", "mt-sm-2", 2, "color", "white"], [2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "18px"], [2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "15px", "opacity", "0.7", "line-height", "1.8"], [1, "row", "row-horizon", "ml-sm-5"], [1, "col-sm-11"], [1, "container-fluid", "py-2"], [2, "color", "white", "margin-bottom", "20px"], [1, "d-flex", "flex-row", "flex-nowrap", "castScroll", 2, "overflow-x", "scroll"], ["id", "Cast", "class", "d-flex flex-row flex-nowrap", 3, "click", 4, "ngFor", "ngForOf"], ["id", "Cast", 1, "d-flex", "flex-row", "flex-nowrap", 3, "click"], [1, "card", "card-block", "mx-1", 3, "click"], [1, "card-img-top", "mx-auto", 2, "width", "146px", "height", "230px", "border-top-left-radius", "25px", "border-top-right-radius", "25px", 3, "src"], [1, "card-title", "mt-sm-2", 2, "font-family", "'Noto Sans', sans-serif", "font-weight", "700", "font-size", "14px"], [2, "font-family", "'Poppins', sans-serif", "font-size", "14px", "margin-top", "-12px"], [1, "card-text", 2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "13px"], [1, "modal-header"], ["class", "modal-title", "style", "font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 18px;", 4, "ngIf"], ["type", "button", "aria-label", "Close", "autofocus", "", 1, "close", 3, "click"], ["aria-hidden", "true"], ["class", "modal-body", "style", "max-height:400px; overflow-y: scroll;", 4, "ngIf", "ngIfElse"], [1, "modal-title", 2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "18px"], [1, "modal-body", 2, "max-height", "400px", "overflow-y", "scroll"], [1, "card", "mb-3", 2, "border", "none"], [1, "row", "no-gutters"], [1, "col-md-3"], ["alt", "...", 1, "card-img", 3, "src"], [1, "col-md-8", 2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "14px"], [1, "card-body", 2, "text-align", "left"], ["class", "card-text", "style", " opacity: 0.7;", 4, "ngIf"], [1, "card-text", 2, "margin-top", "20px"], ["style", "padding-right: 5px;", 4, "ngIf"], [1, "row", "no-gutters", 2, "text-align", "left", "padding-top", "10px"], [1, "card-text", 2, "opacity", "0.7"], [2, "padding-right", "5px"], ["ngbTooltip", "Visit IMDB", "tooltipClass", "my-custom-class", 1, "fa", "fa-imdb", 2, "font-size", "36px", "color", "#ffcc00"], ["ngbTooltip", "Visit Facebook", "tooltipClass", "my-custom-class", 1, "fa", "fa-facebook-square", 2, "font-size", "36px", "color", "#1a1aff"], [1, "instagram"], ["ngbTooltip", "Visit Instagram", "tooltipClass", "my-custom-class", 1, "fa", "fa-instagram"], ["ngbTooltip", "Visit Twitter", "tooltipClass", "my-custom-class", 1, "fa", "fa-twitter", 2, "font-size", "36px", "color", "#1aa3ff"], [2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "22px", "opacity", "0.9"], [2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "14px", "opacity", "0.7", "line-height", "1.8", "margin-top", "8px"], [1, "modal-body"], [2, "color", "lightgrey", "padding-left", "8px"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], [1, "card", "mb-3"], [1, "col-md-2", 2, "padding-top", "20px"], ["alt", "...", 1, "rounded-circle", 2, "width", "80px", "height", "80px", "margin-left", "40px", 3, "src"], [1, "col-md-9", 2, "padding-top", "10px", "margin-left", "10px"], ["class", "card-title", "style", "font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 22px; padding-bottom: 10px;", 4, "ngIf"], ["class", "card-text", "style", "opacity: 0.7;", 4, "ngIf"], ["class", "card-text comment", "style", "font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 13px; opacity: 0.7;", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], [1, "col-md-1"], [1, "card-title", 2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "22px", "padding-bottom", "10px"], [2, "color", "white", "font-size", "15px", "border-radius", "15px", "padding", "6px", "background-color", "black", "margin-left", "12px"], [1, "text-muted"], [1, "card-text", "comment", 2, "font-family", "'Noto Sans', sans-serif", "font-weight", "400", "font-size", "13px", "opacity", "0.7"], ["class", "row", "style", "padding-top: 30px; ", 4, "ngIf"], ["class", "row", "style", "padding-top: 10px; padding-bottom: 40px;", 4, "ngIf"], [1, "row", 2, "padding-top", "30px"], ["id", "RecomTv"], [2, "color", "white", "padding-bottom", "20px", "padding-left", "10px"], [3, "pauseOnHover", "pauseOnFocus", "interval"], ["ngbSlide", ""], [1, "Poster"], [1, "posterIn", 2, "display", "inline", "float", "left"], [3, "routerLink"], ["alt", "", 3, "src"], [1, "titleORname"], [1, "row", 2, "padding-top", "10px", "padding-bottom", "40px"], ["id", "SimilarTv"], ["class", "row", "style", "padding-top: 30px;", 4, "ngIf"], ["id", "RecomTvMobile"], [2, "color", "white", "padding-bottom", "20px", "padding-left", "60px", "padding-right", "10px"], [1, "no-indicators", 3, "pauseOnHover", "pauseOnFocus", "interval"], [1, "PosterMobile"], [1, "posterInMobile", 2, "display", "inline", "float", "left"], [1, "titleORnameMobile"], ["id", "SimilarTvMobile"], [2, "color", "white", "padding-bottom", "20px", "padding-left", "70px"]], template: function TvDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "body", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "youtube-player", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, TvDetailsComponent_h1_17_Template, 2, 1, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, TvDetailsComponent_p_18_Template, 2, 1, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, TvDetailsComponent_span_20_Template, 2, 1, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, TvDetailsComponent_span_21_Template, 2, 1, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, TvDetailsComponent_span_23_Template, 2, 1, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, TvDetailsComponent_span_24_Template, 2, 1, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, TvDetailsComponent_div_25_Template, 3, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, TvDetailsComponent_div_26_Template, 3, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TvDetailsComponent_Template_button_click_28_listener() { return ctx.updateMyList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, TvDetailsComponent_ngb_alert_29_Template, 3, 0, "ngb-alert", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, TvDetailsComponent_ngb_alert_30_Template, 3, 0, "ngb-alert", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, TvDetailsComponent_div_33_Template, 9, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, TvDetailsComponent_div_47_Template, 8, 1, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, TvDetailsComponent_ng_template_48_Template, 8, 3, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, TvDetailsComponent_div_51_Template, 10, 2, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, TvDetailsComponent_div_53_Template, 4, 2, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, TvDetailsComponent_ng_template_54_Template, 3, 2, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("videoId", ctx.TvideoKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.TdetailsName == null ? null : ctx.TdetailsName.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.TdetailsTagline == null ? null : ctx.TdetailsTagline.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.TdetailsFirstAirDate == null ? null : ctx.TdetailsFirstAirDate.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.TdetailsVoteAvg !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.TdetailsEpRuntimeHour !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.TdetailsEpRuntimeMin !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.TdetailsGenres == null ? null : ctx.TdetailsGenres.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.TdetailsSpokenLanguage == null ? null : ctx.TdetailsSpokenLanguage.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAdded && !ctx.isclose);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isRemoved && !ctx.isclose);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.TdetailsOverview == null ? null : ctx.TdetailsOverview.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=Watch+", ctx.TdetailsName, "%0A", ctx.TvURL, "%0A&hashtags=USC,CSCI571,FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=", ctx.TvURL, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.TCastName == null ? null : ctx.TCastName.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.reviewAuthor == null ? null : ctx.reviewAuthor.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isSmallScreen)("ngIfElse", _r16);
    } }, directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_8__["YouTubePlayer"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlert"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltip"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: [".card[_ngcontent-%COMP%]{\n    border-radius: 25px; \n}\n#Cast[_ngcontent-%COMP%]{\n    margin-bottom: 20px;\n}\n#Cast[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]{\n    width:146px; \n    min-height: 300px; \n    text-align: center;\n}\n#Cast[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n}\n\n.comment[_ngcontent-%COMP%]{\n    word-wrap: break-word;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 3;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n#RecomTv[_ngcontent-%COMP%], #SimilarTv[_ngcontent-%COMP%]{\n    \n    position: relative;\n    width: 100%;\n    \n    \n    \n}\n#RecomTvMobile[_ngcontent-%COMP%], #SimilarTvMobile[_ngcontent-%COMP%]{\n    \n    position: relative;\n    width: 100%;\n    \n    \n}\n#RecomTv[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%], #SimilarTv[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%]{\n    padding-left: 110px;\n    padding-right: 110px;\n}\n#RecomTvMobile[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%], #SimilarTvMobile[_ngcontent-%COMP%]    > ngb-carousel[_ngcontent-%COMP%]{\n    padding-left: 70px;\n    padding-right: 70px;\n}\n.Poster[_ngcontent-%COMP%]{\n    width: 1250px;\n    height: 260px;\n    \n}\n.Poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 152px;\n    height: 210px;\n    padding-right: 15px;\n    \n    \n}\n.posterInMobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 250px;\n    height: 350px;\n}\n.Poster[_ngcontent-%COMP%]   .titleORname[_ngcontent-%COMP%]{\n    width: 137px; \n    height: 60px; \n    \n    color: white; \n    font-size: 10px; \n    margin-top: -55px; \n    padding-left: 5px;\n    opacity: 0;\n    padding-top: 25px;\n    overflow-wrap:break-word;\n    word-wrap: break-word;\n    background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1),rgba(0,0,0,1));\n    font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 8px;\n}\n.titleORnameMobile[_ngcontent-%COMP%]{\n    position:absolute;\n    width: 100%;\n    height: 150px;\n    \n    color: white; \n    font-size: 30px; \n    margin-top: -145px; \n    padding-left: 20px;\n    padding-top: 80px;\n    overflow-wrap:break-word;\n    word-wrap: break-word;\n    background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1),rgba(0,0,0,1));\n    font-family: 'Noto Sans', sans-serif; \n    font-weight: 400; \n    font-size: 15px;\n    \n}\n.posterIn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover, .posterIn[_ngcontent-%COMP%]:hover    > .titleORname[_ngcontent-%COMP%]{\n    opacity: 1;\n    cursor: pointer;\n    transform: scale(1.05);\n    cursor: pointer;  \n}\n.posterInMobile[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n    transform: scale(1.05);\n    cursor: pointer;\n}\n.castScroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n    height: 7px;\n  }\n\n.castScroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: rgba(255, 255, 255, 0.157) ; \n    border-radius: 10px;\n  }\n\n.castScroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #b6b5b5; ; \n    border-radius: 10px;\n  }\n\n.castScroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: #555; \n  }\n.instagram[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{\n    font-size:36px;\n    background: #d6249f;\n    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR2LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTs7OztHQUlHO0FBQ0g7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjtBQUdBOztJQUVJLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1CQUFtQjs7SUFFbkIsOEJBQThCO0FBQ2xDO0FBQ0E7O0lBRUksd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsbUJBQW1COztBQUV2QjtBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFJQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsdUZBQXVGO0lBQ3ZGLG9DQUFvQyxFQUFFLGdCQUFnQixFQUFFLGNBQWM7QUFDMUU7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsdUZBQXVGO0lBQ3ZGLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZUFBZTs7QUFFbkI7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksV0FBVztFQUNiO0FBRUEsVUFBVTtBQUNWO0lBQ0UsdUNBQXVDO0lBQ3ZDLG1CQUFtQjtFQUNyQjtBQUVBLFdBQVc7QUFDWDtJQUNFLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7QUFFQSxvQkFBb0I7QUFDcEI7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsNEdBQTRHO0lBQzVHLDZCQUE2QjtJQUM3QixvQ0FBb0M7QUFDeEMiLCJmaWxlIjoidHYtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4OyBcbn1cbiNDYXN0e1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4jQ2FzdCA+LmNhcmR7XG4gICAgd2lkdGg6MTQ2cHg7IFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4OyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jQ2FzdCA+IC5jYXJkOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qIC5tb2RhbC1jb250ZW50e1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDcwMHB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbCA7XG59ICovXG4uY29tbWVudHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuXG4jUmVjb21UdixcbiNTaW1pbGFyVHZ7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMTgxLCAyKTsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogaGVpZ2h0OiAzMDBweDsgKi9cbiAgICBcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7ICovXG59XG4jUmVjb21Udk1vYmlsZSxcbiNTaW1pbGFyVHZNb2JpbGV7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMTgxLCAyKTsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogaGVpZ2h0OiAzMDBweDsgKi9cbiAgICBcbn1cblxuI1JlY29tVHYgPiBuZ2ItY2Fyb3VzZWwsXG4jU2ltaWxhclR2ID4gbmdiLWNhcm91c2Vse1xuICAgIHBhZGRpbmctbGVmdDogMTEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTEwcHg7XG59XG4jUmVjb21Udk1vYmlsZSA+IG5nYi1jYXJvdXNlbCxcbiNTaW1pbGFyVHZNb2JpbGUgPiBuZ2ItY2Fyb3VzZWx7XG4gICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDcwcHg7XG59XG4uUG9zdGVye1xuICAgIHdpZHRoOiAxMjUwcHg7XG4gICAgaGVpZ2h0OiAyNjBweDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xufVxuLlBvc3RlciBpbWd7XG4gICAgd2lkdGg6IDE1MnB4O1xuICAgIGhlaWdodDogMjEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDI1cHg7ICovXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXG59XG4ucG9zdGVySW5Nb2JpbGUgaW1ne1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDM1MHB4O1xufVxuXG5cblxuLlBvc3RlciAudGl0bGVPUm5hbWV7XG4gICAgd2lkdGg6IDEzN3B4OyBcbiAgICBoZWlnaHQ6IDYwcHg7IFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXG4gICAgY29sb3I6IHdoaXRlOyBcbiAgICBmb250LXNpemU6IDEwcHg7IFxuICAgIG1hcmdpbi10b3A6IC01NXB4OyBcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIG92ZXJmbG93LXdyYXA6YnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDEpLHJnYmEoMCwwLDAsMSkpO1xuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjsgZm9udC13ZWlnaHQ6IDQwMDsgZm9udC1zaXplOiA4cHg7XG59XG4udGl0bGVPUm5hbWVNb2JpbGV7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG4gICAgY29sb3I6IHdoaXRlOyBcbiAgICBmb250LXNpemU6IDMwcHg7IFxuICAgIG1hcmdpbi10b3A6IC0xNDVweDsgXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgIG92ZXJmbG93LXdyYXA6YnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDEpLHJnYmEoMCwwLDAsMSkpO1xuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjsgXG4gICAgZm9udC13ZWlnaHQ6IDQwMDsgXG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIFxufVxuXG4ucG9zdGVySW4gaW1nOmhvdmVyLFxuLnBvc3RlckluOmhvdmVyID4gLnRpdGxlT1JuYW1le1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgY3Vyc29yOiBwb2ludGVyOyAgXG59XG4ucG9zdGVySW5Nb2JpbGU6aG92ZXIgaW1ne1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FzdFNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogN3B4O1xuICB9XG4gIFxuICAvKiBUcmFjayAqL1xuICAuY2FzdFNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNTcpIDsgXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICAgXG4gIC8qIEhhbmRsZSAqL1xuICAuY2FzdFNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICNiNmI1YjU7IDsgXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICBcbiAgLyogSGFuZGxlIG9uIGhvdmVyICovXG4gIC5jYXN0U2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzU1NTsgXG4gIH1cbiAgLmluc3RhZ3JhbSAuZmF7XG4gICAgZm9udC1zaXplOjM2cHg7XG4gICAgYmFja2dyb3VuZDogI2Q2MjQ5ZjtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDMwJSAxMDclLCAjZmRmNDk3IDAlLCAjZmRmNDk3IDUlLCAjZmQ1OTQ5IDQ1JSwjZDYyNDlmIDYwJSwjMjg1QUVCIDkwJSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */", "*[_ngcontent-%COMP%]:focus {\n            border: none !important;\n            outline:0 !important;\n            box-shadow: none;\n            -moz-box-shadow: none;\n            -webkit-box-shadow: none;\n            border-color: inherit;\n        }\n        @media screen and (max-width: 560px){\n            body[_ngcontent-%COMP%]{\n                min-height: 630px;\n            }\n        }@media screen and (max-width: 560px){\n            .details[_ngcontent-%COMP%]{\n                margin-top: 20px;\n            }\n        }"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mylist/mylist.component */ "6DPj");
/* harmony import */ var _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/movie-details/movie-details.component */ "4cG8");
/* harmony import */ var _components_tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tv-details/tv-details.component */ "mv0o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







//Demo!!
// import { SecondpageComponent } from './components/secondpage/secondpage.component';
// import { FirstpageComponent } from './components/firstpage/firstpage.component';
// import { FirstChildComponent } from './components/first-child/first-child.component'
//Demo!!
const routes = [
    { path: '', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"] },
    { path: 'watch/movie/:id', component: _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailsComponent"] },
    { path: 'watch/tv/:id', component: _components_tv_details_tv_details_component__WEBPACK_IMPORTED_MODULE_4__["TvDetailsComponent"] },
    { path: 'mylist', component: _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_2__["MylistComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map