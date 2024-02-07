import { FC } from 'react';
import './preloader.scss';

const Preloader: FC = () => {
  return (
    <div className='preloader'>
      <span className='preloader__spinner' />
    </div>
  );
};

export default Preloader;
