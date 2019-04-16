import Logger from './Logger';

export default class FirstComponent {

    prop: string = ""

    constructor() {
        this.prop = "prop";
        console.log("constructor FirstComponent");
    }

    log() {
        Logger.log('first component');
        Logger.inc();
        Logger.log();
    }

    setProp(p: string) {
        this.prop = p;
    }

    logProp () {
        console.log(`FirstComponent prop = ${this.prop}`);
    }

}
