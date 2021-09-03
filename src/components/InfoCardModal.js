import React from "react";
import ReactModal from "react-modal";

import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import InfoCard from "./InfoCard";

const InfoCardModal = (props) => {
  const {
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
      gridCard,
    },
  } = props;
  const { push } = useHistory();

  return (
    <ReactModal
      isOpen={true}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={() => {
        push(path);
      }}
    >
      <div>
        <InfoCard
          key={key}
          stateKey={stateKey}
          tags={tags}
          headerImg={headerImg}
          title={title}
          details={details}
          description={description}
          savedStatus={savedStatus}
          index={index}
        ></InfoCard>
      </div>
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
