import { Route } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ErrorComponent } from "./components/error/error.component";
import { ErrorDetailComponent } from "./components/error-detail/error-detail.component";

const routes: Route[] = [
    { path: '', component: HomeComponent, data: { title: 'Home' } },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'error', component: ErrorComponent, pathMatch: 'full', data: { title: 'Error' } },
    { path: 'error/:id', component: ErrorDetailComponent, pathMatch: 'full', data: { title: 'Error' } },
    { path: '**', redirectTo: 'error'  }
];

export { routes }