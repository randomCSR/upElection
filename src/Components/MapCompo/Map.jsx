import React from "react";
import { Link } from "react-router-dom";

function Map(props) {
  const id = props.id;
  const url = "/infopage/" + id;
  const color = props.apiData[0] ? props.apiData[0].color : "";

  function getId(e) {
    const dt = props.apiData;
    props.onHoverCalled(dt[0]);
  }

  return (
    <>
      <Link to={url} key={props.id}>
        {props.points === undefined ? (
          <g data-tip data-for="singleBox" key={`poly${props.id}`}>
            <path
              onMouseOver={getId}
              key={props.id}
              id={props.id}
              dataname={props.cnsName}
              className={props.class}
              fill={color}
              d={props.dd}
            />
          </g>
        ) : (
          <g data-tip data-for="singleBox" key={`poly${props.id}`}>
            <polygon
              onMouseOver={getId}
              dataname={props.name}
              key={props.id}
              id={props.id}
              className={props.class}
              fill={color}
              points={props.points}
            />
          </g>
        )}
      </Link>
    </>
  );
}
export default Map;
