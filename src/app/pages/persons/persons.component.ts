import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NamesPipe } from '../pipe/names.pipe';
/*
Statement
In this exercise, you need to refactor a transform function inside a component, which is called inside your template.
 */
@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [ NamesPipe,CommonModule ,NgFor],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.scss',
})
export class PersonsComponent {
  persons:string[] = ['toto', 'jack', 'yasser', 'hima', 'saeed', 'mosab'];
$index!: number;



 
}
