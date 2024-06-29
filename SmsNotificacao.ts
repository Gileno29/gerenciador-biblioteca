import Notificar from './Notificar'
class SmsNotificacao implements Notificar{

    notificar(mensagem: string) {
        console.log("Usuario Notificado via sms")  
    } 
}
export default SmsNotificacao;