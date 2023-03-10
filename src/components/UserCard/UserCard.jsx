import { Card, Logo, UserImage, LineCard } from "./UserCard.styled";
import { Statistics } from "../Statistics/Statistics";
import { CardButton } from "../Button/CardButton";
import users from "../../../users.json";
import { useEffect, useState } from "react";

export const UserCard = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [isFollow, setIsFollow] = useState(false);

  useEffect(() => {
    setUserInfo(users);
  }, []);

  const handleClick = () => {
    setIsFollow(!isFollow);
  };

  console.log(isFollow);

  return (
    <>
      {userInfo.map((info) => (
        <Card key={info.id}>
          <Logo src="../images/logo.svg" alt="" />
          <UserImage src="../images/user-image.png" />
          <LineCard />
          <Statistics tweets={info.tweets} followers={info.followers} />
          <CardButton click={handleClick} isFollow={isFollow} />
        </Card>
      ))}
    </>
  );
};
