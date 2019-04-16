const Logger = {

    type: 'console',
    count: 0,

    log: function (message: string = '') {
        console.log(`${message ? message+', ' : ''}Logger count = ${this.count}`);
    },

    inc: function(n = 1) {
        console.log(`Logger inc + ${n}`);
        this.count += n;
    }
}
export default Logger;