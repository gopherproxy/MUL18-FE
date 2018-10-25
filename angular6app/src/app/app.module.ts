import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Firebase imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

// form module
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FirebaseComponent } from './firebase/firebase.component';

const appRoutes: Routes = [
 // sets home page (base URL)
  { path: 'home', component: HomeComponent },
// redirects to home
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'firebase', component: FirebaseComponent }	
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(appRoutes, { useHash: true }),
    HttpClientModule,
	AngularFireModule.initializeApp(environment.firebase),
	AngularFireDatabaseModule,
	FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
