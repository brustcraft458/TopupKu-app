import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm = {
    username: "",
    password: "",
    email: "",
    phone: ""
  }
  emailOrPhone = ""

  constructor(private authService: UserAuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.registerForm).subscribe(resp => {
      console.log("respone", resp)
    })
  }

  setEmailOrPhone(text: string) {
    const phonePattern = /^\d{10,15}$/; // Adjust pattern based on your phone number format
    
    if (phonePattern.test(text)) {
      this.registerForm.phone = text
    } else {
      this.registerForm.email = text
    }
  }

}
