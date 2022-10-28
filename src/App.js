import React from 'react';
import './index.css';
import Header from './Components/Header';
import Start from './Components/Pages/Start';
import About from './Components/Pages/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Start/>
        <About/>
      </main>
    </div>
  );
}

export default App;
