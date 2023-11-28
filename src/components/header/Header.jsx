import HeaderBar from './HeaderBar';
import HeaderInputBox from './HeaderInputBox';

const Header = () => {
  return (
    <header className="bg-mainBackgroundColor text-white relative">
      <section className="flex justify-between pt-6 pb-6 pl-48 pr-6 items-center relative">
        <HeaderBar />
        <HeaderInputBox />
      </section>
    </header>
  );
};

export default Header;
