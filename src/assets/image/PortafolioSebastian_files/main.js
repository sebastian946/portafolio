"use strict";
(self["webpackChunkportafolioSebastian"] = self["webpackChunkportafolioSebastian"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



const routes = [];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _components_content_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/content/about-me/about-me.component */ 6502);
/* harmony import */ var _components_content_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/content/experiences/experiences.component */ 3435);
/* harmony import */ var _components_content_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/content/introduction/introduction.component */ 2925);
/* harmony import */ var _components_content_study_study_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/content/study/study.component */ 6976);
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ 8984);
var _class;






class AppComponent {
  constructor() {
    this.title = 'portafolioSebastian';
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 5,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-navbar")(1, "app-introduction")(2, "app-about-me")(3, "app-experiences")(4, "app-study");
    }
  },
  dependencies: [_components_content_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_0__.AboutMeComponent, _components_content_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_1__.ExperiencesComponent, _components_content_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_2__.IntroductionComponent, _components_content_study_study_component__WEBPACK_IMPORTED_MODULE_3__.StudyComponent, _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _components_content_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/content/about-me/about-me.component */ 6502);
/* harmony import */ var _components_content_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/content/experiences/experiences.component */ 3435);
/* harmony import */ var _components_content_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/content/introduction/introduction.component */ 2925);
/* harmony import */ var _components_content_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/content/projects/projects.component */ 9542);
/* harmony import */ var _components_content_study_study_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/content/study/study.component */ 6976);
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ 9215);
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ 8984);
/* harmony import */ var _components_shared_social_media_social_media_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shared/social-media/social-media.component */ 6112);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/layout */ 9743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;
















class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__.LayoutModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_content_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__.AboutMeComponent, _components_content_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_3__.ExperiencesComponent, _components_content_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_4__.IntroductionComponent, _components_content_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__.ProjectsComponent, _components_content_study_study_component__WEBPACK_IMPORTED_MODULE_6__.StudyComponent, _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__.NavbarComponent, _components_shared_social_media_social_media_component__WEBPACK_IMPORTED_MODULE_9__.SocialMediaComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__.LayoutModule]
  });
})();

/***/ }),

/***/ 6502:
/*!*******************************************************************!*\
  !*** ./src/app/components/content/about-me/about-me.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutMeComponent: () => (/* binding */ AboutMeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class AboutMeComponent {}
_class = AboutMeComponent;
_class.ɵfac = function AboutMeComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-about-me"]],
  decls: 62,
  vars: 0,
  consts: [[1, "container1"], [1, "title"], [1, "content"], [1, "personal-information"], [1, "personal-text"], [1, "tecnology"], [1, "content-tecnology"], [1, "box-content"]],
  template: function AboutMeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ABOUT ME");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Get to know me ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4)(11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "I am a technology enthusiast with 2 years of experience in software development. I embarked on my journey at Intergrupo, where I mastered manual testing, black-box testing, regression, and automation using Katalon, Serenity, and Selenium. I worked with .NET and Angular for 5 months, and now, as a QA Mid Level at Banco de Bogot\u00E1 for 7 months, I lead detailed manual testing, automation with Serenity, Selenium, Python, Cypress, and security and load testing. My approach has reduced bugs in production. Furthermore, I am a full-stack developer in Angular, React, Spring Boot, Node.js, Python, and Go. I handle AWS (Lambdas, architecture) and effectively communicate to understand product and client needs. I excel in teamwork, propose enhancements, and deliver quality as both QA and developer. My goal is to provide accurate and user-friendly services for clients and employers.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5)(14, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Front");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6)(17, "div", 7)(18, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Angular");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7)(21, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "React");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6)(26, "div", 7)(27, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Spring");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7)(30, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Node js");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7)(33, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Laravel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Tester - Automate testing");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6)(38, "div", 7)(39, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Serenity");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7)(42, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Selenium");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7)(45, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Pytest");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7)(48, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Katalon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 7)(51, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Cucumber");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Cloud");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 6)(56, "div", 7)(57, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "AWS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br")(60, "br")(61, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: [".container1[_ngcontent-%COMP%]{\n  transform: translateY(303px);\n  background-color: white;\n  width: 100.2%;\n  height: 100%;\n  padding: 5em;\n  overflow: hidden;\n}\n.container1[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\n  text-align: center;\n  overflow: hidden;\n}\n.container1[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  position: relative;\n  font-weight: bolder;\n  font-size: 47px;\n  overflow: hidden;\n}\n.container1[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\n  width: 5%;\n  transform: translateX(46em);\n  border-width: 7px;\n  border-radius: 10px;\n  border-color: #268ed3;\n  margin: 20px 0;\n  overflow: hidden;\n}\n.container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{\n  margin: 20px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: flex-start;\n  overflow: hidden;\n}\n.container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .personal-information[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n  font-weight: 900;\n  overflow: hidden;\n}\n.container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .personal-information[_ngcontent-%COMP%]   .personal-text[_ngcontent-%COMP%]{\n  margin-right: 15px;\n  text-align: justify;\n  overflow: hidden;\n}\n.container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .personal-information[_ngcontent-%COMP%]   .personal-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n  font-size: 22px;\n  overflow: hidden;\n}\n.container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tecnology[_ngcontent-%COMP%]{\n  padding: 20px;\n  overflow: hidden;\n}\n.container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tecnology[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n  font-weight: 900;\n  transform: translateX(2px);\n  overflow: hidden;\n}\n.container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tecnology[_ngcontent-%COMP%]   .content-tecnology[_ngcontent-%COMP%]{\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n.container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tecnology[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{\n  border: solid #3498DB 0.5px;\n  padding: 10px;\n  margin: 4px;\n  width: 150px;\n  border-radius: 13px;\n  background-color: #3498DB;\n  box-shadow: 10px 5px 5px 0 #dadada;\n}\n.container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tecnology[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\n  color: white;\n}\n@media only screen and (min-width: 855px) and (max-width: 1200px){\n  .container1[_ngcontent-%COMP%]{\n    width: 75em;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1870px) {\n  .container1[_ngcontent-%COMP%]{\n    width: 117.5em;\n  }\n  .container1[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\n    transform: translateX(-45px);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcjF7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMDNweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwLjIlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDVlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb250YWluZXIxIC50aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNvbnRhaW5lcjEgLnRpdGxlIGgxe1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogNDdweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb250YWluZXIxIC50aXRsZSBocntcbiAgd2lkdGg6IDUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDZlbSk7XG4gIGJvcmRlci13aWR0aDogN3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItY29sb3I6ICMyNjhlZDM7XG4gIG1hcmdpbjogMjBweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNvbnRhaW5lcjEgLmNvbnRlbnR7XG4gIG1hcmdpbjogMjBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb250YWluZXIxIC5jb250ZW50IC5wZXJzb25hbC1pbmZvcm1hdGlvbiBoMntcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb250YWluZXIxIC5jb250ZW50IC5wZXJzb25hbC1pbmZvcm1hdGlvbiAucGVyc29uYWwtdGV4dHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNvbnRhaW5lcjEgLmNvbnRlbnQgLnBlcnNvbmFsLWluZm9ybWF0aW9uIC5wZXJzb25hbC10ZXh0IHB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb250YWluZXIxIC5jb250ZW50IC50ZWNub2xvZ3l7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY29udGFpbmVyMSAuY29udGVudCAudGVjbm9sb2d5IGgye1xuICBmb250LXdlaWdodDogOTAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb250YWluZXIxIC5jb250ZW50IC50ZWNub2xvZ3kgLmNvbnRlbnQtdGVjbm9sb2d5e1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNvbnRhaW5lcjEgLmNvbnRlbnQgLnRlY25vbG9neSAuYm94LWNvbnRlbnR7XG4gIGJvcmRlcjogc29saWQgIzM0OThEQiAwLjVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA0cHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThEQjtcbiAgYm94LXNoYWRvdzogMTBweCA1cHggNXB4IDAgI2RhZGFkYTtcbn1cbi5jb250YWluZXIxIC5jb250ZW50IC50ZWNub2xvZ3kgLmJveC1jb250ZW50IGg0e1xuICBjb2xvcjogd2hpdGU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg1NXB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcbiAgLmNvbnRhaW5lcjF7XG4gICAgd2lkdGg6IDc1ZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTg3MHB4KSB7XG4gIC5jb250YWluZXIxe1xuICAgIHdpZHRoOiAxMTcuNWVtO1xuICB9XG4gIC5jb250YWluZXIxIC50aXRsZSBocntcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQ1cHgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3435:
/*!*************************************************************************!*\
  !*** ./src/app/components/content/experiences/experiences.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperiencesComponent: () => (/* binding */ ExperiencesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class ExperiencesComponent {}
_class = ExperiencesComponent;
_class.ɵfac = function ExperiencesComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-experiences"]],
  decls: 23,
  vars: 0,
  consts: [[1, "container-main"], [1, "title"], [1, "content"], [1, "content-image"], ["src", "assets/image/intergrupo.jpeg", "alt", ""], [1, "description-experience"], [1, "description"], ["src", "assets/image/bancoBogota.png", "alt", ""]],
  template: function ExperiencesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "EXPERIENCE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr")(5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5)(10, "div", 1)(11, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Intergrupo SoftwareOne");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6)(14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "This is a software company where I had the opportunity to work for major Colombian clients such as EPM and Postob\u00F3n. During my tenure here, I served as a tester and developer, meticulously crafting test cases that closely align with the program's specific functionalities as per customer requirements. Additionally, I ventured into creating automated test cases using tools like Serenity and Katalon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5)(19, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Banco de bogota");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Currently, I'm employed at a prominent bank headquartered in Bogot\u00E1, Colombia. Renowned as one of the largest and most reputable banks in the country, I've been fortunate to work here for seven months in a dual role as a tester and developer. In my testing capacity, I rigorously evaluate pages prior to client delivery, meticulously uncovering any potential bugs. This meticulous approach ensures the final product is optimized and boasts a solid. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: [".container-main[_ngcontent-%COMP%]{\n  transform: translateY(400px);\n  padding: 78px;\n}\n.container-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\n  text-align: center;\n}\n.container-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  color: white;\n  font-size: 47px;\n  font: bolder;\n}\n.container-main[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\n  width: 5%;\n  color: white;\n  transform: translateX(46em);\n  border-width: 7px;\n  border-radius: 10px;\n  border-color: white;\n  margin: 20px 0;\n}\n.container-main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{\n  margin: 0 120px 120px 120px;\n  display: flex;\n  justify-content: space-evenly;\n}\n.container-main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-image[_ngcontent-%COMP%]{\n  border: solid white;\n  margin: 7px;\n  background-color: white;\n  padding: 15px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n.container-main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width: 20em;\n}\n.container-main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-image[_ngcontent-%COMP%]   .description-experience[_ngcontent-%COMP%]{\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.9);\n  color: white;\n  transition: height 0.3s ease-in-out;\n}\n.container-main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-image[_ngcontent-%COMP%]   .description-experience[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\n  text-align: center;\n}\n.container-main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-image[_ngcontent-%COMP%]   .description-experience[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n  font-weight: bolder;\n  font-size: 25px;\n}\n.container-main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-image[_ngcontent-%COMP%]:hover   .description-experience[_ngcontent-%COMP%]{\n  height: 100%;\n  padding: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2V4cGVyaWVuY2VzL2V4cGVyaWVuY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLW1haW57XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MDBweCk7XG4gIHBhZGRpbmc6IDc4cHg7XG59XG4uY29udGFpbmVyLW1haW4gLnRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyLW1haW4gLnRpdGxlIGgxe1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNDdweDtcbiAgZm9udDogYm9sZGVyO1xufVxuLmNvbnRhaW5lci1tYWluIGhye1xuICB3aWR0aDogNSU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQ2ZW0pO1xuICBib3JkZXItd2lkdGg6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4uY29udGFpbmVyLW1haW4gLmNvbnRlbnR7XG4gIG1hcmdpbjogMCAxMjBweCAxMjBweCAxMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4uY29udGFpbmVyLW1haW4gLmNvbnRlbnQgLmNvbnRlbnQtaW1hZ2V7XG4gIGJvcmRlcjogc29saWQgd2hpdGU7XG4gIG1hcmdpbjogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmNvbnRhaW5lci1tYWluIC5jb250ZW50IC5jb250ZW50LWltYWdlIGltZ3tcbiAgd2lkdGg6IDIwZW07XG59XG4uY29udGFpbmVyLW1haW4gLmNvbnRlbnQgLmNvbnRlbnQtaW1hZ2UgLmRlc2NyaXB0aW9uLWV4cGVyaWVuY2V7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uY29udGFpbmVyLW1haW4gLmNvbnRlbnQgLmNvbnRlbnQtaW1hZ2UgLmRlc2NyaXB0aW9uLWV4cGVyaWVuY2UgLnRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyLW1haW4gLmNvbnRlbnQgLmNvbnRlbnQtaW1hZ2UgLmRlc2NyaXB0aW9uLWV4cGVyaWVuY2UgLnRpdGxlIGg1e1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4uY29udGFpbmVyLW1haW4gLmNvbnRlbnQgLmNvbnRlbnQtaW1hZ2U6aG92ZXIgLmRlc2NyaXB0aW9uLWV4cGVyaWVuY2V7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2925:
/*!***************************************************************************!*\
  !*** ./src/app/components/content/introduction/introduction.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntroductionComponent: () => (/* binding */ IntroductionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 895);
var _class;


class IntroductionComponent {}
_class = IntroductionComponent;
_class.ɵfac = function IntroductionComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-introduction"]],
  decls: 21,
  vars: 0,
  consts: [[1, "container1"], [1, "content"], [1, "title"], [1, "information"], [1, "contact-me"], [1, "button-routes"], ["mat-raised-button", "", "href", "https://www.linkedin.com/in/jhoan-sebastian-duque-zapata-736897208/?locale=en_US", "target", "_blank"], ["src", "assets/image/linkedin.png", "alt", ""], ["mat-raised-button", "", "href", "https://github.com/sebastian946", "target", "_blank"], ["src", "assets/image/github.png", "alt", ""], ["mat-raised-button", "", "href", "https://wa.me/573197806869", "target", "_blank"], ["src", "assets/image/whatsapp.png", "alt", ""], ["mat-raised-button", "", "href", "mailto:jhoan1113@hotmail.com", "target", "_blank"], ["src", "assets/image/email.png", "alt", ""]],
  template: function IntroductionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hi, I\u00B4m Sebastian. Nice to meet you");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Developer and Tech Consultant \uD83D\uDCA1 Knowledge Angular, React, Spring Boot, .NET, Python, Golang, Node.js, and AWS \u2601\uFE0F. Web/mobile testing \uD83C\uDF10. Architecture. Boost your project with advanced solutions! \uD83D\uDE80\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5)(13, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5)(16, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5)(19, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatAnchor],
  styles: [".container1[_ngcontent-%COMP%]{\n  margin-top: 90px;\n  text-align: center;\n  padding: 8em;\n  color: white;\n}\n.container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.container1[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  font-size: 50px;\n  font-weight: bolder;\n  padding-bottom: 5px;\n}\n.container1[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n  font-size: 23px;\n}\n.contact-me[_ngcontent-%COMP%]{\n  justify-content: flex-start;\n  position: absolute;\n  transform: translateY(-280px);\n  background-color: white;\n}\n.contact-me[_ngcontent-%COMP%]   .button-routes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  width: 70px;\n  height: 70px;\n}\n@media only screen and (min-width: 200px) and (max-width: 300px){\n  .container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateX(300px);\n\n  }\n  .container1[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-size: 100px;\n    font-weight: bolder;\n    padding-bottom: 5px;\n  }\n  .container1[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 50px;\n  }\n  .contact-me[_ngcontent-%COMP%]{\n    justify-content: flex-start;\n    position: absolute;\n    transform: translateY(-80em);\n    background-color: white;\n  }\n  .contact-me[_ngcontent-%COMP%]   .button-routes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    width: 100px;\n    height: 100px;\n  }\n  .contact-me[_ngcontent-%COMP%]   .button-routes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 70px;\n  }\n}\n@media only screen and (min-width: 300px) and (max-width: 400px){\n  .container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateX(250px);\n\n  }\n  .container1[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-size: 100px;\n    font-weight: bolder;\n    padding-bottom: 5px;\n  }\n  .container1[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 50px;\n  }\n  .contact-me[_ngcontent-%COMP%]{\n    justify-content: flex-start;\n    position: absolute;\n    transform: translateY(-80em);\n    background-color: white;\n  }\n  .contact-me[_ngcontent-%COMP%]   .button-routes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    width: 100px;\n    height: 100px;\n  }\n  .contact-me[_ngcontent-%COMP%]   .button-routes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 70px;\n  }\n}\n@media only screen and (min-width: 400px) and (max-width: 500px){\n  .container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateX(190px);\n\n  }\n  .container1[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-size: 100px;\n    font-weight: bolder;\n    padding-bottom: 5px;\n  }\n  .container1[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 50px;\n  }\n  .contact-me[_ngcontent-%COMP%]{\n    justify-content: flex-start;\n    position: absolute;\n    transform: translateY(-80em);\n    background-color: white;\n  }\n  .contact-me[_ngcontent-%COMP%]   .button-routes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    width: 100px;\n    height: 100px;\n  }\n  .contact-me[_ngcontent-%COMP%]   .button-routes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 70px;\n  }\n}\n@media only screen and (min-width: 500px) and (max-width: 600px){\n  .container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateX(150px);\n\n  }\n  .container1[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-size: 100px;\n    font-weight: bolder;\n    padding-bottom: 5px;\n  }\n  .container1[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 50px;\n  }\n  .contact-me[_ngcontent-%COMP%]{\n    justify-content: flex-start;\n    position: absolute;\n    transform: translateY(-100em);\n    background-color: white;\n  }\n  .contact-me[_ngcontent-%COMP%]   .button-routes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    width: 100px;\n    height: 100px;\n  }\n  .contact-me[_ngcontent-%COMP%]   .button-routes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 70px;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 700px){\n  .container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateX(90px);\n\n  }\n  .container1[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-size: 80px;\n    font-weight: bolder;\n    padding-bottom: 5px;\n  }\n  .container1[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 30px;\n  }\n  .contact-me[_ngcontent-%COMP%]{\n    justify-content: flex-start;\n    position: absolute;\n    transform: translateY(-45em);\n    background-color: white;\n  }\n  .contact-me[_ngcontent-%COMP%]   .button-routes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    width: 100px;\n    height: 100px;\n  }\n  .contact-me[_ngcontent-%COMP%]   .button-routes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 60px;\n  }\n}\n@media only screen and (min-width: 700px) and (max-width: 800px){\n  .container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateX(70px);\n  }\n  .container1[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-size: 80px;\n    font-weight: bolder;\n    padding-bottom: 5px;\n  }\n  .container1[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 30px;\n  }\n  .contact-me[_ngcontent-%COMP%]{\n    justify-content: flex-start;\n    position: absolute;\n    transform: translateY(-40em);\n    background-color: white;\n  }\n  .contact-me[_ngcontent-%COMP%]   .button-routes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    width: 100px;\n    height: 100px;\n  }\n  .contact-me[_ngcontent-%COMP%]   .button-routes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 60px;\n  }\n}\n@media only screen and (min-width: 800px) and (max-width: 900px){\n  .container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateX(40px);\n\n  }\n  .contact-me[_ngcontent-%COMP%]{\n    justify-content: flex-start;\n    position: absolute;\n    transform: translateY(-40em);\n    background-color: white;\n  }\n  .container1[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-size: 80px;\n    font-weight: bolder;\n    padding-bottom: 5px;\n  }\n  .container1[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 30px;\n  }\n  .contact-me[_ngcontent-%COMP%]   .button-routes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 40px;\n  }\n}\n@media only screen and (min-width: 900px) and (max-width: 1000px){\n  .container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateX(120px);\n\n  }\n  .contact-me[_ngcontent-%COMP%]{\n    justify-content: flex-start;\n    position: absolute;\n    transform: translateY(-27em);\n    background-color: white;\n  }\n\n}\n@media only screen and (min-width: 1000px) and (max-width: 1100px){\n  .container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateX(120px);\n\n  }\n  .contact-me[_ngcontent-%COMP%]{\n    justify-content: flex-start;\n    position: absolute;\n    transform: translateY(-25em);\n    background-color: white;\n  }\n}\n@media only screen and (min-width: 1100px) and (max-width: 1200px){\n  .container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateX(30px);\n\n  }\n  .contact-me[_ngcontent-%COMP%]{\n    transform: translateY(-25em);\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1300px){\n  .container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateX(320px);\n  }\n  .contact-me[_ngcontent-%COMP%]{\n    transform: translateY(-23em);\n  }\n}\n@media only screen and (min-width: 1300px) and (max-width: 1400px){\n  .container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateX(320px);\n  }\n  .contact-me[_ngcontent-%COMP%]{\n    transform: translateY(-23em);\n  }\n}\n@media only screen and (min-width: 1400px) and (max-width: 1500px){\n  .container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateX(280px);\n  }\n  .contact-me[_ngcontent-%COMP%]{\n    transform: translateY(-20em);\n  }\n}\n@media only screen and (min-width: 1500px) and (max-width: 1600px){\n  .container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateX(150px);\n  }\n  .contact-me[_ngcontent-%COMP%]{\n    transform: translateY(-20em);\n  }\n}\n@media only screen and (min-width: 1600px) and (max-width: 1700px){\n  .container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateX(100px);\n  }\n  .contact-me[_ngcontent-%COMP%]{\n    transform: translateY(-20em);\n  }\n}\n@media only screen and (min-width: 1700px) and (max-width: 1800px){\n  .container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateX(50px);\n  }\n}\n@media only screen and (min-width: 1800px) and (max-width: 2700px) {\n  .container1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateX(60px);\n    transform: translateY(50px);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2ludHJvZHVjdGlvbi9pbnRyb2R1Y3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0U7SUFDRSw0QkFBNEI7O0VBRTlCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUNBO0VBQ0U7SUFDRSw0QkFBNEI7O0VBRTlCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUNBO0VBQ0U7SUFDRSw0QkFBNEI7O0VBRTlCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUNBO0VBQ0U7SUFDRSw0QkFBNEI7O0VBRTlCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUNBO0VBQ0U7SUFDRSwyQkFBMkI7O0VBRTdCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUNBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBQ0E7RUFDRTtJQUNFLDJCQUEyQjs7RUFFN0I7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBQ0E7RUFDRTtJQUNFLDRCQUE0Qjs7RUFFOUI7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLHVCQUF1QjtFQUN6Qjs7QUFFRjtBQUNBO0VBQ0U7SUFDRSw0QkFBNEI7O0VBRTlCO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1Qix1QkFBdUI7RUFDekI7QUFDRjtBQUNBO0VBQ0U7SUFDRSwyQkFBMkI7O0VBRTdCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7QUFDRjtBQUNBO0VBQ0U7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNGO0FBQ0E7RUFDRTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7QUFDRjtBQUNBO0VBQ0U7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNGO0FBQ0E7RUFDRTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsMkJBQTJCO0lBQzNCLDJCQUEyQjtFQUM3QjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFpbmVyMXtcbiAgbWFyZ2luLXRvcDogOTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA4ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIxIC5jb250ZW50e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXIxIC50aXRsZSBoMXtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmNvbnRhaW5lcjEgLmluZm9ybWF0aW9uIHB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cbi5jb250YWN0LW1le1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yODBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhY3QtbWUgLmJ1dHRvbi1yb3V0ZXMgYXtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAzMDBweCl7XG4gIC5jb250YWluZXIxIC5jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpO1xuXG4gIH1cbiAgLmNvbnRhaW5lcjEgLnRpdGxlIGgxe1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICB9XG4gIC5jb250YWluZXIxIC5pbmZvcm1hdGlvbiBwe1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxuICAuY29udGFjdC1tZXtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODBlbSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbiAgLmNvbnRhY3QtbWUgLmJ1dHRvbi1yb3V0ZXMgYXtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAuY29udGFjdC1tZSAuYnV0dG9uLXJvdXRlcyBhIGltZ3tcbiAgICB3aWR0aDogNzBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDQwMHB4KXtcbiAgLmNvbnRhaW5lcjEgLmNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNTBweCk7XG5cbiAgfVxuICAuY29udGFpbmVyMSAudGl0bGUgaDF7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIH1cbiAgLmNvbnRhaW5lcjEgLmluZm9ybWF0aW9uIHB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG4gIC5jb250YWN0LW1le1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04MGVtKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY29udGFjdC1tZSAuYnV0dG9uLXJvdXRlcyBhe1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIC5jb250YWN0LW1lIC5idXR0b24tcm91dGVzIGEgaW1ne1xuICAgIHdpZHRoOiA3MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xuICAuY29udGFpbmVyMSAuY29udGVudCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE5MHB4KTtcblxuICB9XG4gIC5jb250YWluZXIxIC50aXRsZSBoMXtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxuICAuY29udGFpbmVyMSAuaW5mb3JtYXRpb24gcHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbiAgLmNvbnRhY3QtbWV7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTgwZW0pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIC5jb250YWN0LW1lIC5idXR0b24tcm91dGVzIGF7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgLmNvbnRhY3QtbWUgLmJ1dHRvbi1yb3V0ZXMgYSBpbWd7XG4gICAgd2lkdGg6IDcwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gIC5jb250YWluZXIxIC5jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTUwcHgpO1xuXG4gIH1cbiAgLmNvbnRhaW5lcjEgLnRpdGxlIGgxe1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICB9XG4gIC5jb250YWluZXIxIC5pbmZvcm1hdGlvbiBwe1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxuICAuY29udGFjdC1tZXtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwZW0pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIC5jb250YWN0LW1lIC5idXR0b24tcm91dGVzIGF7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgLmNvbnRhY3QtbWUgLmJ1dHRvbi1yb3V0ZXMgYSBpbWd7XG4gICAgd2lkdGg6IDcwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XG4gIC5jb250YWluZXIxIC5jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTBweCk7XG5cbiAgfVxuICAuY29udGFpbmVyMSAudGl0bGUgaDF7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxuICAuY29udGFpbmVyMSAuaW5mb3JtYXRpb24gcHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgLmNvbnRhY3QtbWV7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQ1ZW0pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIC5jb250YWN0LW1lIC5idXR0b24tcm91dGVzIGF7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgLmNvbnRhY3QtbWUgLmJ1dHRvbi1yb3V0ZXMgYSBpbWd7XG4gICAgd2lkdGg6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XG4gIC5jb250YWluZXIxIC5jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNzBweCk7XG4gIH1cbiAgLmNvbnRhaW5lcjEgLnRpdGxlIGgxe1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIH1cbiAgLmNvbnRhaW5lcjEgLmluZm9ybWF0aW9uIHB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG4gIC5jb250YWN0LW1le1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MGVtKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY29udGFjdC1tZSAuYnV0dG9uLXJvdXRlcyBhe1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIC5jb250YWN0LW1lIC5idXR0b24tcm91dGVzIGEgaW1ne1xuICAgIHdpZHRoOiA2MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpe1xuICAuY29udGFpbmVyMSAuY29udGVudCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQwcHgpO1xuXG4gIH1cbiAgLmNvbnRhY3QtbWV7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwZW0pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIC5jb250YWluZXIxIC50aXRsZSBoMXtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICB9XG4gIC5jb250YWluZXIxIC5pbmZvcm1hdGlvbiBwe1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICAuY29udGFjdC1tZSAuYnV0dG9uLXJvdXRlcyBhIGltZ3tcbiAgICB3aWR0aDogNDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkgYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XG4gIC5jb250YWluZXIxIC5jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTIwcHgpO1xuXG4gIH1cbiAgLmNvbnRhY3QtbWV7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI3ZW0pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG5cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSBhbmQgKG1heC13aWR0aDogMTEwMHB4KXtcbiAgLmNvbnRhaW5lcjEgLmNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMjBweCk7XG5cbiAgfVxuICAuY29udGFjdC1tZXtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVlbSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEwMHB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcbiAgLmNvbnRhaW5lcjEgLmNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcblxuICB9XG4gIC5jb250YWN0LW1le1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVlbSk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTMwMHB4KXtcbiAgLmNvbnRhaW5lcjEgLmNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMjBweCk7XG4gIH1cbiAgLmNvbnRhY3QtbWV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yM2VtKTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpe1xuICAuY29udGFpbmVyMSAuY29udGVudCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMyMHB4KTtcbiAgfVxuICAuY29udGFjdC1tZXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIzZW0pO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkgYW5kIChtYXgtd2lkdGg6IDE1MDBweCl7XG4gIC5jb250YWluZXIxIC5jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjgwcHgpO1xuICB9XG4gIC5jb250YWN0LW1le1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBlbSk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUwMHB4KSBhbmQgKG1heC13aWR0aDogMTYwMHB4KXtcbiAgLmNvbnRhaW5lcjEgLmNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNTBweCk7XG4gIH1cbiAgLmNvbnRhY3QtbWV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMGVtKTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNzAwcHgpe1xuICAuY29udGFpbmVyMSAuY29udGVudCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcbiAgfVxuICAuY29udGFjdC1tZXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwZW0pO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE3MDBweCkgYW5kIChtYXgtd2lkdGg6IDE4MDBweCl7XG4gIC5jb250YWluZXIxIC5jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTBweCk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTgwMHB4KSBhbmQgKG1heC13aWR0aDogMjcwMHB4KSB7XG4gIC5jb250YWluZXIxIC5jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNjBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9542:
/*!*******************************************************************!*\
  !*** ./src/app/components/content/projects/projects.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class ProjectsComponent {}
_class = ProjectsComponent;
_class.ɵfac = function ProjectsComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-projects"]],
  decls: 2,
  vars: 0,
  template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "projects works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6976:
/*!*************************************************************!*\
  !*** ./src/app/components/content/study/study.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StudyComponent: () => (/* binding */ StudyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class StudyComponent {}
_class = StudyComponent;
_class.ɵfac = function StudyComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-study"]],
  decls: 25,
  vars: 0,
  consts: [[1, "container-main"], [1, "title"], [1, "content"], [1, "content-image"], ["src", "assets/image/poli.png", "alt", ""], [1, "description-experience"], [1, "description"], ["src", "assets/image/sena.jpeg", "alt", ""]],
  template: function StudyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "BACHELOR OF SOFTWARE DEVELOPER");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr")(5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5)(10, "div", 1)(11, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Politecnico GranColombiano");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6)(14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Bachelor Engineer Software");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5)(19, "div", 1)(20, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "SENA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6)(23, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Tecnology in Software Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  styles: [".container-main[_ngcontent-%COMP%]{\n  transform: translateY(600px);\n  background-color: white;\n  padding: 60px;\n}\n.container-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\n  text-align: center;\n  font-weight: bolder;\n  font-size: 47px;\n}\n.container-main[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\n  width: 8%;\n  color: white;\n  transform: translateX(46em);\n  border-width: 7px;\n  border-radius: 10px;\n  border-color: #268ed3;\n  margin: 20px 0;\n}\n.container-main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{\n  margin: 0 120px 120px 120px;\n  display: flex;\n  justify-content: space-evenly;\n}\n.container-main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-image[_ngcontent-%COMP%]{\n  border: solid white;\n  margin: 7px;\n  background-color: white;\n  padding: 15px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n.container-main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width: 20em;\n}\n.container-main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-image[_ngcontent-%COMP%]   .description-experience[_ngcontent-%COMP%]{\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.9);\n  transition: height 0.3s ease-in-out;\n  color: white;\n  align-items: center;\n}\n.container-main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-image[_ngcontent-%COMP%]   .description-experience[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\n  text-align: center;\n  align-items: center;\n}\n.container-main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-image[_ngcontent-%COMP%]   .description-experience[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n  font-weight: bolder;\n  font-size: 25px;\n}\n.container-main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-image[_ngcontent-%COMP%]:hover   .description-experience[_ngcontent-%COMP%]{\n  align-items: center;\n  height: 100%;\n  padding: 15px;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L3N0dWR5L3N0dWR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLW1haW57XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2MDBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA2MHB4O1xufVxuLmNvbnRhaW5lci1tYWluIC50aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDQ3cHg7XG59XG4uY29udGFpbmVyLW1haW4gaHJ7XG4gIHdpZHRoOiA4JTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDZlbSk7XG4gIGJvcmRlci13aWR0aDogN3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItY29sb3I6ICMyNjhlZDM7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLmNvbnRhaW5lci1tYWluIC5jb250ZW50e1xuICBtYXJnaW46IDAgMTIwcHggMTIwcHggMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmNvbnRhaW5lci1tYWluIC5jb250ZW50IC5jb250ZW50LWltYWdle1xuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICBtYXJnaW46IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5jb250YWluZXItbWFpbiAuY29udGVudCAuY29udGVudC1pbWFnZSBpbWd7XG4gIHdpZHRoOiAyMGVtO1xufVxuLmNvbnRhaW5lci1tYWluIC5jb250ZW50IC5jb250ZW50LWltYWdlIC5kZXNjcmlwdGlvbi1leHBlcmllbmNle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlLWluLW91dDtcbiAgY29sb3I6IHdoaXRlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lci1tYWluIC5jb250ZW50IC5jb250ZW50LWltYWdlIC5kZXNjcmlwdGlvbi1leHBlcmllbmNlIC50aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lci1tYWluIC5jb250ZW50IC5jb250ZW50LWltYWdlIC5kZXNjcmlwdGlvbi1leHBlcmllbmNlIC50aXRsZSBoNXtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLmNvbnRhaW5lci1tYWluIC5jb250ZW50IC5jb250ZW50LWltYWdlOmhvdmVyIC5kZXNjcmlwdGlvbi1leHBlcmllbmNle1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9215:
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class FooterComponent {}
_class = FooterComponent;
_class.ɵfac = function FooterComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-footer"]],
  decls: 2,
  vars: 0,
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8984:
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;



const _c0 = function (a0) {
  return {
    "show": a0
  };
};
class NavbarComponent {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
    this.isOpen = true;
    this.isSmallScreen = false;
    this.openElement = null;
  }
  ngOnInit() {
    this.detectedResolution();
  }
  onResize(event) {
    this.detectedResolution();
  }
  detectedResolution() {
    this.isSmallScreen = window.innerWidth < 1282;
    this.openElement = this.el.nativeElement.querySelector('.navbar-nav');
    if (this.isSmallScreen) {
      this.renderer.setStyle(this.openElement, 'display', 'none');
      const buttonResponsive = this.el.nativeElement.querySelector('.responsive-menu-button');
      this.renderer.setStyle(buttonResponsive, 'display', 'flex');
    } else {
      this.renderer.setStyle(this.openElement, 'display', 'flex');
    }
  }
  toggleMenu() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.setStyle(this.openElement, 'display', 'flex');
    } else {
      this.renderer.setStyle(this.openElement, 'display', 'none');
    }
  }
}
_class = NavbarComponent;
_class.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-navbar"]],
  hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function NavbarComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }
  },
  decls: 27,
  vars: 4,
  consts: [[1, "navbar", "navbar-expand-lg", "bg-body-tertiary"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], [1, "responsive-navbar"], [1, "d-flex", "me-auto", "mb-2", "mb-lg-0"], [1, "navbar-nav", 3, "ngClass"], [1, "nav-item"], ["href", "#", 1, "nav-link"], ["type", "button", 1, "navbar-toggler", "responsive-menu-button", 3, "click"], [1, "navbar-toggler-icon"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Jhoan Sebastian Duque Zapata");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "ul", 5)(7, "li", 6)(8, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6)(11, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Experiences");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6)(14, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Introduction");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6)(17, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 6)(20, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Study");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 6)(23, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Knowledge");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_25_listener() {
        return ctx.toggleMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.isOpen))("@menuAnimation", ctx.isOpen ? "open" : "close");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
  styles: [".navbar[_ngcontent-%COMP%]{\n  padding: 20px;\n}\n.navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]{\n  font-size: 20px;\n}\n.navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{\n  font-size: 27px;\n  font-style: initial;\n  transform: translateX(50px);\n}\n.navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .responsive-navbar[_ngcontent-%COMP%]   .responsive-menu-button[_ngcontent-%COMP%]{\n  display: none;\n}\n.navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  font-weight: bold;\n}\n.navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{\n  color: rgba(30, 42, 58, 1);\n}\n.navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .responsive-navbar[_ngcontent-%COMP%]   .responsive-menu-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0;\n}\n.navbar-toggler-icon[_ngcontent-%COMP%] {\n  transition: background-color 0.3s ease-in-out;\n}\n.navbar-collapse.show[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n\n\n\n\n@media only screen and (max-width: 600px) {\n  .navbar[_ngcontent-%COMP%]{\n    width: 52.5em;\n  }\n\n}\n\n\n@media only screen and (min-width: 600px) {\n  .navbar[_ngcontent-%COMP%]{\n    width: 52.9em;\n  }\n}\n\n\n\n@media only screen and (min-width: 768px) {\n  .navbar[_ngcontent-%COMP%]{\n    width: 53.5em;\n  }\n}\n\n\n\n@media only screen and (min-width:992px) {\n  .navbar[_ngcontent-%COMP%]{\n    width: 53.5em;\n  }\n}\n@media only screen and (min-width:1100px) {\n  .navbar[_ngcontent-%COMP%]{\n    width: 53.5em;\n  }\n}\n@media only screen and (min-width: 855px) and (max-width: 1200px){\n  .navbar[_ngcontent-%COMP%]{\n    width: 75em;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1900px) {\n  .navbar[_ngcontent-%COMP%]{\n    width: 117.3em;\n  }\n\n  .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .responsive-navbar[_ngcontent-%COMP%]   .responsive-menu-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .responsive-navbar[_ngcontent-%COMP%]   .responsive-menu-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center; \n\n    justify-content: space-between; \n\n    width: auto; \n\n  }\n\n  .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0; \n\n  }\n\n  .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .responsive-navbar[_ngcontent-%COMP%]   .responsive-menu-button[_ngcontent-%COMP%] {\n    display: none; \n\n  }\n\n  \n\n  .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 0 10px;\n  }\n\n}\n@media only screen and (min-width: 1900px) and (max-width: 3000px) {\n  .navbar[_ngcontent-%COMP%]{\n    width: 517.3em;\n    padding: 50px;\n  }\n  .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .responsive-navbar[_ngcontent-%COMP%]   .responsive-menu-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .responsive-navbar[_ngcontent-%COMP%]   .responsive-menu-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center; \n\n    justify-content: space-between; \n\n    width: auto; \n\n  }\n\n  .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0; \n\n  }\n\n  .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .responsive-navbar[_ngcontent-%COMP%]   .responsive-menu-button[_ngcontent-%COMP%] {\n    display: none; \n\n  }\n\n  \n\n  .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 0 10px;\n  }\n\n}\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWjtBQUNBO0VBQ0UsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7OztBQUdBLHNDQUFzQzs7QUFFdEM7RUFDRTtJQUNFLGFBQWE7RUFDZjs7QUFFRjtBQUNBLGtFQUFrRTtBQUNsRTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUEsbURBQW1EO0FBQ25EO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQSxpREFBaUQ7QUFDakQ7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQixFQUFFLHVDQUF1QztJQUM1RCw4QkFBOEIsRUFBRSxnREFBZ0Q7SUFDaEYsV0FBVyxFQUFFLDREQUE0RDtFQUMzRTs7RUFFQTtJQUNFLFNBQVMsRUFBRSwyREFBMkQ7RUFDeEU7O0VBRUE7SUFDRSxhQUFhLEVBQUUsc0RBQXNEO0VBQ3ZFOztFQUVBLHdEQUF3RDtFQUN4RDtJQUNFLGNBQWM7RUFDaEI7O0FBRUY7QUFDQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7SUFDYixtQkFBbUIsRUFBRSx1Q0FBdUM7SUFDNUQsOEJBQThCLEVBQUUsZ0RBQWdEO0lBQ2hGLFdBQVcsRUFBRSw0REFBNEQ7RUFDM0U7O0VBRUE7SUFDRSxTQUFTLEVBQUUsMkRBQTJEO0VBQ3hFOztFQUVBO0lBQ0UsYUFBYSxFQUFFLHNEQUFzRDtFQUN2RTs7RUFFQSx3REFBd0Q7RUFDeEQ7SUFDRSxjQUFjO0VBQ2hCOztBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcbiAgcGFkZGluZzogMjBweDtcbn1cbi5uYXZiYXIgLmNvbnRhaW5lci1mbHVpZHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm5hdmJhciAuY29udGFpbmVyLWZsdWlkIC5uYXZiYXItYnJhbmR7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgZm9udC1zdHlsZTogaW5pdGlhbDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwcHgpO1xufVxuLm5hdmJhciAuY29udGFpbmVyLWZsdWlkIC5yZXNwb25zaXZlLW5hdmJhciAucmVzcG9uc2l2ZS1tZW51LWJ1dHRvbntcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5uYXZiYXIgLmNvbnRhaW5lci1mbHVpZCAuZC1mbGV4IC5uYXZiYXItbmF2IGxpIGF7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm5hdmJhciAuY29udGFpbmVyLWZsdWlkIC5kLWZsZXggLm5hdmJhci1uYXYgbGk6aG92ZXIgYXtcbiAgY29sb3I6IHJnYmEoMzAsIDQyLCA1OCwgMSk7XG59XG4ubmF2YmFyIC5jb250YWluZXItZmx1aWQgLnJlc3BvbnNpdmUtbmF2YmFyICAucmVzcG9uc2l2ZS1tZW51LWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cbi5uYXZiYXItdG9nZ2xlci1pY29uIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLm5hdmJhci1jb2xsYXBzZS5zaG93IC5uYXZiYXItdG9nZ2xlci1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cblxuLyogRGVmaW5lIGxhIGFuaW1hY2nDg8KzbiBwYXJhIGNvbGFwc2FyICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm5hdmJhcntcbiAgICB3aWR0aDogNTIuNWVtO1xuICB9XG5cbn1cbi8qU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzIDYwMHB4IGFuZCB1cCApKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLm5hdmJhcntcbiAgICB3aWR0aDogNTIuOWVtO1xuICB9XG59XG5cbi8qTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhcntcbiAgICB3aWR0aDogNTMuNWVtO1xuICB9XG59XG5cbi8qTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkycHgpIHtcbiAgLm5hdmJhcntcbiAgICB3aWR0aDogNTMuNWVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTEwMHB4KSB7XG4gIC5uYXZiYXJ7XG4gICAgd2lkdGg6IDUzLjVlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NTVweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCl7XG4gIC5uYXZiYXJ7XG4gICAgd2lkdGg6IDc1ZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTkwMHB4KSB7XG4gIC5uYXZiYXJ7XG4gICAgd2lkdGg6IDExNy4zZW07XG4gIH1cblxuICAubmF2YmFyIC5jb250YWluZXItZmx1aWQgLnJlc3BvbnNpdmUtbmF2YmFyICAucmVzcG9uc2l2ZS1tZW51LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubmF2YmFyIC5jb250YWluZXItZmx1aWQgLnJlc3BvbnNpdmUtbmF2YmFyICAucmVzcG9uc2l2ZS1tZW51LWJ1dHRvbiBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5uYXZiYXIgLmNvbnRhaW5lci1mbHVpZCAuZC1mbGV4IC5uYXZiYXItbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRyYSB2ZXJ0aWNhbG1lbnRlIGxvcyBlbGVtZW50b3MgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIERpc3RyaWJ1eWUgbG9zIGVsZW1lbnRvcyBkZSBtYW5lcmEgdW5pZm9ybWUgKi9cbiAgICB3aWR0aDogYXV0bzsgLyogUGVybWl0ZSBxdWUgbG9zIGVsZW1lbnRvcyBvY3VwZW4gZWwgYW5jaG8gcXVlIG5lY2VzaXRhbiAqL1xuICB9XG5cbiAgLm5hdmJhciAuY29udGFpbmVyLWZsdWlkIC5kLWZsZXggLm5hdmJhci1uYXYgbGkge1xuICAgIG1hcmdpbjogMDsgLyogRWxpbWluYSBlbCBtYXJnZW4gbGF0ZXJhbCBkZSBsb3MgZWxlbWVudG9zIGRlIGxhIGxpc3RhICovXG4gIH1cblxuICAubmF2YmFyIC5jb250YWluZXItZmx1aWQgLnJlc3BvbnNpdmUtbmF2YmFyIC5yZXNwb25zaXZlLW1lbnUtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lOyAvKiBPY3VsdGEgZWwgYm90w4PCs24gZGUgaGFtYnVyZ3Vlc2EgZW4gZXN0YSByZXNvbHVjacODwrNuICovXG4gIH1cblxuICAvKiBBanVzdGEgZWwgZXNwYWNpbyBlbnRyZSBsb3MgZWxlbWVudG9zIGRlIG5hdmVnYWNpw4PCs24gKi9cbiAgLm5hdmJhciAuY29udGFpbmVyLWZsdWlkIC5kLWZsZXggLm5hdmJhci1uYXYgbGkgYSB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cblxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTAwcHgpIGFuZCAobWF4LXdpZHRoOiAzMDAwcHgpIHtcbiAgLm5hdmJhcntcbiAgICB3aWR0aDogNTE3LjNlbTtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICB9XG4gIC5uYXZiYXIgLmNvbnRhaW5lci1mbHVpZCAucmVzcG9uc2l2ZS1uYXZiYXIgIC5yZXNwb25zaXZlLW1lbnUtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5uYXZiYXIgLmNvbnRhaW5lci1mbHVpZCAucmVzcG9uc2l2ZS1uYXZiYXIgIC5yZXNwb25zaXZlLW1lbnUtYnV0dG9uIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm5hdmJhciAuY29udGFpbmVyLWZsdWlkIC5kLWZsZXggLm5hdmJhci1uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudHJhIHZlcnRpY2FsbWVudGUgbG9zIGVsZW1lbnRvcyAqL1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLyogRGlzdHJpYnV5ZSBsb3MgZWxlbWVudG9zIGRlIG1hbmVyYSB1bmlmb3JtZSAqL1xuICAgIHdpZHRoOiBhdXRvOyAvKiBQZXJtaXRlIHF1ZSBsb3MgZWxlbWVudG9zIG9jdXBlbiBlbCBhbmNobyBxdWUgbmVjZXNpdGFuICovXG4gIH1cblxuICAubmF2YmFyIC5jb250YWluZXItZmx1aWQgLmQtZmxleCAubmF2YmFyLW5hdiBsaSB7XG4gICAgbWFyZ2luOiAwOyAvKiBFbGltaW5hIGVsIG1hcmdlbiBsYXRlcmFsIGRlIGxvcyBlbGVtZW50b3MgZGUgbGEgbGlzdGEgKi9cbiAgfVxuXG4gIC5uYXZiYXIgLmNvbnRhaW5lci1mbHVpZCAucmVzcG9uc2l2ZS1uYXZiYXIgLnJlc3BvbnNpdmUtbWVudS1idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qIE9jdWx0YSBlbCBib3TDg8KzbiBkZSBoYW1idXJndWVzYSBlbiBlc3RhIHJlc29sdWNpw4PCs24gKi9cbiAgfVxuXG4gIC8qIEFqdXN0YSBlbCBlc3BhY2lvIGVudHJlIGxvcyBlbGVtZW50b3MgZGUgbmF2ZWdhY2nDg8KzbiAqL1xuICAubmF2YmFyIC5jb250YWluZXItZmx1aWQgLmQtZmxleCAubmF2YmFyLW5hdiBsaSBhIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgfVxuXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('menuAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 1,
      maxHeight: '1000px'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('close', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 0,
      maxHeight: '0'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('close <=> open', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('0.6s ease-in-out')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('open => close', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('0.6s ease-in-out')])])]
  }
});

/***/ }),

/***/ 6112:
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/social-media/social-media.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialMediaComponent: () => (/* binding */ SocialMediaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class SocialMediaComponent {}
_class = SocialMediaComponent;
_class.ɵfac = function SocialMediaComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-social-media"]],
  decls: 2,
  vars: 0,
  template: function SocialMediaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "social-media works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(9548), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map