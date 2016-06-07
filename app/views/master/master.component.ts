import { Component, OnInit } from '@angular/core';
import { DataItem } from '../../model/DataItem';
import { Router } from '@angular/router-deprecated';
import { DataService } from '../../services/data.service'

@Component({
  moduleId: module.id,
  templateUrl: 'master.component.html'
})
export class MasterComponent implements OnInit {
  public items: Array<DataItem>;
  private router: Router;
    
  constructor(router: Router, dataService: DataService) {
    this.router = router;
    this.items = dataService.getData();
   }

  ngOnInit() { }

  onItemTap(event) {
    this.router.navigate(['Detail', {id: this.items[event.index].id}]);
  }
}