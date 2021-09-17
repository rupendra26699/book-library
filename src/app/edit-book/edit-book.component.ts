import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(private fb : FormBuilder , private api : ApiService , private router:Router) { }
  form : FormGroup = this.fb.group({
    "Id":new FormControl(''),
    "BookName" : new FormControl(''),
    "BookPrice" :new FormControl(''),
    "Author" :new FormControl(''),
    "Published":new FormControl(''),
    "BookType" :new FormControl(''),
    "Quantity" :new FormControl(''),
    "Status" : new FormControl(''),

  });
  

  books:any = [];
 
  showadd!:boolean;
  showedit!:boolean;
  
  getBooks(){
    this.api.get().subscribe((res: any)=>
    {
      this.books = res;
    })
  }
  check !: boolean;
  

  updateBook(){

    this.api.bookData.BookName = this.form.value.BookName;
      this.api.bookData.BookPrice = this.form.value.BookPrice;
      this.api.bookData.Author = this.form.value.Author;
      this.api.bookData.Published = this.form.value.Published;
      this.api.bookData.BookType = this.form.value.BookType;
      this.api.bookData.Quantity = this.form.value.Quantity;
      this.api.bookData.Status = this.form.value.Status;

      this.api.put(this.api.bookData.id , this.api.bookData).subscribe((res)=>
        {
          alert("Book has been Updated");
          this.router.navigate(['dashboard']);
          this.form.reset();
          this.getBooks();
        })
        
    }
   

  ngOnInit(): void {
    
    this.form.controls.BookName.setValue(this.api.bookData.BookName);    
    this.form.controls.BookPrice.setValue(this.api.bookData.BookPrice); 
    this.form.controls.Author.setValue(this.api.bookData.Author); 
    this.form.controls.Published.setValue(this.api.bookData.Published); 
    this.form.controls.BookType.setValue(this.api.bookData.BookType); 
    this.form.controls.Quantity.setValue(this.api.bookData.Quantity); 
    this.form.controls.Status.setValue(this.api.bookData.Status); 
    this.api.bookData.BookName = this.form.value.BookName;
      this.api.bookData.BookPrice = this.form.value.BookPrice;
      this.api.bookData.Author = this.form.value.Author;
      this.api.bookData.Published = this.form.value.Published;
      this.api.bookData.BookType = this.form.value.BookType;
      this.api.bookData.Quantity = this.form.value.Quantity;
      this.api.bookData.Status = this.form.value.Status;
      this.books=this.api.bookData
    
  }
  

}
