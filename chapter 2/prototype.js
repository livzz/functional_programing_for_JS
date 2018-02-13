var Person = function(name) {
    this.name = name;
};
// Extending Person
Person.prototype.greet = function() {
    return this.name;
};
var albert = new Person("Albert Einstein");
console.log(albert.greet());