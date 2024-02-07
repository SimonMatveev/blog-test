import { FC } from 'react';
import { IPostWithLikes } from '../../types/types';
import { URL_IMG } from '../../utils/config';
import LikeBlock from '../like-block/LikeBlock';
import LinkDefault from '../link-default/LinkDefault';
import './post-card-big.scss';

interface IPostCardBitProps {
  post: IPostWithLikes;
  classes?: string;
}

const PostCardBig: FC<IPostCardBitProps> = ({ post, classes }) => {
  return (
    <article className={`post-card-big ${classes ? classes : ''}`}>
      <img className='post-card-big__img' src={URL_IMG} alt='Плейсхолдер изображения' />
      <div className='post-card-big__header-wrapper'>
        <div className='post-card-big__title-wrapper'>
          <h2 className='post-card-big__title'>{post.title}</h2>
          <LikeBlock post={post} />
        </div>
        <p className='post-card-big__text'>{post.body}</p>
        <LinkDefault
          classes='post-card-big__link'
          text='Читать далее'
          path={`/posts/${post.id}`}
        />
      </div>
    </article>
  );
};

export default PostCardBig;
