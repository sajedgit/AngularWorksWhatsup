import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen/screen.component';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [ScreenComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    ScreenComponent
  ]
})
export class ChatModule { }
