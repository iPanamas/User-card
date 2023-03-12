import { Button } from "./CardButton.styled";
import { useState } from "react";
import useLocalStorage from "use-local-storage";

export const CardButton = ({ onClick, isFollow }) => {
  return (
    <Button onClick={onClick} isFollow={isFollow}>
      {isFollow ? "Following" : "Follow"}
    </Button>
  );
};
