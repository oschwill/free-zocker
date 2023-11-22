import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BigItemCard = ({ item, index }) => {
  return (
    <article key={item.id} className="row-span-full relative ">
      <img src={item.thumbnail} alt="" className="h-[98.5%] w-full rounded-3xl object-cover" />
      <div className="absolute top-10 right-10 flex items-center justify-center border-2 rounded-full w-20 h-20 border-buttonBackgroundColor bg-boxBackgroundColor text-center">
        <p className="text-2.5rem  text-white">{index + 1}</p>
      </div>
      <div className="absolute bottom-20 left-20">
        <h2 className="text-5rem mb-12 text-white font-bold">{item.title}</h2>
        <Link
          to={`/details/${item.id}`}
          className="p-3 pl-12 pr-12 bg-buttonBackgroundColor rounded-2xl text-center text-2.5rem hover:opacity-75 w-[175px] text-white"
        >
          READ MORE
        </Link>
        <div className="flex items-center gap-6 pt-12 pb-12 ">
          <div className="border-2 p-4 rounded-3xl border-buttonBackgroundColor bg-boxBackgroundColor">
            <img
              className="w-8 h-8 "
              src={
                item.platform === 'PC (Windows)'
                  ? '/images/WindowsLogo.png'
                  : '/images/BrowserLogo.png'
              }
              alt="platform"
            />
          </div>
          <p className="text-2.5rem border-2 pl-4 pr-4 rounded-3xl border-buttonBackgroundColor bg-boxBackgroundColor text-white">
            {item.genre}
          </p>
        </div>
      </div>
    </article>
  );
};

BigItemCard.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};

export default BigItemCard;
