// Destructuring Functions
const person = {
    name: 'Thuy Linh',
    age: 20,
    greet(){
        console.log('Hi, I am '+ this.name);
        
    }
}

const printName = ({name}) =>{
    console.log(name);
}
printName(person);
// Destructuring Objects
const {age} = person;
console.log('Hi, I am Linh. I\'m '+ age);
// Destructuring Array
const hobbies = ['Sports','Cooking','Programming','Reading'];
const [hb1,,hb2,hb3] = hobbies;
console.log(hb1,hb2,hb3);
const [hobby1,...hbs] = hobbies;
console.log(hobby1,hbs);
console.log(hobby1 + ' and ' + hbs);
