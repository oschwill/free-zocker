import { Link } from 'react-router-dom';

const ShowMoreButton = () => {
  return (
    <section className="mt-16 flex justify-end items-center text-white mr-[6vw]">
      <Link
        to="/all"
        className="p-3 bg-buttonBackgroundColor rounded-2xl text-center text-2.5rem lg:w-[25%] xl:w-[10%] w-48 hover:opacity-75"
      >
        SHOW MORE
      </Link>
    </section>
  );
};

export default ShowMoreButton;
