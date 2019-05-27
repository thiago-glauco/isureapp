import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private formRegister: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    cpf: ['', Validators.required],
    cel: ['', Validators.required],
    email: ['', [Validators.required, , Validators.minLength(3), Validators.email]],
    passwd: ['', Validators.required],
    confirm_passwd: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}