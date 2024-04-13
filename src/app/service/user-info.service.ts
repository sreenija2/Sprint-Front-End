import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '../model/user-info';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  basePath:string = "http://localhost:8089/digitalgoldwallet/users/login2";

  constructor(private http:HttpClient) { }

  userService(login : UserInfo){
    //alert("loginService: "+JSON.stringify(login));
    return this.http.post(this.basePath+"login.do", login);
  }

}
