/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//Array of 5 quotes to be displayed
const quotes = [ 
  {
    quote: "May the Force be with you.",
    source: "Obi Wan Kenobi",
    citation: "Star Wars",
    year: 1977
  },
  {
    quote: "To infinity and beyond!",
    source: "Buzz Lightyear",
    citation: "Toy Story",
    year: 1995
  },
  {
    quote: "You can't handle the truth!",
    source: "Col. Nathan R. Jessep",
    citation: "A Few Good Men",
    year: 1992
  },
  {
    quote: "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
    source: "Forrest Gump",
    citation: "Forrest Gump",
    year: 1994
  },
  {
    quote: "I'm the king of the world!",
    source: "Jack Dawson",
    citation: "Titanic",
    year: 1995
  },
];

/***
 * `getRandomQuote` function
***/

//Selects a Random Number, and picks the quote in that location in the array of quotes
function getRandomQuote () {

  var randomNumber = Math.floor(Math.random() * quotes.length);

  var randomQuote = quotes[randomNumber];

  return randomQuote;

};

getRandomQuote();

/***
 * `printQuote` function
***/

//Takes the Random Quote from getRandomQuote(), and displays it 
function printQuote () {

//Stores quotes and author from the quotes array
const randomQuote = getRandomQuote();
const said = randomQuote.quote;
const author = randomQuote.source;

//Print creates the template used to display array
var print = '<p class="quote">' + said + "</p>";
print += '<p class="source">' + author;

  //If there is a citation in the object array, it will print
  if (randomQuote.citation) {
      print += '<span class="citation">' + randomQuote.citation + "</span>"
  }

  //If there is a year in the object array, it will print
  if (randomQuote.year) {
    print += '<span class="year">' + randomQuote.year + "</span>"
  }

  print += "</p>";

  document.getElementById('quote-box').innerHTML = print;

  return;
};

printQuote ();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);