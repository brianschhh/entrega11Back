const { normalize, denormalize, schema } = require("normalizr");
const { promises: fs } = require("fs");
const util = require("util");

async function asd() {
  const archivo = await fs.readFile("./holding.json", "utf-8");
  let originalData = await JSON.parse(archivo);
  console.log("asd", originalData);

  const empleado = new schema.Entity("empleado");

  const organigrama = new schema.Entity("organigrama", {
    gerente: empleado,
    encargado: empleado,
    empleados: [empleado],
  });
  const empresas = new schema.Entity("empresas", {
    empresas: [organigrama],
  });

  function print(objeto) {
    console.log(util.inspect(objeto, false, 12, true));
  }

  const normData = normalize(originalData, empresas);
  print(normData);

  console.log("Original", JSON.stringify(originalData).length);
  console.log("Normalizada", JSON.stringify(normData).length);

  const denData = denormalize(normData.result, empresas, normData.entities);
  print(denData);
}
asd();
