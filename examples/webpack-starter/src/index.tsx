import React from "react";
import ReactDOM from "react-dom";
import { Reshaped } from "reshaped";
import "reshaped/themes/reshaped/theme.css";
import Demo from "./components/Demo";

const App = () => {
  return (
    <Reshaped theme="reshaped">
      <Demo />
    </Reshaped>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
