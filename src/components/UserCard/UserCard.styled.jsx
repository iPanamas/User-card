import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  max-width: 380px;
  height: 460px;
  margin: 0 auto;
`;

export const LineCard = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;

  width: 100%;
  height: 8px;
`;
