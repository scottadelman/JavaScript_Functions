// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    var count = prompt("What is your number?");
    if (count < 0) count = count * -1;
    for (let i = 0; i <= count; i++) {
      if (i % 2 != 0) {
        console.log(i);
      }
    }
  }


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age) {
    var age = prompt("How old are you?");
    const aboveSixteen = "You can drive!";
    const belowSixteen = "Sorry, you aint drivin son";
    if (age >= 16) {
      console.log(aboveSixteen);
    } else {
      console.log(belowSixteen);
    }
  }


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function checkPlane(x, y) {
    if(x == 0 && y == 0){
        console.log("You are at the origin")
    }
    if(x == 0 && y != 0){
        console.log("You are on the x-axis")
    }
    if(x != 0 && y == 0){
        console.log("You are on the y-axis")
    }
    if(x > 0 && y > 0){
        console.log("You are in Quadrant 1")
    }
    if(x < 0 && y > 0){
        console.log("You are in Quadrant 2")
    }
    if(x < 0 && y < 0){
        console.log("You are in Quadrant 3")
    }
    if(x > 0 && y < 0){
        console.log("You are in Quadrant 4")
    }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function checkTriangle(x, y, z){
    console.log("Give me 3 numbers (a,b,c) for the sides of your triangle!");
    var a = prompt("Give me side A!");
    var b = prompt("Give me side B!");
    var c = prompt("Give me side C!");
    if(a != b && b != c && a != c ){
        console.log("Scalene Triangle");
    }
    if(a == b && a == c && b == c){
        console.log("Equilateral Triangle");
    }
    if(a == b && b != c){
        console.log("Isosceles triangle");
    }
    if( a == c && c != b){
        console.log("Isosceles triangle");
    }
    if(b == c && c != a){
        console.log("Isosceles triangle");
    }
}