import React, { Component } from 'react'
import Gradient from 'ink-gradient'
import BigText from 'ink-big-text'

class FlashScreen extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.submitFlash()
    }, 1500)
  }
  render() {
    return (
      <Gradient name='cristal'>
        <BigText text='Yami Yuki'/>
      </Gradient>
    )
  }
}

export default FlashScreen