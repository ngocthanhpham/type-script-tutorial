function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}
var fn_inside = outside(3);
console.log(fn_inside);
var result = fn_inside(5); // #=> 8
console.log(result);
var result1 = outside(3)(5); // #=> 8
console.log(result1);
//# sourceMappingURL=closure.js.map