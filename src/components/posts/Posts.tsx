import { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useGetPostsQuery } from '../../store/api/storeApi';
import PostCardBig from '../post-card-big/PostCardBig';
import PostCard from '../post-card/PostCard';
import Preloader from '../preloaderr/Preloader';
import './posts.scss';

const Posts: FC = () => {
  const likeState = useTypedSelector((state) => state.likes);
  const { value: searchValue } = useTypedSelector((state) => state.search);
  const { data, isLoading } = useGetPostsQuery({
    state: likeState,
    title: searchValue,
  });
  const dataToRender =
    data &&
    data.map((item) => {
      return { ...item, likes: { ...likeState[item.id] } };
    });

  return (
    <div className='posts'>
      {!isLoading ? (
        data ? (
          dataToRender && dataToRender.length > 0 ? (
            <>
              <PostCardBig classes='posts__first-post' post={dataToRender![0]} />
              <div className='posts__wrapper'>
                <div className='posts__col'>
                  {dataToRender!
                    .slice(1, Math.floor(dataToRender.length / 2))
                    .map((item) => (
                      <PostCard key={item.id} post={item} />
                    ))}
                </div>
                <div className='posts__col'>
                  {dataToRender!
                    .slice(Math.floor(dataToRender.length / 2) + 1)
                    .map((item) => (
                      <PostCard key={item.id} post={item} />
                    ))}
                </div>
              </div>
            </>
          ) : (
            <p className='posts__message'>Извините! Ничего не найдено</p>
          )
        ) : (
          <p className='posts__message'>
            Что то пошло не так... Попробуйте перезагрузить страницу
          </p>
        )
      ) : (
        <Preloader />
      )}
    </div>
  );
};

export default Posts;
