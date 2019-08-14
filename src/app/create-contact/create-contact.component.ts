import { Component, OnInit } from '@angular/core';
import { ContactService } from "../contact.service";
import { Contact } from "../contact";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  contact: Contact = new Contact();
  submitted = false;

  constructor(private contactService: ContactService,private router: Router) { }

  ngOnInit() {
  }

  newContact(): void {
    this.submitted = false;
    this.contact = new Contact();
  }

  save() {
    console.log(this.contact)
    this.contactService.createContact(this.contact)
      .subscribe(data => console.log(data), error => console.log(error));
    this.contact = new Contact();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/contacts']);
  }
}
