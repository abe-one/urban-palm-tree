import React from "react";

const InfoCard = ({
  headerImg,
  title,
  details,
  tags,
  description,
  status,
  toggleSavedStatus,
  index,
}) => {
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
          🤍{/*TODO: Refactor w/ css variables */}
        </button>
      </div>

      <h3>{title}</h3>
      <p>{details}</p>
      <div className="tags">
        {tags?.map((tag, index) => {
          return <p key={index}>{tag}</p>;
        })}
      </div>
      <div className="description-text">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
