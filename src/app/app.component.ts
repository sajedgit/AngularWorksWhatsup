import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'whatsup';
  chatData:any; 
  interval: any;
  name:any;
  user:any;
  write_msg_block=false;
  login_block=true;
  logout_btn=false;
  isLogin=false;

  constructor(private http:HttpClient) { 

   

  }

  ngOnInit(): void {

    this.refreshData();
    this.interval = setInterval(() => { 
        this.refreshData(); 
    }, 100000000);
    
    

  }




  refreshData(){
    this.http.get('https://sajedaiub.com/Development/angular_chat/get_message.php').subscribe(
      (data)=>{
       // console.warn(data)
       this.chatData=data
      }
    )
}


login(username:any)
{
  //alert(username.value);
  localStorage.setItem('currentUser', username.value);
  //localStorage.setItem('currentUser', JSON.stringify(username));
  this.user=username.value;
  this.write_msg_block=true;
  this.login_block=false;
  this.logout_btn=true;
  this.isLogin=true;
}

show()
{
  const user = localStorage.getItem('currentUser');
 // const user = JSON.parse(localStorage.getItem('currentUser'));
  alert(user);
}

logout()
{
  localStorage.removeItem('currentUser');
  this.write_msg_block=false;
  this.login_block=true;
  this.logout_btn=false;
  this.isLogin=false;
}


send(msg:any)
{
  const user = localStorage.getItem('currentUser');
  const url="http://sajedaiub.com/Development/angular_chat/post_message.php?msg="+msg.value+"&sender="+user+"&reciever=";
  this.http.get(url).subscribe(
      (data)=>{
       // console.warn(data)
       this.chatData=data
      }
    )
   
}

}
