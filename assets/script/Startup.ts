// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { ApplicationFacade } from "./puremvc_demo/ApplicationFacade";
import { ApplicationGlobal } from "./global/ApplicationGlobal";

const {ccclass, property} = cc._decorator;

@ccclass
export class Startup extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        ApplicationGlobal.LoginPanel = this.node;
    }

    start () {
        new ApplicationFacade().startup();
    }

    // update (dt) {}
}
