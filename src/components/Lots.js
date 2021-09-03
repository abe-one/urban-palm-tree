import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleSavedLots } from "../utils/reduxStore/actions";
import InfoCard from "./InfoCard";
const Lots = ({ lots, toggleSavedLots, mainGrid }) => {
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
            const detailsString = `${acres} - ${acres * 43_560} sqft`;
            //TODO: Split address at comma
            if (!displayAll && !saved) {
              return null;
            } else {
              return (
                <InfoCard
                  key={lotId}
                  stateKey="lots"
                  headerImg={image}
                  title={address}
                  details={detailsString}
                  description={description}
                  savedStatus={saved}
                  toggleSavedStatus={toggleSavedLots}
                  index={index}
                  gridCard={mainGrid}
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
