import {
  StatisticsWrapper,
  StatisticsItem,
  StatisticsInfo,
} from "./Statistics.styled";

export const Statistics = () => {
  return (
    <StatisticsWrapper>
      <StatisticsItem>
        <StatisticsInfo>777 tweets</StatisticsInfo>
      </StatisticsItem>

      <StatisticsItem>
        <StatisticsInfo>100,500 Followers</StatisticsInfo>
      </StatisticsItem>
    </StatisticsWrapper>
  );
};
