var employee = {
    id: 1,
    greet: function () {
        var self = this;
        setTimeout(function () { return console.log(self.id); }, 1000);
    }
};
employee.greet();
//# sourceMappingURL=this.js.map