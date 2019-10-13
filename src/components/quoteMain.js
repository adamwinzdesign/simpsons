import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';

import QuoteCard from './QuoteCard';

const QuoteMain = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios.get('')
      .then(response => {
        console.log(response);
        setQuotes(response);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);


  return (
    <div className = 'quoteMain-contain'>
      <h1>Test</h1>

      {quotes.map((quote, index) => {
        return <QuoteCard key = {index} quote = {quote} />
      })}
    </div>
  )
}

export default QuoteMain
