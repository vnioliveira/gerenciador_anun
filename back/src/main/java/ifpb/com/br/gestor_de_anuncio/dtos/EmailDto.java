package ifpb.com.br.gestor_de_anuncio.dtos;

import lombok.Data;


@Data
public class EmailDto {

    
    private String ownerRef;
    

    private String emailFrom;
    

    private String emailTo;
    
    private String subject;
    
    private String text;

}
