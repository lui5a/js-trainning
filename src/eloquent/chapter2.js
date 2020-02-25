////////
// let result = 1;
// let counter = 0;
// while (counter < 10) {
//     result = result * 2;
//     counter = counter + 1;
//     console.log(result);
// }
//////

// console.log("This is the first line\nAnd this is the second")


// let hash = '#'
// while (hash.length <= 7) {
//   console.log(hash);
//   hash = hash + '#';
// }

// let hash = ""
// for( counter = 1 ; counter <= 7; counter+=1 ){
//     hash += "#";
//     console.log(hash);
// }

// for(let number = 1; number<= 100; number += 1){
//     if (number % 3 == 0){
//         console.log('Fizz');
//     }else if( number % 5 == 0){
//         console.log('Buzz');
//     } else console.log(number);
// }

// for(let number = 1; number<= 100; number += 1){
//     if (number % 5 == 0 & number % 3 == 0){
//         console.log('FizzBuzz');
//     }else if( number % 5 == 0){
//         console.log('Buzz');
//     }else if (number % 3 == 0){
//         console.log('Fizz');
//     } else console.log(number);
// }

// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
//   }


// let length = 8;
// let output = "";

// for(let counterRow = 0 ; counterRow < length ; counterRow++){
//     for(let item = 0 ; item < length ; item++){
//         if((counterRow + item) % 2 !== 0){
//             output += "#";
//         }else{
//             output += " ";
//         }
//     }
//     output += "\n";
// }
// console.log(output);


 let output = "";
 let charItem ="";
 let char= "#";
 let space = " ";

for(let counterRow = 0 ; counterRow <= 7 ; counterRow += 1){

    for(let item = 0 ; item < 8 ; item += 1){
        if(item % 2 == 0) charItem = space;
        if(item %2 !== 0) charItem = char;
        output +=  charItem;
    }

    output += "\n";
}
console.log(output);


// let hash = "#";
// let space = " ";
// let output = "";
// for(let couterGrid = 1 ; couterGrid <= 8; couterGrid += 1){
//     even = space + hash;
//     notEeven = hash + space;
//     if(couterGrid == 1) output = even;
//     if(couterGrid == 2) output = notEeven;
//     if(couterGrid==2) output = hash + space;
//     console.log('1', output)
// }


// let hash = "#";
// let space = " ";
// let output = "";
// for(let couterGrid = 1 ; couterGrid <= 8; couterGrid += 1){
//     output += space + hash;
//     if(couterGrid == 1) output += output;
//     if(couterGrid==2) output = hash + space;
//     console.log('1', output)
// }

    // if(counter == 1) output += output + output + output;
    // console.log('3', output)


// if(counter == 1) output += output + output + output;
//     console.log(output);
//    let output = "";
//     let blank = " "
//     if( hash.length <= 1)
//     blank += hash;
//     if (hash.length <= 2)
//     blank += hash ;
//     console.log(output += blank + blank + blank );

