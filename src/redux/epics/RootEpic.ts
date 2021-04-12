import { combineEpics } from 'redux-observable';

import signInEpics from './SignInEpic';

const epics = combineEpics(...signInEpics);

export default epics;
