let salaries = [1036, 3205, 2030, 2945];

//Exercitiul 1

function simpleFind(answer) {
    let value;
    for(let i=0; i<answer.length; i++) {
        if(answer[i] % 5 === 0) {
            value = answer[i];
            break;
        }
    }
    return value;
}

console.log(simpleFind(salaries));


//Exercitiul 2

function ourValue(value) {
    if(value > 2500 && value < 3000) {
        return value;
    }
}

console.log('----')

//Exercitiul 3

function find(list, callback) {
    let value;
    for(let i=0; i<list.length; i++) {
        if(callback(list[i])) {
            value = list[i];
            break;
        }
    }
    return value;
}

console.log(find(salaries, ourValue));

console.log('----')

//Exercitiul 4 

let divSalary = find(salaries, (value) => value % 10 === 0);

console.log(divSalary);