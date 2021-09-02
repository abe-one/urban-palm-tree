import React from "react";

const InfoCard = ({
  headerImg,
  title,
  details,
  tags,
  description,
  toggleStatus,
}) => {
  return (
    <div className="info-card">
      <div
        title={title}
        border="solid black 20px"
        className="header-image"
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundSize: "cover",
          height: "20rem",
          width: "30rem",
        }}
      />
      <image
        border="solid black 20px"
        src="https://storage.googleapis.com/home_plan_images/70660mk_0.jpg"
        style={{
          // backgroundImage: `url(${headerImg})`,
          height: "20vh",
          width: "95vw",
        }}
      />
      <h3>{title}</h3>
      <p>{details}</p>
      <div className="tags">
        {tags?.map((tag, index) => {
          return <p key="index">{tag}</p>;
        })}
      </div>
      <div className="description-text">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
