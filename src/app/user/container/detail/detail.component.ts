import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Products} from "../../../../Model/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  item!: Products;

  constructor(private productService : ProductService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.readOne(id).subscribe((i) => {
      this.item =  i;
    });
  }
}
