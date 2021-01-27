import React from 'react';

// import compornents
import Header from './Header';
import Search from './Search';
import Movie from './Movie';

function App() {
  return (
    <div className="App">
      <Header text="Movie Library"/>
      <Search />
      {/* <Search search={search} /> */}
    </div>
  );
}

export default App;
