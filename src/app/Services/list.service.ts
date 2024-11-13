import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListType } from '../interfaces/list-type';
interface ITodoUpdateResponse {
  body: ListType;
  id: number;
}
@Injectable({
  providedIn: 'root'
})

export class ListService {

  constructor(private _http:HttpClient) { }

  showData():Observable<ListType[]>{
      return this._http.get<ListType[]>(`https://jsonplaceholder.typicode.com/todos`);
  }
  updateData(id: number, body: ListType) {
    return this._http.put<ITodoUpdateResponse>(`https://jsonplaceholder.typicode.com/todos/${id}`, { body });
  }
  postData(userData: any):Observable<any> {
    return this._http.post('https://jsonplaceholder.typicode.com/todos', userData);
  }
}
