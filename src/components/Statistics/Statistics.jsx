import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

// COMPONENTS
import { CardButton } from "../Button/CardButton";
import {
  StatisticsWrapper,
  StatisticsItem,
  StatisticsText,
} from "./Statistics.styled";

// UTILS
import { numberWithComma } from "../../utils/addCommaInNumber";

export const Statistics = ({ id, tweets, followers }) => {
  const [userTweets, setUserTweets] = useState(tweets);
  // const [userFollowers, setUserFollowers] = useLocalStorage(
  //   "followers",
  //   followers
  // );

  const [isFollow, setIsFollow] = useState(false);

  const [cardInfo, setCardInfo] = useLocalStorage("cardInfo", {
    id,
    tweets,
    followers,
    isFollow,
  });

  const handleFollow = async () => {
    setIsFollow(!isFollow);

    !isFollow
      ? setUserFollowers(followers + 1)
      : setUserFollowers(followers - 1);
  };

  console.log(cardInfo);

  return (
    <>
      <StatisticsWrapper>
        <StatisticsItem>
          <StatisticsText>{userTweets} tweets</StatisticsText>
        </StatisticsItem>

        <StatisticsItem>
          <StatisticsText>
            {numberWithComma(cardInfo.followers)} followers
          </StatisticsText>
        </StatisticsItem>
      </StatisticsWrapper>

      <CardButton handleFollow={handleFollow} isFollow={isFollow} />
    </>
  );
};
