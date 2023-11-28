import { useLoaderData } from 'react-router';
import CardItemList from '../components/main/home/CardItemList';

import TopPcGamesList from '../components/main/home/TopPcGamesList';
import HeaderIntroduction from '../components/header/HeaderIntroduction';

const platforms = {
  pc: 'PC (Windows)',
  browser: 'Web Browser',
};

const Home = () => {
  const data = useLoaderData();

  const getRecentlyAdded = (max) => {
    return [...data].sort((a, b) => b.release_date.localeCompare(a.release_date)).slice(0, max);
  };

  const getBestPcGames = (max) => {
    return [...data].filter((cur) => cur.platform === platforms.pc).slice(0, max);
  };
  const getBestBrowserGames = (max) => {
    return [...data].filter((cur) => cur.platform === platforms.browser).slice(0, max);
  };

  return (
    <>
      <HeaderIntroduction
        bgImage="/images/homeHeaderImage.png"
        text="FIND & TRACK THE BEST FREE TO-PLAY GAMES!"
      />
      <CardItemList
        currentData={getRecentlyAdded}
        hasDescription={true}
        headline="Recently Added"
        max={20}
      />
      <TopPcGamesList
        getBestPcGames={getBestPcGames}
        hasDescription={false}
        headline="Top 4 Games for PC in November 2023"
      />
      <CardItemList
        currentData={getBestBrowserGames}
        hasDescription={false}
        headline="Top 16 Games for Browser in November 2023"
        max={16}
      />
    </>
  );
};

export default Home;
