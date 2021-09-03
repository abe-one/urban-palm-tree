import React from "react";
import ReactModal from "react-modal";

import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import InfoCard from "./InfoCard";
import HomePlans from "./HomePlans";
import {
  toggleSavedHomePlans,
  toggleSavedLots,
} from "../utils/reduxStore/actions";
import Lots from "./Lots";

const InfoCardModal = (props) => {
  const {
    lots,
    homePlans,
    combinations,
    path,
    primaryCardProps: {
      id,
      headerImg,
      title,
      details,
      tags,
      description,
      savedStatus,
      toggleSavedStatus,
      index,
      stateKey,
    },
  } = props;
  ReactModal.setAppElement("#root"); //Selects entire page to hide from screen readers
  const { push } = useHistory();

  let compatibles;
  let data;
  if (stateKey === "lots") {
    compatibles = combinations.filter((combo) => combo.lotId === id);
    compatibles = new Set(compatibles.map((combo) => combo.homePlanId));
    // console.log("homes", compatibles);

    data = homePlans.data.filter((plan) => compatibles.has(plan.homePlanId));
    console.log(("homes", data));
  } else {
    compatibles = combinations.filter((combo) => combo.homePlanId === id);
    compatibles = new Set(compatibles.map((combo) => combo.lotId));

    data = lots.data.filter((lot) => compatibles.has(lot.lotId));
    console.log(("lots", data));
  }

  return (
    <ReactModal
      isOpen={true}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={() => {
        push(path);
      }}
    >
      <InfoCard
        key={id}
        stateKey={stateKey}
        tags={tags}
        headerImg={headerImg}
        title={title}
        details={details}
        toggleSavedStatus={toggleSavedStatus}
        description={description}
        savedStatus={savedStatus}
        index={index}
      ></InfoCard>

      <hr />
      <h3>Compatible {stateKey === "lots" ? "Home Plans" : "Lots"}</h3>

      {stateKey === "lots" ? (
        <HomePlans
          data={data}
          toggleSavedStatus={toggleSavedHomePlans}
          displayAll={true}
        />
      ) : (
        <Lots
          data={data}
          toggleSavedStatus={toggleSavedLots}
          displayAll={true}
        />
      )}
    </ReactModal>
  );
};

const mapStateToProps = (state) => {
  return {
    lots: state.lots,
    homePlans: state.homePlans,
    combinations: state.combinations.data,
  };
};

export default connect(mapStateToProps)(InfoCardModal);
