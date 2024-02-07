import { likesActions } from './likes.slice';
import { searchActions } from './search.slice';

export const rootActions = {
  ...likesActions,
  ...searchActions,
};
