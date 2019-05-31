let firstName="River", lastName="Huang";
console.log(firstName)

// cannot be reserved key
// should be meaningful
// cannot start with a number (1name)
// cannot contain a space or hyphen(-)
// Are case-sensitive 
// variable training

let interestRateq= 0.3;
interestRateq= 1;
console.log(interestRateq)
// const interestRate= 0.3;
// interestRate= 1;
// console.log(interestRate)
// constan training

let name = "river"; //string
let age = 18; //number
let approved= true; // boolean
let firstName1= undefined;
let selectedColor = null;
//primitive type

let person= {
    name1:"river",
    age1:18
}
person.name1="huang" //dot notation
let selection= 'name1' //bracket notation
person[selection]='mary' //or use this person['name1'] = 'mary'
console.log(person.name1)

let color=["red","blue"]
color[2]= "green"
console.log(color.length) // array

function greet(name2, lastName2){ //function training
    console.log('hello ' + name2 + ' ' + lastName2);
}

greet('River','huang');
greet('Eriec','tan');

function square(number){
    return number* number
}
console.log(square(3))