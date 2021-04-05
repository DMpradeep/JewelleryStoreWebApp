import { ActionCreatorsMapObject } from "redux";

export function generateCreateAction<actionType>() {
    return function createAction<T extends { type: actionType }>(d: T): T {
        return d;
    };
}

export type ActionUnion<T extends ActionCreatorsMapObject> = ReturnType<T[keyof T]>;