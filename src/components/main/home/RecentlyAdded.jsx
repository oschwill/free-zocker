import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import RecentlyAddedItem from './RecentlyAddedItem';

const RecentlyAdded = ({ getRecentlyAdded }) => {
  const [slidePosition, setSlidePosition] = useState(0);

  const itemRef = useRef();

  const movePosition = 20.75;
  const maxSlidePosition = (getRecentlyAdded().length - 4) * movePosition;

  const slideGallery = (type) => {
    switch (type) {
      case 'prev':
        if (slidePosition < 0) {
          setSlidePosition((cur) => cur + movePosition);
        }
        break;
      case 'next':
        if (slidePosition > -maxSlidePosition) {
          setSlidePosition((cur) => cur - movePosition);
        }
        break;

      default:
        break;
    }
  };

  // console.log(itemRef.current.offsetWidth);

  return (
    <section className="flex flex-col w-full justify-start pl-[10%] pt-[4%] overflow-hidden relative">
      <h2 className="text-white text-2.5rem mb-16">Recently Added</h2>
      {/* <section className="flex w-full gap-12"> */}
      <section className=" w-11/12 mr-12 overflow-hidden relative">
        <button
          className="text-white absolute left-0 top-0 p-4 bg-green-200 z-10"
          onClick={() => slideGallery('prev')}
        >
          PREV
        </button>
        <button
          className="text-white absolute right-0 top-0 p-4 bg-green-200 z-10"
          onClick={() => slideGallery('next')}
        >
          NEXT
        </button>
        <section
          className="flex gap-14 w-[10000px] transition-all duration-300"
          style={{ transform: `translateX(${slidePosition}vw)` }}
        >
          {/* CARD 1 START */}
          {getRecentlyAdded().map((item) => {
            return <RecentlyAddedItem item={item} key={item.id} itemRef={itemRef} />;
          })}
        </section>
      </section>
    </section>
  );
};

RecentlyAdded.propTypes = {
  getRecentlyAdded: PropTypes.func,
};

export default RecentlyAdded;
