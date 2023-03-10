import { Card, Logo, UserImage, LineCard } from "./UserCard.styled";
import { Statistics } from "../Statistics/Statistics";

import usersDB from "../../../usersDB.json";

import { useEffect, useState } from "react";

export const UserCard = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    setUserInfo(usersDB);
  }, []);

  return (
    <>
      {userInfo.map((info) => (
        <Card key={info.id}>
          <Logo src="../images/logo.svg" alt="" />
          <UserImage src="../images/user-image.png" />
          <LineCard />
          <Statistics tweets={info.tweets} followers={info.followers} />
        </Card>
      ))}
    </>
  );
};
