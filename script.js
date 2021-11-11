const listaPrecio = alert(
  "Bienvenido, estas es nuestra lista de precios:" +
    "\n" +
    " Avena $300 " +
    " Harina $150 " +
    " Mascabo $120 " +
    " Coco $160 " +
    " Nueces $180 " +
    " Almendras $200 "
);

const avena = 300;
const harina = 150;
const mascabo = 120;
const coco = 160;
const nueces = 180;
const almendras = 200;

function compra() {
  let producto1 = prompt("Ingrese producto 1");

  if ((producto1 === "avena") || (producto1 === "Avena") || (producto1 === "AVENA")) {
    producto1 = avena;
  } else if ((producto1 === "harina") || (producto1 === "Harina") || (producto1 === "HARINA")) {
    producto1 = harina;
  } else if ((producto1 === "mascabo") || (producto1 === "mascabo") || (producto1 === "mascabo")) {
    producto1 = mascabo;
  } else if ((producto1 === "coco") || (producto1 === "Coco") || (producto1 === "COCO")) {
    producto1 = coco;
  } else if ((producto1 === "nueces") || (producto1 === "Nueces") || (producto1 === "NUECES")) {
    producto1 = nueces;
  } else if ((producto1 === "almendras") || (producto1 === "Almendras") || (producto1 === "ALMENDRAS")) {
    producto1 = almendras;
  } else {
    alert("Por favor elija al menos un producto.");
    producto1 = prompt("Ingrese producto 1");
  }
  let producto2 = prompt("Ingrese producto 2");

  if ((producto2 === "avena") || (producto2 === "Avena") || (producto2 === "AVENA")) {
    producto2 = avena;
  } else if ((producto2 === "harina") || (producto2 === "Harina") || (producto2 === "HARINA")) {
    producto2 = harina;
  } else if ((producto2 === "mascabo") || (producto2 === "mascabo") || (producto2 === "mascabo")) {
    producto2 = mascabo;
  } else if ((producto2 === "coco") || (producto2 === "Coco") || (producto2 === "COCO")) {
    producto2 = coco;
  } else if((producto2 === "nueces") || (producto2 === "Nueces") || (producto2 === "NUECES")) {
    producto2 = nueces;
  } else if ((producto2 === "almendras") || (producto2 === "Almendras") || (producto2 === "ALMENDRAS")) {
    producto2 = almendras;
  } else {
    alert("Por favor elija al menos un producto.");
    producto2 = prompt("Ingrese producto 2");
  }

  return producto1 + producto2;
}

alert("El precio total es de:" + "\n" + "$" + compra());