package ifpb.com.br.gestor_de_anuncio.services;

import ifpb.com.br.gestor_de_anuncio.domain.EmailModel;
import ifpb.com.br.gestor_de_anuncio.enums.StatusEmail;
import ifpb.com.br.gestor_de_anuncio.repository.EmailRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final EmailRepository emailRepository;

    private final JavaMailSender emailSender;

    private static final String CORPO_PADRAO = "Essa foi a mensagem que você enviou para o AutoAnuncios.com \n";

    private static final String CORPO_PADRAO_SAC = "Nova mensagem de um cliente do AutoAnuncios.com \n";
    private static final String SAC = "vmarcoslins@gmail.com";
    private static final String EMAIL_SISTEMA = "vo7775832@gmail.com";
    public EmailModel sendEmail(EmailModel emailModel) {
        emailModel.setSendDateEmail(LocalDateTime.now());
        try{
            SimpleMailMessage message = new SimpleMailMessage();

            message.setFrom(EMAIL_SISTEMA);
            message.setTo(SAC);
            message.setSubject(CORPO_PADRAO_SAC+emailModel.getSubject());
            message.setText(emailModel.getText());
            emailSender.send(message);
//            enviando copia
            message.setTo(emailModel.getEmailTo());
            message.setText(CORPO_PADRAO +emailModel.getText());
            emailSender.send(message);
            emailModel.setStatusEmail(StatusEmail.SENT);
        } catch (MailException e){
            emailModel.setStatusEmail(StatusEmail.ERROR);
        } finally {
            return emailRepository.save(emailModel);
        }
    }

    public Page<EmailModel> findAll(Pageable pageable) {
        return  emailRepository.findAll(pageable);
    }
}