export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export enum EReactions {
  LIKES = 'likes',
  DISLIKES = 'dislikes',
  NONE = 'none',
}

export type TLike = {
  values: {
    [key in EReactions]?: number;
  };
  currentState: EReactions;
};

export type TLikeSet = {
  id: number;
  likes: number;
  dislikes: number;
};

export interface IPostWithLikes extends IPost {
  likes: TLike;
}

export interface ILikeState {
  [id: number]: TLike;
}

export interface IGetPostsArg {
  state: ILikeState;
  title: string;
}

export interface IGetPostArg {
  state: ILikeState;
  id: string;
}
