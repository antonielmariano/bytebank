import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { ExtractComponent } from './extract/extract.component';
import { registerLocaleData } from "@angular/common"
import localePt from '@angular/common/locales/pt'
import { AppRountingModule } from './app-routing.module';


registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    NewEntryComponent,
    ExtractComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRountingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:"pt"},
    {provide: DEFAULT_CURRENCY_CODE, useValue:"BRL"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
