import React, { useState } from "react";
import { connect } from "react-redux";
import {
  toggleSavedLots,
  toggleSavedHomePlans,
} from "../utils/reduxStore/actions";
import HomePlans from "./HomePlans";
import Lots from "./Lots";
const CardGrid = ({
  lots,
  homePlans,
  toggleSavedLots,
  toggleSavedHomePlans,
  stateKey,
}) => {
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
        {stateKey === "lots" ? (
          <Lots
            data={lots.data}
            toggleSavedStatus={toggleSavedLots}
            mainGrid={true}
            displayAll={displayAll}
          />
        ) : (
          <HomePlans
            data={homePlans.data}
            toggleSavedStatus={toggleSavedHomePlans}
            mainGrid={true}
            displayAll={displayAll}
          />
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { lots: state.lots, homePlans: state.homePlans };
};

export default connect(mapStateToProps, {
  toggleSavedLots,
  toggleSavedHomePlans,
})(CardGrid);
