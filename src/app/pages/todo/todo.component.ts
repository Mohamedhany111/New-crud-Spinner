import { Component, OnInit } from '@angular/core';
import { ListService } from '../../Services/list.service';
import { ListType } from '../../interfaces/list-type';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {  InputComponent } from "../input/input.component";
import { TodoService } from '../../todo.service';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, InputComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit  {
  user!:ListType[];
  newUserdata!:any;
  index!:number
  changestatus:boolean =true;
  receivedData!:ListType;
  numberofId!: number;
constructor( 
  private _list:ListService,private router:Router,private _route:ActivatedRoute
,private _todo:TodoService
){
    // this._todo.updatedTodo$.subscribe((todo) => {
    //   if (!todo) return;
    //   // get Todo by id from todos
    //   this.user = this.user.map(a => a.id == todo.id ?todo : a);
    // });
}
ngOnInit(): void {
 this.showData();
//  this.recieveUpdateData()

}
showData(){
  this._list.showData().subscribe((res)=>{
    this.user = res ;
    console.log(this.user)
    })
}
Delete(index:number){
  this.user.splice(index,1)
}
update(todo:ListType){
  // this.router.navigate(['/input'],{queryParams:{id}});
  // this.numberofId= id
  // console.log({queryParams:{id}});
  this._todo.setTodo(todo)

}
dataUpdated(todo: ListType) {
  this.user = this.user.map(a => a.id == todo.id ?todo : a);
}
recieveUpdateData(){
  this._route.queryParams.subscribe(params => {
    if (params['data']) {
      this.receivedData = JSON.parse(params['data']);
      console.log(this.receivedData);
      this.updateData()

    }
  });
}
  updateData(){
  this.user.forEach((e)=>{
      if(this.receivedData.id == e.id){
              this.user.splice(this.numberofId-1 , 1 , this.receivedData)
      }
 
  })
    }
    receiveTheData(data:any){
    this.newUserdata = data 
    this.user.push(this.newUserdata)
    console.log("hello child", this.newUserdata)
}
}