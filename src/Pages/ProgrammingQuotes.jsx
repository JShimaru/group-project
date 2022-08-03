import {randomProgrammingQuote} from '../services/api';
import {useEffect, useState} from 'react';

export default function ProgrammingQuotes() {
  const [progQuote, setProgQuote] = useState();  //declare state variable that will hold the API data

  //function to call the api method to get a random programming quote
  const getData = async () => {
    const quote = await randomProgrammingQuote();  //wait for the method to fully complete executing; save result to a variable
    setProgQuote(quote);  //set the state variable to the object received from the API
  }

  //useeffect hook so mitigate any side effects that arise from making an API call
  useEffect(() => {    
    getData();  //call the previously declared function
  }, []);  //make sure the dependencies array is empty so that this only executes once when the component is first loaded

  return (
    <div className='programming-quotes-wrapper'>
      <div>
        <h2>Programming-related quotes!</h2>
        <p><q>{progQuote && progQuote.quote}</q> &mdash; {progQuote && progQuote.author}</p>
        <button onClick={getData}>Get new quote</button>
      </div>
    </div>
  )
}