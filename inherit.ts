class Human {
    constructor(name) {
        console.log(name + " This is constructor...");
    }

    getId() {
        return 10;
    }
}
class Employee extends Human {
    constructor(name) {
        super(name);
        console.log(name + " Employee contructor...");
    }
}

let emp = new Employee("Thanh");
