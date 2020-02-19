

function showPerson() {
  for (var i = 0; i < person.length; i++) {
    console.log(person[i]);
  }
}

// showPerson();

function showProperties() {
  for (var i = 0; i < person.length; i++) {
    if (person[i].age % 2 == 0) {
      console.log(`hola soy ${person[i].name} y tengo ${person[i].age} años`);
    } else {
      console.log(`mi edad es un numero impar`);
    }
  }
}

// showProperties();

function showPropertiesReverse() {
  for (var i = person.length - 1; i >= 0; i--) {
    console.log(`hola soy ${person[i].name} y tengo ${person[i].age} años`);
  }
}

// showPropertiesReverse();




//While

function showPersonWhile() {
  var i = 0;
  while (i < person.length) {
    console.log(`hola soy ${person[i].name} y tengo ${person[i].age} años`);
    i = ++i;
  }
}

// showPersonWhile();

function showPersonWhileReverse() {
  var i = person.length - 1;
  while (i >= 0) {
    console.log(`hola soy ${person[i].name} y tengo ${person[i].age} años`);
    i = --i;
  }
}

//   showPersonWhileReverse();

//Treat array items

function addNewPersonData() {
  person.push({ age: 39, name: "Luisa" });
  // console.log(person);person.length-1
  console.log(person[person.length - 1]);
}

// addNewPersonData();

function addNewPersonData(personas, edad, nombre) {
  personas.push({ age: edad, name: nombre });
  console.log(person);
}

// addNewPersonData(person,39,"Luisa");
// addNewPersonData(person,25,"Luisa");
// addNewPersonData(person,16,"Luisa");
// addNewPersonData(person,30,"Luisa");

// function

// recibe array,age return el array con lo añadido sin for y sin while (forEach)




// function getOverMinAge(personArray,minAge) {
//     addNewPersonData(person,39,"Luisa");
//     personArray.forEach((element)=>{

//         if(element.age>=minAge){
//             console.log(`hola soy ${element.name} y tengo ${element.age} años`);
//         }
    
//     })
// }
//////////////////////////////////////


// function getOverMinAge(personasArray, minAge) {
//     temporalArray=[];
//   personasArray.forEach(element => {
//     if (element.age >= minAge) {
//      temporalArray.push(element)
//     }
//   });

//   return temporalArray;
// }

// // getOverMinAge(person,30);

// function mostrarArray(){
//     console.log(getOverMinAge(person,30));
// }


//mostrarArray();

// 
// function fromPersonToAgeArray(personasArray){
//     var newPersonasArray = personasArray.map(function(element){
//         var newObject = {};
//         newObject.age = element.age;
//         return newObject;
//     });

//     const personsFitered = newPersonasArray.filter(newPersonasArray => newPersonasArray.age <= 30)
//     return personsFitered;
    
// }

// console.log( fromPersonToAgeArray(person);




// getAges(persons) con map exclusivamente [30, 25, 12]

// var getAges = person.map(function(ages){
//   return ages.age;
// });

// console.log(getAges);

// var foo = function(ages){
//   var ageObj = ages.age;
//   return ageObj;
// };

// var getAges = person.map(foo)

// getOverMinAges(persons, minAge) [12, 25]

// function getOverMinAgePersons(persons, minAge) {
//   return persons.filter(function(person){
//     return person.age >= minAge ;
//   })

// }

// console.log(getOverMinAgePersons(person, 30));






// TODO: showPropertiesReversed() usando for incremental
// for (var i = 0; i < person.length; i++) { ... } 

var person = [
  { age: 38, name: "Pau" },
  { age: 30, name: "Alice" },
  { age: 31, name: "Jose" },
  { age: 36, name: "Titu" },
  { age: 23, name: "Javi" },
  { age: 28, name: "Davi" },
  { age: 26, name: "Marc" }
];

function showPersonForReversed(x){
  var counter = x.length - 1;
  var tempArray = []
  
  for( var i = 0 ; i < x.length; i++){
     tempArray[i] = x[counter--];
  }
  
  return tempArray;
}

// console.log(showPersonForReversed(person));


function scope1(){
 
  for( var i = 0 ; i < 7; i++){
    
  console.log( b= 6+6 );  
  console.log('hola') 
  
  }
  
  return b ;
}

console.log(scope1())

// getOverMinAgePersons(persons, minAge) con filter en vez de foreach
// function getOverMinAgePersons(persons){
//   return persons.age >= 30;
// }

// var personsMinAge = person.filter(getOverMinAgePersons);

// console.log(personsMinAge);