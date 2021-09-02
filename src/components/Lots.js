import React from "react";
import { connect } from "react-redux";
import { toggleSavedLots } from "../utils/reduxStore/actions";
import InfoCard from "./InfoCard";
const Lots = ({ lots, toggleSavedLots }) => {
  return (
    <>
      <h2>Lots</h2>
      <div
        style={{
          display: "flex",
        }}
      >
        {lots.data.map(({ lotId, address, acres, description, image }) => {
          const detailsString = `${address} \n ${acres} - ${
            acres * 43_560
          } sqft`;
          return (
            <InfoCard
              key={lotId}
              headerImg={image}
              details={detailsString}
              description={description}
            />
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { lots: state.lots };
};

export default connect(mapStateToProps, { toggleSavedLots })(Lots);
