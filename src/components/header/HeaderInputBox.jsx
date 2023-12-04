import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLoaderData } from 'react-router-dom';

const HeaderInputBox = () => {
  const data = useLoaderData();

  return (
    <article className="relative mr-12">
      <input
        type="text"
        className="w-96 h-14 pl-2 rounded-xl bg-inputBackgroundColor text-[2rem]"
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        style={{ color: '#ffffff' }}
        className="h-7 absolute right-5 top-3"
      />
      <div className="absolute bg-boxBackgroundColor w-full h-96 scrollbar flex flex-col items-center gap-4">
        <div className="flex bg-slate-500 w-[100%] p-4">
          <img src="" alt="" className="border-r-2 p-2" />
          <p className="text-[1.5rem] p-2">NAme des SPiels</p>
        </div>
      </div>
    </article>
  );
};

export default HeaderInputBox;
