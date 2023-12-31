import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import ItemCard from '../main/home/ItemCard';
import { useRef, useState } from 'react';

/* ANIMATIONS */
import { FadeIn } from '../../utils/animationContainer';

/* CSS*/
import styles from './PaginatedItems.module.css';
import { useEffect } from 'react';

const PaginatedItems = ({
  itemsPerPage,
  currentData,
  hasDescription,
  verticalDirection,
  index,
}) => {
  const [itemOffset, setItemOffset] = useState(0);

  const paginationRef = useRef();

  useEffect(() => {
    setItemOffset(0);
    if (paginationRef.current) {
      paginationRef.current.state.selected = 0;
    }
  }, [currentData]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = currentData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(currentData.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % currentData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ItemCard
        currentItems={currentItems}
        hasDescription={hasDescription}
        verticalDirection={verticalDirection}
        index={index}
        Fade={FadeIn(1, 1)}
      />
      {currentData.length > itemsPerPage && (
        <ReactPaginate
          ref={paginationRef}
          activeClassName={`${styles.item} ${styles.active}`}
          breakClassName={`${styles.item}`}
          breakLabel={'...'}
          containerClassName={`${styles.pagination}`}
          disabledClassName={`${styles.disabled_page}`}
          nextClassName={`${styles.item} ${styles.next}`}
          nextLabel="NEXT >"
          onPageChange={handlePageClick}
          pageCount={pageCount}
          pageClassName={`${styles.item} ${styles.pagination_page}`}
          pageRangeDisplayed={4}
          previousClassName={`${styles.item} ${styles.previous}`}
          previousLabel="< PREVIOUS"
        />
      )}
    </>
  );
};

PaginatedItems.propTypes = {
  itemsPerPage: PropTypes.number,
  currentData: PropTypes.array,
  hasDescription: PropTypes.bool,
  verticalDirection: PropTypes.bool,
  index: PropTypes.number,
};
export default PaginatedItems;
