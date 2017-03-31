var displayColor = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    // console.log(colors);
    for (var i in colors) {
        console.log(colors);
    }
};
var message = "Hello";
displayColor('Red');
displayColor('Red', 'Green');
displayColor('Red', 'Green', 'Blue');
//# sourceMappingURL=rest_param.js.map