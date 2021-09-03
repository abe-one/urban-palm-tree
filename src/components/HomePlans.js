import React from "react";
import InfoCard from "./InfoCard";

const HomePlans = ({ data, toggleSavedStatus, mainGrid, displayAll }) => {
  return (
    <>
      {data.map(
        (
          {
            homePlanId,
            name,
            numBeds,
            numBaths,
            sqft,
            tags,
            description,
            image,
            saved,
          },
          index
        ) => {
          const detailsString = `${numBeds} bed(s) - ${numBaths} bath(s) - ${sqft} sqft`; //Todo: Conditional plurals on bed/bath
          if (!displayAll && !saved) {
            return null;
          } else {
            return (
              <InfoCard
                key={homePlanId}
                id={homePlanId}
                stateKey="homePlans"
                headerImg={image}
                title={name}
                details={detailsString}
                tags={tags}
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

export default HomePlans;
