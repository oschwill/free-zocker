import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

/* CSS */
import styles from './TopPcGamesList.module.css';
import BigItemCard from './BigItemCard';
import ShowMoreButton from './ShowMoreButton';

/* ANIMATIONS */
import { empty } from '../../../utils/animationContainer';

const TopPcGamesList = ({ getBestPcGames, hasDescription, headline }) => {
  return (
    <>
      <section className="flex flex-col w-full justify-start pt-[5%] relative">
        <h2 className="text-white text-2.5rem pl-[10%]">{headline}</h2>
        <section className={`${styles.games_section} mt-16`}>
          <BigItemCard item={getBestPcGames(4)[0]} index={0} />
          <ItemCard
            currentItems={getBestPcGames(4).slice(1)}
            hasDescription={hasDescription}
            verticalDirection={false}
            index={1}
            Fade={empty()}
          />
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
