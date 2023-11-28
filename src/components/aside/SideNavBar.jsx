import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

import './SideNavBar.css';

const SideNavBar = () => {
  return (
    <aside className="fixed left-0 top-0 flex justify-center border-r-4 h-full aside z-10">
      <nav className="flex flex-col pt-8 ">
        <input
          type="checkbox"
          className="checked opacity-0 absolute left-8 z-10 cursor-pointer"
          style={{ height: '36px', width: '36px' }}
        />
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: '#ffffff', height: '36px' }}
          className="cursor-pointer hamburger opacity-1 absolute left-8"
        />
        <FontAwesomeIcon
          icon={faX}
          style={{ color: '#ffffff', height: '36px' }}
          className="cursor-pointer close opacity-1 absolute left-8 translate-x-[-500px]"
        />
        <div className="flex flex-col justify-center h-full gap-12 w-32 menu-items pl-4 pr-4">
          <NavLink to="/" className="relative flex items-center justify-start w-full">
            <img
              src="/images/navbar_house.png"
              alt="house"
              className="w-24 hover:bg-buttonBackgroundColor rounded-[20px]"
            />
            <span className="text-3rem text-white nav-text">Home</span>
          </NavLink>
          <NavLink to="/all" className="relative flex items-center justify-start w-full">
            <img
              src="/images/navbar_gamecontroller.png"
              alt="gamecontroller"
              className="w-24 hover:bg-buttonBackgroundColor rounded-[20px]"
            />
            <span className="text-3rem text-white nav-text">All Games</span>
          </NavLink>
          <NavLink to="/recently" className="relative flex items-center justify-start w-full">
            <img
              src="/images/navbar_plus.png"
              alt="plus"
              className="w-24 hover:bg-buttonBackgroundColor rounded-[20px]"
            />
            <span className="text-3rem text-white nav-text">Recently Added</span>
          </NavLink>
        </div>
      </nav>
    </aside>
  );
};

export default SideNavBar;
