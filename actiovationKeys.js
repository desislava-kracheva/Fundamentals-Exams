function solve(input) {

    let key = input.shift();

    let line = input.shift();

    while (line !== 'Generate') {

        let [command, firstArg, secondArg, thirdArg] = line.split('>>>');

        switch (command) {

            case 'Contains':
                let substring = firstArg;
                if (key.includes(substring)) {
                    console.log(`${key} contains ${substring}`);
                } else {

                    console.log(`Substring not found!`);

                }

                break;

            case 'Flip':
                let upOrLow = firstArg;
                let startIndex = Number(secondArg);
                let endIndex = Number(thirdArg);
                let subStr = key.substring(startIndex, endIndex);
                let needed = '';
                if (upOrLow == 'Upper') {
                    needed = subStr.toUpperCase();

                } else {
                    needed = subStr.toLowerCase();
                }
                key = key.substring(0, startIndex) + needed + key.substring(endIndex);
                console.log(key);

                break;
            case 'Slice':

let start = Number(firstArg);
let end = Number(secondArg);

let deletedPart = key.substring(start, end);
key = key.replace(deletedPart, '');
console.log(key);

                break;


        }



        line = input.shift();
    }

console.log(`Your activation key is: ${key}`);


}

solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
]
)