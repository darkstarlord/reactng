import { Route } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ErrorComponent } from "./components/error/error.component";

const routes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
];

export { routes }