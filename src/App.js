import React, { Component } from 'react';
import { AppWrapper } from './AppStyled';
import Bars from './Components/Bars/Bars';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header/>

        <main>
          <Bars/>
        </main>
          

        {/* Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Lukasz</a>. */}

      </AppWrapper>
    );
  }
}

export default App;
