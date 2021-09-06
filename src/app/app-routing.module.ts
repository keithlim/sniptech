import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainscreenComponent } from './components/mainscreen/mainscreen.component';
import { RedirectComponent } from './components/redirect/redirect.component';

const routes: Routes = [
  { path: '', component: MainscreenComponent, pathMatch: 'full' },
  { path: '**', component: RedirectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
