import axios from 'axios';

async function randomGardenQuote() {
  try {
    const info = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random');
    return {quote: info.data.data[0].quoteText, author: info.data.data[0].quoteAuthor, genre: info.data.data[0].quoteGenre};
  }
  catch(e) {
    console.error(e);
    window.alert(e);
  }
}

async function randomProgrammingQuote() {
  try {
    const info = await axios.get('https://programming-quotes-api.herokuapp.com/Quotes/random')
    return {quote: info.data.en, author: info.data.author};
  }
  catch(e) {
    console.error(e);
    window.alert(e);
  }
}

export {randomGardenQuote, randomProgrammingQuote};