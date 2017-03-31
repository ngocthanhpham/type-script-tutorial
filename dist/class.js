var Person = (function () {
    function Person() {
    }
    Person.prototype.run = function () {
        console.log("Persion is running...");
    };
    return Person;
}());
var p1 = new Person();
p1.run();
console.log(typeof Person);
//# sourceMappingURL=class.js.map