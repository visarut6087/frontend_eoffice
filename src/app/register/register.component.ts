import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitting: Boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // เป็น initial form ค่าฟอร์มเริ่มต้น
    this.registerForm = this.formBuilder.group({
      rank: ["", Validators.required],
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      id_mil: ["", Validators.required],
      unit_name: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  get f() {
    // เข้าถึงค่าของฟอร์ม
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitting = true;
    // เมื่อเรากดปุ่ม register ให้มาที่ ฟังก์ชั่นนี้
    console.log(this.f.rank.value);
  }
}
