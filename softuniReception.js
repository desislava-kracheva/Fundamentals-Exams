function solve(arr){

    arr = arr.map(Number);
let employees = 3;

let efficientyFirst = arr.shift();
let efficientySecond = arr.shift();
let efficientyThird = arr.shift();
let hour = 0;

let efficientyPerHour = efficientyFirst + efficientySecond + efficientyThird;

let students = arr.shift();

while(students > 0){

    hour++;
    if(hour % 4 !== 0){
    students -= efficientyPerHour;

    }
}

console.log(`Time needed: ${hour}h.`);

}

solve(['5','6','4','20'])