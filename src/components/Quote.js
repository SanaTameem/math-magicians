import React, { useState, useEffect } from 'react';
import './Quote.css';
import LoadingIcon from './Loading_icon.gif';
import Sad from './sad.png';

function Quote() {
  // state
  const [data, setData] = useState([{ quote: '', author: '', category: '' }]);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    // loading
    setIsloading(true);
    // fetching data

    const getData = async () => {
      const url = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
      const myApiKey = 'M3fOOkTKviCummmS+LKSmQ==5wWYKkbM3qDzNuwI';
      try {
        const response = await fetch(url, {
          headers: {
            'X-Api-Key': myApiKey,
          },
          contentType: 'application/json',
        });
        const result = await response.json();
        // setting new data to state
        setData(result[0]);
      } catch (err) {
        setIsError(true);
      }
      // remove isloading page
      setIsloading(false);
    };
    getData();
  }, []);
  // if loading was true
  if (isloading) {
    return (
      <section className="page-loading">
        Loading...
        <img src={LoadingIcon} alt="loading-img" className="loading-icon" />
      </section>
    );
  }
  if (isError) {
    return (
      <section className="page-loading">
        Something went wrong!
        <img src={Sad} alt="sad-img" className="sad-img" />
      </section>
    );
  }
  return (
    <div className="quote-container">
      <div className="quote-text">{data.quote}</div>
      <span>
        {data.author}
      </span>
    </div>
  );
}

export default Quote;
