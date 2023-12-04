import HeaderBar from './HeaderBar';
import HeaderInputBox from './HeaderInputBox';

const Header = () => {
  return (
    <header className="bg-mainBackgroundColor text-white fixed top-0 z-10 w-full">
      <section className="flex justify-between pt-6 pb-6 pl-48 pr-6 items-center ">
        <HeaderBar />
        <HeaderInputBox />
      </section>
    </header>
  );
};

export default Header;
