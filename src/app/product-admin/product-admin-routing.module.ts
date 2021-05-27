import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAdminFormComponent } from './product-admin-form/product-admin-form.component';
import { ProductAdminListComponent } from './product-admin-list/product-admin-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductAdminListComponent,
  },
  {
    path: 'add-new',
    component: ProductAdminFormComponent,
  },
  {
    path: 'edit/:id',
    component: ProductAdminFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductAdminRoutingModule {}
