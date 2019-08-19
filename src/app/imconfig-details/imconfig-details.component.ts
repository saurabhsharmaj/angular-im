import { Component, OnInit } from '@angular/core';
import { IMConfigService } from "../imconfig.service";
import { ImConfig } from "../imconfig";
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imconfig-details',
  templateUrl: './imconfig-details.component.html',
  styleUrls: ['./imconfig-details.component.css']
})
export class ImconfigDetailsComponent implements OnInit {

  id: number;
  imconfig: ImConfig;

  constructor(private route: ActivatedRoute,private router: Router,
    private imconfigService: IMConfigService) { }

  ngOnInit() {
    this.imconfig = new ImConfig();    
    this.imconfigService.getIMConfig()
      .subscribe(data => {
        console.log(data)
        this.imconfig = data;
      }, error => console.log(error));
  }

}
