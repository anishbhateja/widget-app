import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://translation.googleapis.com/language/translate/v2',
        {}, //2nd argument is for body
        {
          params: {
            q: text,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      )
      .then((response) => {
        setTranslated(response.data.data.translations[0].translatedText);
      });
  }, [language, text]);

  return <div className="ui header">Output: {translated}</div>;
};

export default Convert;
