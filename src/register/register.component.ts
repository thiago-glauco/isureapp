import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100), Validators.pattern('[a-zA-Z ]*')]],
    cpf: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(11), Validators.pattern('[0-9 ]*')]],
    cel: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern('[0-9 ]*')]],
    email: ['', [Validators.required, Validators.minLength(4)]],
    passwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    confirm_passwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
  });

  errors = {
    passwd: false,
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    if( this.formRegister.controls.passwd.value !== this.formRegister.controls.confirm_passwd.value) {
      this.errors.passwd = true
    } else {
      this.errors.passwd = false
    }
    console.dir(this.formRegister.value);
    console.dir(this.formRegister.controls.name.errors);
  }

}