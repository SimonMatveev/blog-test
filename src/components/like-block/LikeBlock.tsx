import { FC } from 'react';
import useActions from '../../hooks/useActions';
import { IPostWithLikes } from '../../types/types';
import './like-block.scss';

interface ILikeBlockProps {
  post: IPostWithLikes;
  classes?: string;
}

const LikeBlock: FC<ILikeBlockProps> = ({ post, classes }) => {
  const { like, dislike } = useActions();
  const handleLike = () => like(post.id);
  const handleDislike = () => dislike(post.id);
  return (
    <div className={`like-block ${classes ? classes : ''}`}>
      <div className='like-block__wrapper'>
        <button
          className={`like-block__btn like-block__btn_like${post.likes.liked === 1 ? ' like-block__btn_like-active' : ''}`}
          aria-label='Лайк'
          onClick={handleLike}
        />
        <p className='like-block__text'>{post.likes.likes}</p>
      </div>
      <div className='like-block__wrapper'>
        <button
          className={`like-block__btn like-block__btn_dislike${post.likes.liked === -1 ? ' like-block__btn_dislike-active' : ''}`}
          aria-label='Дизлайк'
          onClick={handleDislike}
        />
        <p className='like-block__text'>{post.likes.dislikes}</p>
      </div>
    </div>
  );
};

export default LikeBlock;
