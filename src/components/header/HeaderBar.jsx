import { useState } from 'react';
import { useEffect } from 'react';

const HeaderBar = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((data) => setJokes(data));
  }, []);
  return (
    <article className="flex items-center gap-6 ">
      <img src="/images/Logo.png" alt="Logo" />
      <h2 className="text-3rem font-bold">FREE ZOCKER</h2>
      {jokes && (
        <p className="text-[1.5rem] absolute left-[37.5%] w-[390px] top-2 bg-gray-300 p-4 bg-opacity-25 rounded-xl">
          {jokes.value}
        </p>
      )}
    </article>
  );
};

export default HeaderBar;
