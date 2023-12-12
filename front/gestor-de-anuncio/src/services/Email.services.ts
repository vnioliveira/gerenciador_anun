import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailModel } from '../domains/EmailModel';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:8080'; // Atualize com o caminho real da sua API

  constructor(private http: HttpClient) {}

  enviarEmail(emailDto: EmailModel): Observable<EmailModel> {
    const url = `${this.apiUrl}/sending-email`;
    return this.http.post<EmailModel>(url, emailDto);
  }
}
