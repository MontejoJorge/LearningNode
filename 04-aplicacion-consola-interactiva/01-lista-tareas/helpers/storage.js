const fs = require("fs")


const path = "./storage/data.txt"

const guardarTareas = (data) => {
    fs.writeFileSync(path, JSON.stringify(data))
}

const leerTareas = () => {
    if (!fs.existsSync(path)){
        return null;
    }
    
    data = fs.readFileSync(path, {encoding: "utf-8"});

    return JSON.parse(data);
}   

module.exports = {
    guardarTareas,
    leerTareas,
};
