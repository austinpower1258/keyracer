import { useState } from 'react';
import Passage from '../components/Passage';
import '../styles/Home.css';

const quoteProps = require('inspirational-quotes').getQuote();
const generatedPassage = quoteProps.text;
const author = quoteProps.author;

function Home() {
  const [value, setValue] = useState('');
  const props = {current: value, correct: generatedPassage};
  
  function retryKeyRacer() {
    window.location.reload();
  }
  
  return (
    <div className="layout">
      <head>
        <title>Typeracer2</title>
      </head>
      <div className="title">
        <h1>KeyRacer</h1>
        
      </div>

      <Passage data={props} />
      <div className="author">
        - {author}
      </div>
      <div className="input-div">
        <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      </div>

      <div className="retry-div">
        <button onClick={retryKeyRacer}>Retry</button>
      </div>
    </div>
  );
}

export default Home;
