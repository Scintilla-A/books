import * as UpdateObjects from './action';

const initialState = {
    objects: [] as any
};

export function Update(state = initialState, action: any): any {
    switch (action.type) {
        case UpdateObjects.UPDATE_OBJECTS: {
            const pageArr = [];
            for (let i = 0; i < state.objects.length; i++) {
                Object.keys(state.objects[i]).find((key) => {
                    if (key !== 'key' && parseInt(key, 0) !== action.payload.id) {
                        pageArr.push({ [key]: state.objects[i][key] });
                    }
                });
            }

            const newObject = { [action.payload.id]: action.payload.value };
            pageArr.push(newObject);

            const updateObjects = [...pageArr];
            return { ...state, objects: updateObjects };

        }
        default:
            return state;
    }

}
