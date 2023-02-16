import Sextou from '../../assets/sextou.png';

import './TopBlock.pcss';

function TopBlock() {
  return (
    <section id="top" className="grid grid-cols-1">
      <a href="/">
        <img className="sextou-logo" src={Sextou} alt="Sextou!" />
      </a>

      {/* <SearchBlock /> */}
    </section>
  );
}

export default TopBlock;
