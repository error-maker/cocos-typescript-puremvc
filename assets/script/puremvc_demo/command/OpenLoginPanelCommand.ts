import { SimpleCommand } from "../../core/puremvc/patterns/command/SimpleCommand";
import { Facade } from "../../core/puremvc/patterns/facade/Facade";
import { LoginPanelMediator } from "../mediator/LoginPanelMediator";
import { MediatorDefine } from "../mediator/MediatorDefine";
import { INotification } from "../../core/puremvc/interfaces/INotification";
import { ApplicationGlobal } from "../../global/ApplicationGlobal";

export class OpenLoginPanelCommand extends SimpleCommand {
    public execute(notification: INotification): void { 
        // 此处可以加载prefab页面，demo就不再演示，直接使用加载好的页面 
        Facade.getInstance().registerMediator(new LoginPanelMediator(MediatorDefine.LoginPanel, ApplicationGlobal.LoginPanel));
    }
}