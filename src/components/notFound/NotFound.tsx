import { FC } from 'react';
import { useNavigate } from 'react-router';
import './not-found.scss';

const NotFound: FC = () => {
  const navigate = useNavigate();
  return (
    <div className='not-found'>
      <p className='not-found__text'>Увы, такой страницы нет</p>
      <button className='not-found__btn' onClick={() => navigate(-1)}>
        Вернуться назад
      </button>
    </div>
  );
};

export default NotFound;
