import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/Product';
import { ProductService } from '../services/product.service';
import { CartItemservice } from '../services/Cartitem.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CartItem } from 'src/model/CartItem';
import { Allocation } from 'src/model/Allocation';
import { AllocationService } from '../services/Allocation.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentPage: any = 1;
  itemsPerPage: any = 10;
  prod: Product = new Product();
  item!: CartItem
  al!: Allocation
  prods!: Product[];
  idcart :number =3
  totalproducts!: number;
  total !: any
  constructor(
    private prodservice: ProductService,
    private router: Router,
    private itemservice: CartItemservice,
    private allocationService: AllocationService
  ) { }

  ngOnInit(): void {
    this.getproducts()
  }

  tocart(product:Product)
  {
    this.item =new CartItem()
    this.item.price=product.price;
    this.item.quantity=1
    this.item.product=product;
    console.log(this.item)

    this.itemservice.createitem( this.item,this.idcart).subscribe(d=>{
      Swal.fire({
        icon: 'info',
        text: 'Added To carte ',
        showConfirmButton: false,
        timer: 2000, // 2 seconds

      });
    })

  }
  // here is the allocation of the product
  allocation(product:Product)
  {
    this.al =new Allocation()

    this.al.price=product.price;
    this.al.quantity=1
    this.al.product=product;
    console.log(this.item)

    this.allocationService.createAllocation( this.al,this.idcart).subscribe(d=>{
      Swal.fire({
        icon: 'info',
        text: 'Added To carte ',
        showConfirmButton: false,
        timer: 2000, // 2 seconds

      });
    })

  }
  command(product:Product)
  {

  }

  getproducts() {

    this.prodservice.getProducts().subscribe(data => {
      if (data != null) {
        console.log(data.length)
        this.prods = data;
        this.totalproducts = data.length;
        this.total = this.totalproducts / 10
      } else {
        this.totalproducts = 0;
        this.prods = [];
      }
    }, error => {
      Swal.fire({
        icon: 'error',
        text: 'Error, server not responding!',
        showConfirmButton: false,
        timer: 2000, // 2 seconds

      });
    });
  }




  editproduct(product: Product) {

    this.prodservice.findProductById(product.idProduct).subscribe(data => {
      this.prod = data;

    }
    );

  }





}
