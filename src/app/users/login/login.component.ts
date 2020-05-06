import { Component, OnInit, Type } from '@angular/core';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  title: string;
  myHero: string;
  arrData;
  obj={
    name:'sajed',
    age:32
  }

  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
    this.arrData = [1,2,3];
    this.obj={
      name:'sajed',
      age:32
    }
  }

  ngOnInit(): void {
  }

}
