import { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useGetPostsQuery } from '../../store/api/storeApi';
import Preloader from '../Preloader/Preloader';
import PostCardBig from '../post-card-big/PostCardBig';
import PostCard from '../post-card/PostCard';
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
                {dataToRender!.splice(1).map((item) => (
                  <PostCard key={item.id} post={item} />
                ))}
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
