//even/odd loop

// for(counter = 0 ; counter < 20; counter++){
//     if(counter % 2 == 0 ){
//         console.log(counter + "even")
//     }else{
//         console.log(counter + "odd")
//     }
// }

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, 
// it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// for(counter = 0 ; counter < 10 ; counter++ ){

//     console.log(counter + " * 9 = " + counter*9);
// }

// for (let current = 1; ; current = current + 1) {
//     console.log(current);
//     if (current % 7 == 0) {
//         break; 
//     }
// }

// for(counter = 0; counter < 100; counter++){
//     console.log('Iván esta re guey');
// }

const allRandomNumbers = [];

function generateRandomNumber(min, max){
    let number = Math.round(Math.random() * (max -min) + min);
    if(!allRandomNumbers.includes(number)){
        allRandomNumbers.push(number);
        console.log('new number', number)
    }else{
        console.log('repeated number', number)
        return generateRandomNumber(min, max);
    }
}

const limit = 10;
const iterations = 10;

function resetAllRandomNumbers(){
    for (let it = 0; it < iterations; it++) {
        generateRandomNumber(1,limit);
        console.log(allRandomNumbers);
    }
    if(allRandomNumbers.length == limit){
        console.log('reset', allRandomNumbers)
        allRandomNumbers.length = 0;
    } else{
        console.log('no reset',allRandomNumbers)
        allRandomNumbers;
    }
    console.log('result',allRandomNumbers)

}
resetAllRandomNumbers();
// console.log(allRandomNumbers);


