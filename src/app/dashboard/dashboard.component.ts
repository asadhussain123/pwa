import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Name: string;
  Quantity: number;
  Recurring: boolean;
  Unit: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Name: 'Milk', Quantity: 1, Recurring: false, Unit: 'kg' },
  { Name: 'Yogurt', Quantity: 2, Recurring: false, Unit: 'kg' },
  { Name: 'Beryllium', Quantity: 3, Recurring: false, Unit: 'kg' }
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['Name', 'Quantity', 'Recurring', 'Unit'];
  dataSource = ELEMENT_DATA;

}
