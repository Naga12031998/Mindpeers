import React from "react";
import { Div } from "../StyledComponents/index";
import "../App.css";

const Spinner = (): React.ReactElement => {
  return (
    <Div className="spinner">
      <Div className="verticalCenter">
        <Div className="cube1"></Div>
        <Div className="cube2"></Div>
      </Div>
    </Div>
  );
};

export default Spinner;
