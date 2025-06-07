import React, { useEffect } from 'react';

const TitleUpdater = () => {
  useEffect(() => {
    // Side-effect: DOM manipulation
    document.title = 'Welcome, Sonu!';
  }, []); // runs once on mount

  return <h1>Check the browser tab title 👆</h1>;
};

export default TitleUpdater;
