import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CaculatorComponent } from './caculator/caculator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import {FormsModule} from '@angular/forms';
import { AngularNameCardComponent } from './angular-name-card/angular-name-card.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CaculatorComponent,
    ColorPickerComponent,
    AngularNameCardComponent,
    ProgressbarComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
