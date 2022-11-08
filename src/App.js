import React, { Component } from 'react';
import { AppWrapper } from './AppStyled';
import Bars from './Components/Bars/Bars';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <AppWrapper>
          <Header/>

          <main>
          <h1>Spending - Last 7 days</h1>
            <Bars/>
            <Footer/>
          </main>
            

          {/* Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Lukasz</a>. */}
      </AppWrapper>
    );
  }
}

export default App;
