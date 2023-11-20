import { useLoaderData } from 'react-router';
import RecentlyAdded from '../components/main/home/RecentlyAdded';

const Home = () => {
  const data = useLoaderData();

  console.log(data);

  return (
    <>
      <RecentlyAdded />
    </>
  );
};

export default Home;
