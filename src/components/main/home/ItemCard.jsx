import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ItemCard = ({ item, hasDescription, verticalDirection, index }) => {
  return (
    <article
      className={`flex text-white overflow-hidden relative bg-boxBackgroundColor rounded-3xl ${
        verticalDirection ? 'flex-col  w-[20vw]' : 'items-center mr-[10%] w-[90%] h-[95%]'
      }`}
    >
      <img
        src={item.thumbnail}
        alt="thumbnail"
        className={`rounded-3xl ${verticalDirection ? '' : 'w-[50%]'}`}
      />
      {index && (
        <div className="absolute top-10 left-10 flex items-center justify-center border-2 rounded-full w-20 h-20 border-buttonBackgroundColor bg-boxBackgroundColor text-center">
          <p className="text-2.5rem  text-white">{index + 1}</p>
        </div>
      )}
      <div
        className={`flex flex-col  mt-12 ml-[1vw] mr-[1vw] justify-center ${
          verticalDirection ? 'gap-16' : 'gap-6'
        }`}
      >
        <h2 className="text-white text-2.5rem h-[2vh] ">{item.title} </h2>
        <p className={`text-2rem opacity-75 ${hasDescription ? 'h-[7.5vh]' : ''}`}>
          {hasDescription ? item.short_description : ''}
        </p>
        <Link
          to={`/details/${item.id}`}
          className="p-3 bg-buttonBackgroundColor rounded-2xl text-center text-2.5rem hover:opacity-75 w-[175px]"
        >
          READ MORE
        </Link>
        <div
          className={`flex items-center gap-6 pt-12 pb-12 ${
            verticalDirection ? 'border-t-2 border-borderColorWhite' : ''
          }`}
        >
          <div className="border-2 p-4 rounded-3xl border-buttonBackgroundColor">
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
          <p className="text-2.5rem border-2 pl-4 pr-4 rounded-3xl border-buttonBackgroundColor text-white">
            {item.genre}
          </p>
        </div>
      </div>
    </article>
  );
};

ItemCard.propTypes = {
  item: PropTypes.object,
  hasDescription: PropTypes.bool,
  verticalDirection: PropTypes.bool,
  index: PropTypes.number,
};

export default ItemCard;
