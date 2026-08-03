// ============================================================
// estimulos.js  -  SET 1 completo (40 textos) + 2 controles de atencion
// Los textos se recuperaron del script de PsyToolkit y se verificaron
// contra asignacion_sets.csv: los 40 ids coinciden exactamente.
// Para los otros sets, regenerar con generar_estimulos.R
// ============================================================

const PRACTICA = {
 "id": "PRAC_01",
 "cuadrante": "practica",
 "set": "practica",
 "texto": "Esperás el colectivo en la parada. Mirás la pantalla, faltan seis minutos. Guardás el celular en el bolsillo.",
 "control": false
};

const ESTIMULOS = [
 {
  "id": "NEU_00101",
  "cuadrante": "Neutro",
  "set": "S1",
  "texto": "Anotás a mano cada dato del tema en su parte. Repasás el asunto punto por punto, sin saltear nada. Es una actividad de rutina.",
  "control": false
 },
 {
  "id": "NEU_00110",
  "cuadrante": "Neutro",
  "set": "S1",
  "texto": "Revisás el asunto y anotás cada situación en su lugar. Repasás la cuestión punto por punto, sin dejar ningún tema de lado. Al final analizás el proceso entero y confirmás que el estado general no tiene diferencias.",
  "control": false
 },
 {
  "id": "NEU_01001",
  "cuadrante": "Neutro",
  "set": "S1",
  "texto": "Sellás a mano el formulario y numerás el expediente. Lo dejás en la carpeta y acomodás el sello en el estante. Cerrás el cajón.",
  "control": false
 },
 {
  "id": "NEU_01010",
  "cuadrante": "Neutro",
  "set": "S1",
  "texto": "Sellás cada formulario, numerás el expediente hoja por hoja y lo dejás en la carpeta correspondiente. Acomodás el sello, el bolígrafo y las etiquetas en el estante del archivo. Después cerrás el cajón y ordenás el mostrador.",
  "control": false
 },
 {
  "id": "NEU_10000",
  "cuadrante": "Neutro",
  "set": "S1",
  "texto": "La diligencia resulta enrevesada y tediosa, aunque el desenlace es provechoso. Un cometido engorroso vuelto llevadero. Queda zanjado.",
  "control": false
 },
 {
  "id": "NEU_10011",
  "cuadrante": "Neutro",
  "set": "S1",
  "texto": "La diligencia te deja los hombros tensos y el cuerpo cansado. Enrevesada y tediosa, pero de desenlace provechoso y hasta grato. Un cometido engorroso que, con paciencia, se vuelve llevadero y queda zanjado.",
  "control": false
 },
 {
  "id": "NEU_11100",
  "cuadrante": "Neutro",
  "set": "S1",
  "texto": "Vas a la feria y volvés con pan, fruta y verdura. Después esperás en la cola del banco, medio aburrido. Un día cotidiano.",
  "control": false
 },
 {
  "id": "NEU_11111",
  "cuadrante": "Neutro",
  "set": "S1",
  "texto": "Con las manos llenas de bolsas, volvés de la feria con pan, fruta y verdura. Esperás un rato largo y aburrido en la cola del banco y pagás la tarjeta. Después guardás todo en la cocina y ordenás la mesa.",
  "control": false
 },
 {
  "id": "VnAn_00000",
  "cuadrante": "V-/A-",
  "set": "S1",
  "texto": "Te gana un tedio lánguido y una desgana mustia. Sentís hastío, apatía y un sopor chato. Es un trance negativo.",
  "control": false
 },
 {
  "id": "VnAn_00110",
  "cuadrante": "V-/A-",
  "set": "S1",
  "texto": "Andás apagado todo el día, sin ganas de nada ni de nadie. Sentís aburrimiento, desgano y una fiaca enorme que no se va. Es un día flojo y medio triste, chato, sin nada que lo levante ni un poco.",
  "control": false
 },
 {
  "id": "VnAn_01011",
  "cuadrante": "V-/A-",
  "set": "S1",
  "texto": "La oficina en penumbra y el cuerpo laxo, sin una gota de energía. El ventilador zumba sobre las carpetas y un sopor tedioso te cierra los párpados. Es una jornada anodina e insulsa, un desgano chato que estira cada minuto.",
  "control": false
 },
 {
  "id": "VnAn_01101",
  "cuadrante": "V-/A-",
  "set": "S1",
  "texto": "Mirás la tele sin ver nada, el cuerpo pesado en el sillón. El cuarto gris, la tarde aburrida. Es un domingo flojo y monótono.",
  "control": false
 },
 {
  "id": "VnAn_10001",
  "cuadrante": "V-/A-",
  "set": "S1",
  "texto": "Un abatimiento sordo te hunde el pecho. Sentís desconsuelo, desamparo y una melancolía solitaria. Es una desolación mustia, sombría, pesada.",
  "control": false
 },
 {
  "id": "VnAn_10111",
  "cuadrante": "V-/A-",
  "set": "S1",
  "texto": "Pasás el domingo solo. Se te hunde el pecho y te pesa el cuerpo. Sentís una tristeza profunda, un vacío enorme y los ojos húmedos. Es una tarde triste y gris, de esas que te dejan quieto mirando la nada.",
  "control": false
 },
 {
  "id": "VnAn_11010",
  "cuadrante": "V-/A-",
  "set": "S1",
  "texto": "La casa en penumbra, las persianas bajas y la vajilla sin lavar sobre la mesada fría. Todo es desamparo y abandono frente al ventanal empañado por la llovizna. Es una desolación sombría y melancólica, un abatimiento que pesa en cada rincón.",
  "control": false
 },
 {
  "id": "VnAn_11100",
  "cuadrante": "V-/A-",
  "set": "S1",
  "texto": "Estás en cama con fiebre. La habitación a oscuras. Afuera llueve y todo está gris. Es una tarde triste y solitaria.",
  "control": false
 },
 {
  "id": "VnAp_00011",
  "cuadrante": "V-/A+",
  "set": "S1",
  "texto": "Un desasosiego inquieto te acelera el pulso y te tensa los hombros. Sentís desazón, apremio y un agobio molesto, sin tregua. Es un trance enojoso y alterado, con el corazón inquieto y la respiración corta.",
  "control": false
 },
 {
  "id": "VnAp_00100",
  "cuadrante": "V-/A+",
  "set": "S1",
  "texto": "Se te complica todo de golpe y te ponés nervioso. Sentís bronca, apuro y algo de agobio. Es un momento molesto y alterado.",
  "control": false
 },
 {
  "id": "VnAp_01000",
  "cuadrante": "V-/A+",
  "set": "S1",
  "texto": "El subte se demora y el andén es un hervidero crispado. Hay empujones, forcejeos y un fastidio inquieto. Es un trajín molesto y engorroso.",
  "control": false
 },
 {
  "id": "VnAp_01111",
  "cuadrante": "V-/A+",
  "set": "S1",
  "texto": "Perdés el colectivo y el corazón te late a mil. Vas a llegar tarde al laburo. Corrés entre bocinas y gente apurada, nervioso, con las manos frías. Es un lío molesto y un apuro feo, con tu jefe esperando y el reloj en contra.",
  "control": false
 },
 {
  "id": "VnAp_10001",
  "cuadrante": "V-/A+",
  "set": "S1",
  "texto": "En medio del gentío, el pulso se te dispara de pavor. Sentís espanto, zozobra y una congoja acuciante. Es un sobresalto angustioso y tembloroso.",
  "control": false
 },
 {
  "id": "VnAp_10110",
  "cuadrante": "V-/A+",
  "set": "S1",
  "texto": "Estalla una pelea a los gritos y te agarra un miedo horrible que no te deja pensar. Sentís pánico, bronca y una angustia que te desborda por completo. Es un momento espantoso, de esos que te dejan gritando sin saber qué hacer.",
  "control": false
 },
 {
  "id": "VnAp_11010",
  "cuadrante": "V-/A+",
  "set": "S1",
  "texto": "Chirrían los frenos y el auto embiste de lleno la ochava. Estallan los vidrios, se retuerce el metal y aúlla la sirena de la ambulancia. Es un estruendo aterrador y pavoroso, una escena espeluznante en plena avenida del centro.",
  "control": false
 },
 {
  "id": "VnAp_11101",
  "cuadrante": "V-/A+",
  "set": "S1",
  "texto": "El perro salta hacia vos y el corazón se te dispara. Retrocedés a los gritos, con las manos temblando de miedo. Es un susto terrible.",
  "control": false
 },
 {
  "id": "VpAn_00001",
  "cuadrante": "V+/A-",
  "set": "S1",
  "texto": "El cuerpo queda liviano, los hombros distendidos. Pasás un rato apacible y llevadero, sosegado. Es una jornada grata y tranquila.",
  "control": false
 },
 {
  "id": "VpAn_00110",
  "cuadrante": "V+/A-",
  "set": "S1",
  "texto": "Es domingo y pasás un rato tranquilo y agradable en tu casa, sin ningún apuro ni preocupación. Estás cómodo, en calma y de buen ánimo toda la tarde. Es una jornada llevadera y bastante grata, de esas que pasan lentas y no dejan queja.",
  "control": false
 },
 {
  "id": "VpAn_01000",
  "cuadrante": "V+/A-",
  "set": "S1",
  "texto": "Te acomodás en el sillón mullido junto al ventanal. Todo está tibio, grato y sin barullo. Es una tarde de invierno amena y llevadera.",
  "control": false
 },
 {
  "id": "VpAn_01111",
  "cuadrante": "V+/A-",
  "set": "S1",
  "texto": "Leés en la cama con los párpados pesados y el cuerpo cómodo bajo la manta. Estás tranquilo, con el mate al lado, con una modorra placentera que te afloja los hombros. Antes dormiste una siesta linda y agradable.",
  "control": false
 },
 {
  "id": "VpAn_10011",
  "cuadrante": "V+/A-",
  "set": "S1",
  "texto": "Al final del día, un sosiego dulce te afloja los hombros y la respiración. Sentís serenidad, deleite y una dicha apacible y honda. Es un bienestar venturoso, un remanso tibio donde el cuerpo entero descansa.",
  "control": false
 },
 {
  "id": "VpAn_10100",
  "cuadrante": "V+/A-",
  "set": "S1",
  "texto": "Después del almuerzo te quedás en la sobremesa con tu familia. Hay paz, cariño y una calma linda. Es un momento feliz y tranquilo.",
  "control": false
 },
 {
  "id": "VpAn_11010",
  "cuadrante": "V+/A-",
  "set": "S1",
  "texto": "Te mecés en la hamaca paraguaya bajo el alero de la quinta, sin prisa alguna. El remanso del jardín, el follaje y el murmullo del arroyo te envuelven despacio. Es un atardecer plácido y apacible, un rincón dulce donde el tiempo parece detenerse.",
  "control": false
 },
 {
  "id": "VpAn_11101",
  "cuadrante": "V+/A-",
  "set": "S1",
  "texto": "Tomás unos mates al sol en el patio y los hombros se te aflojan. Todo está en calma, la tarde hermosa. Es un domingo tranquilo y feliz.",
  "control": false
 },
 {
  "id": "VpAp_00000",
  "cuadrante": "V+/A+",
  "set": "S1",
  "texto": "Al cerrar el proyecto te queda un ímpetu vibrante y una ambición audaz. Te agarran ganas de afrontar lo que venga. Es un cierre venturoso.",
  "control": false
 },
 {
  "id": "VpAp_00111",
  "cuadrante": "V+/A+",
  "set": "S1",
  "texto": "Te enterás de una buena noticia y sentís un cosquilleo en el cuerpo y el pulso acelerado. Te ponés contento, con muchas ganas de festejar. Salís animado a contarlo a todos, comentando lo que pasó por el camino.",
  "control": false
 },
 {
  "id": "VpAp_01011",
  "cuadrante": "V+/A+",
  "set": "S1",
  "texto": "Seguís a la murga por la calle y el corazón te golpea de tanto saltar. Entre bombos y bengalas, agitás los brazos y coreás con los vecinos. Es una velada movida y entretenida, con la batucada retumbando hasta tarde.",
  "control": false
 },
 {
  "id": "VpAp_01100",
  "cuadrante": "V+/A+",
  "set": "S1",
  "texto": "Jugás un partido movido en la canchita del barrio. Metés un lindo gol, tus amigos gritan y te aplauden. Volvés animado y de buen humor.",
  "control": false
 },
 {
  "id": "VpAp_10010",
  "cuadrante": "V+/A+",
  "set": "S1",
  "texto": "Al recibir la distinción frente a todos, te embarga un júbilo desbordante e incontenible. La hazaña te colma de orgullo, regocijo y una exaltación gozosa. Es un instante de euforia pura, una consagración inolvidable.",
  "control": false
 },
 {
  "id": "VpAp_10101",
  "cuadrante": "V+/A+",
  "set": "S1",
  "texto": "Te dan la noticia de que ganaste y el corazón se te dispara. Saltás de alegría, es puro momento de felicidad y emoción. No lo podés creer!",
  "control": false
 },
 {
  "id": "VpAp_11001",
  "cuadrante": "V+/A+",
  "set": "S1",
  "texto": "Estallan los bombos en el corso y el pecho te retumba de emoción. Bailás entre carrozas mientras vuelan las serpentinas y las lentejuelas. Es un jolgorio radiante, dichoso.",
  "control": false
 },
 {
  "id": "VpAp_11110",
  "cuadrante": "V+/A+",
  "set": "S1",
  "texto": "Metés el gol del triunfo sobre la hora y la cancha entera explota. Los pibes saltan, te abrazan y gritan felices entre banderas y bombos. Es una fiesta hermosa, un triunfo enorme. Salís a festejar contentísimo por la calle.",
  "control": false
 },
 {
  "id": "CHECK_01",
  "cuadrante": "control",
  "set": "S1",
  "control": true,
  "texto": "CONTROL DE ATENCIÓN. Esta pantalla no es una situación: sirve para verificar que estás leyendo. Elegí el muñequito del extremo izquierdo en Valencia y el del extremo derecho en Activación."
 },
 {
  "id": "CHECK_02",
  "cuadrante": "control",
  "set": "S1",
  "control": true,
  "texto": "CONTROL DE ATENCIÓN. Esta pantalla no es una situación: sirve para verificar que estás leyendo. Elegí el muñequito del medio en las dos filas."
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
