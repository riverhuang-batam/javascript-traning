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


let x=10, y=5; //arimathic operator
console.log(++x) //increment
console.log(--x)//decrement
console.log(x++)
console.log(x)

x += 5  //assignment operator
console.log(x)
y*=7
console.log(y)


let a=1;
console.log(a>0)
console.log(a>=1)
console.log(a<1)
console.log(a<=1)
console.log(a===1)
console.log(a!==0)


console.log(a===1)
console.log(1===1)
console.log('1'===1)

console.log('1'==1)
console.log(true==1)

let points= 110; //termary operation
let type = points > 100 ? 'gold' : 'silver'
console.log(type)


// logical operator with non bollean
let highIncome = false; //logical and (&&) logical or(||)
let goodCreditScore= true;
let eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan)

let applicationRefused = !eligibleForLoan
console.log(applicationRefused)


let userColor = 'red';
let manageColor = 'blue';
let decideColor = userColor || manageColor;
console.log(decideColor)


//BITWISE OPERATOR
// 1 = 00000001
// 2 = 00000010
// R = 00000011
// R = 00000000

console.log(1|2)
console.log(1&2)
console.log(2|3)
console.log(2&3)

//precedence operator
let nono= 4 + 5 * 5
console.log(nono)


let hour= 21
if(hour>= 6 && hour < 12){
    console.log('good morning')
}
else if(hour >=12 && hour < 18 ){
    console.log('good afternoon')
}
else if(hour >=18 && hour < 20){
    console.log('good evening')
}
else{
    console.log('good night')
}

let role;
switch(role){
    case 'guest':
        console.log('user guest');
        break;
    
    case 'moderator':
        console.log('moderator guest')
        break;
    default:
        console.log('unknown guest')
}
if( role === 'guest' && hour >12)console.log('guest')
else if (role === 'moderator')console.log('guest')
else console.log('unknown User')
let b= 0.1 + 0.2;
console.log(b == 0.3)

var results = "*"
while(results.length <=7){
    console.log(results)
    results =results + "*"
}

var result2 = "*"
while (result2.length <=10){
console.log(result2)
result2 ="*" +" "+ result2 +"*"
}

for(let i = 0; i <= 5; i++){
    if(i % 2 !== 0) console.log(i)
}
let c= 0;
while(c<=5){
    if(c%2 !== 0) console.log(c)
    c++;
}
let d=0;
if(d%2==0 && d >= 0){
    console.log('positif genap')
}
else if( d%1==0 && d >= 0){
    console.log('positif ganjil')
}
else if (d%2==0 && d <= 0){
    console.log('negatif genap')
}
else{
    console.log("negatif ganjil")
}
let e = 9;
do{
    if(e%2 !== 0)console.log(e)
    e++;
}while(e <=5);

const persons={
    name: "river",
    age: 18
}
for(let index in persons)
console.log(index, persons[index])

const colors=['red','green','yellow']
for(let index1 of colors)
console.log(index1)

let z = "*";
while(z.length<10){
    console.log(z)
    z= z+"*"
}

let f=0;
while(f<=10){
    if(f===5) break;
    if(f%2 ==0){
    f++;
    continue}
    console.log(f)
    f++;
}

let equalNum = max(3,2)
console.log(equalNum)

function max(a,b){
    return (a>b) ? a : b;
 }
 function max(a,b){
     return(a<b) ? a:b;
 }

 let image = isLandScape(800,600)
 console.log(image)
 
 function isLandScape(width,height){
    //  if(width>height) return true;
    //  else return false (you can use this too but the below code is more shorter)
     return(width>height);
 }

 const output = fizzBuzz(3);
 console.log(output);
 function fizzBuzz(input){
    if(typeof input !== 'number')
    return 'NaN'
    if ((input % 3 === 0) && (input % 5 === 0))
     return 'FizzBuzz'
    if(input%3===0)
         return 'Fizz'
     
     if( input % 5 ===0)
         return 'Buzz'
     return input;
 }
checkSpeed(180);
 function checkSpeed(speed){
    const speedLimit=70;
    const kmPerLimit=5;
     if(speed <= speedLimit)
     console.log('ok')
     else{
     const points =Math.floor((speed-speedLimit))/kmPerLimit
    if(points>=12)
    console.log('your license is suspended');
    else
    console.log('points', points);
    
     }
     
 }

 