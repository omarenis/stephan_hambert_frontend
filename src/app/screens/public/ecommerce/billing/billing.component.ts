import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractRestService} from "../../../../services/genericservice";
import {Order} from "../../../../models/ecommerce/Order";

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  constructor(private router: Router, private activeRoute: ActivatedRoute, private service: AbstractRestService<Order>) {
  }
  ngOnInit() {
  }
}
