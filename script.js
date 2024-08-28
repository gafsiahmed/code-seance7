let name  = "Salma";    
let lastName = "gharbi";

let number1 = 30
let number2 = 40

let fullName = name+" "+lastName;

// fullName  = "ahmed gafsi"


console.log(fullName)
console.log("addition",number1 + number2)
console.log("soustraction", number1 - number2)
console.log("multiplication", number1 * number2)
console.log("division",number1 / number2)
console.log("rest de la division" , number1 % number2)

let a = 1;
let c = 10;
let b = "1";

console.log(typeof a )
console.log(typeof b )


console.log(typeof(b*5)) 
console.log(b*5) 
console.log(name*5) 
console.log(a+c)


console.log(lastName[10])
console.log("the length of the full name is : " ,fullName.length)
console.log(fullName.slice(6,12))
console.log(fullName.slice(-1,-6))
console.log(fullName.slice(0,5))
console.log(fullName.slice(6, fullName.length + 1))

console.log(name.concat(" ",lastName," is a web dev teacher", " he works at opusLab"))
console.log("--------------------")
console.log(fullName.slice(-6,fullName.length))




console.log("##".repeat(5),"Arraaays","##".repeat(5))







let array = ["Ahmed","Salma","Mohamed","Sarra","Amine" ]

console.log(array);
console.log("the length of the array",array.length);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

// the pop method removes the last element of the array
array.pop();
console.log(array);

// the push method adds an element to the end of the array
array.push("Aymen");
console.log(array);


let bucket = array[0];
array[0] = array[1];
array[1] = bucket;
console.log(array);

array.shift();
console.log(array);

array.unshift("Salma");

console.log(array);


let names_string = array.join("/")

console.log(names_string);


let new_students = ["abdalah","fatma"]

let new_array = array.concat(new_students,["jajaj"])
console.log(new_array);


console.log(array.indexOf('Sarra'));


let slicedArray = array.slice(0,3)
console.log(slicedArray);

array.splice(0,3)

// console.log("spliced values " , splicedArray);

console.log("the new state of the array ", array);


/*

if condition {
    what to execute if the condition is true
}

else {
    what to execute if the condition is false
}


if condition 1 {

}
else if condition 2 {

} 
else {
}

*/ 



console.log("--------- if/else statemnts ---------");

let age = 61;



if (age < 18) {
    console.log("you are a minor , sorry you can't access the club")
}

else if (age >= 18 && age <= 60 ) {
    console.log("you are an adult , welcome to the club")
}

else {
    console.log("you are a senior , sorry this club is for adults only")
}


//  exemple 2 : arrays 

let visitor = "Salma"

let students = ["Ahmed","Salma","Mohamed","Sarra","Amine" ]


if (students.indexOf(visitor) != -1) {
    console.log("ched certif mte3k , merci khater jit")
}
else {
    console.log("sorry you are not allowed to enter, you are not part of opuslab students")
}



// let fruit = window.prompt("please enter a fruit").toLowerCase().trim();

// switch(fruit) {
//     case 'apple' : 
//         console.log("here is an apple or mango juice")
//         break;
//     case 'banana' : 
//         console.log("here is a banana juice")
//         break;
//     case 'orange' :
//         console.log("here is an orange juice")
//         break;
//     default :
//         console.log("we don't have this fruit")
// }


let randomText = "this-is-a-random-text"

console.log(randomText.split("-"))



// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)


let studentsNames = ["Ahmed","Salma","Mohamed","Sarra","Amine",
"Ahmed","Salma","Mohamed","Sarra","Amine",
 ]



console.log("loop just started ###")
for (let i=0 ; i <= 10 ; i = i+1){

  console.log("we are in iteration number " , i);

}

console.log("loop just ended ###")





console.log("students loop just started ###")

// let visitorName = window.prompt("please give me your name")

// for (let i=0 ; i < studentsNames.length  ; i = i+1){



//     // console.log("Hello mr/ms",studentsNames[i]);
//      // studentsNames[i] =  studentsNames[i]+"/ web dev 1"
//     // console.log("Hello mr/ms",studentsNames[i]);

//     if (visitorName.toLowerCase().trim() === studentsNames[i].toLowerCase().trim()){
//         console.log("ched certif mte3k , merci khater jit")
//         break;
//     }
//     else {
       
//         console.log("sorry you are not allowed to enter, you are not part of opuslab students")
//         break;
//     }
  

//   }


console.log(studentsNames);


let i = 0;

while ( i < studentsNames.length ){
    console.log("Hello mr/ms",studentsNames[i]);
    i+=1;
}




let user = {
    "username" : "Ahmed gafsi",
    "email" : "ahmedgafsi@gmail.com",
    "age" : 26,
    "isStudent" : true,
    "isTeacher" : true,
}


console.log(window);



let text = "123"

console.log(Number(text));




function sayHello(name){
    console.log("Asslema", name)
    console.log("Marhbe bik fi opus lab");   
}

let theReturnOfSayHello = sayHello("Ahmed")

console.log(theReturnOfSayHello);


function addition(a,b){
    totale = a + b;
    return totale;
}


console.log(addition(-6,20));



function findStudent(name,arrayOfNames){
    for( let i=0;i< arrayOfNames.length ; i++){
        return arrayOfNames.includes(name);
    }
}


let randomNames = ["Ahmed","Salma","Mohamed","Sarra","Amine"]

console.log(findStudent("slah",randomNames));
console.log(findStudent("Sarra",randomNames));
console.log(findStudent("Mohamed",randomNames));


console.log(randomNames.includes("Sarra"));
