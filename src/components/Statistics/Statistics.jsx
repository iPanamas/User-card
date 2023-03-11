import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

// COMPONENTS
import { CardButton } from "../Button/CardButton";
import {
  StatisticsWrapper,
  StatisticsItem,
  StatisticsText,
} from "./Statistics.styled";

// UTILS
import { numberWithDelimiter } from "../../utils/numberWithDelimiter";

export const Statistics = ({ id, tweets, followers }) => {
  const [cardInfo, setCardInfo] = useLocalStorage("cardInfo", [
    { id, tweets, followers, isFollow: false },
  ]);

  const handleFollow = () => {
    setCardInfo((state) =>
      state.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            isFollow: !el.isFollow,
          };
        }
        return el;
      })
    );
  };

  return (
    <>
      <StatisticsWrapper>
        <StatisticsItem>
          <StatisticsText>{cardInfo.tweets} tweets</StatisticsText>
        </StatisticsItem>

        <StatisticsItem>
          <StatisticsText>{cardInfo.followers} followers</StatisticsText>
        </StatisticsItem>
      </StatisticsWrapper>

      <CardButton handleFollow={handleFollow} isFollow={cardInfo.isFollow} />
    </>
  );
};
