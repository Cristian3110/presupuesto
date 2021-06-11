/**
 * Configuración de la lógica de la aplicación
 */

const ingresos = [
  new Ingreso("salario", 1000.0),
  new Ingreso("Venta de Coche", 3000.0),
  new Ingreso("Venta de Laptop", 500.0),
];

const egresos = [
  new Egreso("Renta de Departamento", 900.0),
  new Egreso("Servicios", 300),
];

let cargarApp = () => {
  cargarCabecero();
};

let totalIngresos = () => {
  let totalIngreso = 0;
  for (let ingreso of ingresos) {
    totalIngreso += ingreso.valor;
  }
  return totalIngreso;
};

let totalEgresos = () => {
  let totalEgreso = 0;
  for (let egreso of egresos) {
    totalEgreso += egreso.valor;
  }
  return totalEgreso;
};

let cargarCabecero = () => {
  let presupuesto = totalIngresos() - totalEgresos();
  let porcentajeEgreso = totalEgresos() / totalIngresos();
  document.getElementById("presupuesto").innerHTML = presupuesto;
  document.getElementById("porcentaje").innerHTML = porcentajeEgreso;
  document.getElementById("ingresos").innerHTML = totalIngresos();
  document.getElementById("egresos").innerHTML = totalEgresos();
};
