import {
  StatisticsWrapper,
  StatisticsItem,
  StatisticsText,
} from "./Statistics.styled";

export const Statistics = (props) => {
  const statisticsValue = Object.entries(props).map((entry) => ({
    [entry[0]]: entry[1],
  }));

  const numberWithSpaces = (x) =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <StatisticsWrapper>
      {statisticsValue.map((value) => (
        <StatisticsItem key={Object.values(value)}>
          <StatisticsText>
            {numberWithSpaces(Object.values(value))} {Object.keys(value)}
          </StatisticsText>
        </StatisticsItem>
      ))}
    </StatisticsWrapper>
  );
};
