import PropTypes from 'prop-types';

const Information = ({ detailData }) => {
  const month = new Date(detailData.release_date).toLocaleString('default', { month: 'long' });
  const day = new Date(detailData.release_date).getDate();
  const year = new Date(detailData.release_date).getFullYear();
  console.log(day);

  return (
    <section className="grid grid-cols-2 pl-[10%] pt-[6%] gap-x-32 mr-16 text-white">
      <article className="flex flex-col gap-8">
        <h2 className="text-[3rem] font-bold">Additional Information</h2>
        <p className="opacity-75 text-[1.5rem]">
          Please note this free-to-play game may or may not offer optional in-game purchases.
        </p>
        <div className="flex items-center gap-16">
          <p className="text-[2rem] w-48 font-bold">Developer:</p>
          <p className="text-[1.5rem]">{detailData.developer}</p>
        </div>
        <div className="flex items-center gap-16">
          <p className="text-[2rem] w-48 font-bold">Publisher:</p>
          <p className="text-[1.5rem]">{detailData.publisher}</p>
        </div>
        <div className="flex items-center gap-16">
          <p className="text-[2rem] w-48 font-bold">Release Date:</p>
          <p className="text-[1.5rem]">
            {month} {day}, {year}
          </p>
        </div>
      </article>
      {detailData.minimum_system_requirements && (
        <article className="flex flex-col gap-16">
          <h2 className="text-[3rem] font-bold">Minimum System Requirements (Windows)</h2>
          <div className="flex gap-48">
            <div className="flex flex-col gap-6 w-[45%]">
              <p className="text-[2rem] font-bold">OS</p>
              <p className="text-[1.5rem] opacity-90">
                {detailData.minimum_system_requirements.os}
              </p>
            </div>
            <div className="flex flex-col gap-6 w-[45%]">
              <p className="text-[2rem] font-bold">Processor</p>
              <p className="text-[1.5rem] opacity-90">
                {detailData.minimum_system_requirements.processor}
              </p>
            </div>
          </div>
          <div className="flex gap-48">
            <div className="flex flex-col gap-6 w-[45%]">
              <p className="text-[2rem] font-bold">Memory</p>
              <p className="text-[1.5rem] opacity-90">
                {detailData.minimum_system_requirements.memory}
              </p>
            </div>
            <div className="flex flex-col gap-6 w-[45%]">
              <p className="text-[2rem] font-bold">Graphics</p>
              <p className="text-[1.5rem] opacity-90">
                {detailData.minimum_system_requirements.graphics}
              </p>
            </div>
          </div>
          <div className="flex gap-48">
            <div className="flex flex-col gap-6 w-[45%]">
              <p className="text-[2rem] font-bold">Storage</p>
              <p className="text-[1.5rem] opacity-90">
                {detailData.minimum_system_requirements.storage}
              </p>
            </div>
            <div className="flex flex-col gap-6 w-[45%]">
              <p className="text-[2rem] font-bold">Additional Notes</p>
              <p className="text-[1.5rem] opacity-90">
                Specifications may change during development
              </p>
            </div>
          </div>
        </article>
      )}
    </section>
  );
};

Information.propTypes = {
  detailData: PropTypes.object,
};

export default Information;
