require(
  [
    "react",
    "react-dom",
    "js_built/countingApp/components/CountingApp",
  ],
  function (React, ReactDom, CountingApp) {
    ReactDom.render(
      <CountingApp />,
      document.getElementById("counting-app")
    );
  }
);
