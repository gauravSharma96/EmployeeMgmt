import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employees: Employee[];
  employee = new Employee();

  constructor(private router: Router, private route: ActivatedRoute, private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.employeeService.getEmployee().subscribe(res => {
        this.employees = res['data'];
        this.employee = this.employees.find(emp => emp.id == params['id'])
      });
    })
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
