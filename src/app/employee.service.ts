import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

export class Employee{
  id?:number;
  name?:string;
  phone?:string;
  address?:Address;
  constructor(){
    this.id=null;
    this.name=null;
    this.phone=null;
    this.address=new Address();
  }
}

export class Address{
  city?:string;
  address_line1?:string;
  address_line2?:string;
  postal_code?:string;
  constructor(){
    this.city=null;
    this.address_line1=null;
    this.address_line2=null;
    this.postal_code=null;
  }
}


@Injectable()

export class EmployeeService {

  private empUrl = '../assets/data/data.json';

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.empUrl);
  }

  postEmployee (emp: Employee) {
    return this.http.post<Employee>(this.empUrl, emp);
  }
}
