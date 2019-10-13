import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';

import QuoteCard from './QuoteCard';

const QuoteMain = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes?count=3')
      .then(response => {
        console.log(response); // one object, data: Array, each element in array is an object
        setQuotes(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);


  return (
    <div className = 'quoteMain-contain'>
      <h1>Test</h1>

      {quotes.map((quote) => {
        return <QuoteCard key = {quote.index} character = {quote.character} quote = {quote.quote} />
      })}
    </div>
  )
}

export default QuoteMain
