import React, {useState} from 'react';
import './index.css';
import Header from './Components/Header';
import Start from './Components/Pages/Start';
import About from './Components/Pages/About';
import Portfolio from './Components/Pages/Portfolio';
import Resume from './Components/Pages/Resume';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Footer';

function App() {

  const [pageSelected, setPageSelected] = useState("Start");

  const renderPage = () => {
    switch(pageSelected){
      case "Start":
        return <Start/>;
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
      default:
        return null;
    }
  };


  return (
    <div className="App">
      <Header
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
      />
      <main>
        {renderPage()}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
