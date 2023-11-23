import PropTypes from 'prop-types';

const HeaderIntroduction = ({ bgImage, text }) => {
  return (
    <section className="flex justify-end">
      <article className="relative flex flex-col mr-16 h-50vh w-4/5 md:w-84% lg:w-87% xl:w-90% 2xl:w-11/12">
        <img
          src={bgImage}
          alt="Home"
          className="w-full h-full rounded-3xl object-cover object-center"
        />
        <h1 className="text-4.5rem w-1/4 mb-32 mt-[-20rem] ml-32 text-white">{text && text}</h1>
      </article>
    </section>
  );
};

HeaderIntroduction.propTypes = {
  bgImage: PropTypes.string,
  text: PropTypes.string,
};

export default HeaderIntroduction;
