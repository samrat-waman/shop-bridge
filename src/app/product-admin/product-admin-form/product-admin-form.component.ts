import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../service/http.service';
import Swal from 'sweetalert2';
import { Product } from '../produt.model';

@Component({
  selector: 'app-product-admin-form',
  templateUrl: './product-admin-form.component.html',
  styleUrls: ['./product-admin-form.component.scss'],
})
export class ProductAdminFormComponent implements OnInit {
  product = new Product();
  isNew = true;
  productId = 0;
  constructor(private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params.id;
      if (this.productId) {
        this.getSpecificProduct(this.productId)
        this.isNew = false;
      }
    });

  }

  /**
   * get specific product value
   * @param id Product id
   */
  getSpecificProduct(id: number): void {
    this.httpService.get('products/', id).subscribe((res: any) => {
      this.product = res;
    })
  }

  /**
   * add product form
   * @param form - Form
   */
  onClickOfSubmit(form: any): void {
    form.submitted = true;
    if (form.valid) {
      if (this.productId) {
        this.httpService
          .put('products/', this.product, this.productId,)
          .subscribe(() => {
            Swal.fire(
              'Successfully Updated!',
              '',
              'success'
            )
            this.router.navigate(['product-admin']);
          });
      } else {
        this.httpService.post('products', this.product).subscribe(
          () => {
            Swal.fire(
              'Successfully Added!',
              '',
              'success'
            )
            this.router.navigate(['product-admin']);
          },
          () => {
          }
        );
      }
    }
  }
}



