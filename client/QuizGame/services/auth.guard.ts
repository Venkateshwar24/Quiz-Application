import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,
    private router:Router,
    private _snackBar: MatSnackBar){}
canActivate():boolean
{
if(this.authService.isLoggedIn())
{
return true;
}
else
{
  this._snackBar.open('Please Login to continue')
//alert('Please Login to continue');
this.router.navigate(['/login']);
return false;
}

}
  
}
