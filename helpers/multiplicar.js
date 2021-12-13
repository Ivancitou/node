const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, maximo = 10) => {
  try {
    let salida,
      consola = "";
    for (let i = 1; i <= maximo; i++) {
      consola += `${colors.bgRed.italic(base)} ${"X".brightCyan} ${i} = ${
        base * i
      }\n`;
      salida += `${base} ${"X"} ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log("==================".bgBlue);
      console.log("Tabla del".rainbow, colors.cyan(base));
      console.log("==================".bgBlue);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `Tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = { crearArchivo };
