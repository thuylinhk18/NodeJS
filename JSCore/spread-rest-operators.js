const person = {
    name : "Thuy Linh",
    age: 20,
    greet(){
        console.log("Hi, I am "+ this.name);
        
    }
}
const hobbies = ['Sports','Sleeping','Reading'];

//Using spread operator
const copiedObject = {...person};
console.log(person);
console.log(copiedObject);
const copiedArray = [...hobbies];
console.log(hobbies);
console.log(copiedArray);

//Using rest operator
const toArray = (...arguments) =>{
    return arguments;
}
console.log(toArray(1,2,3));

