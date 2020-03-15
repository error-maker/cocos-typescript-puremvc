import { SimpleCommand } from "../../core/puremvc/patterns/command/SimpleCommand";
import { INotification } from "../../core/puremvc/interfaces/INotification";
import { LoginRequestRepository } from "../repositories/LoginRequestRepository";
import { Facade } from "../../core/puremvc/patterns/facade/Facade";
import { ProxyDefine } from "../proxy/ProxyDefine";
import { LoginRequestProxy } from "../proxy/LoginRequestProxy";

export class UserLoginRequestCommand extends SimpleCommand{
    public execute(notification: INotification): void{
        let requestBody = notification.getBody() as LoginRequestRepository;
        if(!requestBody){
            return;
        }

        let proxy = Facade.getInstance().retrieveProxy(ProxyDefine.LoginRequest) as LoginRequestProxy;
        proxy.Post(requestBody);
    }
}