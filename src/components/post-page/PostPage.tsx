import { FC } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useGetPostQuery } from '../../store/api/storeApi';
import { URL_IMG } from '../../utils/config';
import LikeBlock from '../like-block/LikeBlock';
import Preloader from '../preloaderr/Preloader';
import './post-page.scss';

const PostPage: FC = () => {
  const { id } = useParams();
  const likeState = useTypedSelector((state) => state.likes);
  const { data: post, isLoading } = useGetPostQuery({
    id: id!,
    state: likeState,
  });
  return (
    <section className='post-page'>
      {!isLoading ? (
        post && likeState[post.id] ? (
          <>
            <div className='post-page__header'>
              <Link className='post-page__link' to='/posts'>
                Вернуться к статьям
              </Link>
              <LikeBlock
                classes='post-page__likes'
                post={{ ...post, likes: likeState[post.id] }}
              />
            </div>
            <h1 className='post-page__title'>{post.title}</h1>
            <img className='post-page__img' src={URL_IMG} alt='Плейсхолдер изображения' />
            <p className='post-page__text'>{post.body}</p>
          </>
        ) : (
          <div className='post-page__error'>
            <p className='post-page__error-text'>Такого поста нет!</p>
            <Link className='post-page__link post-page__link_err' to='/posts'>
              Вернуться к статьям
            </Link>
          </div>
        )
      ) : (
        <Preloader />
      )}
    </section>
  );
};

export default PostPage;
