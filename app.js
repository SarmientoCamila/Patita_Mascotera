const apiConversor = async () => {
  return fetch(
    "https://v6.exchangerate-api.com/v6/0e0ed593e5781fccb6b5e7b0/latest/USD"
  )
    .then((response) => response.json())
    .then((json) => {
      return json.conversion_rates.ARS;
    });
};

window.addEventListener("load", async () => {
  try {
    const response = await apiConversor();
    localStorage.setItem("valorDolar", response);
  } catch (error) {
    console.log(error);
  }
});

const botonPerro = document.querySelector("#boton-perro");
const botonGato = document.querySelector("#boton-gato");
const botonAves = document.querySelector("#boton-aves");
const botonReptiles = document.querySelector("#boton-reptiles");
const productoPerro = document.querySelector("#producto-perro");
const productoGato = document.querySelector("#producto-gato");
const productoAves = document.querySelector("#producto-ave");
const productoReptiles = document.querySelector("#producto-reptiles");
const tarjetaPerro = document.querySelector("#perro");



botonPerro.addEventListener("click", () => {
  productoPerro.classList.add("mostrar");
  productoPerro.classList.remove("ocultar");
  productoGato.classList.add("ocultar");
  productoGato.classList.remove("mostrar");

  productoAves.classList.add("ocultar");
  productoAves.classList.remove("mostrar");
  productoReptiles.classList.add("ocultar");
  productoReptiles.classList.remove("mostrar");

  botonPerro.classList.add("active");
  botonGato.classList.remove("active");
  botonAves.classList.remove("active");
  botonReptiles.classList.remove("active");
});

botonGato.addEventListener("click", () => {
  productoPerro.classList.add("ocultar");
  productoPerro.classList.remove("mostrar");
  productoGato.classList.add("mostrar");
  productoGato.classList.remove("ocultar");

  productoAves.classList.add("ocultar");
  productoAves.classList.remove("mostrar");
  productoReptiles.classList.add("ocultar");
  productoReptiles.classList.remove("mostrar");

  botonPerro.classList.remove("active");
  botonGato.classList.add("active");
  botonAves.classList.remove("active");
  botonReptiles.classList.remove("active");
});

botonAves.addEventListener("click", () => {
  productoAves.classList.add("mostrar");
  productoAves.classList.remove("ocultar");
  productoGato.classList.add("ocultar");
  productoGato.classList.remove("mostrar");

  productoPerro.classList.add("ocultar");
  productoPerro.classList.remove("mostrar");
  productoReptiles.classList.add("ocultar");
  productoReptiles.classList.remove("mostrar");

  botonPerro.classList.remove("active");
  botonGato.classList.remove("active");
  botonAves.classList.add("active");
  botonReptiles.classList.remove("active");
});

botonReptiles.addEventListener("click", () => {
  productoReptiles.classList.add("mostrar");
  productoReptiles.classList.remove("ocultar");
  productoGato.classList.add("ocultar");
  productoGato.classList.remove("mostrar");

  productoPerro.classList.add("ocultar");
  productoPerro.classList.remove("mostrar");
  productoAves.classList.add("ocultar");
  productoAves.classList.remove("mostrar");

  botonPerro.classList.remove("active");
  botonGato.classList.remove("active");
  botonAves.classList.remove("active");
  botonReptiles.classList.add("active");
});

const banderaArg = document.querySelector("#bandera-arg");

const banderaUsd = document.querySelector("#bandera-usd");

banderaArg.addEventListener("click", () => {
  divBolsoN2.textContent = formatoPrecio(precioBolsoN2, "ARS");
  bolsoMaletin.textContent = formatoPrecio(precioBolsoMaletin, "ARS");
  divTransportadoraMascota.textContent = formatoPrecio(
    precioTransportadoraMascota,
    "ARS"
  );
  pretal.textContent = formatoPrecio(precioPretal, "ARS");
  pretalPremium.textContent = formatoPrecio(precioPretalPremium, "ARS");
  pechera.textContent = formatoPrecio(precioPrechera, "ARS");
  arnes.textContent = formatoPrecio(precioArnes, "ARS");
  collarPerro.textContent = formatoPrecio(precioCollarPerro, "ARS");
  correaExten.textContent = formatoPrecio(precioCorreaExten, "ARS");
  correaFida.textContent = formatoPrecio(precioCorreaFida, "ARS");
  chapitaDaisy.textContent = formatoPrecio(precioChapitaDaisy, "ARS");
  chapitaCollie.textContent = formatoPrecio(precioChapitaCollie, "ARS");
  chapitaTerrier.textContent = formatoPrecio(precioChapitaTerrier, "ARS");
  chapitaBulldog.textContent = formatoPrecio(precioChapitaBulldog, "ARS");
  chapitaBasic.textContent = formatoPrecio(precioChapitaBasic, "ARS");
  chapitaNegra.textContent = formatoPrecio(precioChapitaNegra, "ARS");
  chapitaPaw.textContent = formatoPrecio(precioChapitaPaw, "ARS");

  jugueteKong.textContent = formatoPrecio(precioJugueteKong, "ARS");
  kongGoodie.textContent = formatoPrecio(precioKongGoodie, "ARS");
  jugueteDispensador.textContent = formatoPrecio(
    precioJugueteDispensador,
    "ARS"
  );
  jugueteJumball.textContent = formatoPrecio(precioJugueteJumball, "ARS");
  pelotaKong.textContent = formatoPrecio(precioPelotaKong, "ARS");
  jugueteNeumatico.textContent = formatoPrecio(precioJugueteNeumatico, "ARS");
  jugueteCuerda.textContent = formatoPrecio(precioJugueteCuerda, "ARS");
  setPelota.textContent = formatoPrecio(precioSetPelota, "ARS");
  juguetePerro.textContent = formatoPrecio(precioJuguetePerro, "ARS");
  jugueteWheel.textContent = formatoPrecio(precioJugueteWheel, "ARS");
  alimentoCriadores.textContent = formatoPrecio(precioAlimentoCriadores, "ARS");
  alimentoOld.textContent = formatoPrecio(precioAlimentoOld, "ARS");
  oldPrincePerro.textContent = formatoPrecio(precioOldPrincePerro, "ARS");
  proplanAdulto.textContent = formatoPrecio(precioProplanAdulto, "ARS");
  excellent.textContent = formatoPrecio(precioExcellent, "ARS");
  dogchow.textContent = formatoPrecio(precioDogchow, "ARS");
  drRomero.textContent = formatoPrecio(precioDrRomero, "ARS");
  pedigree.textContent = formatoPrecio(precioPedigree, "ARS");
  royal.textContent = formatoPrecio(precioRoyal, "ARS");

  collarElastico.textContent = formatoPrecio(precioCollarElastico, "ARS");
  collarCuero.textContent = formatoPrecio(precioCollarCuero, "ARS");
  correaPretal.textContent = formatoPrecio(precioCorreaPretal, "ARS");
  bolsoImpermeable.textContent = formatoPrecio(precioBolsoImpermeable, "ARS");
  collarLeopardo.textContent = formatoPrecio(precioCollarLeopardo, "ARS");
  excellentGato.textContent = formatoPrecio(precioExcellentGato, "ARS");
  catchowAlimento.textContent = formatoPrecio(precioCatchowAlimento, "ARS");
  catchowAdulto.textContent = formatoPrecio(precioCatchowAdulto, "ARS");
  oldPrinceGato.textContent = formatoPrecio(precioOldPrinceGato, "ARS");
  lataSabsard.textContent = formatoPrecio(precioLataSabsard, "ARS");
  lataSabpollo.textContent = formatoPrecio(precioLataSapollo, "ARS");
  jugueteGigwi.textContent = formatoPrecio(precioJugueteGigwi, "ARS");
  jugueteVertigo.textContent = formatoPrecio(precioJugueteVertigo, "ARS");
  pelotaRugby.textContent = formatoPrecio(precioPelotaRugby, "ARS");
  tunelGato.textContent = formatoPrecio(precioTunelGato, "ARS");
  rascadorGato.textContent = formatoPrecio(precioRascadorGato, "ARS");
  casitaRascador.textContent = formatoPrecio(precioCasitaRascador, "ARS");
  cuchaGato.textContent = formatoPrecio(precioCuchaGato, "ARS");

  jaulaLoro.textContent = formatoPrecio(precioJaulaLoro, "ARS");
  jaulaBombe.textContent = formatoPrecio(precioJaulaBombe, "ARS");
  jaulaArco.textContent = formatoPrecio(precioJaulaArco, "ARS");
  jaulaPajarera.textContent = formatoPrecio(precioJaulaPajarera, "ARS");
  jaulaDorada.textContent = formatoPrecio(precioJaulaDorada, "ARS");
  jaulaBlanca.textContent = formatoPrecio(precioJaulaBlanca, "ARS");
  portaPasta.textContent = formatoPrecio(precioPortaPasta, "ARS");
  bebedero.textContent = formatoPrecio(precioBebedero, "ARS");
  comedero.textContent = formatoPrecio(precioComedero, "ARS");
  comederoAcrilico.textContent = formatoPrecio(precioComederoAcrilico, "ARS");
  expendedor.textContent = formatoPrecio(precioExpendedor, "ARS");
  mixPeriquitos.textContent = formatoPrecio(precioMixPeriquitos, "ARS");
  mijo.textContent = formatoPrecio(precioMijo, "ARS");
  alimentoLoro.textContent = formatoPrecio(precioAlimentoLoro, "ARS");
  suplementoAves.textContent = formatoPrecio(precioSuplementoAves, "ARS");
  mixVegetales.textContent = formatoPrecio(precioMixVegetales, "ARS");
  alpiste.textContent = formatoPrecio(precioAlpiste, "ARS");
  mixFrutas.textContent = formatoPrecio(precioMixFrutas, "ARS");

  islaTortuga.textContent = formatoPrecio(precioIslaTortuga, "ARS");
  rocaTermica.textContent = formatoPrecio(precioRocaTermica, "ARS");
  clamp.textContent = formatoPrecio(precioClamp, "ARS");
  calefactor.textContent = formatoPrecio(precioCalefactor, "ARS");
  isla.textContent = formatoPrecio(precioIsla, "ARS");
  miniIsla.textContent = formatoPrecio(precioMiniIsla, "ARS");
  labconClub.textContent = formatoPrecio(precioLabconClub, "ARS");
  alimentoTortuga.textContent = formatoPrecio(precioAlimentoTortuga, "ARS");
  alimentoNutrafin.textContent = formatoPrecio(precioAlimentoNutrafin, "ARS");
  alimentoProdac.textContent = formatoPrecio(precioAlimentoProdac, "ARS");
  reptolife.textContent = formatoPrecio(precioReptolife, "ARS");
  alconRep.textContent = formatoPrecio(precioAlconRep, "ARS");
});

//.textContent = formatoPrecio(precio, "ARS");

banderaUsd.addEventListener("click", () => {
  const valorDolar = localStorage.getItem("valorDolar");
  divBolsoN2.textContent = formatoPrecio(precioBolsoN2 / valorDolar, "USD");
  bolsoMaletin.textContent = formatoPrecio(
    precioBolsoMaletin / valorDolar,
    "USD"
  );
  divTransportadoraMascota.textContent = formatoPrecio(
    precioTransportadoraMascota / valorDolar,
    "USD"
  );
  pretal.textContent = formatoPrecio(precioPretal / valorDolar, "USD");
  pretalPremium.textContent = formatoPrecio(
    precioPretalPremium / valorDolar,
    "USD"
  );
  pechera.textContent = formatoPrecio(precioPrechera / valorDolar, "USD");
  arnes.textContent = formatoPrecio(precioArnes / valorDolar, "USD");
  collarPerro.textContent = formatoPrecio(
    precioCollarPerro / valorDolar,
    "USD"
  );
  correaExten.textContent = formatoPrecio(
    precioCorreaExten / valorDolar,
    "USD"
  );
  correaFida.textContent = formatoPrecio(precioCorreaFida / valorDolar, "USD");
  chapitaDaisy.textContent = formatoPrecio(
    precioChapitaDaisy / valorDolar,
    "USD"
  );
  chapitaCollie.textContent = formatoPrecio(
    precioChapitaCollie / valorDolar,
    "USD"
  );
  chapitaTerrier.textContent = formatoPrecio(
    precioChapitaTerrier / valorDolar,
    "USD"
  );
  chapitaBulldog.textContent = formatoPrecio(
    precioChapitaBulldog / valorDolar,
    "USD"
  );

  chapitaBasic.textContent = formatoPrecio(
    precioChapitaBasic / valorDolar,
    "USD"
  );
  chapitaNegra.textContent = formatoPrecio(
    precioChapitaNegra / valorDolar,
    "USD"
  );
  chapitaPaw.textContent = formatoPrecio(precioChapitaPaw / valorDolar, "USD");

  jugueteKong.textContent = formatoPrecio(
    precioJugueteKong / valorDolar,
    "USD"
  );
  kongGoodie.textContent = formatoPrecio(precioKongGoodie / valorDolar, "USD");
  jugueteDispensador.textContent = formatoPrecio(
    precioJugueteDispensador / valorDolar,
    "USD"
  );
  jugueteJumball.textContent = formatoPrecio(
    precioJugueteJumball / valorDolar,
    "USD"
  );
  pelotaKong.textContent = formatoPrecio(precioPelotaKong / valorDolar, "USD");
  jugueteNeumatico.textContent = formatoPrecio(
    precioJugueteNeumatico / valorDolar,
    "USD"
  );
  jugueteCuerda.textContent = formatoPrecio(
    precioJugueteCuerda / valorDolar,
    "USD"
  );
  setPelota.textContent = formatoPrecio(precioSetPelota / valorDolar, "USD");
  juguetePerro.textContent = formatoPrecio(
    precioJuguetePerro / valorDolar,
    "USD"
  );
  jugueteWheel.textContent = formatoPrecio(
    precioJugueteWheel / valorDolar,
    "USD"
  );
  alimentoCriadores.textContent = formatoPrecio(
    precioAlimentoCriadores / valorDolar,
    "USD"
  );
  alimentoOld.textContent = formatoPrecio(
    precioAlimentoOld / valorDolar,
    "USD"
  );
  oldPrincePerro.textContent = formatoPrecio(
    precioOldPrincePerro / valorDolar,
    "USD"
  );
  proplanAdulto.textContent = formatoPrecio(
    precioProplanAdulto / valorDolar,
    "USD"
  );
  excellent.textContent = formatoPrecio(precioExcellent / valorDolar, "USD");
  dogchow.textContent = formatoPrecio(precioDogchow / valorDolar, "USD");
  drRomero.textContent = formatoPrecio(precioDrRomero / valorDolar, "USD");
  pedigree.textContent = formatoPrecio(precioPedigree / valorDolar, "USD");
  royal.textContent = formatoPrecio(precioRoyal / valorDolar, "USD");

  collarElastico.textContent = formatoPrecio(
    precioCollarElastico / valorDolar,
    "USD"
  );
  collarCuero.textContent = formatoPrecio(
    precioCollarCuero / valorDolar,
    "USD"
  );
  correaPretal.textContent = formatoPrecio(
    precioCorreaPretal / valorDolar,
    "USD"
  );
  bolsoImpermeable.textContent = formatoPrecio(
    precioBolsoImpermeable / valorDolar,
    "USD"
  );
  collarLeopardo.textContent = formatoPrecio(
    precioCollarLeopardo / valorDolar,
    "USD"
  );
  excellentGato.textContent = formatoPrecio(
    precioExcellentGato / valorDolar,
    "USD"
  );
  catchowAlimento.textContent = formatoPrecio(
    precioCatchowAlimento / valorDolar,
    "USD"
  );
  catchowAdulto.textContent = formatoPrecio(
    precioCatchowAdulto / valorDolar,
    "USD"
  );
  oldPrinceGato.textContent = formatoPrecio(
    precioOldPrinceGato / valorDolar,
    "USD"
  );
  lataSabsard.textContent = formatoPrecio(
    precioLataSabsard / valorDolar,
    "USD"
  );
  lataSabpollo.textContent = formatoPrecio(
    precioLataSapollo / valorDolar,
    "USD"
  );
  jugueteGigwi.textContent = formatoPrecio(
    precioJugueteGigwi / valorDolar,
    "USD"
  );
  jugueteVertigo.textContent = formatoPrecio(
    precioJugueteVertigo / valorDolar,
    "USD"
  );
  pelotaRugby.textContent = formatoPrecio(
    precioPelotaRugby / valorDolar,
    "USD"
  );
  tunelGato.textContent = formatoPrecio(precioTunelGato / valorDolar, "USD");
  casitaRascador.textContent = formatoPrecio(
    precioCasitaRascador / valorDolar,
    "USD"
  );
  cuchaGato.textContent = formatoPrecio(precioCuchaGato / valorDolar, "USD");

  jaulaLoro.textContent = formatoPrecio(precioJaulaLoro / valorDolar, "USD");
  jaulaBombe.textContent = formatoPrecio(precioJaulaBombe / valorDolar, "USD");
  jaulaArco.textContent = formatoPrecio(precioJaulaArco / valorDolar, "USD");
  jaulaPajarera.textContent = formatoPrecio(
    precioJaulaPajarera / valorDolar,
    "USD"
  );
  jaulaDorada.textContent = formatoPrecio(
    precioJaulaDorada / valorDolar,
    "USD"
  );
  jaulaBlanca.textContent = formatoPrecio(
    precioJaulaBlanca / valorDolar,
    "USD"
  );
  portaPasta.textContent = formatoPrecio(precioPortaPasta / valorDolar, "USD");
  bebedero.textContent = formatoPrecio(precioBebedero / valorDolar, "USD");
  comedero.textContent = formatoPrecio(precioComedero / valorDolar, "USD");
  comederoAcrilico.textContent = formatoPrecio(
    precioComederoAcrilico / valorDolar,
    "USD"
  );
  expendedor.textContent = formatoPrecio(precioExpendedor / valorDolar, "USD");
  mixPeriquitos.textContent = formatoPrecio(
    precioMixPeriquitos / valorDolar,
    "USD"
  );
  mijo.textContent = formatoPrecio(precioMijo / valorDolar, "USD");
  alimentoLoro.textContent = formatoPrecio(
    precioAlimentoLoro / valorDolar,
    "USD"
  );
  suplementoAves.textContent = formatoPrecio(
    precioSuplementoAves / valorDolar,
    "USD"
  );
  mixVegetales.textContent = formatoPrecio(
    precioMixVegetales / valorDolar,
    "USD"
  );
  alpiste.textContent = formatoPrecio(precioAlpiste / valorDolar, "USD");
  mixFrutas.textContent = formatoPrecio(precioMixFrutas / valorDolar, "USD");

  islaTortuga.textContent = formatoPrecio(
    precioIslaTortuga / valorDolar,
    "USD"
  );
  rocaTermica.textContent = formatoPrecio(
    precioRocaTermica / valorDolar,
    "USD"
  );
  clamp.textContent = formatoPrecio(precioClamp / valorDolar, "USD");
  calefactor.textContent = formatoPrecio(precioCalefactor / valorDolar, "USD");
  isla.textContent = formatoPrecio(precioIsla / valorDolar, "USD");
  miniIsla.textContent = formatoPrecio(precioMiniIsla / valorDolar, "USD");
  labconClub.textContent = formatoPrecio(precioLabconClub / valorDolar, "USD");
  alimentoTortuga.textContent = formatoPrecio(
    precioAlimentoTortuga / valorDolar,
    "USD"
  );
  alimentoNutrafin.textContent = formatoPrecio(
    precioAlimentoNutrafin / valorDolar,
    "USD"
  );
  alimentoProdac.textContent = formatoPrecio(
    precioAlimentoProdac / valorDolar,
    "USD"
  );
  reptolife.textContent = formatoPrecio(precioReptolife / valorDolar, "USD");
  alconRep.textContent = formatoPrecio(precioAlconRep / valorDolar, "USD");
});

//no se cambia la funcion
const formatoPrecio = (precio, moneda) => {
  if (moneda === "USD") {
    return precio.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      currencyDisplay: "code",
    });
  }
  if (moneda === "ARS") {
    return precio.toLocaleString("en", {
      style: "currency",
      currency: "ARS",
      currencyDisplay: "code",
      maximumFractionDigits: 0,
    });
  }
};

//div de precio 

const divBolsoN2 = document.querySelector("#bolso-n2");
const bolsoMaletin = document.querySelector("#bolso-maletin");
const divTransportadoraMascota = document.querySelector(
  "#transportadora-mascota"
);
const pretal = document.querySelector("#pretal");
const pretalPremium = document.querySelector("#pretal-premium");
const pechera = document.querySelector("#pechera");
const arnes = document.querySelector("#arnes");
const collarPerro = document.querySelector("#collar-perro");
const correaExten = document.querySelector("#correa-exten");
const correaFida = document.querySelector("#correa-fida");
const chapitaDaisy = document.querySelector("#chapita-daisy");
const chapitaCollie = document.querySelector("#chapita-collie");
const chapitaTerrier = document.querySelector("#chapita-terrier");
const chapitaBulldog = document.querySelector("#chapita-bulldog");
const chapitaBasic = document.querySelector("#chapita-basic");
const chapitaNegra = document.querySelector("#chapita-negra");
const chapitaPaw = document.querySelector("#chapita-paw");

const jugueteKong = document.querySelector("#juguete-kong");
const kongGoodie = document.querySelector("#kong-goodie");
const jugueteDispensador = document.querySelector("#juguete-dispensador");
const jugueteJumball = document.querySelector("#juguete-jumball");
const pelotaKong = document.querySelector("#pelota-kong");
const jugueteNeumatico = document.querySelector("#juguete-neumatico");
const jugueteCuerda = document.querySelector("#juguete-cuerda");
const setPelota = document.querySelector("#set-pelota");
const juguetePerro = document.querySelector("#juguete-perro");
const jugueteWheel = document.querySelector("#juguete-wheel");
const alimentoCriadores = document.querySelector("#alimento-criadores");
const alimentoOld = document.querySelector("#alimento-old");
const oldPrincePerro = document.querySelector("#old-prince-perro");
const proplanAdulto = document.querySelector("#proplan-adulto");
const excellent = document.querySelector("#excellent");
const dogchow = document.querySelector("#dogchow");
const drRomero = document.querySelector("#dr-romero");
const pedigree = document.querySelector("#pedigree");
const royal = document.querySelector("#royal");

const collarElastico = document.querySelector("#collar-elastico");
const collarCuero = document.querySelector("#collar-cuero");
const correaPretal = document.querySelector("#correa-pretal");
const bolsoImpermeable = document.querySelector("#bolso-impermeable");
const collarLeopardo = document.querySelector("#collar-leopardo");
const excellentGato = document.querySelector("#excellent-gato");
const catchowAlimento = document.querySelector("#catchow-alimento");
const catchowAdulto = document.querySelector("#catchow-adulto");
const oldPrinceGato = document.querySelector("#old-prince-gato");
const lataSabsard = document.querySelector("#lata-sabsard");
const lataSabpollo = document.querySelector("#lata-sabpollo");
const jugueteGigwi = document.querySelector("#juguete-gigwi");
const jugueteVertigo = document.querySelector("#juguete-vertigo");
const pelotaRugby = document.querySelector("#pelota-rugby");
const tunelGato = document.querySelector("#tunel-gato");
const rascadorGato = document.querySelector("#rascador-gato");
const casitaRascador = document.querySelector("#casita-rascador");
const cuchaGato = document.querySelector("#cucha-gato");

const jaulaLoro = document.querySelector("#jaula-loro");
const jaulaBombe = document.querySelector("#jaula-bombe");
const jaulaArco = document.querySelector("#jaula-arco");
const jaulaPajarera = document.querySelector("#jaula-pajarera");
const jaulaDorada = document.querySelector("#jaula-dorada");
const jaulaBlanca = document.querySelector("#jaula-blanca");
const portaPasta = document.querySelector("#porta-pasta");
const bebedero = document.querySelector("#bebedero");
const comedero = document.querySelector("#comedero");
const comederoAcrilico = document.querySelector("#comedero-acrilico");
const expendedor = document.querySelector("#expendedor");
const mixPeriquitos = document.querySelector("#mix-periquitos");
const mijo = document.querySelector("#mijo");
const alimentoLoro = document.querySelector("#alimento-loro");
const suplementoAves = document.querySelector("#suplemento-aves");
const mixVegetales = document.querySelector("#mix-vegetales");
const alpiste = document.querySelector("#alpiste");
const mixFrutas = document.querySelector("#mix-frutas");

const islaTortuga = document.querySelector("#isla-tortuga");
const rocaTermica = document.querySelector("#roca-termica");
const clamp = document.querySelector("#clamp");
const calefactor = document.querySelector("#calefactor");
const isla = document.querySelector("#isla");
const miniIsla = document.querySelector("#mini-isla");
const labconClub = document.querySelector("#labcon-club");
const alimentoTortuga = document.querySelector("#alimento-tortuga");
const alimentoNutrafin = document.querySelector("#alimento-nutrafin");
const alimentoProdac = document.querySelector("#alimento-prodac");
const reptolife = document.querySelector("#reptolife");
const alconRep = document.querySelector("#alcon-rep");

//precio para perro

const precioBolsoN2 = 3732;
const precioBolsoMaletin = 3985;
const precioTransportadora = 26236;
const precioTransportadoraMascota = 6921;
const precioPretal = 16164;
const precioPretalPremium = 3817;
const precioPrechera = 5209;
const precioArnes = 5455;
const precioCollarPerro = 3584;
const precioCorreaExten = 5702;
const precioCorreaFida = 8125;
const precioChapitaDaisy = 4241;
const precioChapitaCollie = 4410;
const precioChapitaTerrier = 4241;
const precioChapitaBulldog = 4241;
const precioChapitaBasic = 3668;
const precioChapitaNegra = 4000;
const precioChapitaPaw = 5867;

const precioJugueteKong = 8250;
const precioKongGoodie = 6201;
const precioJugueteDispensador = 6322;
const precioJugueteJumball = 7531;
const precioPelotaKong = 6097;
const precioJugueteNeumatico = 5649;
const precioJugueteCuerda = 1744;
const precioSetPelota = 3081;
const precioJuguetePerro = 7284;
const precioJugueteWheel = 5206;

const precioAlimentoCriadores = 3659;
const precioAlimentoOld = 8800;
const precioOldPrincePerro = 4683;
const precioProplanAdulto = 11983;
const precioExcellent = 8731;
const precioDogchow = 7054;
const precioDrRomero = 3501;
const precioPedigree = 8544;
const precioRoyal = 14212;

//precio para gato

const precioCollarElastico = 623;
const precioCollarCuero = 818;
const precioCorreaPretal = 2430;
const precioBolsoImpermeable = 23789;
const precioCollarLeopardo = 623;
const precioExcellentGato = 7172;
const precioCatchowAlimento = 7865;
const precioCatchowAdulto = 7864;
const precioOldPrinceGato = 5537;
const precioLataSabsard = 339;
const precioLataSapollo = 339;
const precioJugueteGigwi = 8227;
const precioJugueteVertigo = 12265;
const precioPelotaRugby = 8715;
const precioTunelGato = 5438;
const precioRascadorGato = 4089;
const precioCasitaRascador = 44999;
const precioCuchaGato = 10073;

//precio para aves

const precioJaulaLoro = 79845;
const precioJaulaBombe = 112695;
const precioJaulaArco = 49501;
const precioJaulaPajarera = 16692;
const precioJaulaDorada = 11964;
const precioJaulaBlanca = 19509;
const precioPortaPasta = 318;
const precioBebedero = 4840;
const precioComedero = 1264;
const precioComederoAcrilico = 461;
const precioExpendedor = 809;
const precioMixPeriquitos = 802;
const precioMijo = 630;
const precioAlimentoLoro = 1958;
const precioSuplementoAves = 280;
const precioMixVegetales = 712;
const precioAlpiste = 864;
const precioMixFrutas = 3045;

//precio para reptiles

const precioIslaTortuga = 1527;
const precioRocaTermica = 933;
const precioClamp = 3366;
const precioCalefactor = 9880;
const precioIsla = 4917;
const precioMiniIsla = 1222;
const precioLabconClub = 3715;
const precioAlimentoTortuga = 117;
const precioAlimentoNutrafin = 271;
const precioAlimentoProdac = 935;
const precioReptolife = 229;
const precioAlconRep = 125;


