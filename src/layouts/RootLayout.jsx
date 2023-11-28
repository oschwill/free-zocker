import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import SideNavBar from '../components/aside/SideNavBar';
import Footer from '../components/footer/Footer';

const RootLayout = () => {
  return (
    <>
      <Header />
      <SideNavBar />
      <main className="bg-mainBackgroundColor flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
