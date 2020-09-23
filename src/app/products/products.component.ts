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
    this.router.navigate(['/cart']);
  }

  addToCart(index) {
    let product = this.products[index];
    let cartData = [];
    let data = localStorage.getItem('cart');
    if (data !== "null") {
      cartData = JSON.parse(data);
    }
    cartData.push(product);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    data = localStorage.getItem('cart');
    this.products[index].isAdded = true;
  }

  updateCartData(cartData) {
    this.cartProducts = cartData;
  }
}
