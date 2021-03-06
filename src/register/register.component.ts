import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
    cpf: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(11), Validators.pattern('[0-9 ]*')]],
    cel: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern('[0-9 ]*')]],
    email: ['', [Validators.required, Validators.minLength(4)]],
    passwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    confirm_passwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
  });

  errors = {
    passwd: false,
  }
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    let signedUser = this.authService.isUserSignedIn();
    if( signedUser ) {
      console.log("User is signed");
      console.dir( signedUser );
      this.authService.user.uid = signedUser.uid;
      this.authService.user.email = signedUser.email;
      this.authService.user.lastSignIn = signedUser.metadata.lastSignInTime;
      this.authService.user.creationTime = signedUser.metadata.creationTime;
      this.authService.userDataService.getUserData(signedUser.uid)
        .subscribe( (data) =>{
          this.authService.getCurrentUserData( data )
          this.router.navigate([`/user-home`])
        });
    } else {
      console.log("there is no user signed");
    }
  }

  onSubmit() {
    let registrationResult;
    if( this.formRegister.controls.passwd.value !== this.formRegister.controls.confirm_passwd.value) {
      this.errors.passwd = true;
    } else {
      this.errors.passwd = false;
      this.authService.user.name = this.formRegister.controls.name.value;
      this.authService.user.cpf = this.formRegister.controls.cpf.value;
      this.authService.user.cel = this.formRegister.controls.cel.value;
      registrationResult = this.authService.createUser( this.formRegister.controls.email.value, this.formRegister.controls.passwd.value)
      .then( (result) => {
        if( result.user.email ) {
          console.log("Result is: ");
          console.dir(result);
          this.router.navigate([`/user-home`])
        } else {
         alert("Não foi possível registrar este usuário.");
        }
      })
      .catch((error) => alert("Não foi possível registrar este usuário: " + JSON.stringify(error)));
    }
    console.dir(this.formRegister.value);
    console.dir(this.formRegister.controls.name.errors);

  }

  goBack() {
    this.router.navigate([`home`]);
  }


}