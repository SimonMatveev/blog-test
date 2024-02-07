export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type TLike = {
  likes: number;
  dislikes: number;
  liked: 0 | 1 | -1;
};

export type TLikeSet = {
  id: number;
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
