import React from "react";

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
  } = props;

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

      <h3>{title}</h3>

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
    </div>
  );
};

export default InfoCard;
