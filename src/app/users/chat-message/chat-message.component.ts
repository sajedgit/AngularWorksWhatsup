import { Component, OnInit, Type, Input } from '@angular/core';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-chat-message',
  template: `
    <div *ngIf="user!==item.sender; else receiver">
      <div class="incoming_msg">
        <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
      
        <div class="received_msg">
          <div class="received_withd_msg">
            <p class="reciever" >{{item.reciever}}</p>
            <p> {{item.msg}}</p>
            <span class="time_date"> 11:01 AM    |    June 9</span></div>
        </div>
      </div>
    </div>
    
    <ng-template #receiver>
      <div class="outgoing_msg">
        <div class="sent_msg">
          <p> {{item.msg}}</p>
          <span class="time_date"> 11:01 AM    |    June 9</span> </div>
      </div>
    </ng-template>
  `
})
export class ChatMessageComponent {
 @Input() item: any;
 @Input() user: string;
}
