let reducer = function(state, action) {

  switch (action.type) {
    case 'INPUT_MONEY':
      return {
        results:
        {
          coins: action.coins,
          validate: action.validate
        }
      }
    default:
      return state;
  }

}

export default reducer
