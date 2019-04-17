import React, { Component } from 'react'
import { render, Box } from 'ink'
import QueryPage from './QueryPage'
import LoadingPage from './LoadingPage'
import ResultPage from './ResultPage'

class SearchQuery extends Component {
  state = {
    state: 'QUERY_PAGE',

    query: '',
    content: ''
  }

  render() {
    const { state } = this.state

    return (
      <Box height={6} flexDirection='column'>
        {state === 'QUERY_PAGE' && (
          <QueryPage submitSearch={this.search} />  
        )}
        {state === 'LOADING_PAGE' && (
          <LoadingPage
            query={this.state.query}
            submitFound={this.found}
          />
        )}
        {state === 'RESULT_PAGE' && (
          <ResultPage
            query={this.state.query}
            content={this.state.content}
          />
        )}
      </Box>
    )
  }

  search = query => {
    this.setState({
      query,
      state: 'LOADING_PAGE'
    })
  }
  found = content => {
    this.setState({
      content,
      state: 'RESULT_PAGE'
    })
  }
} 

render(<SearchQuery />)

/*
  const state = {
  QUERY_PAGE: 'QUERY_PAGE',
  LOADING_PAGE: 'LOADING_PAGE',
  RESULT_PAGE: 'RESULT_PAGE',
}

*/