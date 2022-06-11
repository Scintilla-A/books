import { ActionReducerMap } from '@ngrx/store';
import * as fromGlobal from './reducer';

export interface State {
  global: any;
}
export let reducers: ActionReducerMap<State> = {
  global: fromGlobal.Update,
};
