import { Component } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent {
  newPerson:Person = {
    FirstName:"",
    LastName:"",
    DateOfBirth : new Date(),
    Email:"",
    PhoneNumber:""
  }

  people:Person[]=[];

  addPerson(){
    this.people.push(this.newPerson);

    this.newPerson={
        FirstName:"",
        LastName:"",
        DateOfBirth : new Date(),
        Email:"",
        PhoneNumber:""
    };
  }

}
