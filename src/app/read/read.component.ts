import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Emp } from '../models/emp.model';
import { AppState } from './../app.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  employees: Observable<Emp[]>;

  constructor(private store: Store<AppState>) {
    this.employees = store.select('Employees');
  }

  ngOnInit(): void {
  }

}
