import React, { useState } from "react";
import ReactModal from "react-modal";
import { useHistory, Link, Route, useLocation } from "react-router-dom";

const InfoCard = ({
  headerImg,
  title,
  details,
  tags,
  description,
  savedStatus,
  toggleSavedStatus,
  index,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { pathname: path, search: queries } = useLocation();
  const { push } = useHistory();

  return (
    <div className="info-card">
      <div
        className="header-image"
        title={title}
        style={{
          position: "relative",
          backgroundImage: `url(${headerImg})`,
          backgroundSize: "cover",
          height: "20rem",
          width: "30rem",
        }}
      >
        <button
          onClick={() => {
            toggleSavedStatus(index);
          }}
          style={{
            position: "absolute",
            right: "0",
          }}
        >
          {savedStatus ? "❤️" : "🤍"}
        </button>
      </div>

      <Link to={`/lots?a`}>
        <h3>{title}</h3>
      </Link>
      <p>{details}</p>
      {/*TODO: p tags for each line break */}

      <div className="tags">
        {tags?.map((tag, index) => {
          return <p key={index}>{tag}</p>;
        })}
      </div>
      <div className="description-text">
        <p>{description}</p>
        {/*TODO: p tags for each line break */}
      </div>
      {queries === "?a" ? (
        <ReactModal
          isOpen={!modalOpen}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          onRequestClose={() => {
            push(path);
          }}
        ></ReactModal>
      ) : null}
    </div>
  );
};

export default InfoCard;
