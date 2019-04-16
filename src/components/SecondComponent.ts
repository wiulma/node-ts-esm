import Logger from './Logger';

export default class SecondComponent {

    constructor() {
        console.log("constructor SecondComponent");
    }

    log () {
        Logger.log('first component');
        Logger.inc();
        Logger.log();
    }

}
