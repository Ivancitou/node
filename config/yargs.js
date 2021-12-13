const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    describe: "Es la base de la tabla de multiplicar",
    demandOption: true,
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    describe: "Muestra la tabla en consola",
    default: false,
  })
  .option("m", {
    alias: "maximo",
    type: "number",
    describe: "hasta que numero multiplicar la base",
    default: 10,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero gordito";
    }
    return true;
  })
  .check((argv, options) => {
    if (isNaN(argv.m)) {
      throw "tiene que ser un numero gordito";
    }
    return true;
  }).argv;

module.exports = argv;
