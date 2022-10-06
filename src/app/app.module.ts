import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AuthService } from "./services/auth.service";

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { PokemonModule } from "./core/features/pokemon/pokemon.module";
//import {NgxChartsModule} from '@swimlane'
import { HttpClientModule } from '@angular/common/http';

import {
  HighchartsChartModule
} from "highcharts-angular";
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {  MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { BookNowComponent } from './components/book-now/book-now.component';
import { LandingComponent } from './components/landing/landing.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore,  } from '@angular/fire/firestore';
import { HotToastModule } from '@ngneat/hot-toast';
import { AppRoutingModule } from './app-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AppointmentDetailsComponent } from './components/appointment-details/appointment-details.component';
import { SalonComponent } from './components/salon/salon.component';
import { ReportTestComponent } from './components/report-test/report-test.component';
import { ProfileComponent } from './components/profile/profile.component'; 
import { getStorage, provideStorage } from '@angular/fire/storage';
import { MenuComponent } from './components/menu/menu/menu.component';
import { MenuCategoryComponent } from './components/menu/menu-category/menu-category.component';
import { MenuCategoryItemComponent } from './components/menu/menu-category-item/menu-category-item.component';
import { MatNativeDateModule } from '@angular/material/core';
import { AddComponent } from './components/book-now/add/add.component';
import { ListComponent } from './components/book-now/list/list.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SalesComponent } from './components/sales/sales.component';
import { CancellationsComponent } from './components/cancellations/cancellations.component';
import { HeaderComponent } from './components/shared2/header/header.component';
import { FooterComponent } from './components/shared2/footer/footer.component';
import { AppointmentCartComponent } from './components/appointment-cart/appointment-cart.component';
import { NavComponent } from './components/shared2/nav/nav.component';
import { FiltersComponent } from './components/appointment-cart/filters/filters.component';
import { ProductListComponent } from './components/appointment-cart/product-list/product-list.component';
import { CartComponent } from './components/appointment-cart/cart/cart.component';
import { CartItemComponent } from './components/appointment-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/appointment-cart/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    BookNowComponent,
    LandingComponent,
    AddAppointmentComponent,
    AppointmentListComponent,
    AppointmentDetailsComponent,
    SalonComponent,
    ReportTestComponent,
    ProfileComponent,
    MenuComponent,
    MenuCategoryComponent,
    MenuCategoryItemComponent,
    AddComponent,
    ListComponent,
    SalesComponent,
    CancellationsComponent,
    HeaderComponent,
    FooterComponent,
    AppointmentCartComponent,
    NavComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDatepickerModule,
    HighchartsChartModule,
    MatNativeDateModule,
    NgbModule,
    PokemonModule,
    MatTableModule,
    HttpClientModule ,
    
    
   
    
  
   
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot()
  ],
  exports: [PokemonModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }


