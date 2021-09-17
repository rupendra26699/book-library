import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private api :ApiService ,private router : Router) { }
  
  books:any = [];
  loggedin_user:any = "";
  username:any = "";
  status="";
  
  ngOnInit(): void {
    this.loggedin_user = localStorage.getItem("Username")?.slice(0,2);
    this.username = localStorage.getItem("Username");
    this.getBooks();   
  }
  
  getBooks(){
    this.api.get().subscribe((res: any)=>
      {
        this.books = res;
      })
     
      // if(Number(JSON.stringify(this.books.Quantity)) > 0){
      //   this.status="available";
      // }
      // else{
      //   this.status = "sold";
      // }
  }

  delete(item: any){
    this.api.delete(item.id).subscribe(()=>
    {
      alert("Book has been deleted");
        this.getBooks();
    })
  }

  onadd(){
      this.router.navigate(['addBook']);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
  
   
  onedit(item:any){
      
      this.getBooks();
      this.api.bookData.id = item.id;
      this.api.bookData.BookName = item.BookName;
      this.api.bookData.BookPrice = item.BookPrice;
      this.api.bookData.Author = item.Author;
      this.api.bookData.Published = item.Published;
      this.api.bookData.BookType = item.BookType;
      this.api.bookData.Quantity = item.Quantity;
      this.api.toInt(this.api.bookData.Quantity);
      console.log(this.api.bookData.Quantity);
      this.router.navigate(['editBook']);

    }
    
    
  
}
