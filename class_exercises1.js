const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
a person should not be allowed to drink if they are under 19, they should be asked to "leave" if they are under 19.
however the checker is a bit more dynamic, if they are too young (under 13), they should be asked to "leave"
if they are in their teens, then tell them they need to "grow up to 19" before they can drink
if they are between 19 to 50, then "drink away"
if they are over 50, then warn them about their "health"
if they are over 70, then ALSO warn them about their "life"
*/

/* PLANNING
Question: Hi there, I need your ID, please, to see if you are old enough to be here. How old are you?
< 13 = You are too young, you need to leave!
>= 13 to < 19 = First you need to grow up!
>= 19 to <=50 = Go on, drink away!
>50 to <= 70 = You should be careful about your health.
> 70 = I'd be better to be careful with your life.
*/

function CheckDrinkingAge(age){
  if(age < 13){
    console.log("You are too young, you need to leave!");
  } else if(age >= 13 && age < 19){
    console.log("First you need to grow up!");
  } else if(age >= 19 && age <= 50){
    console.log("Go on, drink away!");
  } else if(age > 50 && age <= 70){
    console.log("You should be careful about your health.");
  } else if(age > 70){
    console.log("I'd be better to be careful with your life.");
  }
}

//determine a proper question to ask and the proper variable name for user input
readline.question('Hi there, I need your ID, please, to see if you are old enough to be here. How old are you? ', age => {
  CheckDrinkingAge(Number(age));

  //call your function here
  CheckDrinkingAge();
  readline.close();
});

//working good. reviewed by vien

/**Looks awesome! efficient and working as assignment reviewed by Cesaria */