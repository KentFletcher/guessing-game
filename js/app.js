'use strict';

var name = prompt("What is your name?") ;
    alert ('Welcome ' + name + '!');
//  console.log("The users name is: " + name); 


// Yes and No questions about me

var one = prompt("Am I from Washington?");
// console.log(one);
var one = one.toLowerCase();
// console.log(one);
    if (one === 'yes'){
        alert ('No I moved here from PA, but I was born in Florida.');
    }else if (one === 'no'){
        alert ('Thats right!');
    }else {
        one = prompt ('Please answer yes or no');
    }


var two = prompt("Am I married?");
// console.log(two);
var two = two.toLowerCase();
// console.log(two);
if (two === 'yes'){
    alert ('Thats right!  I have a wonderful wife named Marina!');
}else if (two === 'no'){
    alert ('Wrong I am!');
}else {
    two = prompt ('Please answer yes or no');
}

var three = prompt("Do I like to travel?");
// console.log(three);
var three = three.toLowerCase();
// console.log(three);
if (three === 'yes'){
    alert ('Thats right I love to get outside and see the world!');
}else if (three === 'no'){
    alert ('Wrong I love it!');
}else {
    three = prompt ('Please answer yes or no');
}

var four = prompt("Do I ski?");
// console.log(four);
var four = four.toLowerCase();
// console.log(four);
if (four === 'yes'){
    alert ('Nope I prefer to snowboard!');
}else if (four === 'no'){
    alert ('Correct I love to snowboard!');
}else {
    four = prompt ('Please answer yes or no');
}


var five = prompt("Do I have a bachelors degree?");
// console.log(five);
var five = five.toLowerCase();
// console.log(five);
if (five === 'yes'){
    alert ('I do, in Business!');
}else if (five === 'no'){
    alert ('Wrong I do in Business');
}else {
    five = prompt ('Please answer yes or no');
}


// Question 6 guess number
var guess = prompt('Please guess a number between 1 and 10');
// var numberGuess = Number(guess);
console.log(numberGuess);
var correct = 6;
var tries;

for (tries = 1; tries <= 4; tries++){
    console.log(tries);
    numberGuess = Number (guess);
    if (numberGuess === correct){
        console.log(numberGuess);
        alert('Correct, you must be a mindreader!');
        break;
    } else if (numberGuess < 6 || tries < 4){
        prompt('too low, guess again');
    } else if (numberGuess > 6){
        prompt('too high, guess again');
    }
}


// // question 7

// var rightAnswer = ['whales', 'dolphins', 'porpoises', 'walruses', 'manatees', 'dugongs', 'seals', 'sea otters']
// var attempts = 6;

// for (attempts = 1; attempts <= 6; attempts++) {

//     var mammals = prompt('Can you guess the mammals that live in the ocean?');

//     for (var answerIndex = 0; answerIndex < rightAnswer.length; answerIndex++){
//         mammals = mammals.toLowerCase
//         if (mammals == rightAnswer[answerIndex]) {
//             console.log(mammals);
//             alert('Great job, you know your mammals!');
//             break;
//     }
//     if (attempts < 6) {
//         alert('Wrong, that is not a mammal of the ocean.');
//         }
// }

alert ('Thanks for playing ' + name + '!');
