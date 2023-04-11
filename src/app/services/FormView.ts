import {Component, Inject, OnDestroy, OnInit} from "@angular/core";
import {AbstractRestService} from "./genericservice";
import {ActivatedRoute, Router} from "@angular/router";
import {Object} from '../models/generic';
@Component({
  template: ""
})
export abstract class FormView<T> implements OnInit, OnDestroy {

  constructor(protected  service: AbstractRestService<T>, private router: Router, private activatedRoute: ActivatedRoute,
  @Inject({}) object: {[key: string]: Object}) {
  }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {

  }

}
