    function solve(str){

    let arr = Array.from(str.split(' ')).map(Number);

    let sum = 0;
    for(let i =0; i< arr.length; i++){

    sum+= arr[i]

    }

    let avg = sum / arr.length;

    arr = arr.sort((a,b) => b-a);

    let newArr =[];
    let greater = arr.filter(x => x > avg);
    if(greater.length == 0){
        console.log('No');
    }
    else {
    for(let i =0; i<5; i++){
        if(arr[i] > avg){

            newArr.push(arr[i])
        }
       
    }
}

    console.log(newArr.join(' '));

    }

solve('5 2 3 4 -10 30 40 50 20 50 60 60 51');
solve('1')