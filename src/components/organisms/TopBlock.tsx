import { Link } from 'react-router-dom';
import Sextou from '../../assets/sextou.png';

import './TopBlock.pcss';

function TopBlock() {
  return (
    <section id="top" className="grid grid-cols-1">
      <Link to="/">
        <img className="sextou-logo" src={Sextou} alt="Sextou!" />
      </Link>

      {/* <SearchBlock /> */}
    </section>
  );
}

export default TopBlock;
