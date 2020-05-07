import { Component, OnInit, Type, Input } from '@angular/core';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-chat-snippet',
  template: `
    <div class="chat_people">
      <div class="chat_img"> <img [src]="img" alt="sunil"> </div>
      <div class="chat_ib">
        <h5>{{sender}} <span class="chat_date">{{date}}</span></h5>
        <p>{{msg}}</p>
      </div>
    </div>
  `
})
export class ChatSnippetComponent {
 @Input() sender: string;
 @Input() msg: string;
 @Input() date: string;
 @Input() img: string;
}
