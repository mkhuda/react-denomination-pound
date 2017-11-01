import fetch from 'isomorphic-fetch'
import CurrencyFormating from '../components/libs/CurrencyFormating';

let actions = {
  
  processNow: function(inputMoney) {
    return {
      type: 'INPUT_MONEY',
      validate: CurrencyFormating.validateInput(inputMoney) ,
      coins: CurrencyFormating.convertAndDenomination(inputMoney)
    }
  }

}

export default actions
