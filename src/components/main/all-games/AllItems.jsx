import PropTypes from 'prop-types';

// import ItemCard from '../home/ItemCard';
import PaginatedItems from '../../pagination/PaginatedItems';

const AllItems = ({ currentData, hasDescription }) => {
  return (
    <section className="grid grid-cols-4 pl-[10%] pt-[12%] gap-y-16">
      <PaginatedItems
        itemsPerPage={8}
        currentData={currentData}
        hasDescription={hasDescription}
        verticalDirection={true}
        index={null}
      />
    </section>
  );
};

AllItems.propTypes = {
  currentData: PropTypes.array,
  hasDescription: PropTypes.bool,
};

export default AllItems;
