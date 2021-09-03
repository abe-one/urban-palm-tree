import React from "react";
import InfoCard from "./InfoCard";

const Lots = ({ data, toggleSavedStatus, mainGrid, displayAll }) => {
  return (
    <>
      {data.map(
        ({ lotId, address, acres, description, image, saved }, index) => {
          const detailsString = `${acres} - ${acres * 43_560} sqft`;
          //TODO: Split address at comma
          if (!displayAll && !saved) {
            return null;
          } else {
            return (
              <InfoCard
                key={lotId}
                id={lotId}
                stateKey="lots"
                headerImg={image}
                title={address}
                details={detailsString}
                description={description}
                savedStatus={saved}
                toggleSavedStatus={toggleSavedStatus}
                index={index}
                gridCard={mainGrid}
              />
            );
          }
        }
      )}
    </>
  );
};

export default Lots;
