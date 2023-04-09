import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
export interface Token{
    access: string;
    refresh: string;
    userId: number;
    first_name: string;
    last_name: string;
    is_superuser: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  path = `${environment.url}/auth`;

    constructor(private httpClient: HttpClient) {}

    public login(username: string, password: string): Observable<Token> {
        return this.httpClient.post<Token>(`${this.path}/login`, {username, password});
    }

    public signup(person: object): Observable<void> {
        return this.httpClient.post<void>(`${this.path}/signup`, person);
    }

    public logout(refresh: string, access: string): Observable<void> {
        return this.httpClient.post<void>(`${this.path}/logout`, {refresh}, {
            headers: {
                Authorization: `Bearer ${access}`
            }
        });
    }
}
