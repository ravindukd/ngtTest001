import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { map } from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: any;

  constructor(private customerService: CustomerService) { }
  ngOnInit() {
    this.getCustomersList();
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
  value = 'sal';
  cusFilter: any = { name: '' };

}
