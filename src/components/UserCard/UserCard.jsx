import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import usersDB from "../../usersDB.json";
// COMPONENTS
import {
  CardList,
  CardItem,
  Logo,
  UserImage,
  LineCard,
} from "./UserCard.styled";
import { Statistics } from "../Statistics/Statistics";
import { CardButton } from "../CardButton/CardButton";

export const UserCard = () => {
  const [statistics, setStatistics] = useState([]);
  const [storageStatistics, setStorageStatistics] = useLocalStorage(
    "followers",
    {}
  );

  useEffect(() => {
    setStatistics(usersDB);
  }, []);

  const followButtonHandler = (id, followers) => {
    if (!storageStatistics[id]) {
      setStorageStatistics((prevState) => ({
        ...prevState,
        [id]: { followers: followers + 1, isFollow: true },
      }));
    } else {
      setStorageStatistics((prevState) => ({
        ...prevState,
        [id]: {
          followers: storageStatistics[id].isFollow
            ? storageStatistics[id].followers - 1
            : storageStatistics[id].followers + 1,
          isFollow: !storageStatistics[id].isFollow,
        },
      }));
    }
  };

  return (
    <CardList>
      {statistics.map(({ id, tweets, followers, avatar }) => (
        <CardItem key={id}>
          <Logo src="../images/logo.svg" alt="logo" />
          <UserImage src={`../images/${avatar}.png`} alt="user-image" />
          <LineCard />
          <Statistics
            tweets={tweets}
            followers={storageStatistics[id]?.followers || followers}
          />
          <CardButton
            onClick={() => followButtonHandler(id, followers)}
            isFollow={storageStatistics[id]?.isFollow}
          />
        </CardItem>
      ))}
    </CardList>
  );
};
