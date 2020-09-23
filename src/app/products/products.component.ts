import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  cartProducts: any;
  products: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    let data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }
    this.products = [
      {
        id: 1,
        title: 'spring salat',
        img: 'assets/salad1.jpg',
        price: 2,
      },
      {
        id: 2,
        title: ' summer salat',
        img: 'assets/salad2.jpg',
        price: 3
      },
      {
        id: 3,
        title: 'autumn salat',
        img: 'assets/salad3.jpg',
        price: 4
      },
      {
        id: 4,
        title: 'winter salat',
        img: 'assets/salad4.jpg',
        price: 5
      },

    ];
  }

  goToCart() {

  }

  addToCart(i: number) {

  }
}
