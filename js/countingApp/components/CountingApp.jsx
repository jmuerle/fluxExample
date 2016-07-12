define(function (require) {
  var React = require("react"),
    CountingButtons = require("js_built/countingApp/components/CountingButtons"),
    CountDisplay = require("js_built/countingApp/components/CountDisplay"),
    CountStore = require("js/countingApp/stores/CountStore"),
    CountConstants = require("js/countingApp/constants/CountConstants"),
    StoreChangedDispatcher = require("js/common/dispatcher/StoreChangedDispatcher");

  function _getCountState() {
    return {
      count: CountStore.getCount(),
    };
  }

  var CountingApp = React.createClass({
    getInitialState: function () {
      return _getCountState();
    },

    componentDidMount: function () {
      var self = this;
      self.dispatchToken = StoreChangedDispatcher.register(function (action) {
        switch (action.actionType) {
          case CountConstants.COUNT_STORE_CHANGED:
            self._onChange();
            break;
          default:
            // no op
        }
      });
    },

    componentWillUnmount: function () {
      StoreChangedDispatcher.unregister(this.dispatchToken);
    },

    _onChange: function () {
      this.setState(_getCountState());
    },

    render: function () {
      return (
        <div>
          <CountDisplay count={this.state.count}/>
          <CountingButtons/>
        </div>
      );
    }
  });

  return CountingApp;
});
