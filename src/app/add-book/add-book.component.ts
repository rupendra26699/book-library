import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookData = {
    "id": '',
    "BookName" : '',
    "BookPrice" : '',
    "Author" : '',
    "Published": '',
    "BookType" : '',
    "Quantity" :'',
    
  }


  
  constructor(private fb : FormBuilder , private api : ApiService , private router:Router) { }
  
  form : FormGroup = this.fb.group({
    "Id":new FormControl(''),
    "BookName" : new FormControl(''),
    "BookPrice" :new FormControl(''),
    "Author" :new FormControl(''),
    "Published":new FormControl(''),
    "BookType" :new FormControl(''),
    "Quantity" :new FormControl(''),


  });
  books:any = [];
  showadd!:boolean;
  showedit!:boolean;

  ngOnInit(): void {
  }
  
  getBooks(){
    this.api.get().subscribe((res: any)=>
    {
      this.books = res;
    })
  }

 
  addbook(){
   
    this.bookData.id = this.form.value.id;
    this.bookData.BookName = this.form.value.BookName;
    this.bookData.BookPrice = this.form.value.BookPrice;
    this.bookData.Author = this.form.value.Author;
    this.bookData.Published = this.form.value.Published;
    this.bookData.BookType = this.form.value.BookType;
    this.bookData.Quantity = this.form.value.Quantity;    
  
    if(this.form)
    {
      this.api.post(this.bookData).subscribe(()=>{
        alert("Book Added Successfully!!");
        this.router.navigate(['dashboard']);
        this.form.reset();
        
      })
    }
    }

}

