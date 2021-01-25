import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup
  public submitted: boolean = false;
  constructor(public fb:FormBuilder,public router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Username : ['',Validators.required],
      Password : ['',Validators.required]
    })
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;
      if(this.loginForm.valid){
        this.router.navigate(['/dashboard'])
      } 
  }

}
