'use strict';

/* Global variables*/
/** yes or no answers */
var yesQuestions = ['yes', 'y'];
var noQuestions = ['no', 'n'];
/**var below sets the max number that random integer can generate */
var expectedNumber = getRandomInt(10);
var tries = 4;
var mammalsList = ['whales', 'dolphins', 'porpoises', 'walruses', 'manatees', 'dugongs', 'seals', 'sea otters'];
var attempts = 6;
var score = 0;

/* Intro function with greeting*/
var usersName = prompt('What is your name?') ;
alert ('Welcome ' + usersName + '!');

/**5 answers to my yes or no questions */
answerQuestions('Am I from Washington?', noQuestions);
answerQuestions('Am I married?', yesQuestions);
answerQuestions('Do I like to travel?', yesQuestions);
answerQuestions('Do I ski?', noQuestions);
answerQuestions('Do I have a bachelors degree?', yesQuestions);
/**question 6 Number guessing game  */
guessedNumberGame(expectedNumber, tries);
/** question 7 with multiple answers*/
mammalsGame(mammalsList, attempts);
/**final alert thanking user and letting them know how many they got correct total*/
alert ('Thanks for playing ' + usersName + '!' + ' Your total score was ' + score + ' correct!');


/*function to get random number for number guess function */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/**5 yes or no questions about me */
function answerQuestions(question, rightAnswer) {
  var usersAnswer = prompt(question).toLowerCase();
  if (usersAnswer === rightAnswer[0] || usersAnswer === rightAnswer[1]) {
    alert ('You are right!');
    score = score + 1;
  } else {
    alert ('Thats wrong!');
  }
}

/** Question 6- Number guessing game, with random function choosing number between 1 and 10 */
function guessedNumberGame(expectedNumber, tries) {
  for (var index = 0; index < tries; index++) {
    var guess = prompt('Please guess a number between 0 and 10. You have 4 attempts.');
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

/**Alerts for number guessing game */
function checkRightNumber(index, numberGuess, expectedNumber) {
  if (numberGuess < expectedNumber) {
    alert('too low, guess again. It was attempt number ' + (index + 1));
  } else if (numberGuess > expectedNumber) {
    alert('too high, guess again. . It was attempt number ' + (index + 1));
  } else if (numberGuess === expectedNumber) {
    alert('Correct, you must be a mind reader!');
    score = score + 1;
    return true;
  }
}

/**Question 7- multiple correct answers  */
function mammalsGame(list, attempts) {
  for (var index = 0; index < attempts; index++) {
    var mammals = prompt('Can you guess the mammals that live in the ocean?').toLowerCase();
    if (list.includes(mammals)) {
      alert('Great job, you know your mammals!');
      score = score + 1;
      break;
    }else alert('Incorrect');
  }
}


