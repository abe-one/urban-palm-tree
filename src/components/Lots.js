import React from "react";
import { useLocation } from "react-router-dom";
import ConditionalLink from "./ConditionalLink";
import InfoCard from "./InfoCard";
import InfoCardModal from "./InfoCardModal";

const Lots = ({ data, toggleSavedStatus, mainGrid, displayAll }) => {
  const { pathname: path, search: queries } = useLocation();

  return (
    <>
      {data.map(
        ({ lotId, address, acres, description, image, saved }, index) => {
          const detailsString = `${acres} - ${acres * 43_560} sqft`;
          //TODO: Split address at comma

          if (!displayAll && !saved) {
            return null;
          } else {
            const cardProps = {
              key: lotId,
              id: lotId,
              stateKey: "lots",
              headerImg: image,
              title: address,
              details: detailsString,
              description: description,
              savedStatus: saved,
              toggleSavedStatus: toggleSavedStatus,
              index: index,
              gridCard: mainGrid,
            };
            const urlTitle = address?.replace(/ /g, "-");

            return (
              <>
                <ConditionalLink
                  isLink={mainGrid}
                  queryPath={`${path}?selected=${urlTitle}`}
                  innerComponent={<InfoCard {...cardProps} />}
                />
                {queries === `?selected=${urlTitle}` ? (
                  <InfoCardModal
                    path={path}
                    primaryCardProps={cardProps}
                    stateKey={"lots"}
                  />
                ) : null}
              </>
            );
          }
        }
      )}
    </>
  );
};

export default Lots;
