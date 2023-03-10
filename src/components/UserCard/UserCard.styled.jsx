import styled from "styled-components";

export const CardList = styled.ul`
  @media (min-width: 1000px) {
    max-width: 850px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 20px;
  }
`;

export const CardItem = styled.li`
  position: relative;
  background: url("../images/card-bg.svg"),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-position: top 28px center, center;
  background-repeat: no-repeat;
  max-width: 380px;
  margin: 0 auto;

  padding-top: 284px;
  padding-bottom: 36px;
  text-align: center;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 1000px) {
    margin-bottom: 0;
    width: 380px;
  }
`;

export const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const UserImage = styled.img`
  z-index: 2;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
