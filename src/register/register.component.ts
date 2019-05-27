import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private formRegister: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    cpf: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(11),Validators.pattern('^[0-9]*')]],
    cel: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(11),Validators.pattern('^[0-9]*')]],
    email: ['', [Validators.required, , Validators.minLength(3), Validators.email]],
    passwd: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    confirm_passwd: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}