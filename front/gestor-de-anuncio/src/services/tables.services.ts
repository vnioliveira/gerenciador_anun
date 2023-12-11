import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Anuncio } from "src/domains/Anuncio";




@Injectable()
export class TableServices {

    url = 'http://localhost:8080/anuncios';

    constructor(private http: HttpClient) {}

    getAnuncios(): Observable<Anuncio[]> {
        return this.http.get<Anuncio[]>(`${this.url}`);
    }
}











