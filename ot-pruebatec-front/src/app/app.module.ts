import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


//Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { UploadFileComponent } from './components/addform/upload.component'; 



//Angular Material Components
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';


//AntDesign Components 
import { NzCardModule } from 'ng-zorro-antd/card';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { AddformComponent } from './components/addform/addform.component';
import { EditFormComponent } from './components/editform/editform.component';
import { EditComponent } from './components/edit/edit.component';
import { CardComponent } from './components/card/card.component';
import { NzIconModule } from 'ng-zorro-antd/icon';


registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AddformComponent,
    EditComponent,
    CardComponent,
    UploadFileComponent,
    EditFormComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    NzCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    NzIconModule,

    
  
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [{ provide: NZ_I18N, useValue: es_ES, }],
  bootstrap: [AppComponent]
})
export class AppModule { }
