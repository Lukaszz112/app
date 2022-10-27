import React, { Component } from 'react'
import { HeaderWrapper } from './HeaderStyled'

export default class Header extends Component {
  render() {
    return (
        <HeaderWrapper>
            <div className="left">
                <p>My balance</p>
                <h2>$921.48</h2>
            </div>
            <div className="right">
                <div className="circle"></div>
                <div className="circle2"></div>
            </div>
        </HeaderWrapper>
    )
  }
}
