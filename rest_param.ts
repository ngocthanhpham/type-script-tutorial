let displayColor = function (message, ...colors:string[]) {
    console.log(message);
    // console.log(colors);
    for (let i in colors) {
        console.log(colors);
    }
}
let message = "Hello";
displayColor('Red');
displayColor('Red', 'Green');
displayColor('Red', 'Green', 'Blue');