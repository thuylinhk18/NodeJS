const person = {
    name : "Thuy Linh",
    age: 20,
    greet(){
        console.log("Hi, I am "+ this.name);
        
    }
}
const hobbies = ['Sports','Sleeping','Reading'];
for(let hobby of hobbies){
    console.log(hobby);
    
}
console.log(hobbies);
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
