import PropTypes from 'prop-types';

import ItemCard from '../home/ItemCard';

const AllItems = ({ currentData, hasDescription }) => {
  return (
    <section className="grid grid-cols-4 pl-[10%] pt-[6%]  ">
      {currentData &&
        currentData.map((item) => {
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
  );
};

AllItems.propTypes = {
  currentData: PropTypes.func,
  hasDescription: PropTypes.bool,
};

export default AllItems;
