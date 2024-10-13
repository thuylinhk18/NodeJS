const person = {
    name: "Linh",
    age: 20,
    // Do not use Arrow Funtion here
    greet() {
        console.log("Hi, I am " + this.name)
    }
}
console.log(person);
person.greet();
