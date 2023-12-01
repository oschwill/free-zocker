import { useParams } from 'react-router-dom';
import HeaderIntroduction from '../components/header/HeaderIntroduction';
import { useEffect, useState } from 'react';
import FetchAPI from '../functions/fetchData';
import About from '../components/main/details/About';
import LoadingSpinner from '../components/loading/LoadingSpinner';
import ScreenShots from '../components/main/details/Screenshots';
import Information from '../components/main/details/Information';

const Details = () => {
  const [detailData, setDetailData] = useState(null);
  const urlParam = useParams();

  useEffect(() => {
    FetchAPI(`game?id=${urlParam.id}`).then((_data) => {
      console.log(_data);
      setDetailData(_data);
    });
  }, [urlParam.id]);

  return (
    <>
      {detailData ? (
        <>
          <HeaderIntroduction bgImage={detailData.screenshots[0].image} text="" />
          <About detailData={detailData} />
          <ScreenShots images={detailData.screenshots.slice(1)} />
          <Information detailData={detailData} />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default Details;
