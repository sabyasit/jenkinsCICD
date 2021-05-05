import { Emp } from './models/emp.model';

export interface AppState {
    readonly Employees: Emp[];
}
