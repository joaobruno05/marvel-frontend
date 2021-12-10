import React from 'react';
import loadingGIF from '../images/loading2.gif';
import Header from './Header';

import '../styles/loading.css';

function Loading() {
  return (
    <div>
      <Header />
      <div className="loading">
        <img
          src={loadingGIF}
          alt="Loading..."
        />
      </div>

    </div>
  );
}

export default Loading;
