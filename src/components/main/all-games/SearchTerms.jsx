import PropTypes from 'prop-types';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchTerms = ({ checkedData, sortData, onHandleData, Fade }) => {
  return (
    <article className="flex flex-wrap pt-[10%] gap-8 col-span-full">
      {checkedData &&
        checkedData.length > 0 &&
        checkedData.map((checked) => {
          return (
            <Fade
              key={crypto.randomUUID()}
              className="text-2.5rem border-2 pl-4 pr-4 rounded-3xl border-buttonBackgroundColor text-white flex items-center gap-4"
            >
              <FontAwesomeIcon
                className="cursor-pointer text-white hover:text-gray-200 hover:opacity-75"
                icon={faXmark}
                style={{ height: '32px' }}
                onClick={() => onHandleData(checked)}
              />
              <p>{checked}</p>
            </Fade>
          );
        })}
      <Fade
        key={crypto.randomUUID()}
        className="text-2.5rem border-2 pl-4 pr-4 mr-16 rounded-3xl border-buttonBackgroundColor text-white flex items-center gap-4 ml-auto"
      >
        <p>{sortData[0]}</p>
      </Fade>
    </article>
  );
};

SearchTerms.propTypes = {
  checkedData: PropTypes.array,
  sortData: PropTypes.array,
  onHandleData: PropTypes.func,
  Fade: PropTypes.object,
};

export default SearchTerms;
