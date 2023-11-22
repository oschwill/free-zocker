import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import { useState } from 'react';
import SliderButton from './SliderButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const CardItemList = ({ currentData, hasDescription, headline, max }) => {
  const [slidePosition, setSlidePosition] = useState(0);

  const movePosition = 84;
  const maxSlidePosition = (currentData(max).length / 4 - 1) * movePosition;
  console.log(maxSlidePosition);

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

  console.log(currentData(max).length);

  return (
    <section className="flex flex-col w-full justify-start pl-[10%] pt-[4%] overflow-hidden relative">
      <h2 className="text-white text-2.5rem mb-16">{headline}</h2>

      <SliderButton slideGallery={slideGallery} classes="left-[7%]" type="prev">
        <FontAwesomeIcon
          className="text-buttonBackgroundColor m-auto"
          icon={faPlay}
          rotation={180}
          style={{ height: '60px' }}
        />
      </SliderButton>
      <SliderButton slideGallery={slideGallery} classes="right-[3.5%]" type="next">
        <FontAwesomeIcon
          icon={faPlay}
          className="text-buttonBackgroundColor m-auto "
          style={{ height: '60px' }}
        />
      </SliderButton>
      <section className=" w-[83vw] overflow-hidden relative">
        <section
          className="flex gap-[1vw] w-[10000px] transition-all duration-500"
          style={{ transform: `translateX(${slidePosition}vw)` }}
        >
          {/* CARD 1 START */}
          {currentData(max).map((item) => {
            return (
              <ItemCard
                item={item}
                key={item.id}
                hasDescription={hasDescription}
                verticalDirection={true}
                index={null}
              />
            );
          })}
        </section>
      </section>
    </section>
  );
};

CardItemList.propTypes = {
  currentData: PropTypes.func,
  hasDescription: PropTypes.bool,
  headline: PropTypes.string,
  max: PropTypes.number,
};

export default CardItemList;
