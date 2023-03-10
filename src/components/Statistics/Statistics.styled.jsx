import styled from "styled-components";

export const StatisticsWrapper = styled.ul`
  margin-bottom: 26px;
`;

export const StatisticsItem = styled.li`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StatisticsText = styled.p`
  font-family: "Montserrat";

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;
