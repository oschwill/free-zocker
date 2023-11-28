import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderInputBox = () => {
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
    </article>
  );
};

export default HeaderInputBox;
