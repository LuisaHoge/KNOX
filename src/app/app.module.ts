import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterAndLoginComponent } from './login/register-and-login/register-and-login.component';
import { TestpageComponent } from './testpage/testpage/testpage.component';
import { NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImpressumComponent } from './informations/impressum/impressum.component';

import { PasswordstrengthService} from './login/LoginServices/passwordstrength.service';
import { AboutUsComponent } from './informations/about-us/about-us.component';
import { MyProfileComponent } from './user/my-profile/my-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterAndLoginComponent,
    TestpageComponent,
    ImpressumComponent,
    AboutUsComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,  
    NgbModule.forRoot(),                           
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/Login',
        pathMatch: 'full'
      },
      {
        path: 'Login',
        component: RegisterAndLoginComponent
      },
      { path: 'home', component: TestpageComponent},
      { path: 'Login', component: RegisterAndLoginComponent},
      { path: 'Impressum', component: ImpressumComponent},
      { path: 'AboutUs', component: AboutUsComponent},
      { path: 'MyProfile', component: MyProfileComponent},

    ])
      
  ],
  providers: [PasswordstrengthService],
  bootstrap: [AppComponent]
})
export class AppModule {}

