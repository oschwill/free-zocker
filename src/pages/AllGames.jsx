import { useLoaderData } from 'react-router-dom';
import HeaderIntroduction from '../components/header/HeaderIntroduction';
import SelectFields from '../components/main/all-games/SelectFields';
import Field from '../components/main/all-games/Field';
import { allGenres, platforms, sortBy } from '../data/selectFieldData';
import { useEffect, useState } from 'react';
import AllItems from '../components/main/all-games/AllItems';
import { getCurrentData } from '../data/handleData';

let tempPlatformArr = platforms.slice(1).map((val) => val.value);

const AllGames = () => {
  const [checkedData, setCheckedData] = useState(platforms.map((val) => val.value));
  const [sortData, setSortData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    if (checkedData.length < 1) {
      setCurrentData([]);
      return;
    }

    getCurrentData(checkedData, setCurrentData, data);
  }, [data, checkedData]);

  const handleSetCheckedData = (val) => {
    // Plattformen handlen
    if (val === platforms[0].value) {
      for (let index = 0; index < platforms.length; index++) {
        if (checkedData.indexOf(platforms[0].value) != -1) {
          setCheckedData((current) => current.filter((cur) => cur !== platforms[index].value));
          tempPlatformArr = tempPlatformArr.filter((cur) => cur !== platforms[index].value);
        } else {
          if (
            checkedData.indexOf(platforms[index].value) === -1 &&
            tempPlatformArr.indexOf(platforms[index].value) === -1
          ) {
            setCheckedData((current) => [...current, platforms[index].value]);
            if (index !== 0) {
              tempPlatformArr = [...tempPlatformArr, platforms[index].value];
            }
          }
        }
      }
    } else {
      checkedData.indexOf(val) != -1
        ? setCheckedData((current) => current.filter((cur) => cur !== val))
        : setCheckedData((current) => [...current, val]);

      // check for all platform
      if (val === platforms[1].value || val === platforms[2].value) {
        tempPlatformArr =
          tempPlatformArr.indexOf(val) != -1
            ? tempPlatformArr.filter((cur) => cur !== val)
            : [...tempPlatformArr, val];

        tempPlatformArr.length === 2
          ? setCheckedData((current) => [...current, platforms[0].value])
          : setCheckedData((current) => current.filter((cur) => cur !== platforms[0].value));
      }
    }
  };

  const handleSetSortData = (sort) => {
    console.log(sort);
    setSortData(sort);
    //
  };

  return (
    <>
      <HeaderIntroduction bgImage="/images/AllGamesHeaderImage.png" text="ALL GAMES" />
      <SelectFields>
        <Field
          position="10"
          data={platforms}
          fieldDescription="PLATFORM"
          onHandleData={handleSetCheckedData}
          checkedData={checkedData}
        />
        <Field
          position="32.5"
          data={allGenres(data)}
          fieldDescription="GENRE/TAG"
          onHandleData={handleSetCheckedData}
          checkedData={checkedData}
        />
        <Field
          position="55"
          data={sortBy}
          fieldDescription="SORT BY"
          onHandleData={handleSetSortData}
          checkedData={sortData}
        />
      </SelectFields>
      {/* PLACEHOLDER SEARCHTERMS */}
      <p className="text-white">data</p>
      <AllItems currentData={currentData} hasDescription={false} />
    </>
  );
};

export default AllGames;
