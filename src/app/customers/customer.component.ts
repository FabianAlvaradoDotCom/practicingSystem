import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Customer } from './customer';

@Component({
    moduleId: module.id,
    selector: 'app-questions-component',
    templateUrl: 'customer.component.html'
})
export class CustomerComponent implements OnInit {
    customerForm: FormGroup; // We will refer to this in the template: [formGroup]="customerForm"
    customer: Customer = new Customer(); /* Manages the instance of the customer data we are binding to our template
    [I need to replace with the service]*/

    constructor(private myFormBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.customerForm = this.myFormBuilder.group({
            firstName: ['', [Validators.required, Validators.minLength(7)]],
            lastName: ['', [Validators.required, Validators.maxLength(10)]],
            email: ['', [Validators.required, Validators.email]],
            sendCatalog: true,
        });
    }

    save(): void {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }

    populateTestData(): void {

        this.customerForm.patchValue({
            firstName: "Jack",
            lastName: "Sparrow",
            email: "caribean@pirates.com",
            sendCatalog: false
        });

    }
 }
