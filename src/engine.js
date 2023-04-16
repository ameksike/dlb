/**
 * @description Light Database
 * @module db/LDB
 * @requires fs 
 * @requires path 
 */

const KsDp = require('ksdp');

class Engine extends KsDp.structural.Proxy {

    constructor(options) {
        super();
        this.configure(options);
    }

    configure(options) {
        this.opt = this.opt || { model: {}, driver: { dialect: "file" } };
        if (options?.model) {
            Object.assign(this.opt.model, options.model);
        }
        if (options?.driver) {
            Object.assign(this.opt.driver, options.driver);
        }
        this.drv = this.drv || new KsDp.behavioral.Strategy({
            path: __dirname,
            default: 'driver' 
        });
    }

    get(target, key) {
        const drv = target.drv.get({ name: this.opt.driver.dialect });
        if (!drv) {
            return null;
        }
        const res = Reflect.get(drv, key);
        return typeof (res) === "function" ? res.bind(drv) : res;
    }

    set(target, key, value) {
        const drv = target.drv.get({ name: this.type });
        if (drv) {
            drv[key] = value;
        }
    }
}

module.exports = Engine;