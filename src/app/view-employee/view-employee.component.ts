import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employees: Employee[] = [];
  searchText: string;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployee().subscribe(res => {
    this.employees = res['data'];
      this.employees.forEach(emp => {
        var isnum = /^[0-9]*$/.test(emp.phone);
        emp.phone = isnum ? emp.phone : "NA";
      })
    });
  }

  searchEmployee() {
    if (this.searchText.trim().length > 0) {
      this.employees = this.employees.filter(emp => emp.name.toLowerCase() == this.searchText.toLowerCase() || emp.address.city.toLowerCase() == this.searchText.toLowerCase());
    }
    else {
      this.getEmployees();
    }
  }
}
