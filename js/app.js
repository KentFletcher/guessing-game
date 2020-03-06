'use strict';

var yesQuestions = ['yes', 'y'];
var noQuestions = ['no', 'n'];
var expectedNumber = getRandomInt(10);
var tries = 4;
var mammalsList = ['whales', 'dolphins', 'porpoises', 'walruses', 'manatees', 'dugongs', 'seals', 'sea otters'];
var attempts = 6;
var score = 0;

var usersName = prompt('What is your name?') ;
alert ('Welcome ' + usersName + '!');

answerQuestions('Am I from Washington?', noQuestions);
answerQuestions('Am I married?', yesQuestions);
answerQuestions('Do I like to travel?', yesQuestions);
answerQuestions('Do I ski?', noQuestions);
answerQuestions('Do I have a bachelors degree?', yesQuestions);
guessedNumberGame(expectedNumber, tries);
mammalsGame(mammalsList, attempts);
alert ('Thanks for playing ' + usersName + '!' + ' Your total score is ' + score);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function answerQuestions(question, rightAnswer) {
  var usersAnswer = prompt(question).toLowerCase();
  if (usersAnswer === rightAnswer[0] || usersAnswer === rightAnswer[1]) {
    console.log('You are right!');
    alert ('You are right!');
    score = score + 1;
  } else {
    console.log('Thats wrong!');
    alert ('Thats wrong!');
  }
}

function guessedNumberGame(expectedNumber, tries) {
  for (var index = 0; index < tries; index++) {
    console.log(index);
    var guess = prompt('Please guess a number between 1 and 10. You have 4 attempts.');
    var ifUserGuessed = checkRightNumber(index, Number(guess), expectedNumber);
    if(ifUserGuessed) {
      score = score + 1;
      break;
    }
  }
  if(!ifUserGuessed) {
    alert('The correct number is ' + expectedNumber);
  }
}

function checkRightNumber(index, numberGuess, expectedNumber) {
  if (numberGuess < expectedNumber) {
    alert('too low, guess again. It was attempt number ' + (index + 1));
  } else if (numberGuess > 6) {
    alert('too high, guess again. . It was attempt number ' + (index + 1));
  } else if (numberGuess === expectedNumber) {
    console.log(numberGuess);
    alert('Correct, you must be a mind reader!');
    return true;
  }
}

function mammalsGame(list, attempts) {
  for (var index = 0; index < attempts; index++) {
    console.log(index);
    var mammals = prompt('Can you guess the mammals that live in the ocean?').toLowerCase();
    if (list.includes(mammals)) {
      console.log(mammals);
      alert('Great job, you know your mammals!');
      score = score + 1;
      break;
    }
  }
}
