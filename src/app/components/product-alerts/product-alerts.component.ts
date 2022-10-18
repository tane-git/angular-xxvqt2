import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../data/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

    constructor() { }

    @Input() product: Product | undefined;
    @Output() notify = new EventEmitter();
}
