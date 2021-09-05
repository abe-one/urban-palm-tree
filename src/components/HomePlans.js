import React from "react";
import { useLocation } from "react-router-dom";

import ConditionalLink from "./ConditionalLink";
import InfoCard from "./InfoCard";
import InfoCardModal from "./InfoCardModal";

const HomePlans = ({ data, toggleSavedStatus, mainGrid, displayAll }) => {
  const { pathname: path, search: queries } = useLocation();

  return (
    <>
      {data.map(
        (
          {
            homePlanId,
            name,
            numBeds,
            numBaths,
            sqft,
            tags,
            description,
            image,
            saved,
          },
          index
        ) => {
          const detailsString = `${numBeds} bed(s) - ${numBaths} bath(s) - ${sqft} sqft`; //Todo: Conditional plurals on bed/bath

          if (!displayAll && !saved) {
            return null;
          } else {
            const cardProps = {
              key: homePlanId,
              id: homePlanId,
              stateKey: "homePlans",
              headerImg: image,
              title: name,
              details: detailsString,
              tags: tags,
              description: description,
              savedStatus: saved,
              toggleSavedStatus: toggleSavedStatus,
              index: index,
              gridCard: mainGrid,
            };
            const urlTitle = name?.replace(/ /g, "-");

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
                    stateKey={"homePlans"}
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

export default HomePlans;
