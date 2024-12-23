//Create variable declarations using both let and const.
//Apply different types of data literals.
const firstName = "John";
const lastName = " Doe";
const x = 10;
const y = 5;
let score = 0;

//Use arithmetic operators to manipulate data.
console.log(score = x+y);

//Use comparison operators to compare data.
console.log(x >= y ? x : y)

//Perform string concatenations.
console.log( firstName + score);
console.log(firstName + "" + lastName);

//Implement escape sequences in strings for special characters.
// showing the name in newline using \n  
console.log(firstName + "\n" + lastName);

//Use template literals for string interpolation and multi-line strings.

const fullName = `Hello ! ${firstName}`;
console.log(fullName);


//multi-line strings 

const multiline = `hello 
my full
name is 
John Doe !`;

console.log(multiline);
console.log('-----------------------------------');

//****************************************************** Part 1: Math Problems  ************************/

const n1 = 15;
const n2 = 30;
const n3 = 25;
const n4 = 10;

if ( n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0)
{
    console.log("Num are divisible by 5");
}
else
{
    console.log(" Num are not divisible by 5");
}
console.log('-----------------------------------');

//Check if the first number is larger than the last. Cache the result in a variable.
 
if ( n1 >= n4)
{
    console.log( `${n1} - n1 is greater`);
}
else
{
    console.log(`${n4} - n4 is greater`)
}

console.log('-----------------------------------');
//Accomplish the following arithmetic chain:
//Subtract the first number from the second number.

let sub = n2 - n1;
console.log( `Subtract the first number from the second number ${sub}` );

//Multiply the result by the third number.

let mul = sub * n3;
console.log(`Multiply the result by the third number ${mul}`);

//Find the remainder of dividing the result by the fourth number.

let div = mul % n4
console.log(`remainder of dividing the result ${div}`);


//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log (`is over 25 = ${isOver25}`);
console.log('-----------------------------------');

//****************************************************** Part 2: Practical Math  ************************/

const totalDistance = 1500;
const fuelBudget = 175;
const Cost = 3;

const speed = [55, 60, 75];
const Efficiency = [30, 28, 23];

for ( let i = 0; i < speed.length; i++)
{
    const speeds = speed[i];
    const fuelEfficiency = Efficiency[i];

//How many gallons of fuel will you need for the entire trip?
    const gallonsNeeded = Math.floor( totalDistance / fuelEfficiency )
    console.log(`gallonsNeeded  = ${gallonsNeeded}`);
    
// Will your budget be enough to cover the fuel expense?
    const fuelCost = Math.floor ( gallonsNeeded * Cost);
    console.log(`fuelCost  = ${fuelCost}`);

    const enoughBudget = fuelCost <= fuelBudget ;
    console.log(`your budget is ${enoughBudget ? 'enough' : 'not'}`);

    const timeTaken = totalDistance / speeds;

    console.log( `Time taken = ${timeTaken} hours`);
    
    console.log('-----------------------------------');
    
}


