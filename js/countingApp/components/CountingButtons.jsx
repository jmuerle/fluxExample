define(function (require) {
  var React = require("react"),
    CountActions = require("js/countingApp/actions/CountActions");

  function _incrementCount() {
    CountActions.incrementCount();
  }

  function _incCountBy10() {
    CountActions.updateCount(10);
  }

  function _resetCount() {
    CountActions.resetCount();
  }

  var CountingButton = React.createClass({
    render: function () {
      return (
        <div>
          <button onClick={_incrementCount}>+1</button>
          <button onClick={_incCountBy10}>+10</button>
          <button onClick={_resetCount}>Reset</button>
        </div>
      );
    }
  });
  return CountingButton;
});
