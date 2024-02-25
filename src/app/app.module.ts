import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { HeaderComponent } from './components/header/header.component';
import { UkSercicesComponent } from './components/uk-sercices/uk-sercices.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ChooseUsComponent } from './components/choose-us/choose-us.component';
import { UniversalStudyComponent } from './components/universal-study/universal-study.component';
import { OurNumbersComponent } from './components/our-numbers/our-numbers.component';
import { FooterComponent } from './components/footer/footer.component';
import { AcademicStudiesComponent } from './components/academic-studies/academic-studies.component';
import { HomeComponent } from './components/home/home.component';
import { ShortTermComponent } from './components/short-term/short-term.component';
import { LocationComponent } from './components/location/location.component';
import { AccommodationComponent } from './components/accommodation/accommodation.component';
import { WelfareSupportComponent } from './components/welfare-support/welfare-support.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { GetApplicationComponent } from './components/get-application/get-application.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import {NativeDateAdapter} from '@angular/material/core';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    UkSercicesComponent,
    AboutUsComponent,
    ChooseUsComponent,
    UniversalStudyComponent,
    OurNumbersComponent,
    FooterComponent,
    AcademicStudiesComponent,
    HomeComponent,
    ShortTermComponent,
    LocationComponent,
    AccommodationComponent,
    WelfareSupportComponent,
    GallaryComponent,
    ContactComponent,
    GetApplicationComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    LottieModule.forRoot({ player: playerFactory }),
    AppRoutingModule,
    NgxPaginationModule,
    MatMomentDateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    UkSercicesComponent,
    AboutUsComponent,
    ChooseUsComponent,
    UniversalStudyComponent,
    OurNumbersComponent,
    FooterComponent,
    AcademicStudiesComponent,
    LocationComponent,
    AccommodationComponent,
    WelfareSupportComponent,
    GallaryComponent,
    ContactComponent,
    GetApplicationComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
