import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFirestore} from 'angularfire2/firestore';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';
import {fireconfig} from '../app/app.firebase.config';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
firebase.initializeApp(fireconfig);
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule ,AngularFirestoreModule,AngularFireAuthModule,AngularFireDatabaseModule,AngularFireStorageModule,AngularFireModule.initializeApp(fireconfig),IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
