// // if..else

// /*
// 1. Write a program that asks the user for a number and check the following conditions:

//   - `if` the number is even print the message " number is even"
//   - `if` the number is odd print the message "number is odd"
// */
let num = Number(prompt("Enter a number"));
if(num % 2 == 0){
  console.log("Even")
}
else{
  console.log("Odd");
}
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"))
if(num1>num2){
  alert(`${num1} is max`)
}
else
alert(`${num2} is max`)


// // 3. Convert the above code using`?` terniary operator
num1>num2 ? alert(`${num1} is max`) : alert(`${num2} is max`)
// /*
// 4. Write a program that asks the user for the house name and check the following conditions:

//   - `if` house name is "stark" then print the message " Winter is coming"
//   - `if` house name is "lannister" then print the message " A lannister always pays his debt"
//   - `else` print the message " All men must die"
// */
let houseName = prompt("Enter house name");
if(houseName == "stark"){
  console.log(" Winter is comig");
}
else if(houseName == "lannister"){
  console.log(" A lannister always pays his debt");
}
else
console.log("All men must die");
// // 5. Convert the above code using`?` terniary operator
houseName == "stark" ? console.log(" Winter is comig"):  houseName == "lannister" ? console.log(" A lannister always pays his debt"): console.log("All men must die");
// // Switch
switch(houseName){
  case "stark":
    coconsole.log(" Winter is comig");
    break;
    case "lannister":
    console.log(" A lannister always pays his debt");
    break;
    default:
      console.log("All men must die");
}
// // 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
 let month = Number(prompt())
switch(houseName){
  case "stark":
    coconsole.log(" Winter is comig");
    break;
    case "lannister":
    console.log(" A lannister always pays his debt");
    break;
    default:
      console.log("All men must die");
}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = Number(prompt("Enter the salary"))
if(salary <= 20000){
  alert(`${salary - (salary * 10/100)}`);
}
else if(salary <= 40000){
  alert(`${salary - (salary * 20/100)}`);
}
else if(salary > 50000){
  alert(`${salary - (salary * 30/100)}`);
}
else 
alert("No tax");
// //  if..else vs switch
switch(true){
  case salary <= 20000:
    alert(`${salary - (salary * 10/100)}`);
    break;
    case salary <= 40000:
    alert(`${salary - (salary * 20/100)}`);
    break;
    case salary > 50000:
    alert(`${salary - (salary * 30/100)}`);
    break;
    default: 
    alert("No tax");
}
/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`


*/
let marks = Number(prompt("Enter the marks"))
if(marks > 100){
  alert(`"Marks can't be greater than 100"`);
}
else if(marks > 80 && marks < 100){
  alert(`"Grade A"`);
}
else if(marks > 50 && marks < 80){
  alert(`"Grade B"`);
}
else if(marks > 30 && marks < 50){
  alert(`"Grade C"`);
}
else 
alert(`"Grade D"`);

switch(true){
  case marks > 100:
    alert(`"Marks can't be greater than 100"`);
    break;
     case marks > 80 && marks < 100:
      alert(`"Grade A"`);
    break;
    case marks > 50 && marks < 80:
      alert(`"Grade B"`);
    break;
    case marks > 30 && marks < 50:
      alert(`"Grade C"`);
    break;
    default:
    alert(`"Grade D"`);
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let answer = prompt("What is the weather outside");
if(answer == "sunny"){
  alert(`Wear a T-shirt`);
}
else if(answer == "rainy"){
  alert(`Don't forget to take your raincoat`);
}
else if(answer == "hot"){
  alert(`Get a hanky`);
}
else if(answer == "freezing"){
  alert(`Get your sweeter on`);
}
else 
alert(`Not a valid input`);

