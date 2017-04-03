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
  var name = 'Mozilla';
  function showName() {
    console.log(name);
    function displayName() {
      console.log(name);
    }
    //console.log(name);
    return displayName;
  }

  return showName;
}

var myFunc = makeFunc();
myFunc();