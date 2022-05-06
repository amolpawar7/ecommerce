import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   products = [{title:"Redmi note 8",description:"product desctiption goes here"},
   {title:"Redmi note 7 ",description:"product desctiption goes here"},
   {title:"Redmi note 8",description:"product description goes here"},
   {title:"Redmi note 8",description:"product desctiption goes here"},
   {title:"Redmi note 8",description:"product desctiption goes here"},
   {title:"Redmi note 8",description:"product desctiption goes here"},
   {title:"Redmi note 8",description:"product desctiption goes here"},
   {title:"Redmi note 8",description:"product desctiption goes here"},
   {title:"test2",description:"product desctiption goes here"}
  
  
  
  
  
  ];
  
  constructor() {
    console.log("produ",)
   }

  ngOnInit(): void {
  }



}
