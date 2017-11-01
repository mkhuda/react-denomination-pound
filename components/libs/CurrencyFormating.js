import {format, unformat} from 'accounting-js'

/**
 * The custom library's for processing currency format.
 *
 * Contains default parameters for currency and number formatting
 */

 const CurrencyFormating = {
   validateInput(value){
     if(unformat(value) == 0 || value.includes("p.")) {
       return false
     } else {
       if(value.charAt(0) == '£') {
         return unformat(value)
       } 
       else if(value.slice(-1) == 'p') {
         return this.isInt(unformat(value)) ? unformat(value)/100 : unformat(value)
       } else {
         return unformat(value)
       }
     }
   },
        
   convertAndDenomination(value){
     if(this.validateInput(value) != false){
       var pound = this.validateInput(value);
       var amountArr = pound.toString().split('.')
       var poundArr = [2, 1];
       var penceArr = [50,20,10,5,2,1]
       var resultCoins = new Array()
       if(amountArr[0] !== undefined) {
         poundArr.forEach(function(r) {
           var total = Math.floor(amountArr[0]/r)
           parseInt(total) != 0 && resultCoins.push({symbol: '£', string: total +' x £' + r})
           amountArr[0] = amountArr[0]%r
         });
       }
       if(amountArr[1] !== undefined) {
         penceArr.forEach(function(r) {
           let total = Math.floor(amountArr[1]/r)
           parseInt(total) != 0 && resultCoins.push({symbol: 'p', string: total +' x '+ r + 'p'})
           amountArr[1] = amountArr[1]%r
         });
       }
       return resultCoins
     } else {
       return []
     }
   },
   
   isInt(n){
     return n % 1 === 0
   },

   isFloat(n){
     return n % 1 !== 0;
   }
 }
 

export default CurrencyFormating;
