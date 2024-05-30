import { Routes } from '@angular/router';
import { PrincipalPageComponent } from './pages/public/principal-page/principal-page.component';
import { CreateUserComponent } from './pages/public/create-user/create-user.component';
import { WelcomeCoinkComponent } from './pages/public/welcome-coink/welcome-coink.component';
import { EnterNumberComponent } from './pages/public/enter-number/enter-number.component';

export const routes: Routes = [
    {path:'',component:WelcomeCoinkComponent},
    {path:'principalPage',component:PrincipalPageComponent},
    {path:'enterNumber',component:EnterNumberComponent},
    {path:'createUser',component:CreateUserComponent},
];
