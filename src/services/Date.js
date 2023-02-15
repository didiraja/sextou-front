"use strict";
exports.__esModule = true;
// @ts-nocheck
var date_fns_1 = require("date-fns");
var locale_1 = require("date-fns/locale");
var DateClass = /** @class */ (function () {
    // private week: Date;
    /**
     * Basic and Common elements to the Class
     *
     * @warning ALWAYS parse date to parseISO() to keep a pattern and prevent bugs in Safari < v15.x.x
     *
     * @constructor
     * @const {Date} today - Today's Date
    //  * @const {Date} week - First day of Week
     */
    function DateClass() {
        this.today = (0, date_fns_1.startOfToday)();
        // this.week = startOfWeek(this.today);
    }
    /**
     * Today's date output
     *
     * @return {string} date formatted to ISO, on GMT time
     */
    DateClass.prototype.todayDate = function () {
        return (0, date_fns_1.formatISO)(this.today);
    };
    /**
     * Date formatted showing day of week, and month by name
     *
     * @example Terça, 31 de Janeiro
     * @return {string}
     */
    DateClass.prototype.readableDate = function (date) {
        var weekAndMonthDay = (0, date_fns_1.format)((0, date_fns_1.parseISO)(date), "iii',' dd 'de' MMMM", {
            locale: locale_1.ptBR
        });
        return weekAndMonthDay;
    };
    return DateClass;
}());
exports["default"] = new DateClass();
