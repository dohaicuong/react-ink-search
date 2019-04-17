import React, { Component } from 'react'
import { Box, Color } from 'ink'
import Link from 'ink-link'

class ResultPage extends Component {
  render() {
    return (
      <Box>
        <Box marginLeft={2}>
          <Color cyan>
            Found
          </Color>
        </Box>
        <Box marginLeft={2}>
          <Link url={this.props.content}>
            {this.props.query}
            <Color gray>
              (ctr + click to see)
            </Color>
          </Link>
        </Box>
      </Box>
    )
  }
}

export default ResultPage