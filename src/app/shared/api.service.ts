import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url  = " http://localhost:3000/Books";

  bookData = {
    "id": '',
    "BookName" : '',
    "BookPrice" : '',
    "Author" : '',
    "Published": '',
    "BookType" : '',
    "Quantity" :'',
    "Status" : '',
  }

  constructor(private http :HttpClient) { }

  toInt(data :string)
  {
    Number(data);
  }

  get()
  {
    return this.http.get(this.url);
  }

  post(data:any)
  {
    return this.http.post(this.url , data);
  }

  put(id :any , data:any)
  {
    return this.http.put(this.url +"/" + id, data);
  }

  delete(id:any)
  {
    return this.http.delete(this.url +"/" + id);
  }
}
