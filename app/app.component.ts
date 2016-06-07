import { Component } from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";

import { MasterComponent } from './views/master/master.component';
import { DetailComponent } from './views/detail/detail.component';
import { DataService } from './services/data.service';

@Component({
    selector: "my-master-detail-app",
    directives: [
        ROUTER_DIRECTIVES,
        NS_ROUTER_DIRECTIVES
    ],
    providers: [
        DataService
    ],
    template: `
        <page-router-outlet></page-router-outlet>
    `
})

@RouteConfig([
  {path: '/', name: 'Master', component: MasterComponent, useAsDefault: true},
  {path: '/detail/:id', name: 'Detail', component: DetailComponent}
])
export class AppComponent {
    constructor() {
    }
}
