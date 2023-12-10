import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { User } from "src/domains/User";
import {environment} from "../environments/environment";

@Injectable()
export class UserServices {

    url = 'http://localhost:8080/pessoas';

    constructor(private http: HttpClient) {}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.url}/all`);
    }

    login(email: string, senha: string): Observable<User> {
        return this.http.post<User>(`${this.url}/login`, {email, senha});
    }

    cadastro(email: string, senha: string): Observable<User> {
        return this.http.post<User>(`${this.url}/cadastro`, {email, senha});
    }
}

