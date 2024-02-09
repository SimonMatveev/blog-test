import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { likesActions } from '../../store/likes.slice';
import { EReactions, IPostWithLikes } from '../../types/types';
import './like-block.scss';

interface ILikeBlockProps {
  post: IPostWithLikes;
  classes?: string;
}

const LikeBlock: FC<ILikeBlockProps> = ({ post, classes }) => {
  const dispatch = useDispatch();
  const { setReaction } = likesActions;
  const handleLike = () => dispatch(setReaction({ id: post.id, type: EReactions.LIKES }));
  const handleDislike = () =>
    dispatch(setReaction({ id: post.id, type: EReactions.DISLIKES }));
  return (
    <div className={`like-block ${classes ? classes : ''}`}>
      <div className='like-block__wrapper'>
        <button
          className={`like-block__btn like-block__btn_like${post.likes.currentState === EReactions.LIKES ? ' like-block__btn_like-active' : ''}`}
          aria-label='Лайк'
          onClick={handleLike}
        />
        <p className='like-block__text'>{post.likes.values.likes}</p>
      </div>
      <div className='like-block__wrapper'>
        <button
          className={`like-block__btn like-block__btn_dislike${post.likes.currentState === EReactions.DISLIKES ? ' like-block__btn_dislike-active' : ''}`}
          aria-label='Дизлайк'
          onClick={handleDislike}
        />
        <p className='like-block__text'>{post.likes.values.dislikes}</p>
      </div>
    </div>
  );
};

export default LikeBlock;
