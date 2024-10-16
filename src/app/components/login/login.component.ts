import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

loginform:FormGroup=new FormGroup({
name :new FormControl(null,[Validators.required,Validators.minLength(3)]),
password:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.pattern(/^[A-Z]/)])

})

handlelogin(loginformx:FormGroup){

console.log(loginformx.value)

}

}
