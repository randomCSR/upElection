import React from "react";

function Map(props) {
  // const id = props.id;
  const color = props.apiData[0] ? props.apiData[0].color : "";

  function getId(e) {
    const dt = props.apiData;
    props.onHoverCalled(dt[0]);
  }

  return (
    <>
      {props.points === undefined ? (
        <g data-tip data-for="singleBox" key={`poly${props.id}`}>
          <path
            onMouseOver={getId}
            onClick={() => {
              props.handleIdClick(props.id);
            }}
            key={props.id}
            id={props.id}
            dataname={props.cnsName}
            className={props.class}
            fill={color!=null?color:"gray"}
            d={props.dd}
          />
        </g>
      ) : (
        <g data-tip data-for="singleBox" key={`poly${props.id}`}>
          <polygon
            onMouseOver={getId}
            onClick={() => {
              props.handleIdClick(props.id);
            }}
            dataname={props.name}
            key={props.id}
            id={props.id}
            className={props.class}
            fill={color!=null?color:"gray"}
            points={props.points}
          />
        </g>
      )}
    </>
  );
}
export default Map;
