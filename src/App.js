import React, { Component } from 'react';
import { AppWrapper } from './AppStyled';
import Bars from './Bars/Bars';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <header>
          <div className="left">
            My balance  <h2>$921.48</h2>
          </div>
          <div className="right">
            <div className="circle"></div>
            <div className="circle2"></div>
          </div>
        </header>

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
