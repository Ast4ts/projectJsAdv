// 1. navigation - done
// 2. add event listener - done
// 3. create data structure with quotes - done
// 4. get random quote
// 5. display random quote

// Navigation
var p = document.getElementById('quote');
var button = document.querySelector('button');

var quotes = ['1', '2', '3'];

function getRandomQuote() {
// logic
    console.log('random here');
}

// Get random quote on init
getRandomQuote();

// Add event listener for random quote button
button.addEventListener('click', getRandomQuote);