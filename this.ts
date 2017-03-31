let employee = {
    id: 1,
    greet: function () {
        let self = this;
        setTimeout(() => console.log(self.id), 1000)

    }
}
employee.greet();   