import { Component, OnInit } from '@angular/core';
import { ContactListComponent } from "../contact-list/contact-list.component";
import { ContactService } from "../contact.service";
import { Contact } from "../contact";
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  id: number;
  contact: Contact;

  constructor(private route: ActivatedRoute,private router: Router,
    private contactService: ContactService) { }

  ngOnInit() {
    this.contact = new Contact();

    this.id = this.route.snapshot.params['id'];
    
    this.contactService.getContact(this.id)
      .subscribe(data => {
        console.log(data)
        this.contact = data;
      }, error => console.log(error));
  }

}
