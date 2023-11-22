import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

/* CSS */
import styles from './TopPcGamesList.module.css';
import BigItemCard from './BigItemCard';

const TopPcGamesList = ({ getBestPcGames, hasDescription }) => {
  return (
    <section className={`${styles.games_section} mt-32`}>
      {getBestPcGames(4).map((item, index) => {
        if (index === 0) {
          return <BigItemCard item={item} index={index} key={item.id} />;
        } else {
          return (
            <ItemCard
              item={item}
              key={item.id}
              hasDescription={hasDescription}
              verticalDirection={false}
              index={index}
            />
          );
        }
      })}
    </section>
  );
};

TopPcGamesList.propTypes = {
  getBestPcGames: PropTypes.func,
  hasDescription: PropTypes.bool,
};

export default TopPcGamesList;
