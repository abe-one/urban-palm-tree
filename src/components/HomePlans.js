import React from "react";
import { connect } from "react-redux";
import { toggleSavedHomePlans } from "../utils/reduxStore/actions";
import InfoCard from "./InfoCard";

const HomePlans = ({ homePlans, toggleSavedHomePlans }) => {
  return (
    <>
      <h2>Home Plans</h2>
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
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { homePlans: state.homePlans };
};

export default connect(mapStateToProps, { toggleSavedHomePlans })(HomePlans);
