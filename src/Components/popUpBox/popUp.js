import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";

function PopUp({ data }) {
  if (!data) return <div></div>;

  return (
    <div>
      <ReactTooltip id="singleBox" effect="solid" type="light">
        <span>
          <h2
            className="toolTipHeading"
            style={{
              color: "white",
              backgroundColor: "#3ac9de",
              padding: "5px 12px",
            }}
          >
            {data.name}
          </h2>
          <h4>{data.mla}</h4>
          <h6>{data.party}</h6>
          <img src={data.logo} alt="party logo" height="30px" />
        </span>
      </ReactTooltip>
    </div>
  );
}

export default PopUp;
