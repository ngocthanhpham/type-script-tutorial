class Person2{
    constructor(name){
        this.name = name;
        console.log(this.name);
    }

    static talk (){
        console.log("This is static method...");
    }
}
let p = new Person2("Thanh");
Person2.talk();
