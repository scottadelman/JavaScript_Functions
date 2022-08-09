console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    var count = prompt("What is you number?")
    if (count < 0) count = count * -1;
    for (let i = 0; i <= count; i++) {
      if (i % 2 != 0) {
        console.log(i);
      }
    }
  }
  console.log(printOdds()); 


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age) {
    var age = prompt("What is your age?")
    const aboveSixteen = "You can drive!";
    const belowSixteen = "Sorry, you aint drivin son";
    if (age >= 16) {
      console.log(aboveSixteen);
    } else {
      console.log(belowSixteen);
    }
  }

  console.log(checkAge());


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function checkPlane(x, y) {
    var x = prompt("What is your x-coordinate?")
    var y = prompt("What is your y-coordinate?")

    if(x == 0 && y == 0){
        console.log("You are at the origin");
    }
    if(x == 0 && y != 0){
        console.log("You are on the x-axis");
    }
    if(x != 0 && y == 0){
        console.log("You are on the y-axis");
    }
    if(x > 0 && y > 0){
        console.log("You are in Quadrant 1");
    }
    if(x < 0 && y > 0){
        console.log("You are in Quadrant 2");
    }
    if(x < 0 && y < 0){
        console.log("You are in Quadrant 3");
    }
    if(x > 0 && y < 0){
        console.log("You are in Quadrant 4");
    }
}
console.log(checkPlane());


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangleType(a, b, c) {

    var a = prompt("Enter in the first side of your traingle.")
    var b = prompt("Enter in the second side of your traingle.")
    var c = prompt("Enter in the third side of your traingle.")

    if( a != b &&  b != c && a !=c){
        console.log("Scalene triangle");
    }
    if(a == b == c){
        console.log("Equilateral Triangle");
    }
    if(a == b && b != c){
        console.log("Isosceles Trianlge");
    }
    if(a == c && c != b){
        console.log("Isosceles Trianlge") ;
    }
    if(b == c && c!= a){
        console.log("Isosceles Traingle");
    }
}
console.log(triangleType());


// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataPlan(planLimit, day, usage){
    var planLimit = prompt("Please enter in the amount of data in the plan per 30 day period");
    var day = prompt("Please enter in the current day in the 30 day period");
    var usage = prompt("Please enter in the total amount of data used so far");
    var daysRemaining = 30 - day;
    var dailyUsagePlan = planLimit / 30; 
    var actualDailyUsage = usage / day; 
    var projectedUsage = actualDailyUsage * 30; 
    var dataExceededBy = projectedUsage - planLimit;
    var dataRemaining = planLimit - usage;
    var newUsagePlan = dataRemaining / daysRemaining; 

    console.log(`${day} used, ${daysRemaining} days remaining`);
    console.log(`Advised average daily use: ${dailyUsagePlan}`);

    if(actualDailyUsage > dailyUsagePlan){
        console.log(`You are EXCEEDING your average daily use of ${dailyUsagePlan} by ${actualDailyUsage - dailyUsagePlan} GB/day... 
        continuing this high usage, you'll exceed your data plan by ${dataExceededBy}. To stay below your data plan, use no more than
        ${newUsagePlan} GB/day`);
    }
    else if (dailyUsagePlan > actualDailyUsage){
        console.log("You gucccci my dude. Keep using what you are using!");
    }
}
console.log(dataPlan());
