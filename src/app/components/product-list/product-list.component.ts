import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  allProducts = [
    {
      name: 'product 1',
      description: 'description 1'
    },
    {
      name: 'product 2',
      description: 'description 2'
    },
    {
      name: 'product 3',
      description: 'description 3'
    },
    {
      name: 'product 4',
      description: 'description 4'
    },
    {
      name: 'product 5',
      description: 'description 5'
    },
    {
      name: 'product 6',
      description: 'description 6'
    }
  ]
  products: any;
  currentProduct = true;
  currentIndex = -1;
  name = '';
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): any {
    this.currentProduct = false;
    this.products = this.allProducts;
  }

  searchByName(): any {
    
  }

  setCurrentProduct(product: any, i: any): any {
    this.currentProduct = true;
    this.currentIndex = i;
    this.products = product
  }

  deleteAllProducts(): any {
    this.products = "";
    this.allProducts = [];
  }
}
