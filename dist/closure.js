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


function makeFunc() {
    let name = 'Mozilla';
    function showName() {
        console.log(name);
        displayName();
        function displayName() {
            console.log(name);
            // /return name;
        }
        //console.log(name);
        return displayName;
    }
    return showName;
}
var myFunc = new makeFunc();
myFunc();
//myFunc.showName();
//# sourceMappingURL=closure.js.map