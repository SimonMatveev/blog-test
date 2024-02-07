import { FC } from 'react';
import { IPostWithLikes } from '../../types/types';
import { URL_IMG } from '../../utils/config';
import LikeBlock from '../like-block/LikeBlock';
import LinkDefault from '../link-default/LinkDefault';
import './post-card.scss';

interface IPostCardProps {
  post: IPostWithLikes;
}

const PostCard: FC<IPostCardProps> = ({ post }) => {
  return (
    <article className='post-card'>
      <img className='post-card__img' src={URL_IMG} alt='Плейсхолдер изображения' />
      <div className='post-card__wrapper'>
        <h2 className='post-card__title'>{post.title}</h2>
        <div className='post-card__btns'>
          <LikeBlock post={post} />
          <LinkDefault
            classes='post-card__link'
            text='Читать далее'
            path={`/posts/${post.id}`}
          />
        </div>
      </div>
    </article>
  );
};

export default PostCard;
