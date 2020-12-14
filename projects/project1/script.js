// 1. navigation - done
// 2. add event listener - done
// 3. create data structure with quotes - done
// 4. get random quote - done
// 5. display random quote

// Navigation
var p = document.getElementById('quote');
var button = document.querySelector('button');

var quotes = ['Enjoy present pleasures in such a way as not to injure future ones.' , 'Not going home is already like death.' , 'It is not enough to have a good mind. The main thing is to use it well.' , 'There is an applause superior to that of the multitudes: one\'s own.' , 'The government is unresponsive to the needs of the little man. Under 5\'7", it is impossible to get your congressman on the phone.']

function getRandomQuote() {
   p.innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

// Get random quote on init
getRandomQuote();

// Add event listener for random quote button
button.addEventListener('click', getRandomQuote);