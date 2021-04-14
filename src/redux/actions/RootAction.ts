import { ActionType } from 'typesafe-actions';
import signInActions from './SignInAction';

const rootAction = {
  ...signInActions,
};

export type RootAction = ActionType<typeof rootAction>;

export default rootAction;
