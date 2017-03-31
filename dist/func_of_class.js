var Person2 = (function () {
    function Person2(name) {
        this.name = name;
        console.log(this.name);
    }
    Person2.talk = function () {
        console.log("This is static method...");
    };
    return Person2;
}());
var p = new Person2("Thanh");
Person2.talk();
//# sourceMappingURL=func_of_class.js.map