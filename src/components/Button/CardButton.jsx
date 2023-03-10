import { Button } from "./CardButton.styled";
import { useState } from "react";

export const CardButton = ({ handleFollow, isFollow }) => {
  return (
    <Button onClick={handleFollow} isFollow={isFollow}>
      {isFollow ? "Following" : "Follow"}
    </Button>
  );
};
