define(function (require) {
  var CountConstants = require("js/countingApp/constants/CountConstants"),
    Dispatcher = require("js/common/dispatcher/Dispatcher");

  var CountActions = {
    updateCount: function (incrementAmt) {
      Dispatcher.dispatch({
        actionType: CountConstants.UPDATE_COUNT,
        incrementAmount: incrementAmt,
      });
    },

    incrementCount: function () {
      this.updateCount(1);
    },

    resetCount: function () {
      Dispatcher.dispatch({
        actionType: CountConstants.RESET_COUNT,
      });
    },
  };

  return CountActions;
});