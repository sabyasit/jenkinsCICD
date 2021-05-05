import { Action } from '@ngrx/store';
import { Emp } from '../models/emp.model';
import * as EmpActions from '../actions/emp.action';

export function EmpReducer(state: Emp[] = [], action: EmpActions.Actions) {
    switch (action.type) {
        case EmpActions.ADD_EMP:
            return [...state, action.payload];
        case EmpActions.DEL_EMP:
            state.slice(action.payload as number, 1);
            return state;
        default:
            return state;
    }
}
