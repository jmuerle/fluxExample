define(function (require) {
  var React = require("react");

  var CountDisplay = React.createClass({
    propTypes: {
      count: React.PropTypes.number.isRequired,
    },
    render: function () {
      return (
        <div className="count-display">{this.props.count}</div>
      );
    }
  });
  return CountDisplay;
});
