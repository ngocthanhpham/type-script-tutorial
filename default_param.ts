let getBonus = function (params = 10, tax = 20) {
    console.log(params + tax);
    console.log(arguments.length);
}

getBonus(undefined, 50);