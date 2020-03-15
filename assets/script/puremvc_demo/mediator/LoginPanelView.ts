// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export class LoginPanelView extends cc.Component {
    private loginButton: cc.Button = null;
    private tipsLabel : cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.log("LoginPanelView onLoad");
        this.loginButton = this.node.getChildByName("login").getComponent(cc.Button);
        this.tipsLabel = this.node.getChildByName("label").getComponent(cc.Label);
    }

    start () {
        cc.log("LoginPanelView start");
    }

    public setLoginEvent(callback: Function) : void{
        this.loginButton.node.on("click", callback, this);
    }

    public setTips(text: string){
        this.tipsLabel.string = text;
    }

    // update (dt) {}
}