import { Action } from '@ngrx/store';
import { Emp } from '../models/emp.model';

export const ADD_EMP = 'ADD_EMPLOYEE';
export const DEL_EMP = 'DEL_EMPLOYEE';

export class AddEmp implements Action {
    type = ADD_EMP;
    constructor(public payload: Emp) { }
}

export class DelEmp implements Action {
    type = DEL_EMP;
    constructor(public payload: number) { }
}

export type Actions = AddEmp | DelEmp;
