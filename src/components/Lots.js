import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchLots, toggleSavedLots } from "../utils/reduxStore/actions";

const Lots = ({ lots, fetchLots, toggleSavedLots }) => {
  useEffect(() => {
    fetchLots();
  }, [fetchLots]);

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

export default connect(mapStateToProps, { fetchLots, toggleSavedLots })(Lots);
