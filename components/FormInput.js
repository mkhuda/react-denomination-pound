import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import actions from '../redux/actions'
import CurrencyFormating from '../components/libs/CurrencyFormating';
import CurrencyInput from 'react-currency-input'
import Select from 'react-select'
import {format, unformat} from 'accounting-js'

class FormInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputAmount: '£12.34'
    }

  }

  handleChange(event) {
    const amount = this.refs.amount.value
    this.setState({
      inputAmount: amount
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.processNow(this.refs.amount.value)
  }

  render() {

    return (
      <div>
      <div className="sampleInputCase">
        <h4>Sample</h4>
        <div title="Copy this" className="itemCase">432</div>
        <div title="Copy this" className="itemCase">213p</div>
        <div title="Copy this" className="itemCase">£14</div>
        <div title="Copy this" className="itemCase">£16.23p</div>
        <div title="Copy this" className="itemCase">£54.04</div>
        <div title="Copy this" className="itemCase">001.41p</div>
      </div>
        <form className="mainForm" onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="£"
            ref="amount"
            defaultValue={this.state.inputAmount}
            className="inputText"
          />
          
          <div className="validate-info">
            { (this.props.validate == false) ? 'Please provide valid input' : '' }
          </div>
          
          <div className="divButton">
            <input className="mainButton" type="submit" value="Convert"/>
          </div>

        </form>
      </div>
    )
  }
}

export default FormInput
