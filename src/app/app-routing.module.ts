import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductPageModule)
  },
  { path: 'baju', loadChildren: './baju/baju.module#BajuPageModule' },
  { path: 'celana', loadChildren: './celana/celana.module#CelanaPageModule' },
  { path: 'bajupria', loadChildren: './bajupria/bajupria.module#BajupriaPageModule' },
  { path: 'tambah', loadChildren: './tambah/tambah.module#TambahPageModule' },
  { path: 'keranjang', loadChildren: './keranjang/keranjang.module#KeranjangPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
