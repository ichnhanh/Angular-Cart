import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AddCart, Products} from "../../../../Model/product";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit, OnDestroy{

  constructor(private productService: ProductService, private route: Router)  {

  }
  @Input() products!: Products[];
  carts: AddCart[]  = [];
  icons !:string[];
  ngOnInit() {
    this.icons = this.productService.icons;
  }

  createCart(p: Products) {
    const cart: AddCart = {...p, "quantity": 1};
    if (!this.carts.some(cart => cart.id === p.id)) {
      this.carts = [...this.carts, cart];
    }
  }

  ngOnDestroy() {
  }

  delete(i: number) {
    this.carts.splice(i, 1);
  }
}
