import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  chatData:any;

  constructor(private http:HttpClient) { 

  }

  ngOnInit(): void {
    this.http.get('https://sajedaiub.com/Development/angular_chat/get_message.php').subscribe(
      (data)=>{
       // console.warn(data)
       this.chatData=data
      }
    )
  }

}
