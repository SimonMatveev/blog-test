import { ChangeEvent, FC, FormEvent, useState } from 'react';
import useActions from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './search.scss';

const Search: FC = () => {
  const { value: searchValue } = useTypedSelector((state) => state.search);
  const [string, setString] = useState(searchValue);
  const { setSearch, resetSearch } = useActions();

  const handleChange = (e: ChangeEvent) =>
    setString((e.target as HTMLInputElement).value);

  const handleReset = () => {
    resetSearch();
    setString('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearch(string);
  };

  return (
    <form className='search' onSubmit={handleSubmit}>
      <input
        className='search__input'
        value={string}
        onChange={handleChange}
        id='search'
      />
      <label
        className={`search__label${string !== '' ? ' search__label_active' : ''}`}
        htmlFor='search'
      >
        Поиск по названию статьи
      </label>
      {string !== '' && (
        <button
          className='search__clean'
          aria-label='Очистить поиск'
          type='button'
          onClick={handleReset}
        />
      )}
    </form>
  );
};

export default Search;
