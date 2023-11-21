import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
  return (
    <article className="flex flex-col text-white w-[20vw] overflow-hidden bg-boxBackgroundColor rounded-3xl">
      <img src={item.thumbnail} alt="thumbnail" className="rounded-3xl" />
      <div className="flex flex-col mt-12 ml-[1vw] mr-[1vw] justify-center gap-16 ">
        <h2 className="text-white text-2.5rem h-[2vh] ">{item.title} </h2>
        <p className="text-2rem opacity-75 h-[7.5vh] ">{item.short_description}</p>
        <Link
          to={`/details/${item.id}`}
          className="p-3 bg-buttonBackgroundColor rounded-2xl text-center text-2.5rem hover:opacity-75 lg:w-[100%] xl:w-[50%]"
        >
          READ MORE
        </Link>
        <div className="flex items-center gap-6 border-t-2 border-borderColorWhite pt-12 pb-12 ">
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
          <p className="text-2.5rem border-2 pl-4 pr-4 rounded-3xl border-buttonBackgroundColor">
            {item.genre}
          </p>
        </div>
      </div>
    </article>
  );
};

ItemCard.propTypes = {
  item: PropTypes.object,
};

export default ItemCard;
