import { Component, OnInit, Input } from '@angular/core';
import { DataItem } from '../../model/DataItem';
import {RouteParams} from '@angular/router-deprecated';
import {DataService} from '../../services/data.service';


@Component({
  moduleId: module.id,
  templateUrl: `detail.component.html`
})
export class DetailComponent implements OnInit {
  private id: number;
  private detail: string;
  
  constructor(routeParams: RouteParams, dataService: DataService) {
    this.id = +routeParams.get('id');
    this.detail = dataService.getDetailFor(this.id);
  }

  ngOnInit() { }
}