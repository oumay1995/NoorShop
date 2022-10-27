import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  test : Boolean = false;
  constructor(private formBuilder :  FormBuilder , private router : Router) { }

  ngOnInit(): void {
    this.signupForm =  this.formBuilder.group({
      firstName : ['',[Validators.required,Validators.minLength(3)]],
      lastName : ['',[Validators.required,Validators.minLength(3)]],
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(3)]],
      adresse : ['',[Validators.required]],
      repeatpassword : [''],
      tel :  ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{8,13}$")]],
    },
    {
      validator : MustMatch('password','repeatpassword')
    })
  }
  signup(f:any){  console.log(f);
    let idUser = JSON.parse(localStorage.getItem("idUser") || "1")
    let users = JSON.parse(localStorage.getItem("users") || "[]")
    f.id = idUser
    f.role = "client"
    users.push(f)
    localStorage.setItem("users",JSON.stringify(users))
    localStorage.setItem("idUser",idUser + 1)
    this.router.navigate(["login"]);}
}