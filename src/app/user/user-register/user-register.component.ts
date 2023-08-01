import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm!: FormGroup;
  user!: User;
  userSubmitted!:boolean;
  constructor(private fb:FormBuilder,
              private userService:UserserviceService,
              private alertservice:AlertServiceService) { }

  ngOnInit(): void {
    // this.registerationForm=new FormGroup({
    //   userName:new FormControl(null,Validators.required),
    //   email:new FormControl(null,[Validators.required, Validators.email]),
    //   password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //   confirmPassword:new FormControl(null,[Validators.required,this.passwordMatchingValidator]),
    //   mobile:new FormControl(null, [Validators.required,Validators.maxLength(10)])

    // });
    this.createRegisterationForm();
  }
  createRegisterationForm(){
    this.registerationForm=this.fb.group({
      userName:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.minLength(8)]],
      confirmPassword:[null,Validators.required],
      mobile:[null,[Validators.required,Validators.maxLength(10)]]
    },{Validators:this.passwordMatchingValidator});

  }
  // custom validator for check password and confirm password
  passwordMatchingValidator(fg:AbstractControl):Validators{
    return fg.get('password')?.value===fg.get('confirmPassword')?.value ? "null":{notmatched:true}
  }

  onSubmit(){
     console.log(this.registerationForm.value);
     this.userSubmitted=true;
     if(this.registerationForm.valid){
      //this.user=Object.assign(this.user,this.registerationForm.value);
      this.userService.addUser(this.userData());
      this.registerationForm.reset();
      this.userSubmitted=false;
      this.alertservice.success('Congrats, you are successfully registered');
     }else{
      this.alertservice.error('Something went wrong');
     }
    }

  userData():User{
    return this.user={
      userName:this.userName.value,
      email:this.email.value,
      password:this.password.value,
      mobile:this.mobile.value
    }
  }


  onReset(){

  }
   // ------------------------------------
    // Getter methods for all form controls
    // ------------------------------------
    get userName() {
      return this.registerationForm.get('userName') as FormControl;
  }

  get email() {
      return this.registerationForm.get('email') as FormControl;
  }
  get password() {
      return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword() {
      return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
      return this.registerationForm.get('mobile') as FormControl;
  }
  // ------------------------
}
