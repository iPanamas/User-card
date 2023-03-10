import { Button } from "./CardButton.styled";

export const CardButton = ({ click, isFollow }) => {
  return (
    <Button onClick={click} isFollow={isFollow}>
      {isFollow ? "Following" : "Follow"}
    </Button>
  );
};
