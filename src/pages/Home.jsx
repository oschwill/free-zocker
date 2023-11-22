import { useLoaderData } from 'react-router';
import CardItemList from '../components/main/home/CardItemList';

import ShowMoreButton from '../components/main/home/ShowMoreButton';
import TopPcGamesList from '../components/main/home/TopPcGamesList';

const platforms = {
  pc: 'PC (Windows)',
  browser: 'Web Browser',
};

const Home = () => {
  const data = useLoaderData();

  const getRecentlyAdded = () => {
    return [...data].sort((a, b) => b.release_date.localeCompare(a.release_date)).slice(0, 20);
  };

  const getBestPcGames = (max) => {
    return [...data].filter((cur) => cur.platform === platforms.pc).slice(0, max);
  };

  console.log(getBestPcGames(4));

  return (
    <>
      <CardItemList getRecentlyAdded={getRecentlyAdded} hasDescription={true} />
      <ShowMoreButton />
      <TopPcGamesList getBestPcGames={getBestPcGames} hasDescription={false} />
    </>
  );
};

export default Home;
