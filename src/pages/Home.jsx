import { useLoaderData } from 'react-router';
import RecentlyAdded from '../components/main/home/RecentlyAdded';

import ShowMoreButton from '../components/main/home/ShowMoreButton';

const Home = () => {
  const data = useLoaderData();

  const getRecentlyAdded = () => {
    return [...data].sort((a, b) => b.release_date.localeCompare(a.release_date)).slice(0, 20);
  };

  console.log(getRecentlyAdded());

  return (
    <>
      <RecentlyAdded getRecentlyAdded={getRecentlyAdded} />
      <ShowMoreButton />
    </>
  );
};

export default Home;
