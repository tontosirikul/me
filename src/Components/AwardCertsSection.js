import React from "react";

function AwardCertsSection({ image, title, organization }) {
  return (
    <div className="AwardCertsSection">
      <div className="AwardCerts">
        <div className="Awardcontent">
          <img src={image} alt="" />
          <h3 className="AwardCertsName">{title}</h3>
          <h5 className="Organization">{organization}</h5>
        </div>
      </div>
    </div>
  );
}

export default AwardCertsSection;
