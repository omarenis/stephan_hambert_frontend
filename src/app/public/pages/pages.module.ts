import { NgModule } from '@angular/core';
import {IndexComponent} from "./index/index.component";
import {PhilosophieComponent} from "./philosophie/philosophie.component";
import {CollectionsComponent} from "./collections/collections.component";
import {Route, RouterModule} from "@angular/router";
import {ComponentsModule} from "../components/components.module";
import { HistoireComponent } from './histoire/histoire.component';

const routes: Route[] = [
  {
    path: '', redirectTo: '/public/index', pathMatch: "full"
  },
  {
    path: 'index', component: IndexComponent
  },
  {
    path: 'philosophie', component: PhilosophieComponent
  },
  {
    path: 'collections', component: CollectionsComponent
  },
  {
    path: 'histoire', component: HistoireComponent
  }
];

@NgModule({
  declarations: [
    IndexComponent,
    PhilosophieComponent,
    CollectionsComponent,
    HistoireComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ComponentsModule.forRoot(),
  ]
})
export class PagesModule { }
