const fs = require('fs');
const path = require('path');


const rename = (dir) => {
    console.log(`scanning ${dir}`);
    
    const fc = fs.readdirSync(dir);
    fc.forEach( f => {
        const fp = path.resolve(dir, f);
        const fss = fs.lstatSync(fp);
        if (fss.isDirectory()) {
            rename(fp)
        } else if (fss.isFile() && fp.endsWith(".js")) {
            try {
                const nn = fp.replace(".js", ".mjs")
                console.log(`renamming ${fp} to ${nn}`);
                fs.renameSync(fp, nn);
            } catch (exc) {
                console.error(exc.message);
            }
        }
    });
}

rename(path.resolve('./dist-mjs'));