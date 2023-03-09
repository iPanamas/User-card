import { Card, Logo, UserImage, LineCard } from "./UserCard.styled";
import { Statistics } from "../Statistics/Statistics";
import { CardButton } from "../Button/CardButton";

export const UserCard = () => {
  return (
    <>
      <Card>
        <Logo src="../images/logo.svg" alt="" />
        <UserImage src="../images/user-image.png" />
        <LineCard />
        <Statistics />
        <CardButton />
      </Card>
    </>
  );
};
