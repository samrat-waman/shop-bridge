import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductAdminRoutingModule } from './product-admin-routing.module';
import { ProductAdminFormComponent } from './product-admin-form/product-admin-form.component';
import { ProductAdminListComponent } from './product-admin-list/product-admin-list.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductAdminFormComponent, ProductAdminListComponent],
  imports: [CommonModule, ProductAdminRoutingModule, MatIconModule, FormsModule],
})
export class ProductAdminModule { }
