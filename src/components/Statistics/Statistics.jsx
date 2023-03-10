import { useEffect, useState } from "react";

// COMPONENTS
import { CardButton } from "../Button/CardButton";
import {
  StatisticsWrapper,
  StatisticsItem,
  StatisticsText,
} from "./Statistics.styled";

// UTILS
import { numberWithComma } from "../../utils/addCommaInNumber";

export const Statistics = ({ tweets, followers }) => {
  const [userTweets, setUserTweets] = useState(tweets);
  const [userFollowers, setUserFollowers] = useState(followers);
  const [isFollow, setIsFollow] = useState(false);

  const handleFollow = async () => {
    setIsFollow(!isFollow);

    !isFollow
      ? setUserFollowers(userFollowers + 1)
      : setUserFollowers(userFollowers - 1);
  };

  return (
    <>
      <StatisticsWrapper>
        <StatisticsItem>
          <StatisticsText>{userTweets} tweets</StatisticsText>
        </StatisticsItem>

        <StatisticsItem>
          <StatisticsText>
            {numberWithComma(userFollowers)} followers
          </StatisticsText>
        </StatisticsItem>
      </StatisticsWrapper>

      <CardButton handleFollow={handleFollow} isFollow={isFollow} />
    </>
  );
};
