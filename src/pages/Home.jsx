import { useLoaderData } from 'react-router';
import RecentlyAdded from '../components/main/home/RecentlyAdded';

const Home = () => {
  const data = useLoaderData();

  const getRecentlyAdded = () => {
    return [...data].sort((a, b) => b.release_date.localeCompare(a.release_date)).slice(0, 20);
  };

  return (
    <>
      <RecentlyAdded getRecentlyAdded={getRecentlyAdded} />
    </>
  );
};

export default Home;
