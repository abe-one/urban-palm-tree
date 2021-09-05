import React from "react";
import { Link, useLocation } from "react-router-dom";
import InfoCardModal from "./InfoCardModal";

const InfoCard = (props) => {
  const {
    headerImg,
    title,
    details,
    tags,
    description,
    savedStatus,
    toggleSavedStatus,
    index,
    gridCard,
    stateKey,
  } = props;

  const urlTitle = title?.replace(/ /g, "-");

  const { pathname: path, search: queries } = useLocation();

  return (
    <div className="info-card">
      {/* <Link to={`${path}?selected=${urlTitle}`}> */}
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
          onClick={(e) => {
            e.preventDefault();
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
      {/* </Link> */}

      {/* {gridCard ? (
        <Link to={`${path}?selected=${urlTitle}`}>
          <h3>{title}</h3>
        </Link>
      ) : ( */}
      <h3>{title}</h3>
      {/* )} */}

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

      {/* {gridCard &&
      queries === `?selected=${urlTitle}` &&
      stateKey === "homePlans" ? (
        <InfoCardModal
          path={path}
          primaryCardProps={props}
          stateKey={stateKey}
        />
      ) : gridCard &&
        queries === `?selected=${urlTitle}` &&
        stateKey === "lots" ? (
        <InfoCardModal path={path} primaryCardProps={props} stateKey={"lots"} />
      ) : null} */}
    </div>
  );
};

export default InfoCard;
