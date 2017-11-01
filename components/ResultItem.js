import React, { Component } from 'react'

class ResultItem extends Component {
  
  render() {
    const coins = this.props.result.coins && this.props.result.coins.map(function(coin, index) {  
      if(coin.symbol != 'p'){
        return <div className="item item-pound">{coin.string}</div>
      }else{
        return <div className="item item-pence">{coin.string}</div>
      }
    })
      return (
        <div className="result-item">
            {coins}
        </div>
      )
  }
}


export default ResultItem
