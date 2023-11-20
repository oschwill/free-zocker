import PropTypes from 'prop-types';

const RecentlyAddedItem = ({ item, itemRef }) => {
  return (
    <article
      className="flex flex-col text-white w-[19vw] overflow-hidden bg-boxBackgroundColor rounded-3xl"
      ref={itemRef}
    >
      <img src={item.thumbnail} alt="thumbnail" className="rounded-3xl" />
      <div className="flex flex-col mt-12 ml-[1vw] mr-[1vw] ">
        <h2 className="text-white text-2.5rem pb-12">{item.title} </h2>
        <p className="text-2rem opacity-75 pb-16 h-40">{item.short_description}</p>
        <button className="p-3 bg-buttonBackgroundColor rounded-2xl  text-2.5rem mb-16">
          READ MORE
        </button>
        <div className="flex items-center gap-6 border-t-2 pt-12 pb-12">
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

RecentlyAddedItem.propTypes = {
  item: PropTypes.object,
  itemRef: PropTypes.object,
};

export default RecentlyAddedItem;
