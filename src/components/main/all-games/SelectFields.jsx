import PropTypes from 'prop-types';

const SelectFields = ({ children }) => {
  return <section className="grid grid-cols-3 pl-[10%] pt-[4%] ">{children}</section>;
};

SelectFields.propTypes = {
  children: PropTypes.array,
};

export default SelectFields;
