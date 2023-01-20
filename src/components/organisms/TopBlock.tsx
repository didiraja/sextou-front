import Sextou from "../../assets/sextou.png";

import "./TopBlock.pcss";

const TopBlock = () => {
  return (
    <>
      <section id="top" className="grid grid-cols-1">
        <a href="/">
          <img className="sextou-logo" src={Sextou} alt="Sextou!" />
        </a>

        {/* <p className="text-5xl text-center font-bold mt-5">Sextou!</p> */}

        {/* <SearchBlock /> */}
      </section>
    </>
  );
};

export default TopBlock;
