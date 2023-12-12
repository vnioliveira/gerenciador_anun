import { Component } from '@angular/core';
import { EmailModel } from 'src/domains/EmailModel';
import { EmailService } from 'src/services/Email.services';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {

  email: EmailModel = {
    ownerRef: '',
    emailTo: '',
    subject: '',
    text: ''
  };
  router: any;

  constructor(private emailService: EmailService) {}

  enviarMensagem() {
    console.log(this.email);
    
    this.emailService.enviarEmail(this.email).subscribe(
      response => {
        this.showSuccess('Email enviado com sucesso!');
        this.router.navigate(['/home']);
      },
      error => {
        this.showError('Ocorreu um erro ao enviar o email.');
      }
    );
  }
  showSuccess(arg0: string) {
    throw new Error('Method not implemented.');
  }
  showError(arg0: string) {
    throw new Error('Method not implemented.');
  }
  voltar(){
    this.router.navigate(['/home']);
  }
}
