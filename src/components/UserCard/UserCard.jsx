import { Card, Logo, UserImage, LineCard } from "./UserCard.styled";
import { Statistics } from "../Statistics/Statistics";
import { CardButton } from "../Button/CardButton";
import usersDB from "../../../usersDB.json";

import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

export const UserCard = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [storage, setStorage] = useLocalStorage("followers", {});

  useEffect(() => {
    setUserInfo(usersDB);
  }, []);

  const followButtonHandler = (id, followers) => {
    if (!storage[id]) {
      setStorage((prevState) => ({
        ...prevState,
        ...{ [id]: { followers: followers + 1, isFollow: true } },
      }));
    } else {
      setStorage((prevState) => ({
        ...prevState,
        ...{
          [id]: {
            followers: storage[id].isFollow
              ? storage[id].followers - 1
              : storage[id].followers + 1,
            isFollow: !storage[id].isFollow,
          },
        },
      }));
    }
  };

  return (
    <>
      {userInfo.map(({ id, tweets, followers }) => (
        <Card key={id}>
          <Logo src="../images/logo.svg" alt="" />
          <UserImage src="../images/user-image.png" alt="" />
          <LineCard />
          <Statistics
            tweets={tweets}
            followers={storage[id]?.followers || followers}
          />
          <CardButton
            onClick={() => followButtonHandler(id, followers)}
            isFollow={storage[id]?.isFollow}
          />
        </Card>
      ))}
    </>
  );
};
