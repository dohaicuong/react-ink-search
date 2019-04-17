import React, { Component } from 'react'
import { Box, Color } from 'ink'
import TextInput from 'ink-text-input'

class QueryPage extends Component {
  state = { query : '' }
  render() {
    return (
      <Box>
        <Box marginLeft={2}>
          <Color cyan>
            What are you looking for:
          </Color>
        </Box>
        <Box marginLeft={1}>
            <TextInput
              value={this.state.query}
              onChange={this.handleChange}
              onSubmit={() => this.props.submitSearch(this.state.query)}
            />
        </Box>
      </Box>
    )
  }
  handleChange = query => this.setState({ query })
}

export default QueryPage