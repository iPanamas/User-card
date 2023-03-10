import styled from "styled-components";

export const Button = styled.button`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  font-family: "Montserrat";

  font-weight: 600;
  padding: 14px 56px;

  /* background: ; */
  background: ${({ isFollow }) => (isFollow ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  text-transform: uppercase;
  color: #373737;
`;
