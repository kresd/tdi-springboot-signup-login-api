import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  
  }

  login(): void {

    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["dashboard"]);
    } else {
      this.ngxSmartModalService.getModal('myModal').open();
    }
    
  }
  
}
