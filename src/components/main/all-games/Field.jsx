import PropTypes from 'prop-types';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import autoAnimate from '@formkit/auto-animate';

const Field = ({ position, data, fieldDescription, onHandleData, checkedData }) => {
  const [isShown, setIsShown] = useState(false);
  const [iconRotation, setIconRotation] = useState(0);

  const parentRef = useRef();

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  const handleSetIsShown = (_isShown) => {
    setIsShown(_isShown);
    setIconRotation(_isShown ? 180 : 0);
  };

  return (
    <article
      className="w-[20.2%] flex flex-col bg-boxBackgroundColor absolute z-[8]"
      ref={parentRef}
      style={{ left: `${position}%` }}
      onMouseLeave={() => handleSetIsShown(false)}
      onMouseEnter={() => handleSetIsShown(true)}
    >
      <div className="p-3 pl-8 pr-8 bg-buttonBackgroundColor rounded-2xl text-left text-2.5rem w-full hover:opacity-75 text-white flex items-center justify-between">
        <p className="font-medium">{fieldDescription}</p>
        <FontAwesomeIcon
          icon={faAngleDown}
          style={{ color: '#ffffff', transform: `rotate(${iconRotation}deg)` }}
          className="transition-all duration-300"
        />
      </div>
      {isShown && (
        <div className={`flex flex-col gap-6 p-6 transition-all overflow-auto h-[210px] scrollbar`}>
          {data &&
            data.map((item) => {
              return (
                <label
                  htmlFor={item.value}
                  className={`p-4 bg-inputBackgroundColor rounded-xl flex items-center relative ${
                    (item.value === 'PC (Windows)' || item.value === 'Web Browser') &&
                    'w-[85%] ml-auto'
                  }`}
                  key={crypto.randomUUID()}
                >
                  <input
                    type="checkbox"
                    name={item.value}
                    id={item.value}
                    className="appearance-none p-3 border-[3px] relative checked:after:content-['+'] checked:after:text-white checked:after:absolute text-5rem checked:after:rotate-45 font-medium checked:after:bottom-[-28px] checked:after:left-[-2.5px]"
                    checked={checkedData.includes(item.value)}
                    onChange={() => onHandleData(item.value)}
                  />
                  <span className="text-2rem pl-6 text-white">{item.text}</span>
                </label>
              );
            })}
        </div>
      )}
    </article>
  );
};

Field.propTypes = {
  position: PropTypes.string,
  data: PropTypes.array,
  fieldDescription: PropTypes.string,
  onHandleData: PropTypes.func,
  checkedData: PropTypes.array,
};

export default Field;
