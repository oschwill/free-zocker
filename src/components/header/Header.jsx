import HeaderBar from './HeaderBar';
import HeaderInputBox from './HeaderInputBox';
import HeaderIntroduction from './HeaderIntroduction';

const Header = () => {
  return (
    <header className="bg-mainBackgroundColor text-white relative">
      <section className="flex justify-between pt-6 pb-6 pl-48 pr-6 items-center ">
        <HeaderBar />
        <HeaderInputBox />
      </section>
      <section className="flex justify-end">
        <HeaderIntroduction />
      </section>
    </header>
  );
};

export default Header;
