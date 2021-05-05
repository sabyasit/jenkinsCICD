import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Emp } from '../models/emp.model';
import { AppState } from './../app.state';
import * as EmpActions from '../actions/emp.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addEmp(id: number, name: string) {
    this.store.dispatch(new EmpActions.AddEmp({ id: id, name: name }));
  }
}
