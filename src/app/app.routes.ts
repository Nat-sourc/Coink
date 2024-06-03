// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './pages/public/principal-page/principal-page.component';
import { CreateUserComponent } from './pages/public/create-user/create-user.component';
import { WelcomeCoinkComponent } from './pages/public/welcome-coink/welcome-coink.component';
import { EnterNumberComponent } from './pages/public/enter-number/enter-number.component';
import { FinallyComponent } from './pages/public/finally/finally.component';
import { ConfirmUserComponent } from './pages/private/confirm-user/confirm-user.component';
import { LoadingGuard } from './loading.guard';

export const routes: Routes = [
  { path: '', component: WelcomeCoinkComponent, canActivate: [LoadingGuard] },
  { path: 'principalPage', component: PrincipalPageComponent, canActivate: [LoadingGuard] },
  { path: 'enterNumber', component: EnterNumberComponent, canActivate: [LoadingGuard] },
  { path: 'createUser', component: CreateUserComponent, canActivate: [LoadingGuard] },
  { path: 'stepFinally/:id', component: FinallyComponent, canActivate: [LoadingGuard] },
  { path: 'private/welcomeCoink/:id', component: ConfirmUserComponent, canActivate: [LoadingGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
