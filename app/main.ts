// Keep nativeScriptBootstrap import first
import {nativeScriptBootstrap} from "nativescript-angular/application";
// https://docs.nativescript.org/angular/core-concepts/navigation-angular.html#router-outlet
import {NS_ROUTER_PROVIDERS} from 'nativescript-angular/router';

// Our main component
import {AppComponent} from "./app.component";


// Bootstrap the application using the NS_ROUTER_PROVIDERS
nativeScriptBootstrap(AppComponent, [NS_ROUTER_PROVIDERS]);