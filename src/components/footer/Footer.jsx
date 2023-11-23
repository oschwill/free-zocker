import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-mainBackgroundColor flex items-center justify-center pb-6 pt-32">
      <section>
        <article>
          <p className="text-white font-medium text-1.5rem">
            @2023 O.S.{' '}
            <span>
              data by{' '}
              <Link
                to="https://rapidapi.com/digiwalls/api/free-to-play-games-database"
                className="underline hover:text-blue-200"
              >
                freetogame
              </Link>
            </span>
          </p>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
