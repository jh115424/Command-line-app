let rs = require('readline-sync');

// prompt name question
// prompt fav hobby
// ask if there's more hobbies
// add hobbies to list
// store list of users hobbies
// print user hobby list at the end

let hobbies = [];

// let userName = rs.question('What is your name? ');
// console.log('Hi '+ userName + '!');

let favHobby = rs.question('What is your favorite hobby? ')

hobbies.push(favHobby);
console.log(hobbies);


