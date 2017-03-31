var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = (function () {
    function Human(name) {
        console.log(name + " This is constructor...");
    }
    Human.prototype.getId = function () {
        return 10;
    };
    return Human;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + " Employee contructor...");
        return _this;
    }
    return Employee;
}(Human));
var emp = new Employee("Thanh");
//# sourceMappingURL=inherit.js.map