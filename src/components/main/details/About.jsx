import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { cleanArray } from '../../../data/handleData';

const About = ({ detailData }) => {
  return (
    <section className="grid grid-cols-2 pl-[10%] pt-[4%] gap-x-32 mr-16">
      {detailData && (
        <>
          <h2 className="text-white text-[4rem] font-bold col-span-full mb-16">
            {detailData.title.toUpperCase()}
          </h2>
          <article className="text-white flex flex-col gap-16">
            <img src={detailData.thumbnail} alt={detailData.title} className="rounded-3xl" />
            <p className="text-[3rem]">Platform: {detailData.platform} (Client)</p>
            <p className="text-2.5rem border-2 pl-4 pr-4 w-[150px] rounded-3xl border-buttonBackgroundColor text-white text-center bg-boxBackgroundColor">
              {detailData.genre}
            </p>
            <Link
              to={detailData.game_url}
              target="_blank"
              className="p-3 bg-buttonBackgroundColor rounded-2xl text-center text-2.5rem hover:opacity-75 w-[175px]"
            >
              PLAY NOW
            </Link>
          </article>
          <article className="text-white">
            <h3 className="text-[3rem]">About</h3>
            {cleanArray(detailData.description.split(/\r?\n/)).map((desc) => {
              return (
                <p className="text-[2rem] mb-8" key={crypto.randomUUID()}>
                  {desc}
                </p>
              );
            })}
          </article>
        </>
      )}
    </section>
  );
};

About.propTypes = {
  detailData: PropTypes.object,
};

export default About;
