import React from 'react';
import "./style.css";
import Header from './components/header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Calendar from './components/Calendar/Calendar';
import Details from './components/Details/Details';


function App() {
  return (
	  <React.Fragment>
        <Header/>
		<Main/>
		<Features/>
		<Footer/>
		<Calendar/>
		<Details/>
	
	  </React.Fragment>
	  

  );
}

export default App;
