import { Card, Logo, UserImage, LineCard } from "./UserCard.styled";
import { Statistics } from "../Statistics/Statistics";
import { CardButton } from "../Button/CardButton";
import usersDB from "../../../usersDB.json";

import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

export const UserCard = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    setUserInfo(usersDB);
  }, []);

  const followButtonHandler = (id) => {
    setUserInfo(
      userInfo.map((item) =>
        item.id === id ? { ...item, isFollow: !item.isFollow } : item
      )
    );
  };

  return (
    <>
      {userInfo.map(({ id, tweets, followers, isFollow }) => (
        <Card key={id}>
          <Logo src="../images/logo.svg" alt="" />
          <UserImage src="../images/user-image.png" alt="" />
          <LineCard />
          <Statistics
            tweets={tweets}
            followers={followers}
            isFollow={isFollow}
          />
          <CardButton
            onClick={() => followButtonHandler(id)}
            isFollow={isFollow}
          />
        </Card>
      ))}
    </>
  );
};
