import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})

export class CandidatesComponent implements OnInit {
  searchToken: string;
  candidate_data = [

    { "id": 11, "name": "Ash", "department": "Finance", "joining_date": "8/10/2016" },
    { "id": 12, "name": "John", "department": "HR", "joining_date": "18/1/2011" },
    { "id": 13, "name": "Zuri", "department": "Operations", "joining_date":" 28/11/2019" },
    { "id": 14, "name": "Vish", "department": "Development", "joining_date":" 7/7/2017" },
    { "id": 15, "name": "Barry", "department": "Operations", "joining_date": "19/8/2014" },
    { "id": 16, "name": "Ady", "department": "Finance", "joining_date": "5/10/2014" },
    { "id": 17, "name": "Gare", "department": "Development", "joining_date": "6/4/2014"},
    { "id": 18, "name": "Hola", "department": "Development", "joining_date": "8/12/2010" },
    { "id": 19, "name": "Ola", "department": "HR", "joining_date":" 7/5/2011" },
    { "id": 20, "name": "Kim", "department": "Finance", "joining_date": "20/10/2010" }
  ]

  dataByName=[];
  date = new Date();
  constructor() { }

  ngOnInit(): void { 
     
  } 
   

  
  key:boolean = false;
 
  sortByName(key){  
  console.log(key)
   if(this.key = !this.key){    
      this.candidate_data.sort((a, b) => (a.name < b.name ? -1 : 1))
    
   }else{
    this.candidate_data.sort((a, b) => (a.name > b.name ? -1 : 1))
   }
  }
  
 
  SortByDate(key){  
    console.log(key)
    if(this.key = !this.key){   
         this.candidate_data.sort((a, b) => (a.joining_date < b.joining_date ? -1 : 1))     
    }else{
      this.candidate_data.sort((a, b) => (a.joining_date > b.joining_date ? -1 : 1))
    }    
   }

 

   deleteEmp(dept){
    console.log(dept);
    
     if(dept.department=="Development"){
       console.log(dept);
       this.candidate_data = this.candidate_data.filter(item => item != dept);
       
     }else{
       alert("Only Development Deparment can be deleted");
     }

   }

  
 
  
}