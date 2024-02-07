import { FC } from 'react';
import Search from '../search/Search';
import './header.scss';

const Header: FC = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>Блог</h1>
      <p className='header__text'>
        Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также
        переводим зарубежные статьи
      </p>
      <Search />
    </header>
  );
};

export default Header;
