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
        return this.http.get<User[]>(`${this.url}`);
    }

    login(email: string, senha: string): Observable<User> {
        return this.http.post<User>(`${this.url}/login`, {email, senha});
    }

    cadastro(email: string, senha: string): Observable<User> {
        return this.http.post<User>(`${this.url}/cadastro`, {email, senha});
    }

    deleteUser(id: number): Observable<User> {
        return this.http.delete<User>(`${this.url}/${id}`);
    }

    setUser(id: number, email: string, senha: string): Observable<User> {
        return this.http.put<User>(`${this.url}`, {id, email, senha});
    }
}

