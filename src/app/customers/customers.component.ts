import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../shared/services/customer.service";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  getCustomersList() {
    this.customerService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(customers => {
      console.log(customers)
      this.customers = customers;
    });
  }

  deleteCustomers() {
    this.customerService.deleteAll();
  }
}
