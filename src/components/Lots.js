import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleSavedLots } from "../utils/reduxStore/actions";
import InfoCard from "./InfoCard";
const Lots = ({ lots, toggleSavedLots }) => {
  const [displayAll, setDisplayAll] = useState(true);

  return (
    <>
      <button onClick={() => setDisplayAll(!displayAll)}>
        Show {displayAll ? "Saved" : "All"} Lots
      </button>
      <div
        style={{
          display: "flex",
        }}
      >
        {lots.data.map(
          ({ lotId, address, acres, description, image, saved }, index) => {
            const detailsString = `${address} \n ${acres} - ${
              acres * 43_560
            } sqft`;
            if (!displayAll && !saved) {
              return null;
            } else {
              return (
                <InfoCard
                  key={lotId}
                  headerImg={image}
                  details={detailsString}
                  description={description}
                  savedStatus={saved}
                  toggleSavedStatus={toggleSavedLots}
                  index={index}
                />
              );
            }
          }
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { lots: state.lots };
};

export default connect(mapStateToProps, { toggleSavedLots })(Lots);
