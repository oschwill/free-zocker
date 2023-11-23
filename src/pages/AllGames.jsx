import { useLoaderData } from 'react-router-dom';
import HeaderIntroduction from '../components/header/HeaderIntroduction';
import SelectFields from '../components/main/all-games/SelectFields';
import Field from '../components/main/all-games/Field';
import { allGenres, platforms, sortBy } from '../data/selectFieldData';
// import { useState } from 'react';
import AllItems from '../components/main/all-games/AllItems';

const AllGames = () => {
  // const [filteData, setFilterData] = useState([]);
  const data = useLoaderData();

  const getCurrentData = () => {
    return data;
  };

  console.log(data);

  return (
    <>
      <HeaderIntroduction bgImage="/images/AllGamesHeaderImage.png" text="ALL GAMES" />
      <SelectFields>
        <Field position="10" data={platforms} fieldDescription="PLATFORM" />
        <Field position="32.5" data={allGenres(data)} fieldDescription="GENRE/TAG" />
        <Field position="55" data={sortBy} fieldDescription="SORT BY" />
      </SelectFields>
      <AllItems currentData={getCurrentData()} hasDescription={false} />
    </>
  );
};

export default AllGames;
