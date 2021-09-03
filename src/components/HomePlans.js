import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleSavedHomePlans } from "../utils/reduxStore/actions";
import InfoCard from "./InfoCard";

const HomePlans = ({ homePlans, toggleSavedHomePlans }) => {
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
        {homePlans.data.map(
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
                  headerImg={image}
                  title={name}
                  details={detailsString}
                  tags={tags}
                  description={description}
                  savedStatus={saved}
                  toggleSavedStatus={toggleSavedHomePlans}
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
  return { homePlans: state.homePlans };
};

export default connect(mapStateToProps, { toggleSavedHomePlans })(HomePlans);
