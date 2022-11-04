import React, { Component } from 'react'
import { BarsData } from './BarsData'
import { BarsWrapper } from './BarsStyled'
import { Bar } from './BarsStyled'

export default class Bars extends Component {
  constructor(props){
    super(props)
    this.state = {
      max: 0
    }
  }
  render(){
    return (
      <BarsWrapper>
        <div className="bars">
            {
              BarsData.map((bars,index) => {
              return(
                <>
                  {bars.amount>this.state.max ? this.setState({max:bars.amount}): null}
                  <Bar amount={bars.amount} key={index} maxAmount={this.state.max}/>
                </>
              )              
            })
            }
        </div>
        <div className="bars days">
            {BarsData.map((bars,index) => {
              return(
                <>
                  <p key={index}>{bars.day}</p>
                </>
              )
            })}
        </div>
      </BarsWrapper>
    )
  }
}
