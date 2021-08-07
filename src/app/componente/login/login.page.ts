import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor(private authSvc: AuthService, private router: Router) { }


 async onLogin(email, password){
    try{
      const user = await this.authSvc.login(email.value, password.value);
      if(user){
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
        this.router.navigate(['home']);
      }
    }
    catch(error){console.log(error);}
  }

  redirectUser(isVerified: boolean){
    if(isVerified){
      this.router.navigate(['home']);
    }else{
      this.router.navigate(['']);
    }
  }

}
