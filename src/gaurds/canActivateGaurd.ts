import { Injectable } from "@angular/core";
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';

@Injectable()

export class  CanActivateRouteGaurd implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       // alert(this.authSvc.isAuthenticated);
       // this.route.navigate(['/home']);
        return this.authSvc.isAuthenticated;
    }

    constructor(private authSvc:AuthService,private route:Router) {
        
    }
}