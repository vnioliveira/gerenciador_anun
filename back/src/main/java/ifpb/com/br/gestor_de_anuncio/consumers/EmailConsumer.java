package ifpb.com.br.gestor_de_anuncio.consumers;


import ifpb.com.br.gestor_de_anuncio.domain.EmailModel;
import ifpb.com.br.gestor_de_anuncio.dtos.EmailDto;
import ifpb.com.br.gestor_de_anuncio.services.EmailService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

@Component
public class EmailConsumer {

    @Autowired
    EmailService emailService;

    @RabbitListener(queues = "${spring.rabbitmq.queue}")
    public void listen(@Payload EmailDto emailDto) {
        EmailModel emailModel = new EmailModel();
        BeanUtils.copyProperties(emailDto, emailModel);
        emailService.sendEmail(emailModel);
        System.out.println("Email Status: " + emailModel.getStatusEmail().toString());
    }
}
