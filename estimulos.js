// ============================================================
// estimulos.js  -  textos + controles de atencion
// ============================================================

const PRACTICA = [
 {
  "id": "PRAC_01",
  "cuadrante": "practica",
  "set": "practica",
  "texto": "Esperás el colectivo en la parada. Mirás la pantalla, faltan seis minutos. Guardás el celular en el bolsillo.",
  "control": false
 },
 {
  "id": "PRAC_02",
  "cuadrante": "practica",
  "set": "practica",
  "control": false,
  "texto": "Subís al tren en hora pico. Está lleno y viajás parado, agarrado del pasamanos, mirando por la ventanilla hasta tu estación."
 },
 {
  "id": "PRAC_03",
  "cuadrante": "practica",
  "set": "practica",
  "control": false,
  "texto": "Llegás a tu casa y tu perro te recibe moviendo la cola. Te agachás para acariciarle la cabeza."
 }
];

const ESTIMULOS = [
 {
  "id": "ID-ESTIMULO",
  "cuadrante": "CLASIFICACION AFECTIVA",
  "set": "N DE SET",
  "texto": "TEXTO",
  "control": false
 },
 {
  "id": "CHECK_01",
  "cuadrante": "control",
  "set": "S1",
  "control": true,
  "texto": "CONTROL DE ATENCIÓN. Esta pantalla no es una situación: sirve para verificar que estás leyendo. Clickea la tercera casilla en valencia y la quinta casilla en activación."
 },
 {
  "id": "CHECK_02",
  "cuadrante": "control",
  "set": "S1",
  "control": true,
  "texto": "CONTROL DE ATENCIÓN. Esta pantalla no es una situación: sirve para verificar que estás leyendo. Clickea la casilla central en valencia y la casilla central en activación."
 },
 {
  "id": "CHECK_01",
  "cuadrante": "control",
  "set": "S2",
  "control": true,
  "texto": "CONTROL DE ATENCIÓN. Esta pantalla no es una situación: sirve para verificar que estás leyendo. Clickea la tercera casilla en valencia y la quinta casilla en activación."
 },
 {
  "id": "CHECK_02",
  "cuadrante": "control",
  "set": "S2",
  "control": true,
  "texto": "CONTROL DE ATENCIÓN. Esta pantalla no es una situación: sirve para verificar que estás leyendo. Clickea la casilla central en valencia y la casilla central en activación."
 },
 {
  "id": "CHECK_01",
  "cuadrante": "control",
  "set": "S3",
  "control": true,
  "texto": "CONTROL DE ATENCIÓN. Esta pantalla no es una situación: sirve para verificar que estás leyendo. Clickea la tercera casilla en valencia y la quinta casilla en activación."
 },
 {
  "id": "CHECK_02",
  "cuadrante": "control",
  "set": "S3",
  "control": true,
  "texto": "CONTROL DE ATENCIÓN. Esta pantalla no es una situación: sirve para verificar que estás leyendo. Clickea la casilla central en valencia y la casilla central en activación."
 },
 {
  "id": "CHECK_01",
  "cuadrante": "control",
  "set": "S4",
  "control": true,
  "texto": "CONTROL DE ATENCIÓN. Esta pantalla no es una situación: sirve para verificar que estás leyendo. Clickea la tercera casilla en valencia y la quinta casilla en activación."
 },
 {
  "id": "CHECK_02",
  "cuadrante": "control",
  "set": "S4",
  "control": true,
  "texto": "CONTROL DE ATENCIÓN. Esta pantalla no es una situación: sirve para verificar que estás leyendo. Clickea la casilla central en valencia y la casilla central en activación."
 }
];

const PANAS_ITEMS = [
 "Interesado/a",
 "Afligido/a",
 // "Emocionado/a",   <-- item 3 del PANAS original (Excited, afecto positivo).
 //                       Descomentar para tener las dos subescalas balanceadas 10/10.
 "Disgustado/a",
 "Fuerte",
 "Culpable",
 "Asustado/a",
 "Hostil",
 "Entusiasmado/a",
 "Orgulloso/a",
 "Irritable",
 // "Alerta",         <-- item 12 del PANAS original (Alert, afecto positivo).
 "Avergonzado/a",
 "Inspirado/a",
 "Nervioso/a",
 "Decidido/a",
 "Atento/a",
 "Intranquilo/a",
 "Activo/a",
 "Temeroso/a"
];

const PANAS_ESCALA = [
 "Muy poco o nada",
 "Un poco",
 "Moderadamente",
 "Bastante",
 "Extremadamente"
];
