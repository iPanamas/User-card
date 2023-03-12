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

export const Statistics = ({ tweets, followers, isFollow }) => {
  return (
    <>
      <StatisticsWrapper>
        <StatisticsItem>
          <StatisticsText>{tweets} tweets</StatisticsText>
        </StatisticsItem>

        <StatisticsItem>
          <StatisticsText>{followers} followers</StatisticsText>
        </StatisticsItem>
      </StatisticsWrapper>
    </>
  );
};
