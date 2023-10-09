const cowsay = require ("cowsay");


const userInformation = require('./information');
console.log(`hi ${userInformation.myName} and u school is ${userInformation.school}`);
const ou= `hi ${userInformation.myName} and u school is ${userInformation.school}`
console.log(cowsay.say({
    text : ou,
    e : "oO",
    T : "U "
}));
