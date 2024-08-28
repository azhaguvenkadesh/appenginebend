(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/coder/project/workspace/angularapp/src/main.ts */"zUnb");


/***/ }),

/***/ "8jk5":
/*!************************************************!*\
  !*** ./src/app/service/appointment.service.ts ***!
  \************************************************/
/*! exports provided: AppointmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentService", function() { return AppointmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AppointmentService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://united-zenith-431805-h9.uc.r.appspot.com';
    }
    getAppointments() {
        return this.http.get(`${this.apiUrl}/api/appointments`);
    }
    getAppointment(id) {
        return this.http.get(`${this.apiUrl}/api/appointments/${id}`);
    }
    createAppointment(appointment) {
        return this.http.post(`${this.apiUrl}/api/appointments`, appointment);
    }
    updateAppointment(id, appointment) {
        return this.http.put(`${this.apiUrl}/api/appointments/${id}`, appointment);
    }
    deleteAppointment(id) {
        return this.http.delete(`${this.apiUrl}/api/appointments/${id}`);
    }
}
AppointmentService.ɵfac = function AppointmentService_Factory(t) { return new (t || AppointmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AppointmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppointmentService, factory: AppointmentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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

/***/ "BkPM":
/*!****************************************************************!*\
  !*** ./src/app/appointment-list/appointment-list.component.ts ***!
  \****************************************************************/
/*! exports provided: AppointmentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentListComponent", function() { return AppointmentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _service_appointment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/appointment.service */ "8jk5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function (a1) { return ["/appointments/edit", a1]; };
function AppointmentListComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppointmentListComponent_tr_18_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const appointment_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteAppointment(appointment_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const appointment_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appointment_r2.patientName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appointment_r2.doctorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appointment_r2.specialization);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appointment_r2.appointmentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appointment_r2.timeSlot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, appointment_r2.id));
} }
function AppointmentListComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.successMessage, " ");
} }
class AppointmentListComponent {
    constructor(appointmentService, datePipe // Inject DatePipe
    ) {
        this.appointmentService = appointmentService;
        this.datePipe = datePipe;
        this.appointments = [];
        this.successMessage = '';
    }
    ngOnInit() {
        this.getAppointments();
    }
    getAppointments() {
        this.appointmentService.getAppointments().subscribe((data) => {
            this.appointments = data.map(appointment => (Object.assign(Object.assign({}, appointment), { appointmentDate: this.datePipe.transform(appointment.appointmentDate, 'dd-MM-yyyy') // Format date
             })));
        });
    }
    deleteAppointment(id) {
        this.appointmentService.deleteAppointment(id).subscribe(() => {
            this.successMessage = 'Appointment successfully deleted';
            this.getAppointments();
            setTimeout(() => this.successMessage = '', 2000); // Clear message after 3 seconds
        });
    }
}
AppointmentListComponent.ɵfac = function AppointmentListComponent_Factory(t) { return new (t || AppointmentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_appointment_service__WEBPACK_IMPORTED_MODULE_2__["AppointmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"])); };
AppointmentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppointmentListComponent, selectors: [["app-appointment-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]] // Provide DatePipe
        )], decls: 20, vars: 2, consts: [[1, "appointment-table"], [4, "ngFor", "ngForOf"], ["class", "success-message", 4, "ngIf"], [1, "edit-button", 3, "routerLink"], [1, "delete-button", 3, "click"], [1, "success-message"]], template: function AppointmentListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Appointment List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Patient Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Doctor Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Specialization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Appointment Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Time Slot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppointmentListComponent_tr_18_Template, 16, 8, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppointmentListComponent_div_19_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.appointments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".success-message[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    padding: 10px;\n    background-color: #d4edda;\n    color: #155724;\n    border: 1px solid #c3e6cb;\n    border-radius: 5px;\n  }\n\n.appointment-table[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    margin-bottom: 20px;\n  }\n.appointment-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .appointment-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #ddd;\n    padding: 12px;\n    text-align: left;\n  }\n.appointment-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #f4f4f4;\n  }\n.appointment-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n    background-color: #f9f9f9;\n  }\n.appointment-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: #f1f1f1;\n  }\n\n.edit-button[_ngcontent-%COMP%], .delete-button[_ngcontent-%COMP%] {\n    border: none;\n    padding: 8px 12px;\n    border-radius: 5px;\n    cursor: pointer;\n    text-decoration: none;\n    color: white;\n  }\n.edit-button[_ngcontent-%COMP%] {\n    background-color: #007bff; \n  }\n.edit-button[_ngcontent-%COMP%]:hover {\n    background-color: #0056b3; \n  }\n.delete-button[_ngcontent-%COMP%] {\n    background-color: #dc3545; \n    margin-left: 5px;\n  }\n.delete-button[_ngcontent-%COMP%]:hover {\n    background-color: #c82333; \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwb2ludG1lbnQtbGlzdC9hcHBvaW50bWVudC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCO0FBQzVCO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7QUFFQSxrQkFBa0I7QUFDbEI7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFFQSxtQkFBbUI7QUFDbkI7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFlBQVk7RUFDZDtBQUVBO0lBQ0UseUJBQXlCLEVBQUUsb0JBQW9CO0VBQ2pEO0FBRUE7SUFDRSx5QkFBeUIsRUFBRSx5QkFBeUI7RUFDdEQ7QUFFQTtJQUNFLHlCQUF5QixFQUFFLG1CQUFtQjtJQUM5QyxnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLHlCQUF5QixFQUFFLHdCQUF3QjtFQUNyRCIsImZpbGUiOiJzcmMvYXBwL2FwcG9pbnRtZW50LWxpc3QvYXBwb2ludG1lbnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3VjY2VzcyBtZXNzYWdlIHN0eWxpbmcgKi9cbi5zdWNjZXNzLW1lc3NhZ2Uge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xuICAgIGNvbG9yOiAjMTU1NzI0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2U2Y2I7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIFxuICAvKiBUYWJsZSBzdHlsaW5nICovXG4gIC5hcHBvaW50bWVudC10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICAuYXBwb2ludG1lbnQtdGFibGUgdGgsIC5hcHBvaW50bWVudC10YWJsZSB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgXG4gIC5hcHBvaW50bWVudC10YWJsZSB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgfVxuICBcbiAgLmFwcG9pbnRtZW50LXRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgfVxuICBcbiAgLmFwcG9pbnRtZW50LXRhYmxlIHRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICB9XG4gIFxuICAvKiBCdXR0b24gc3R5bGluZyAqL1xuICAuZWRpdC1idXR0b24sIC5kZWxldGUtYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuZWRpdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7IC8qIEJsdWUgYmFja2dyb3VuZCAqL1xuICB9XG4gIFxuICAuZWRpdC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7IC8qIERhcmtlciBibHVlIG9uIGhvdmVyICovXG4gIH1cbiAgXG4gIC5kZWxldGUtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1OyAvKiBSZWQgYmFja2dyb3VuZCAqL1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbiAgXG4gIC5kZWxldGUtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzgyMzMzOyAvKiBEYXJrZXIgcmVkIG9uIGhvdmVyICovXG4gIH0gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-appointment-list',
                templateUrl: './appointment-list.component.html',
                styleUrls: ['./appointment-list.component.css'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]] // Provide DatePipe
            }]
    }], function () { return [{ type: _service_appointment_service__WEBPACK_IMPORTED_MODULE_2__["AppointmentService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] }]; }, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'angularapp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 0, consts: [["routerLink", "/appointments", "routerLinkActive", "active"], ["routerLink", "/appointments/add", "routerLinkActive", "active"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  background-color: #f4f4f4;\n}\n\nnav[_ngcontent-%COMP%] {\n  background-color: #007bff; \n  padding: 10px 0;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-decoration: none;\n  font-weight: bold;\n  padding: 8px 16px;\n  display: inline-block;\n  border-radius: 4px;\n  transition: background-color 0.3s, color 0.3s;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: #0056b3; \n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3; \n  color: #ffffff;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px; \n  margin: 0 auto;\n  background-color: #ffffff;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDO0VBQ0UsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCO0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UseUJBQXlCLEVBQUUsa0JBQWtCO0VBQzdDLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLDZDQUE2QztBQUMvQztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsaUNBQWlDO0FBQzlEO0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxpQkFBaUI7RUFDNUMsY0FBYztBQUNoQjtBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLGFBQWE7RUFDYixpQkFBaUIsRUFBRSxvQ0FBb0M7RUFDdkQsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qix3Q0FBd0M7RUFDeEMsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmFsIHN0eWxpbmcgZm9yIHRoZSBib2R5ICovXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG59XG5cbi8qIE5hdmlnYXRpb24gYmFyIHN0eWxpbmcgKi9cbm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7IC8qIFByaW1hcnkgY29sb3IgKi9cbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG5uYXYgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5uYXYgdWwgbGkge1xuICBtYXJnaW46IDAgMTVweDtcbn1cblxubmF2IHVsIGxpIGEge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGNvbG9yIDAuM3M7XG59XG5cbm5hdiB1bCBsaSBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7IC8qIERhcmtlciBzaGFkZSBmb3IgYWN0aXZlIGxpbmsgKi9cbn1cblxubmF2IHVsIGxpIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzOyAvKiBIb3ZlciBlZmZlY3QgKi9cbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi8qIENvbnRhaW5lciBzdHlsaW5nICovXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7IC8qIEFkanVzdCBiYXNlZCBvbiB5b3VyIHByZWZlcmVuY2UgKi9cbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _appointment_form_appointment_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointment-form/appointment-form.component */ "f4GT");
/* harmony import */ var _appointment_list_appointment_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./appointment-list/appointment-list.component */ "BkPM");
/* harmony import */ var _service_appointment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/appointment.service */ "8jk5");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_service_appointment_service__WEBPACK_IMPORTED_MODULE_8__["AppointmentService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _appointment_form_appointment_form_component__WEBPACK_IMPORTED_MODULE_6__["AppointmentFormComponent"],
        _appointment_list_appointment_list_component__WEBPACK_IMPORTED_MODULE_7__["AppointmentListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _appointment_form_appointment_form_component__WEBPACK_IMPORTED_MODULE_6__["AppointmentFormComponent"],
                    _appointment_list_appointment_list_component__WEBPACK_IMPORTED_MODULE_7__["AppointmentListComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                providers: [_service_appointment_service__WEBPACK_IMPORTED_MODULE_8__["AppointmentService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "f4GT":
/*!****************************************************************!*\
  !*** ./src/app/appointment-form/appointment-form.component.ts ***!
  \****************************************************************/
/*! exports provided: AppointmentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentFormComponent", function() { return AppointmentFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_appointment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/appointment.service */ "8jk5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AppointmentFormComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Patient Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppointmentFormComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppointmentFormComponent_div_7_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r0.appointmentForm.get("patientName")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function AppointmentFormComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Doctor Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppointmentFormComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppointmentFormComponent_div_12_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.appointmentForm.get("doctorName")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function AppointmentFormComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Specialization is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppointmentFormComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppointmentFormComponent_div_17_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r2.appointmentForm.get("specialization")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function AppointmentFormComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Appointment Date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppointmentFormComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppointmentFormComponent_div_22_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r3.appointmentForm.get("appointmentDate")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function AppointmentFormComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Time Slot is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppointmentFormComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppointmentFormComponent_div_27_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r4.appointmentForm.get("timeSlot")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function AppointmentFormComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.successMessage, " ");
} }
class AppointmentFormComponent {
    constructor(formBuilder, appointmentService, route, router) {
        this.formBuilder = formBuilder;
        this.appointmentService = appointmentService;
        this.route = route;
        this.router = router;
        this.isEditMode = false;
        this.successMessage = '';
        this.appointmentForm = this.formBuilder.group({
            id: [null],
            patientName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            doctorName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            specialization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            appointmentDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            timeSlot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    loadAppointment(arg0) {
        throw new Error('Method not implemented.');
    }
    ngOnInit() {
        const today = new Date();
        this.minDate = today.toISOString().split('T')[0];
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.isEditMode = true;
            this.loadAppointmentDetails(+id);
        }
    }
    loadAppointmentDetails(id) {
        this.appointmentService.getAppointment(id).subscribe((appointment) => this.appointmentForm.patchValue(appointment), error => console.error('Error fetching appointment', error));
    }
    onSubmit() {
        if (this.appointmentForm.invalid)
            return;
        if (this.isEditMode) {
            this.updateAppointment();
        }
        else {
            this.createAppointment();
        }
    }
    updateAppointment() {
        const appointmentId = this.appointmentForm.value.id;
        this.appointmentService.updateAppointment(appointmentId, this.appointmentForm.value).subscribe(response => {
            this.successMessage = 'Appointment successfully updated';
            this.resetSuccessMessage();
            setTimeout(() => {
                this.router.navigate(['/appointments']);
            }, 2000);
        }, error => console.error('Error updating appointment', error));
    }
    createAppointment() {
        this.appointmentService.createAppointment(this.appointmentForm.value).subscribe(response => {
            this.successMessage = 'Appointment successfully created';
            this.resetSuccessMessage();
            setTimeout(() => {
                this.router.navigate(['/appointments']);
            }, 2000);
        }, error => console.error('Error creating appointment', error));
    }
    resetSuccessMessage() {
        setTimeout(() => {
            this.successMessage = '';
        }, 2000); // Hide the message after 2 seconds
    }
}
AppointmentFormComponent.ɵfac = function AppointmentFormComponent_Factory(t) { return new (t || AppointmentFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_appointment_service__WEBPACK_IMPORTED_MODULE_2__["AppointmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppointmentFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppointmentFormComponent, selectors: [["app-appointment-form"]], decls: 31, vars: 10, consts: [[1, "appointment-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "patientName"], ["id", "patientName", "formControlName", "patientName", "type", "text"], ["class", "error", 4, "ngIf"], ["for", "doctorName"], ["id", "doctorName", "formControlName", "doctorName", "type", "text"], ["for", "specialization"], ["id", "specialization", "formControlName", "specialization", "type", "text"], ["for", "appointmentDate"], ["id", "appointmentDate", "formControlName", "appointmentDate", "type", "date", 3, "min"], ["for", "timeSlot"], ["id", "timeSlot", "formControlName", "timeSlot", "type", "text"], ["type", "submit", 1, "submit-button", 3, "disabled"], ["class", "success-message", 4, "ngIf"], [1, "error"], [4, "ngIf"], [1, "success-message"]], template: function AppointmentFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppointmentFormComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Patient Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppointmentFormComponent_div_7_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Doctor Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppointmentFormComponent_div_12_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Specialization:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppointmentFormComponent_div_17_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Appointment Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppointmentFormComponent_div_22_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Time Slot:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AppointmentFormComponent_div_27_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AppointmentFormComponent_div_30_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_2_0 = null;
        var tmp_3_0 = null;
        var tmp_4_0 = null;
        var tmp_6_0 = null;
        var tmp_7_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isEditMode ? "Edit Appointment" : "Add New Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.appointmentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.appointmentForm.get("patientName")) == null ? null : tmp_2_0.invalid) && (((tmp_2_0 = ctx.appointmentForm.get("patientName")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.appointmentForm.get("patientName")) == null ? null : tmp_2_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.appointmentForm.get("doctorName")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.appointmentForm.get("doctorName")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.appointmentForm.get("doctorName")) == null ? null : tmp_3_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.appointmentForm.get("specialization")) == null ? null : tmp_4_0.invalid) && (((tmp_4_0 = ctx.appointmentForm.get("specialization")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.appointmentForm.get("specialization")) == null ? null : tmp_4_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.minDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.appointmentForm.get("appointmentDate")) == null ? null : tmp_6_0.invalid) && (((tmp_6_0 = ctx.appointmentForm.get("appointmentDate")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx.appointmentForm.get("appointmentDate")) == null ? null : tmp_6_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.appointmentForm.get("timeSlot")) == null ? null : tmp_7_0.invalid) && (((tmp_7_0 = ctx.appointmentForm.get("timeSlot")) == null ? null : tmp_7_0.dirty) || ((tmp_7_0 = ctx.appointmentForm.get("timeSlot")) == null ? null : tmp_7_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.appointmentForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".appointment-form[_ngcontent-%COMP%] {\n    max-width: 600px; \n    margin: 0 auto; \n    padding: 20px;\n    background-color: #ffffff; \n    border-radius: 8px; \n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); \n  }\n\n.form-group[_ngcontent-%COMP%] {\n    margin-bottom: 15px; \n  }\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    font-weight: bold; \n    margin-bottom: 5px; \n  }\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%; \n    padding: 8px;\n    border: 1px solid #ccc; \n    border-radius: 4px; \n    box-sizing: border-box; \n  }\n\n.submit-button[_ngcontent-%COMP%] {\n    background-color: #007bff; \n    color: #ffffff; \n    border: none; \n    padding: 10px 20px; \n    border-radius: 4px; \n    cursor: pointer; \n    font-size: 16px; \n    transition: background-color 0.3s; \n  }\n.submit-button[_ngcontent-%COMP%]:hover {\n    background-color: #0056b3; \n  }\n.submit-button[_ngcontent-%COMP%]:disabled {\n    background-color: #cccccc;\n    cursor: not-allowed;\n  }\n.success-message[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    padding: 10px;\n    background-color: #d4edda;\n    color: #155724;\n    border: 1px solid #c3e6cb;\n    border-radius: 5px;\n  }\n.error[_ngcontent-%COMP%] {\n    color: #ff0000; \n    font-size: 0.875rem; \n  }\n.error[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin-top: 5px; \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwb2ludG1lbnQtZm9ybS9hcHBvaW50bWVudC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCO0FBQzNCO0lBQ0ksZ0JBQWdCLEVBQUUsK0JBQStCO0lBQ2pELGNBQWMsRUFBRSxvQkFBb0I7SUFDcEMsYUFBYTtJQUNiLHlCQUF5QixFQUFFLGtDQUFrQztJQUM3RCxrQkFBa0IsRUFBRSxvQkFBb0I7SUFDeEMsd0NBQXdDLEVBQUUsNEJBQTRCO0VBQ3hFO0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0UsbUJBQW1CLEVBQUUsOEJBQThCO0VBQ3JEO0FBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCLEVBQUUseUJBQXlCO0lBQzVDLGtCQUFrQixFQUFFLGtDQUFrQztFQUN4RDtBQUVBO0lBQ0UsV0FBVyxFQUFFLDRCQUE0QjtJQUN6QyxZQUFZO0lBQ1osc0JBQXNCLEVBQUUsc0JBQXNCO0lBQzlDLGtCQUFrQixFQUFFLHFDQUFxQztJQUN6RCxzQkFBc0IsRUFBRSw0Q0FBNEM7RUFDdEU7QUFFQSxtQkFBbUI7QUFDbkI7SUFDRSx5QkFBeUIsRUFBRSxrQkFBa0I7SUFDN0MsY0FBYyxFQUFFLGVBQWU7SUFDL0IsWUFBWSxFQUFFLDBCQUEwQjtJQUN4QyxrQkFBa0IsRUFBRSxnQkFBZ0I7SUFDcEMsa0JBQWtCLEVBQUUsb0JBQW9CO0lBQ3hDLGVBQWUsRUFBRSw0QkFBNEI7SUFDN0MsZUFBZSxFQUFFLDhCQUE4QjtJQUMvQyxpQ0FBaUMsRUFBRSx1Q0FBdUM7RUFDNUU7QUFFQTtJQUNFLHlCQUF5QixFQUFFLDBCQUEwQjtFQUN2RDtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLGNBQWMsRUFBRSxpQ0FBaUM7SUFDakQsbUJBQW1CLEVBQUUsa0RBQWtEO0VBQ3pFO0FBRUE7SUFDRSxlQUFlLEVBQUUsMENBQTBDO0VBQzdEIiwiZmlsZSI6InNyYy9hcHAvYXBwb2ludG1lbnQtZm9ybS9hcHBvaW50bWVudC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGb3JtIGNvbnRhaW5lciBzdHlsaW5nICovXG4uYXBwb2ludG1lbnQtZm9ybSB7XG4gICAgbWF4LXdpZHRoOiA2MDBweDsgLyogTWF4aW11bSB3aWR0aCBmb3IgdGhlIGZvcm0gKi9cbiAgICBtYXJnaW46IDAgYXV0bzsgLyogQ2VudGVyIHRoZSBmb3JtICovXG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSBiYWNrZ3JvdW5kIGZvciB0aGUgZm9ybSAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDsgLyogUm91bmRlZCBjb3JuZXJzICovXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogU3VidGxlIHNoYWRvdyBmb3IgZGVwdGggKi9cbiAgfVxuICBcbiAgLyogRm9ybSBncm91cCBzdHlsaW5nICovXG4gIC5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyAvKiBTcGFjZSBiZXR3ZWVuIGZvcm0gZmllbGRzICovXG4gIH1cbiAgXG4gIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogYm9sZDsgLyogQm9sZCB0ZXh0IGZvciBsYWJlbHMgKi9cbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7IC8qIFNwYWNlIGJldHdlZW4gbGFiZWwgYW5kIGlucHV0ICovXG4gIH1cbiAgXG4gIC5mb3JtLWdyb3VwIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCBpbnB1dCBmaWVsZHMgKi9cbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgLyogTGlnaHQgZ3JleSBib3JkZXIgKi9cbiAgICBib3JkZXItcmFkaXVzOiA0cHg7IC8qIFJvdW5kZWQgY29ybmVycyBmb3IgaW5wdXQgZmllbGRzICovXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogRW5zdXJlIHBhZGRpbmcgaXMgaW5jbHVkZWQgaW4gdGhlIHdpZHRoICovXG4gIH1cbiAgXG4gIC8qIEJ1dHRvbiBzdHlsaW5nICovXG4gIC5zdWJtaXQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmOyAvKiBQcmltYXJ5IGNvbG9yICovXG4gICAgY29sb3I6ICNmZmZmZmY7IC8qIFdoaXRlIHRleHQgKi9cbiAgICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBkZWZhdWx0IGJvcmRlciAqL1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDsgLyogQWRkIHBhZGRpbmcgKi9cbiAgICBib3JkZXItcmFkaXVzOiA0cHg7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogUG9pbnRlciBjdXJzb3Igb24gaG92ZXIgKi9cbiAgICBmb250LXNpemU6IDE2cHg7IC8qIEZvbnQgc2l6ZSBmb3IgYnV0dG9uIHRleHQgKi9cbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7IC8qIFNtb290aCBiYWNrZ3JvdW5kIGNvbG9yIHRyYW5zaXRpb24gKi9cbiAgfVxuICBcbiAgLnN1Ym1pdC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7IC8qIERhcmtlciBzaGFkZSBvbiBob3ZlciAqL1xuICB9ICBcblxuICAuc3VibWl0LWJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5cbiAgLnN1Y2Nlc3MtbWVzc2FnZSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGVkZGE7XG4gICAgY29sb3I6ICMxNTU3MjQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MzZTZjYjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICAuZXJyb3Ige1xuICAgIGNvbG9yOiAjZmYwMDAwOyAvKiBSZWQgY29sb3IgZm9yIGVycm9yIG1lc3NhZ2VzICovXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTsgLyogU2xpZ2h0bHkgc21hbGxlciBmb250IHNpemUgZm9yIGVycm9yIG1lc3NhZ2VzICovXG4gIH1cbiAgXG4gIC5lcnJvciBkaXYge1xuICAgIG1hcmdpbi10b3A6IDVweDsgLyogU3BhY2UgYmV0d2VlbiBtdWx0aXBsZSBlcnJvciBtZXNzYWdlcyAqL1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-appointment-form',
                templateUrl: './appointment-form.component.html',
                styleUrls: ['./appointment-form.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _service_appointment_service__WEBPACK_IMPORTED_MODULE_2__["AppointmentService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appointment_list_appointment_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appointment-list/appointment-list.component */ "BkPM");
/* harmony import */ var _appointment_form_appointment_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointment-form/appointment-form.component */ "f4GT");






const routes = [
    { path: 'appointments', component: _appointment_list_appointment_list_component__WEBPACK_IMPORTED_MODULE_2__["AppointmentListComponent"] },
    { path: 'appointments/add', component: _appointment_form_appointment_form_component__WEBPACK_IMPORTED_MODULE_3__["AppointmentFormComponent"] },
    { path: 'appointments/edit/:id', component: _appointment_form_appointment_form_component__WEBPACK_IMPORTED_MODULE_3__["AppointmentFormComponent"] },
    { path: '', redirectTo: '/appointments', pathMatch: 'full' },
    { path: '**', redirectTo: '/appointments' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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