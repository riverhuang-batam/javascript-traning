let fizzBuzz = -199;
if (fizzBuzz % 2 === 0 && fizzBuzz > 0) {
    console.log('genap positif')
} else if (fizzBuzz % 1 === 0 && fizzBuzz > 0) {
    console.log('ganjil positif')
} else if (fizzBuzz % 2 === 0 && fizzBuzz < 0) {
    console.log('genap negatif')
} else if (fizzBuzz % 1 === 0 && fizzBuzz < 0) {
    console.log('ganjil negatif')
}




let number = 10;

if(number%2 === 0 && number > 0){
    console.log(number, 'genap postif')
}
else if(number%1 === 0 && number > 0){
    console.log(number, 'ganjil positif')
}
else if(number%2 === 0 && number < 0){
    console.log(number, 'genap negatif')
}
else if(number%1 === 0 && number < 0){
    console.log(number, 'ganjil negatif')
}

let bla = fizzBuzz1(5)
function fizzBuzz1(input){
   
    if((input%5 ===0)&&(input%3 === 0))
    return 'FizzBuzz'
    if(input % 3 === 0)
    return 'Fizz'
    if (input% 5 === 0)
    return 'Buzz'
    return input
}
console.log(bla)

const arr = [1,2,3,4]

arr.push(1,5)
arr.unshift(2,4)
arr.splice(2,0, 33,44)

console.log(arr)


const students = [{
    id: 1,
    name: 'Budi',
    grade: 90
},{
    id: 2,
    name: 'Gorge',
    grade: 74
}, {
    id: 3,
    name: 'Shiva',
    grade: 24
}, {
    id: 4,
    name: 'James',
    grade: 50
}]

// const student = students
// .filter( students => students.grade >= 55)
// console.log(student)
// students.sort((a,b) => a.grade - b.grade)
// console.log(students)
// students.sort((a,b)=> b.grade - a.grade)


students.push({id:5 , name: 'jolie', grade: 90 })
console.log(students)

// students.forEach(students=>{
//     const student  = `this is my ${students.name} and this is my ${students.grade}`
//     console.log(student)
// })

// students.shift(students =>{students.grade >=50
   
// })
// console.log(students)
showStar(5);

function showStar(row){
    
    for(let i = 0; i<=row; i++){
        let pattern = '';
    for(let j = 5; j>=i; j--)
        pattern += ' '
    for(let k = 0; k<=i; k++)
        pattern += '*'
    for(let o =0; o<=i; o++)
        pattern += '*'
        console.log(pattern)
    }
}
showStars(5)

function showStars(rows) {

    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 5; i >= row; i--) 
            pattern += ' '

        for (let m = 1; m <= row; m++) 
            pattern += '*'
        for (let n = 1; n < row; n++) 
            pattern += '*'
        console.log(pattern)
    }
}
let patterns = ''

for (let i = 1; i <= 5; i++) {
    patterns += '\n'
    for (let u = 5; u >= i; u--) 
        patterns += ' '
    for (let o = 0; o < i; o++) 
        patterns += '*'
    for (let y = 1; y < i; y++) 
        patterns += '*'

}
console.log(patterns)

let patterns1 = ''

for (let i = 1; i <= 5; i++) {
    patterns1 += '\n'
    for (let o = 0; o < 10; o++) 
        patterns1 += '*'
 

}
console.log(patterns1)

// starStar(5);
// function starStar(row){
//     for(let i = 0; i <= row; i++)
//     let pattern ='';
// }

let angka = [1,2,33,4,5,6,7,8]
let angka2 = angka.filter(x => x > 5)
console.log(angka2)

let angka3= angka.sort((a,b)=> a-b)
console.log(angka3)

const angkas = -1
let nomor = (angkas>0 && angkas<0 ) ? 'positif' : 'negatif'
console.log(nomor)

// let text ='';
// let holo = 0;
// while(holo<10){
//     text +="\n the number is" + holo;
//     holo++;
// }

// console.log(text)
