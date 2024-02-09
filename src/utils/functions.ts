import { ThunkDispatch } from '@reduxjs/toolkit';
import { likesActions } from '../store/likes.slice';
import { ILikeState, IPost } from '../types/types';

export const getRandomN = (max: number) => Math.floor(Math.random() * max);

export const setLikeState = (
  post: IPost | undefined,
  likeState: ILikeState,
  //eslint-disable-next-line
  dispatch: ThunkDispatch<any, any, any>
) => {
  const { setInitial } = likesActions;
  if (post && !likeState[post.id]) {
    dispatch(
      setInitial({
        id: post.id,
        likes: getRandomN(50),
        dislikes: getRandomN(50),
      })
    );
  }
};
