import { Link } from 'react-router-dom';

function Carousel() {
  return (
    <div className='carousel--wrapper'>
      <Link to='/event/999-sextemos'>
        <img
          className='card-surface carousel--event'
          src='https://sextou.quartemo.com.br/wp-content/uploads/2023/08/8b62ea6f-5b23-40f0-9da3-a18986ab5805-768x406.png'
          alt='Sextemos!'
        />
      </Link>
    </div>
  );
}

export default Carousel;
