import {randomGardenQuote} from '../services/api';
import {useEffect, useState} from 'react';

export default function FamousQuotes() {
  const [famousQuote, setFamousQuote] = useState();  //declare state variable that will hold the API data

  //function to call the api method to get a random famous quote
  const getData = async () => {
    const quote = await randomGardenQuote();  //wait for the method to fully complete executing; save result to a variable
    setFamousQuote(quote);  //set the state variable to the object received from the API
  }

  //useeffect hook so mitigate any side effects that arise from making an API call
  useEffect(() => {    
    getData();  //call the previously declared function
  }, []);  //make sure the dependencies array is empty so that this only executes once when the component is first loaded

  return (
    <div className='famous-quotes-wrapper'>
      <div>
        <h2>Famous quotes!</h2>
        {famousQuote && (<p><q>{famousQuote.quote}</q> &mdash; {famousQuote.author}</p>)}
        <button onClick={getData}>More!</button>
      </div>
    </div>
  )
}