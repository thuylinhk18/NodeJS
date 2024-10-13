// Ways to define a function

const userName = "Thuy Linh";
let age = 20;
const hasHobbies = true;
// Option 1:
function summarizeUser1(userName, userAge, userHasHobby){
    return 'I am '+ userName +
    ', age is ' + userAge +
    ', and I have hobbies: ' + userHasHobby
}

console.log(summarizeUser1(userName,age,hasHobbies));

//Option 2:
const summarizeUser2 = function(userName, userAge, userHasHobby){
    return 'I am '+ userName +
    ', age is ' + userAge +
    ', and I have hobbies: ' + userHasHobby
}
console.log(summarizeUser1(userName,age,hasHobbies));

//Option 3 : Arrow Function (shorter)
const summarizeUser3 = (userName,userAge,userHasHobby) => {
    return 'I am '+ userName +
    ', age is ' + userAge +
    ', and I have hobbies: ' + userHasHobby
}
console.log(summarizeUser1(userName,age,hasHobbies));
// Another example
const add1 = (a,b) =>{
    return a+b;
};
console.log(add1(1,2));
// If the function has only one statement in result
const add2 = (a,b) => a+b;
console.log(add2(1,2));
// If the function has only one argument --> Can remove the parentheses
const addOne = a => a+1;
console.log(addOne(1));
// If the function has no argument --> Have to specify an empty pair of parentthese
const addRandom = () => 1+2;
console.log(addRandom());
