import React from "react";
import { connect } from "react-redux";
import { toggleSavedHomePlans } from "../utils/reduxStore/actions";

const HomePlans = ({ homePlans, toggleSavedHomePlans }) => {
  return (
    <div>
      Render array of Cards displaying HomePlan data
      {homePlans.data.map((plan) => {
        return <p key={plan.homePlanId}>{plan.name}</p>;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { homePlans: state.homePlans };
};

export default connect(mapStateToProps, { toggleSavedHomePlans })(HomePlans);
