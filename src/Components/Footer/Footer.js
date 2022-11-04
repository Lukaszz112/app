import React, { Component } from 'react'
import { FooterWrapper } from './FooterStyled'

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <div className="left">
                <p>Total this month</p>
                <h2>$478.33</h2>
            </div>
            <div className="right">
                <h3>+2.4%</h3>
                <p>from last month</p>
            </div>
      </FooterWrapper>
    )
  }
}
