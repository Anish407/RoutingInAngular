import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class  AuthService {
    constructor() {
        
    }

    private _isAuthenticated:boolean=true;
    get isAuthenticated(){
        return this._isAuthenticated;
    }

    set isAuthenticated(value:boolean){
        this._isAuthenticated=value;
    }

    reverse():void{
        this.isAuthenticated=!this.isAuthenticated;
    }
}