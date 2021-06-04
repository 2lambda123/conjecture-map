import React, { useState } from "react";
import Xarrow from "react-xarrows";

function XarrowInteractive({start, end, removeArrow}) {    
    const [color, setColor] = useState("cornflowerBlue");    
    const defProps = {
      passProps: {
        className: "xarrow",
        onMouseEnter: () => setColor("IndianRed" ),
        onMouseLeave: () => setColor("cornflowerBlue"),
        onClick: (e) => {
        //   e.stopPropagation(); //so only the click event on the box will fire on not on the container itself
          removeArrow(start, end)
        },
        cursor: "pointer",
      },
    };
    // let color = state.color;
    // if (
    //   selected &&
    //   selected.type === "arrow" &&
    //   selected.id.start === props.start &&
    //   selected.id.end === props.end
    // )
    //   color = "red";
    // const color = "red"    
    const strokeWidth = 3

    return <Xarrow {...{start, end, color, strokeWidth, ...defProps}}/> //{...{ ...defProps, ...props, ...state, color }}               
            //   start={start}
            //   end={end}
            //   strokeWidth={2}
              
            // />;
  };
  
  export default XarrowInteractive