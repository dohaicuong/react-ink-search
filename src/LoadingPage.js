import React, { Component } from 'react'
import { Box, Color } from 'ink'
import Spinner from 'ink-spinner'

class LoadingPage extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.submitFound(`https://www.google.com/search?q=${this.props.query}`)
    }, 2000)
  }
  
  render() {
    return (
      <Box>
        <Box marginLeft={2}>
          <Color green>
            <Spinner type='dots12' />
          </Color>
        </Box>
        <Box marginLeft={2}>
          <Color cyan>Looking for</Color>
        </Box>
        <Box marginLeft={1}>
          {this.props.query}
        </Box>
      </Box>
    )
  }
}

export default LoadingPage