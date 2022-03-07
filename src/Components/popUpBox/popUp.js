import React from "react";
import ReactTooltip from "react-tooltip";

function PopUp({ data }) {
  if (!data) return <div></div>;

  return (
    <div>
      <ReactTooltip id="singleBox" effect="solid" type="light">
        <span>
          <h4
            className="toolTipHeading"
            style={{
              color: "white",
              // backgroundColor: "#3ac9de",
              backgroundColor: "#2f7ffc",
              padding: "5px 12px",
              borderRadius:"10px",
            }}
          >
            {data.name}
          </h4>
          {/* <h4>{data.mla}</h4> */}
          {/* <h4 className="partyName">{data.party}</h4>
          <img src={data.logo} alt="party logo" height="40px"  /> */}
          <div style={{display:"flex",paddingRight:"10px"}} >
            {data.logo == null ? <h6>Coming Soon..</h6>
            :
          <img style={{paddingRight:"10px"}} src={data.logo} alt="party logo" height="40px"  />
        }
          <h4 className="partyName">{data.party_code}</h4>
          </div>
        </span>
      </ReactTooltip>
    </div>
  );
}

export default PopUp;
