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
        alert ('No I am not');
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
    alert ('Thats right!');
}else if (two === 'no'){
    alert ('Wrong I am');
}else {
    two = prompt ('Please answer yes or no');
}

var three = prompt("Do I like to travel?");
// console.log(three);
var three = three.toLowerCase();
// console.log(three);
if (three === 'yes'){
    alert ('Thats right!');
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
    alert ('No I snowboard!');
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
    alert ('I do!');
}else if (five === 'no'){
    alert ('Wrong I do');
}else {
    five = prompt ('Please answer yes or no');
}


alert ('Thanks for playing ' + name + '');
