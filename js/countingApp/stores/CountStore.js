define(function (require) {
  var Dispatcher = require("js/common/dispatcher/Dispatcher"),
    StoreChangedDispatcher = require("js/common/dispatcher/StoreChangedDispatcher"),
    CountConstants = require("js/countingApp/constants/CountConstants");

  var count = 0;

  var CountStore = {
    getCount: function () {
      return count;
    }
  };

  function _emitStateChangedAction() {
    StoreChangedDispatcher.dispatch({
      actionType: CountConstants.COUNT_STORE_CHANGED
    });
  }

  Dispatcher.register(function (action) {
    switch (action.actionType) {
      case CountConstants.UPDATE_COUNT:
        count += action.incrementAmount;
        _emitStateChangedAction();
        break;
      case CountConstants.RESET_COUNT:
        count = 0;
        _emitStateChangedAction();
        break;
      default:
        // no op
    }
  });

  return CountStore;
});
