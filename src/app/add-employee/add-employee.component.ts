import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
  employee=new Employee();
  constructor(private router:Router, private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  saveEmployee() {
    if(this.employee.name==null||this.employee.name.length==0){
      alert('Name is required');
      return;
    }
    if(this.employee.name.length<4){
      alert('Name should be more than 4 characters');
      return;
    }
    if(this.employee.phone==null||this.employee.phone.length==0){
      alert('Phone is required');
      return;
    }
    var isnum = /^[0-9]*$/.test(this.employee.phone);
    if(!isnum){
      alert('Phone must contain only numbers');
      return;
    }
    this.router.navigateByUrl('/employees');
    // this.employeeService.postEmployee(this.employee).subscribe(()=>{
    //   this.router.navigateByUrl('/employee');
    // }
    // )    
  }
}
