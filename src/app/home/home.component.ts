import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../db-data'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  projects = PROJECTS;

  constructor() { }

  ngOnInit() {
  }

}
