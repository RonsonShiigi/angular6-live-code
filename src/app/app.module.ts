import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // for input handling
import { RouterModule } from '@angular/router'; // for routing
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'about', component: AboutComponent },
        { path: '**', redirectTo: '', pathMatch: 'full' }
      ],
      { enableTracing: true } // this is for debugging only
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
