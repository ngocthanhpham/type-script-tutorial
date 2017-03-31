var displayColorSpread = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var messageSpread = "Hello";
var colors = ['Red', 'Green', 'Blue'];
displayColorSpread.apply(void 0, [messageSpread].concat(colors));
//# sourceMappingURL=spread_param.js.map