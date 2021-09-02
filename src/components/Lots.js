import React from "react";
import { connect } from "react-redux";
import { toggleSavedLots } from "../utils/reduxStore/actions";

const Lots = ({ lots, toggleSavedLots }) => {
  return (
    <div>
      Render array of Cards displaying lot data
      {lots.data.map((lot) => {
        return <p key={lot.lotId}>{lot.description}</p>;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { lots: state.lots };
};

export default connect(mapStateToProps, { toggleSavedLots })(Lots);
