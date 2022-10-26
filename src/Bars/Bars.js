import React, { Component } from 'react'
//import { BarsData } from './barsData'
import { BarsWrapper } from './BarsStyled'

export default class Bars extends Component {
  render() {
    return (
      <BarsWrapper>
        <h1>Spending - Last 7 days</h1>
        <div className="bars">
            
        </div>
      </BarsWrapper>
    )
  }
}
