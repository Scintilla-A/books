import { Action } from '@ngrx/store';
import { Update } from './update.model';

export const UPDATE_OBJECTS = 'UPDATE_OBJECTS';

export class UpdateStore implements Action {
    type = UPDATE_OBJECTS;
    constructor(public payload: Update) {}
}
