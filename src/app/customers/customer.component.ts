import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

import { Customer } from './customer';


function fieldsMatcher(c: AbstractControl) {
    let emailControl = c.get('email');
    let confirmControl = c.get('confirmEmail');

    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return { 'match' : true };
}




function ratingRange(min: number, max: number): ValidatorFn { // FACTORY FUNCTION
    return (c: AbstractControl): { [key: string]: boolean } | null => {
        if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { 'range': true };
        };
        return null;
    }
}



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
            emailGroup: this.myFormBuilder.group({
                email: ['', [Validators.required, Validators.email]],
                confirmEmail: ['', Validators.required]
            }, { validator: fieldsMatcher }),
            phone: '',
            notification: 'email',
            rating: ['', ratingRange(1, 5)],
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
    setNotification(notifyVia: string): void {
        const phoneControl = this.customerForm.get('phone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    }
}
