import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpService } from 'src/app/service/http.service';
import { Product } from '../produt.model';
import { Router } from '@angular/router'
@Component({
  selector: 'app-product-admin-list',
  templateUrl: './product-admin-list.component.html',
  styleUrls: ['./product-admin-list.component.scss']
})
export class ProductAdminListComponent implements OnInit {
  products: Array<Product> = [];
  productsForSearch = [];
  searchText = '';
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }
  /**
   * get all products
   */
  getProducts(): void {
    this.httpService.get('products/', '').subscribe((res: any) => {
      this.products = res;
      this.productsForSearch = res;
    })
  }

  /**
   * add new product
   */
  onClickOfAdd(): void {
    this.router.navigate(['product-admin/add-new']);
  }

  /**
   * used to edit product
   * @param id product id to be edit
   */
  onClickOfEdit(id: number) {
    this.router.navigate(['product-admin/edit/', id]);
  }

  /**
   * used to delete an item
   * @param id - item id
   */
  onClickOfDelete(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        let data = { product_id: id };
        this.httpService.delete('products/', id).subscribe((res: any) => {
          this.getProducts();
        });
      } else {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }

  /**
   * search products
   */
  search(): void {
    if (this.searchText === '') {
      this.getProducts();
    } else {
      this.products = this.productsForSearch.filter((ele: any) => {
        return (ele?.name.toLowerCase()).includes(this.searchText.toLowerCase()) || (ele?.description.toLowerCase()).includes(this.searchText.toLowerCase())
          || (ele?.keywords.toLowerCase()).includes(this.searchText.toLowerCase()
          )
      })
    }
  }

}
