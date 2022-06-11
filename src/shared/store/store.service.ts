import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as action from './action';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    public storeFolder: any;

    constructor(private store: Store) { }

    public set(idInfo: number, updatedValues: any): void {
        this.store.dispatch(new action.UpdateStore({ id: idInfo, value: updatedValues }));
    }

    public get(id: number): any {
        let storeObj;
        this.store.select(state => state).subscribe((stateData) => {
            this.storeFolder = stateData;
            storeObj = this.getObj(id);
        });
        return storeObj = (storeObj) ? storeObj[id] : storeObj;
    }

    public getObj(id: number): any {
        let val;
        for (let i = 0; i < this.storeFolder.global.objects.length; i++) {
            Object.keys(this.storeFolder.global.objects[i]).find(key => {
                if (parseInt(key, 0) === id) {
                    val = this.storeFolder.global.objects[i];
                }
            });
            
        }
        return val;
    }

}
