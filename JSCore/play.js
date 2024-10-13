var name = "Thuy Linh";
console.log(name);
var age = 20;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby){
    return 'I am '+ userName +
    ', age is ' + userAge +
    ', and I have hobbies: ' + userHasHobby
}

console.log(summarizeUser(name,age,hasHobbies));

