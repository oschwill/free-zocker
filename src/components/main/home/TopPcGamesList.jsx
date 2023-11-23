import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

/* CSS */
import styles from './TopPcGamesList.module.css';
import BigItemCard from './BigItemCard';
import ShowMoreButton from './ShowMoreButton';

const TopPcGamesList = ({ getBestPcGames, hasDescription, headline }) => {
  return (
    <>
      <section className="flex flex-col w-full justify-start pt-[5%] relative">
        <h2 className="text-white text-2.5rem pl-[10%]">{headline}</h2>
        <section className={`${styles.games_section} mt-16`}>
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
        <ShowMoreButton />
      </section>
    </>
  );
};

TopPcGamesList.propTypes = {
  getBestPcGames: PropTypes.func,
  hasDescription: PropTypes.bool,
  headline: PropTypes.string,
};

export default TopPcGamesList;
