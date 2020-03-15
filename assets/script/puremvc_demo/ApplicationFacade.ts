import { Facade } from "../core/puremvc/patterns/facade/Facade";
import { CommandDefine } from "./command/CommandDefine";
import { OpenLoginPanelCommand } from "./command/OpenLoginPanelCommand";
import { UserLoginRequestCommand } from "./command/UserLoginRequestCommand";
import { LoginRequestProxy } from "./proxy/LoginRequestProxy";
import { ProxyDefine } from "./proxy/ProxyDefine";

export class ApplicationFacade extends Facade {
    public initializeController(): void {
        super.initializeController();

        this.registerCommand(CommandDefine.OpenLoginPanel, OpenLoginPanelCommand);
        this.registerCommand(CommandDefine.UserLoginRequest, UserLoginRequestCommand);
    }

    public initializeModel(): void { 
        super.initializeModel();
        
        this.registerProxy(new LoginRequestProxy(ProxyDefine.LoginRequest));
    }

    public initializeView(): void { 
        super.initializeView();
    }

    public startup(): void {
        cc.log("run here");

        this.sendNotification(CommandDefine.OpenLoginPanel);
    }
}