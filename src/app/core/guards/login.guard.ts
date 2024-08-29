import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { reqService } from '../../services/req.service';

@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate {

constructor(private router: Router) {}

canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){

  const token = localStorage.getItem('token');

    if (token) {
      return this.router.parseUrl('home');
    } else {
      return true;
    }
  }


  //   if(!this.reqService.reqresLogin('', '')) {
  //     return this.router.parseUrl('/form');
  //   } else {
  //     return true;
  //   }
  // }
}



