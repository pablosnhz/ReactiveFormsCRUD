import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { reqService } from '../../services/req.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private reqService: reqService,
    private router: Router,
  ){};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.reqService.reqresLogin( next.params['username'], next.params['password'] ).pipe(
      map(auth => {
        if (auth) {
          return true;
        } else {
          this.router.navigate(['formsmaterial', 'form']);
          return false;
        }
      })
    );
  }
}



