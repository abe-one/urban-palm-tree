import React from "react";
import ReactModal from "react-modal";

import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import InfoCard from "./InfoCard";
import HomePlans from "./HomePlans";
import { toggleSavedHomePlans } from "../utils/reduxStore/actions";

const InfoCardModal = (props) => {
  const {
    lots,
    homePlans,
    combinations,
    path,
    primaryCardProps: {
      key,
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

  let compatibilityList;
  if (stateKey === "lots") {
    compatibilityList = homePlans.data;
  } else {
    compatibilityList = lots.data;
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
        key={key}
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
      <h3>Compatible {stateKey}</h3>
      {/*TODO regex formatting*/}

      {
        <HomePlans
          data={homePlans.data}
          toggleSavedStatus={toggleSavedHomePlans}
          displayAll={true}
        />
      }
    </ReactModal>
  );
};

const mapStateToProps = (state) => {
  return {
    lots: state.lots,
    homePlans: state.homePlans,
    combinations: state.combinations,
  };
};

export default connect(mapStateToProps)(InfoCardModal);
