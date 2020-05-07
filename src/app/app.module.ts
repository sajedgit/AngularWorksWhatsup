import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {UsersModule} from './users/users.module'
import { ChatModule } from './chat/chat.module';
import { HttpClientModule } from '@angular/common/http'
import { ChatSnippetComponent } from './users/chat-snippet/chat-snippet.component';
import { ChatMessageComponent } from './users/chat-message/chat-message.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatSnippetComponent,
    ChatMessageComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    ChatModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
