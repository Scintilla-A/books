import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['global'],
    rehydrate: true,
  })(reducer);
}

export let metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
