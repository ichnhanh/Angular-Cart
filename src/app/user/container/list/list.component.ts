import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {AddCart, Products} from "../../../../Model/product";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  products!: Products[];
  carts : AddCart[]  = [];
  constructor(private productService:  ProductService) {
  }

  ngOnInit() {
    this.productService.read().subscribe({
      next: products => {
        this.products =  products;
      }
    });
  }

}
