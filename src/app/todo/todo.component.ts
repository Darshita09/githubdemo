import { Component, OnInit } from '@angular/core';
import {Task} from './taskclass'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 
  status:string[]=[
    'done',
    'pending'
  ];
  arr:Task[]=[
    new Task(1,'going for tution','pending'),
    new Task(2,'go for walking','done'),
    new Task(3,'practice of angular','pending')
  ];

  constructor() { }

  ngOnInit() {
  }
  ondelete(item:Task){
    this.arr.splice(this.arr.indexOf(item),1);
  }
  onupdate(item:Task){
    if(item.status=='done'){
      item.status='pending';
    }
    else{
      item.status='done';
    }
    }
  onadd(x,y,z){
    this.arr.push(new Task(x,y,z));
  }
}
