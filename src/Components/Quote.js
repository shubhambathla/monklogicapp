import React from 'react';
import './Quote.css';
import { HashLink } from 'react-router-hash-link';

function Quote() {
  return (
    <div id="quote">
      <h1>The secret of getting ahead is getting started.</h1>
      <h1>-Mark Twain</h1>
      <HashLink smooth to="/#contactform">
      <button>Lets Connect</button>
      </HashLink>
    </div>
  )
}

export default Quote