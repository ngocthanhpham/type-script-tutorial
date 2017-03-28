function greetPerson(name) {
    let greet;
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
let b = 2;
if (a === 1) {
    let b = 10;
    var a = 20;
}
console.log(a);
console.log(b);

for(let i=1; i<=5; i++)
{
    setTimeout(function(){
        console.log(i);
    }, 1000);
}