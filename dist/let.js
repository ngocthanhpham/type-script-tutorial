function greetPerson(name) {
    var greet;
    if (name === "Thanh") {
        greet = "Hello Thanh";
    }
    else {
        greet = "Hi there";
    }
    console.log(greet);
}
greetPerson("Thanh");
var a = 1;
var b = 2;
if (a === 1) {
    var b_1 = 10;
    var a = 20;
}
console.log(a);
console.log(b);
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
};
for (var i = 1; i <= 5; i++) {
    _loop_1(i);
}
//# sourceMappingURL=let.js.map