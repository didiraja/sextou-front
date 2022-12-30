"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Home_1 = require("./routes/Home");
require("./App.css");
function App() {
    var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
    return (<div className="App">
      <Home_1["default"] />
    </div>);
}
exports["default"] = App;
