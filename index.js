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

let results = "*"
while(results.length <=7){
    console.log(results)
    results =results + "*"
}

let result2 = "*"
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

//  const output = fizzBuzz(3);
//  console.log(output);
//  function fizzBuzz(input){
//     if(typeof input !== 'number')
//     return 'NaN'
//     if ((input % 3 === 0) && (input % 5 === 0))
//      return 'FizzBuzz'
//     if(input%3===0)
//          return 'Fizz'
     
//      if( input % 5 ===0)
//          return 'Buzz'
//      return input;
//  }
checkSpeed(71);
 function checkSpeed(speed){
    const speedLimit=70;
    const kmPerLimit=5;
     if(speed <= speedLimit + kmPerLimit){

        console.log('ok')
        return;
     }
     const points =Math.floor((speed-speedLimit))/kmPerLimit
    if(points>=12)
    console.log('your license is suspended');
    else
    console.log('points', points);
 }
 const array = [null, undefined, '', 0,1,2,3]
 console.log(countTruthy(array));
 function countTruthy(array){
     let count  = 0;
     for(let value of array)
        if (value)
        count++;
        return count;
 }
 const movie ={
     title: 'a',
     releaseYear: 2018,
     rating: 4.5,
     director: 'b'
 }
 showProperties(movie)

 function showProperties(obj){
     for(let show in obj)
     if(typeof obj[show] ==='string')
     console.log(show, obj[show])
 }
 console.log(sum(10))
 function sum(limit){
     let sum=10;
     for(let g = 0; g<= limit; g++)
    if(g%3 === 0 || g%5 === 0)
    sum += g;
    return sum
 }
showNumber(10);
function showNumber(limit){
    for(let j =0; j<=limit; j++){
    // if( j%2 === 0)
    // console.log(j, 'EVEN')
    // else console.log(j,"ODD")
        const message =(j %2 === 0) ? 'EVEN' : 'odd'
        console.log(j, message)
}
}
const marks = [100, 80, 100];
console.log(calculateGrade(marks));

function calculateGrade(marks){
  const average = calculateAverage(marks)

    if(average <= 59)
    return 'F'
    if(average <= 69)
    return "D"
    if(average <= 79)
    return "C"
    if(average<= 89)
    return "B"
    if(average <= 100)
    return "A"
}

function calculateAverage(array){
    let sum = 0;
    for(let h of array)
    sum += h;
    return sum / array.length;
}

const marks1 = [60, 80, 100];
console.log(calculateGrades(marks1));
function calculateGrades(marks1){
    let sum1 = 0;
    for(let m of marks1)
    sum1 += m;
    let average1= sum1 / marks1.length;
  
      if(average1 <= 59)
      return 'F'
      if(average1 <= 69)
      return "D"
      if(average1 <= 79)
      return "C"
      if(average1<= 89)
      return "B"
      if(average1 <= 100)
      return "A"
  }

showStars(19)
function showStars(rows){
    for(let row = 1; row<= rows; row++){
    let pattern = '';
    for(let n = 0; n< row; n++)
    pattern += '*';
    console.log(pattern)
    }
}

showPrimes(20);
function showPrimes(limiter){
    for(let number1 = 2; number1<= limiter; number1++){
        let isPrime = true;
        for(let factor =2; factor< number1; factor++){
            if(number1 % factor === 0){
            isPrime =false;
                break;
        }
        }
        if (isPrime) console.log(number1)
    }
}

const circle={
    radius :1,
    location:{
        x:1,
        y:1
    },
    isVisible: true,
    draw: function(){
        console.log('draw')
    }
}
circle.draw();
for(let key in circle)
console.log(key, circle[key])

for (let key of Object.keys(circle))
console.log(key)
for (let entry of Object.entries(circle))
console.log(entry)
if ('radius' in circle) console.log('yes')

// const another1 ={};
// for (let key in  circle)
// another1[key] = circle[key]

// const another1 = Object.assign({},circle)
// {bisa ditambah ke object jika diisi}
const another1 = {...circle}
console.log(another1)
function createCircle(radius){ //factory function
    return{
        radius,
        draw1(){
            console.log('draw')
        }
    };
}
const circle1 =createCircle(1)
console.log(circle1)

const circle2 = createCircle(2)
console.log(circle2)

function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    return this
}
const another = new Circle(1);
console.log(another)


const circle4 = {
    radius:1
};
circle4.color="yellow"
circle4.draw= function(){}
// delete circle4.color
// delete circle4.draw
console.log(circle4)

Circle.call({},1)
Circle.apply({},[1,2,3])

let obj ={value:10}
function increase(obj){
    obj++;
}
increase(obj);
console.log(obj);

const message1 = ' This is my \'First \nMessage '
const another2 = new String('hi')

const name4 ='river'
const message2 = 'Hi' + name + '\n' //tidak disarankan 

const another3 = 
`hi ${name4} i am ${10+8} years old

thank you for using my web application

regards,
river`

const now = new Date();
const date1 = new Date('june 6 2019 09:00');
const date2 = new Date(2018, 5, 6, 3);

now.setFullYear(2019)

let add= {
    city: 'batam',
    address: 'batam center',
    zipcode: 29444
}

function showAddress(add){
    for(let key in add)
    console.log(key, add[key])
}
showAddress(add)


let address = createAddress('batam', 'batam center', 29444)
console.log(address)
function createAddress(city, address, zipcode){ //factory function
    return{
        city,
        address,
        zipcode
    }
}
 let address1 = new Address('a', 'b', 'c')
 console.log(address1)
function Address(street, city, zipcode){ //constructor function
    this.city = street;
    this.address = address;
    this.zipcode = zipcode;
}

let address3 = new Address('a','b','c') //object equality
let address4 = new Address('a','b','c')
let address5 = address3
console.log(areEqual(address3, address4));
console.log(areSame(address3, address4))
console.log(areSame(address3, address5))
function areEqual(address3, address4){
    return address3.city === address4.city &&
    address3.address === address4.address &&
    address3.zipcode === address4.zipcode

}

function areSame(address3, address4){
    return address3 === address4
}

let post = { //blog post object
    title:'a',
    body:'b',
    author:'c',
    views:10,
    comments:[
        {author:'a', body:'b'},
        {author:'c', body:'d'}
    ],
    isLive: true
}
console.log(post)

let post1 = new Post('a', 'b', 'c')
console.log(post)

function Post(title,body,author){
    this.title=title;
    this.body=body;
    this.author=author;
    this.views = 0;
    this.comments =[];
    this.isLive =false;
}

//price range object
let priceRanges = [
    {label:'$', toolTip:'Inexpensive', minPerPerson: 0, maxPerPerson:10},
    {label:'$$', toolTip:'Moderate', minPerPerson: 11, maxPerPerson:20},
    {label:'$$$', toolTip:'Expensive', minPerPerson: 21, maxPerPerson:50}
]

let restaurants = [
    {averagePerson: 5}
]


let numbers= [1,2,3,4,5,6]

numbers.push(12,21) //last
numbers.unshift(88,99) //beginning
numbers.splice(2,0,'a','b') 
console.log(numbers)


let numbers1 = [1,2,4,1,3,5] //finding array primitive
console.log(numbers1.indexOf(1))
console.log(numbers1.indexOf(1,2)) //begin finding the array on the second
console.log(numbers1.lastIndexOf(1))

console.log(numbers1.indexOf(1) !== -1)
console.log(numbers1.includes(1))

let courses=[
    {id:1, name:'a'},
    {id:2, name:'b'}
]

const course = courses.find(function(course){ //use findIndex to find where the id or names place
    return course.name === 'a'
});
const course1 = courses.find(course => course.name === 'a')
console.log(course)
console.log(course1)


const numberss= [1,2,3,4] //removing array element
const last = numberss.pop()
const first = numberss.shift()
const middle = numberss.splice(1,1)
console.log(numberss)


let noNumbers = [1,2,3,4]; //emptying array
let anotherN = noNumbers;
// 1st solution
noNumbers = [];

//2nd solution
// noNumbers.length=0;

//3rd solution
// noNumbers.splice(0,noNumbers.length)

//4th solution
// while(noNumbers.length > 0)
// noNumbers.pop()

console.log(noNumbers)
console.log(anotherN)


const firstAr = [{id:1}]
const secondAr = [5,6]
const combined = firstAr.concat(secondAr)
firstAr[0].id = 10;
const slice = combined.slice(2,4)
console.log(combined)
console.log(slice)


const firstArr = [1,2,3,4]
const secondArr = [5,6]
const combined1 = [...firstArr, ... secondArr]
console.log(combined1)


const numbers2 = [1,2,3]
for(let numbers3 of numbers2)
console.log(numbers3)

numbers2.forEach((numbers2,index) =>
    console.log(index,numbers2)
)

const numbers4 = [1,2,3]
const join = numbers4.join('-')
console.log(join)

const message3 = 'this is my message for you'
const part = message3.split(' ')
console.log(part)
const join2 = part.join('-')
console.log(join2)


const numbers5 = [5,1,2,3,4]
numbers5.sort()
console.log(numbers5)
numbers5.reverse()
console.log(numbers5)

const course2=[
    {id:1, name:'Node,js'},
    {id:2, name:'JavaScript'}
];

course2.sort(function(a,b){
    // a < b = -1
    // a > b = 1
    // a === b =1
    // if (a.name < b.name) return -1;
    // if (a.name > b.name) return 1;
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(course2)


const number2 =[1,0,-1,-23,2,3,4]
const filtered = number2
.filter(value => value >= 0)
.map(n => ({value:n}))
.filter(obj => obj.value > 1)
.map(obj => obj.value);
    
console.log(filtered)

const number3 = [1,2,3,4]

const sum2 = number3.reduce((accumulator, currentValue)=>accumulator + currentValue)
console.log(sum2)
const numbers6 = arrayFromRange(-10,-4)
console.log(numbers6);
function arrayFromRange(min,max){
    
    const fil = []
    for(let i = min; i <= max; i++)
    fil.push(i);
    return fil
}

const number4 = [1,2,3,4];
console.log(includes(numbers4,-1))
function includes(array, searchElement){
    for( let element of array)
    if(element === searchElement)
    return true;
    return false
}

const number5 = [1,2,3,4,11,1,6,1]
const output2 = excepts(number5, [1])
console.log(output2)

function excepts(array, excluded){
    const output2 = [];
    for(let element of array)
    if(!excluded.includes(element))
    output2.push(element)
    return output2
}
const numbers8 = [1,2,3,4];
const output4 = move(numbers8, 0,2);
console.log(output4)
function move(array, index, offset){
    const position = index + offset;
    if(position >= array.length || position <= 0){
        console.error('invalid offset.');
        return;
    }
    const output4 = [...array];
    const element = output4.splice(index,1)[0];
    output4.splice(index+offset, 0, element)
    return output4
}

const number6 = [1,2,3,4,1]
const count1 = countOccurrences(number6, 1)
console.log(count1)

function countOccurrences(array, searchElement){
    // let count1 = 0;
    // for (let element of array)
    // if (element === searchElement)
    // count1++;
    // return count1

    return array.reduce((accumulator, current)=>{
        const occurrence = (current === searchElement) ? 1:0
        console.log(accumulator, current, searchElement)
        return accumulator + occurrence
    },0)
}
const number7 = [1,2,3,4]
const max1 = getMax([1,2,3,4,5])
console.log(max1);

function getMax(array){
    if(array.length === 0) return undefined;

    // let max1 =array[0];
    // for( let i = 1; i < array.length; i++)
    // if (array[i] > max1)
    // max1 = array[i];
    // return max1
    
    return array.reduce((a,b) => (a > b) ? a : b)
}

const movie1 = [
    {title:'a', year:2018, rating: 4.5},
    {title:'b', year:2018, rating: 3.8},
    {title:'c', year:2018, rating: 3.9},
    {title:'d', year:2018, rating: 4.0}
];

const filterMovie = movie1
.filter(movie1 => movie1.rating >=4 && movie1.year === 2018)
.sort((a,b) => a.rating - b.rating)
.reverse()
.map(m=> m.title)

console.log(filterMovie)

walk()
function walk(){ // function declaration = after variable
    console.log('walk');
};

const run = function(){ //function expression = before variable
    console.log('run');
};
let move1 = run;
run();
move1();

function sum1(){
    let total = 0;
    for(let value of arguments)
    total += value
    return total
}

console.log(sum1(1,2,3,5,6,5,7,57))

function sum3(discount,...price){
    const total = price.reduce((a,b)=> a+b)
    return total * (1- discount)
}
console.log(sum3(0.1,3,4,10,6,5))

function interest(principal, rate= 2000, years= 10){
    return principal * rate/100 * years;
}
console.log(interest(4000))

const human1 = {
    firstName:'river',
    lastName:'huang'
}

console.log(`${human1.firstName} ${human1.lastName}` )

const person1 ={
    firstName:'river',
    lastName:'huang',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ')
        this.firstName = parts[0]
        this.lastName = parts[1]
    }
}

person1.fullName = 'john smith'

console.log(person1)

//error handling
// const person2 ={
//     firstName:'river',
//     lastName:'huang',

//     set fullName(value){
       
//         if (typeof value !== 'string')
//             throw new Error('value is not a string.')

//         const part =value.split(' ')
//         if (part.length !== 2)
//         throw new Error('Enter a first and last name')
        
//         this.firstName = parts[0]
//         this.lastName= parts[1]
//     }
// }

// try {
//     person2.fullName = '';
// }
// catch(e){
//     alert(e)
// }

// console.log(person2)

const color1 = 'red';

function start(){
const message='hi';
const color1= 'blue';
console.log(color1)
}

function stop(){
    const message='stop';
}
start();

const video = {
    title:'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();
const video1 = {
    title:'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(tag=>{
            console.log(this.title, tag);
        });
    }
};

video1.showTags();

console.log(sum([1,2,3,4]))
function sum(...items){
    if(items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]]
    return items.reduce((a,b)=> a+b)
}

const circle5 = {
    radius:1,
    get area(){
        return Math.PI * this.radius * this.radius
    }
};

console.log(circle5.area)

const number8 = [1,2,3,4];

const count2 = countOccurrences(numbers8,1);
console.log(count2);

try{
    const numbers = [1,2,3,4];
    const count = countOccurrences(null, 1)
    console.log(count)
}
catch(e){
    console.log(e.message)
}

function countOccurrences(array, searchElement){
    if(!Array.isArray(array))
        throw new Error('invalid array')
    return array.reduce((accumulator, current)=>{
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    },0)
}