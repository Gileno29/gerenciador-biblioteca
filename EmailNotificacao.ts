import Notificar from './Notificar'
class EmailNotificacao implements Notificar{

    notificar(mensagem: string) {
        console.log("Usuario Notificado via email")  
    } 
}

export default EmailNotificacao;