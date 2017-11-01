import React, { Component } from 'react'
import ResultItem from './ResultItem'

class ResultView extends Component {
  render() {
    const validate = this.props.results.validate
      return (
          <div className="result-view">
            <ResultItem result={this.props.results} validate={validate}/>
          </div>
      )

  }
}

export default ResultView
