import React from "react";
import ReactDOM from "react-dom";
import "react-svg-map/lib/index.css";
import TooltipMap from "./TooltipMap";





const App = ()=> {
  
    return (<div >
              <TooltipMap/>
            </div>
      )
  
}

ReactDOM.render(<App />, document.getElementById("root"));