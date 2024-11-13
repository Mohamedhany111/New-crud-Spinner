import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule,FormGroup,FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from '../../Services/list.service';
import { ListType } from '../../interfaces/list-type';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { Subscription } from 'rxjs';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-input',
  standalone: true,
  imports:[ReactiveFormsModule,CheckboxComponent,],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  myForm= new FormGroup({
    completed: new FormControl(),
    id:new FormControl(),
    userId:new FormControl(),
    title:new FormControl('',{nonNullable:true})
  })
  id!:number;
  user!:ListType;
  newUser!:ListType[];
  userData!:ListType
  sub!:Subscription
  changeStatus!:Boolean
   @Output() dataEvent = new EventEmitter<any>();
   @Output() dataUpdated = new EventEmitter<ListType>();


  constructor(private Fb:FormBuilder, private _route:ActivatedRoute,private _list:ListService , private Router:Router , private _todo:TodoService){
    this.sub = this._todo.todoForUpdate$.subscribe(todo => {
      if(!todo) return;
      this.myForm.patchValue(todo);
       console.log(typeof(this.myForm.get('completed')?.value))
       console.log(this.myForm.value)
      //  if(this.myForm.controls.completed.value === true){
      //   this.changeStatus= true
      // }else{
      //   this.changeStatus = false
      // }
    })
  }
ngOnInit(): void {

}
update(){
  const todo = this.myForm.getRawValue();
  this._todo.updatedTodo(todo);
  this.myForm.reset();
  this.dataUpdated.emit(todo);
}
get completedControl(): FormControl {
  return this.myForm.get('completed') as FormControl;
}
newData(){
  const newData = this.myForm.value;
  console.log(newData)
  this.Router.navigate(['/todo'],{
    queryParams: { data: JSON.stringify(newData) }
  });;
}
post(){
    this._list.postData(this.myForm.getRawValue()).subscribe((res)=>{
      console.log(res)
      this.newUser = res
      console.log(this.newUser)
      this.dataEvent.emit(this.newUser)
    })
}
reset(){
  this.myForm.reset()
}

}
