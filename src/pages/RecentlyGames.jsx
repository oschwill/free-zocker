import { useLoaderData } from 'react-router-dom';
import AllItems from '../components/main/all-games/AllItems';
import HeaderIntroduction from '../components/header/HeaderIntroduction';

const RecentlyGames = () => {
  const data = useLoaderData();

  const getRecentlyAdded = (max) => {
    return [...data].sort((a, b) => b.release_date.localeCompare(a.release_date)).slice(0, max);
  };

  return (
    <>
      <HeaderIntroduction bgImage="/images/RecentlyHeaderImage.jpeg" text="RECENTLY ADDED" />
      <AllItems currentData={getRecentlyAdded(8)} hasDescription={false} />
    </>
  );
};

export default RecentlyGames;
