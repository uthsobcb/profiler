import React from 'react';
import ProfileHead from './components/ProfileHead';
import Bio from './components/Bio';
import Social from './components/Social';

const App = () => {
  return (
    <>
      <div>
        <ProfileHead />
        <Bio />
        <Social />
      </div>
    </>
  );
}

export default App;
