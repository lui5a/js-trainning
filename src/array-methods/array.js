var person = [
  { age: 38, name: "Pau" },
  { age: 30, name: "Alice" },
  { age: 31, name: "Jose" },
  { age: 36, name: "Titu" },
  { age: 23, name: "Javi" },
  { age: 28, name: "Davi" },
  { age: 26, name: "Marc" }
];

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

// function addNewPersonData(){
//     person.push({age:39, name: "Luisa"});
//     console.log(person);
// }

function addNewPersonData(personas,edad,nombre){
    personas.push({age:edad,name:nombre})
    console.log(person);
}

addNewPersonData(person,39,"Luisa");
addNewPersonData(person,25,"Luisa");
addNewPersonData(person,16,"Luisa");
addNewPersonData(person,30,"Luisa");
