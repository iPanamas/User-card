// COMPONENTS
import {
  StatisticsWrapper,
  StatisticsItem,
  StatisticsText,
} from "./Statistics.styled";

// UTILS
import { numberWithDelimiter } from "../../utils/numberWithDelimiter";

export const Statistics = ({ tweets, followers }) => {
  return (
    <>
      <StatisticsWrapper>
        <StatisticsItem>
          <StatisticsText>{tweets} tweets</StatisticsText>
        </StatisticsItem>

        <StatisticsItem>
          <StatisticsText>
            {numberWithDelimiter(followers)} followers
          </StatisticsText>
        </StatisticsItem>
      </StatisticsWrapper>
    </>
  );
};
