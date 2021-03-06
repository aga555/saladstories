import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: any;
  bill: any;

  constructor() {
  }

  ngOnInit(): void {
    this.initialData();
  }

  updateTotoal() {
    this.bill = 0;
    for (let i in this.cartProducts) {
      this.bill = this.bill + this.cartProducts[i].price * this.cartProducts[i].quantity;
    }
  }

  removeItem(id) {
    this.cartProducts.splice(id, 1);
    if (this.cartProducts.length) {
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    } else {
      localStorage.setItem('cart', null);
    }
  }

  payBill() {
    if (this.cartProducts.length) {
      localStorage.removeItem('cart');
      this.initialData();
      this.bill = 0;
      alert('Your bill is' + this.bill);
    } else {
      alert('No items in cart');
    }
  }

  initialData() {
    let data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartProducts = JSON.parse(data);
      this.bill = 0;
      for (let i in this.cartProducts) {
        this.cartProducts[i]['quantity'] = 1;
        this.bill = this.bill + this.cartProducts[i].price  * this.cartProducts[i].quantity;

      }
    } else {
      this.cartProducts = [];
    }

  }

}
