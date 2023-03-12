import { Button } from "./CardButton.styled";

export const CardButton = ({ onClick, isFollow }) => {
  return (
    <Button onClick={onClick} isFollow={isFollow}>
      {isFollow ? "Following" : "Follow"}
    </Button>
  );
};
