import React, { Component } from 'react'
import { render, Box } from 'ink'
import {
  FlashScreen,
  QueryPage,
  LoadingPage,
  ResultPage
} from './pages/'
import {
  FLASH_SCREEN,
  QUERY_PAGE,
  LOADING_PAGE,
  RESULT_PAGE
} from './states'

class SearchQuery extends Component {
  state = {
    state: FLASH_SCREEN,

    query: '',
    content: ''
  }

  render() {
    const { state } = this.state

    return (
      <Box flexDirection='column'>
        {state === FLASH_SCREEN && (
          <FlashScreen submitFlash={this.flash} />  
        )}
        {state === QUERY_PAGE && (
          <QueryPage submitSearch={this.search} />  
        )}
        {state === LOADING_PAGE && (
          <LoadingPage
            query={this.state.query}
            submitFound={this.found}
          />
        )}
        {state === RESULT_PAGE && (
          <ResultPage
            query={this.state.query}
            content={this.state.content}
          />
        )}
      </Box>
    )
  }

  flash = () => this.setState({ state: QUERY_PAGE })
  search = query => {
    this.setState({ query, state: LOADING_PAGE })
  }
  found = content => {
    this.setState({ content, state: RESULT_PAGE })
  }
} 

render(<SearchQuery />)