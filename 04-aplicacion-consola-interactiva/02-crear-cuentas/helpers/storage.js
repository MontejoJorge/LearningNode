const fs = require("fs");

const {
    pausa
} = require("../helpers/inquirer");

const path = "./storage/Usuarios.txt";

const writeUsers = async(usuarios) => {

    console.log(usuarios);

    await pausa();

    const data = JSON.stringify(usuarios)

    fs.writeFileSync(path, data,{encoding: "utf-8"});
}

const readUsers = () => {

    if (!fs.existsSync(path)){
        return null;
    }

    data = fs.readFileSync(path, {encoding: "utf-8"});

    return JSON.parse(data);
}

module.exports = {
    writeUsers,
    readUsers
}