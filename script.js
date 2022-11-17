console.log('hello we are balders shamans group')

//this is a comment
 /* this is 
a commentsection */

//declaration de variable
//1)
const greeting = 'hello Balders shamans' //String
// greetig ==> varibale name
//'hello Balders shamans' => variable value
// type ==> String

//console.log(greeting)

//reaffectation
greeting = 'hello new group'
//output : TypeError: Assignment to constant variable.

//2)
let greeting = 'hello balders shamans'
//console.log(greeting)
greeting = 245
console.log(greeting)

//3)
var greeting = 'hello '
greeting = false
console.log(greeting)

//Cannot redeclare block-scoped variable 'greeting'

const nombre = null;
console.log(typeof(nombre))

//array

const tab = [1,56,8,90];
// the nombre of elements in the table  tab
//console.log(tab.length)
// afficher l'el dont l'index est égale à 2 !!
//console.log(tab[0])

//ajout d'el en aval du tableau tab
tab.push(26)
//console.log(tab)
//tab = [5,28,3,7] => TypeError: Assignment to constant variable.

tab[0] = 30
//console.log(tab)

//effacer un el de l'aval du tab
tab.pop()
//console.log(tab)

//ajout d'un el dans le tab en amont
tab.unshift(2)
//console.log(tab)
tab.shift()
//console.log(tab)

console.log(typeof(tab))
console.log(Array.isArray(tab))

//obj
const Person ={
    name: 'Eya',
    age:25,
    Adresse: 'Tunis'
}


//afficher la valeur de key name
//console.log(Person.name)
//console.log(Person["age"])
//add a key
Person.FavouriteFoods = ['pasta','pizza']
console.log(Person)

//Declaration of function
//1)

/*function Somme(a,b){
    return a+b
}

console.log(a)*/

//call the function
//console.log(Somme())

//2)
const Somme = function (a,b){
    return a+b
}

console.log(Somme(7,5))

//Incrementation
let count = 0;
//count = count +1;
//count += 1
++count
console.log(count)

let count = 0;
count = count +5
count += 5


//Decrementation
/*count = count-1;
count -= 1;
--count
console.log(count)*/

count = count -5;
count -= 5

//Condition Statement
let color='red'
if(color == 'green'){
    console.log('you can go')
}

else if (color='orange') {
    console.log('wqit a little bit')
}

else {
     console.log('you cannot  go')
}

//exercice
function verification (a){
    if(a>0){
        return a*10
    }
    else {
        return "please enter a positive number"
    }
}

console.log(verification(3))

//switch statement
switch(color){
    case 'green' : console.log('you can go')
    case 'orange' :     console.log('wqit a little bit')
    default : console.log('you cannot  go')
}

//Loops
//for // nombre de répition est connue 
let sum = 0;
const arr = [1,55,26,39];
for(let i =0; i<arr.length;i++){
   sum += arr[i]
}
console.log(sum)

//while 
while (i<arr.length){
    sum += arr[i];
    i++
}
console.log(sum)
// nbr de répétition est inconnue -do while
const arr = [1,55,26,39];
let i =0;
let sum =0
do{
    sum += arr[i]
    i++
}
while(i<arr.length)
console.log(sum)

////verify the condition then execute the instruction ==> execution at least 0
const show = false
while(show==true){
    console.log('its false')
}


//execute the instruction then verify ==> execution at least 1
do{
    console.log('its false')
}
while(show==true)







