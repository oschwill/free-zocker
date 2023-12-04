import PropTypes from 'prop-types';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderInputBox = ({ children }) => {
  return (
    <article className="relative mr-12">
      {children}
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        style={{ color: '#ffffff' }}
        className="h-7 absolute right-[15%] top-3"
      />
    </article>
  );
};

HeaderInputBox.propTypes = {
  children: PropTypes.object,
};

export default HeaderInputBox;
