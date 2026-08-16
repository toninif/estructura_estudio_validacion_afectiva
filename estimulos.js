// ============================================================
// estimulos.js  -  SET 1 completo (40 textos) + 2 controles de atencion
// Los textos se recuperaron del script de PsyToolkit y se verificaron
// contra asignacion_sets.csv: los 40 ids coinciden exactamente.
// Para los otros sets, regenerar con generar_estimulos.R
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
  "id": "NEU_00000",
  "cuadrante": "Neutro",
  "set": "S1",
  "texto": "Repasás el procedimiento y cotejás cada cuestión de la gestión. Anotás el pormenor según su índole, sin omitir nada.",
  "control": false
 },
 {
  "id": "NEU_00001",
  "cuadrante": "Neutro",
  "set": "S2",
  "texto": "Te sentás y cotejás visualmente el procedimiento. Tipeas con minuciosidad el pormenor según su índole, sin omitir nada.",
  "control": false
 },
 {
  "id": "NEU_00010",
  "cuadrante": "Neutro",
  "set": "S3",
  "texto": "Repasás el procedimiento paso por paso y cotejás cada cuestión de la gestión con minuciosidad. Anotás el pormenor según su índole, sin omitir un solo detalle ni requisito. Lo derivás al sector correspondiente.",
  "control": false
 },
 {
  "id": "NEU_00011",
  "cuadrante": "Neutro",
  "set": "S4",
  "texto": "Te sentás y cotejás la tramitación del legajo y cada instancia de la gestión. Anotás a mano el ítem en el renglón que consta, según su tenor, sin saltear ninguna casilla. Lo registrás en el formulario del anexo.",
  "control": false
 },
 {
  "id": "NEU_00100",
  "cuadrante": "Neutro",
  "set": "S4",
  "texto": "Revisás el tema y anotás cada dato en su parte. Repasás el asunto punto por punto, sin saltear nada. Es una actividad de rutina.",
  "control": false
 },
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
  "set": "S2",
  "texto": "Revisás el asunto y anotás cada situación en su lugar. Repasás la cuestión punto por punto, sin dejar ningún tema de lado. Al final analizás el proceso entero y confirmás que el estado general no tiene diferencias.",
  "control": false
 },
 {
  "id": "NEU_00111",
  "cuadrante": "Neutro",
  "set": "S3",
  "texto": "Anotás a mano cada dato del tema en su parte correspondiente. Repasás el asunto punto por punto, sin saltear nada. Al final controlás la cuenta y dejás todo en su sitio.",
  "control": false
 },
 {
  "id": "NEU_01000",
  "cuadrante": "Neutro",
  "set": "S3",
  "texto": "Sellás el formulario, numerás el expediente y lo dejás en la carpeta. Acomodás el sello y el bolígrafo en el estante. Cerrás el cajón.",
  "control": false
 },
 {
  "id": "NEU_01001",
  "cuadrante": "Neutro",
  "set": "S4",
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
  "id": "NEU_01011",
  "cuadrante": "Neutro",
  "set": "S2",
  "texto": "Sellás a mano cada formulario y numerás el expediente hoja por hoja. Lo dejás en la carpeta, acomodás el sello, el bolígrafo y las etiquetas en el estante. Después cerrás el cajón y ordenás el mostrador.",
  "control": false
 },
 {
  "id": "NEU_01100",
  "cuadrante": "Neutro",
  "set": "S2",
  "texto": "Sacás número en el banco y esperás en la fila. Mirás el reloj, firmás el papel y salís. Es un trámite común.",
  "control": false
 },
 {
  "id": "NEU_01101",
  "cuadrante": "Neutro",
  "set": "S3",
  "texto": "Te sentás y firmás el papel del banco. Después sacás número, esperás en la fila y mirás el reloj. Es un trámite común.",
  "control": false
 },
 {
  "id": "NEU_01110",
  "cuadrante": "Neutro",
  "set": "S4",
  "texto": "Sacás número en el banco y esperás un rato en la fila, revisando el reloj cada tanto. Firmás el papel, guardás el comprobante y cargás la tarjeta. Es un trámite común de todos los días.",
  "control": false
 },
 {
  "id": "NEU_01111",
  "cuadrante": "Neutro",
  "set": "S1",
  "texto": "Sentado en la recepción del banco firmas a mano todos los papeles. Después sacás número, esperás en la fila y mirás el reloj cada tanto. Es un trámite común, resuelto en un rato sin apuro.",
  "control": false
 },
 {
  "id": "NEU_10000",
  "cuadrante": "Neutro",
  "set": "S1",
  "texto": "Un trámite penoso, molesto y pesado, de balance provechoso, grato y ameno. Una gestión lenta pero llevadera. Queda saldado.",
  "control": false
 },
 {
  "id": "NEU_10001",
  "cuadrante": "Neutro",
  "set": "S2",
  "texto": "Te queda el cuerpo cansado. Un trámite penoso, molesto y pesado, de balance provechoso y grato. Una gestión lenta pero amena. Queda saldado.",
  "control": false
 },
 {
  "id": "NEU_10010",
  "cuadrante": "Neutro",
  "set": "S3",
  "texto": "Un trámite penoso, molesto y pesado, aunque de balance provechoso, grato y ameno. Una gestión lenta y farragosa que, con paciencia, se vuelve llevadera. Al final queda saldado cada asunto del proceso, sin apuro.",
  "control": false
 },
 {
  "id": "NEU_10011",
  "cuadrante": "Neutro",
  "set": "S4",
  "texto": "La diligencia te deja los hombros tensos y el cuerpo cansado. Enrevesada y tediosa, pero de desenlace provechoso y hasta grato. Un cometido engorroso que, con paciencia, se vuelve llevadero y queda zanjado.",
  "control": false
 },
 {
  "id": "NEU_10100",
  "cuadrante": "Neutro",
  "set": "S4",
  "texto": "El asunto es simple pero la situación se complica y se hace tediosa. Una cuestión fácil vuelta lenta y pesada. Al final se resuelve el tema.",
  "control": false
 },
 {
  "id": "NEU_10101",
  "cuadrante": "Neutro",
  "set": "S1",
  "texto": "El asunto te deja el cuerpo cansado. Simple pero pesado, la situación se complica y se hace tediosa. Una cuestión fácil vuelta lenta. Al final se resuelve el tema.",
  "control": false
 },
 {
  "id": "NEU_10110",
  "cuadrante": "Neutro",
  "set": "S2",
  "texto": "El asunto es simple pero la situación se complica y se hace larga y tediosa. Una cuestión fácil que se vuelve un fastidio lento y pesado. Al final se resuelve el tema, aunque el proceso te deja medio cansado.",
  "control": false
 },
 {
  "id": "NEU_10111",
  "cuadrante": "Neutro",
  "set": "S3",
  "texto": "El asunto te deja el cuerpo cansado. Es simple, pero la situación se complica y se hace larga y tediosa. Una cuestión fácil vuelta un fastidio lento. Al final se resuelve el tema en cuestión.",
  "control": false
 },
 {
  "id": "NEU_11000",
  "cuadrante": "Neutro",
  "set": "S3",
  "texto": "Frenás el auto en la estación y cargás nafta. El playero llena el tanque, revisa las ruedas y limpia el parabrisas con un trapo. Una actividad rutinaria.",
  "control": false
 },
 {
  "id": "NEU_11001",
  "cuadrante": "Neutro",
  "set": "S4",
  "texto": "Frenás en la estación y bajás del auto para cargar nafta. El playero llena el tanque, revisa las ruedas gastadas y limpia el parabrisas. Una actividad rutinaria.",
  "control": false
 },
 {
  "id": "NEU_11010",
  "cuadrante": "Neutro",
  "set": "S1",
  "texto": "El playero llena el tanque de nafta, revisa las ruedas y pasa un trapo por el parabrisas. Guardás el ticket, arrancás el auto y salís despacio de la estación. Una actividad rutinaria y aburrida.",
  "control": false
 },
 {
  "id": "NEU_11011",
  "cuadrante": "Neutro",
  "set": "S2",
  "texto": "Frenás en la estación y bajás del auto para cargar nafta. Ves al playero y le pedís que llene el tanque, revise las ruedas y pase un trapo por el parabrisas. Una actividad rutinaria y aburrida.",
  "control": false
 },
 {
  "id": "NEU_11100",
  "cuadrante": "Neutro",
  "set": "S2",
  "texto": "Vas a la feria y volvés con pan, fruta y verdura. Después esperás en la fila del banco, medio aburrido. Un día cotidiano.",
  "control": false
 },
 {
  "id": "NEU_11101",
  "cuadrante": "Neutro",
  "set": "S3",
  "texto": "Con las manos llenas de bolsas, volvés de la feria con pan y fruta. Pagás una factura en el banco, medio aburrido. Es un día habitual.",
  "control": false
 },
 {
  "id": "NEU_11110",
  "cuadrante": "Neutro",
  "set": "S4",
  "texto": "Vas a la feria temprano y volvés con pan, fruta y verdura para la semana. Después esperás un rato largo y aburrido en la fila del banco y pagás la tarjeta. Al regresar, guardás todo en la cocina y ordenás la mesada.",
  "control": false
 },
 {
  "id": "NEU_11111",
  "cuadrante": "Neutro",
  "set": "S1",
  "texto": "Con las manos llenas de bolsas, volvés de la feria con pan, fruta y verdura. Esperás un rato largo y aburrido en la fila del banco y pagás la tarjeta. Después guardás todo en la cocina y ordenás la mesada.",
  "control": false
 },
 {
  "id": "VnAn_00000",
  "cuadrante": "V-/A-",
  "set": "S1",
  "texto": "Te gana un tedio flojo y una desgana sorda. Sentís hastío, apatía y un sopor gris. Es un trance chato y apagado.",
  "control": false
 },
 {
  "id": "VnAn_00001",
  "cuadrante": "V-/A-",
  "set": "S2",
  "texto": "Un tedio lánguido te afloja el cuerpo entero. Sentís hastío, apatía y un sopor chato. Es un trance negativo y pesado.",
  "control": false
 },
 {
  "id": "VnAn_00010",
  "cuadrante": "V-/A-",
  "set": "S3",
  "texto": "Te gana un tedio lánguido y una desgana mustia que se estira sin fin. Sentís hastío, apatía y un sopor chato, sin ánimo para nada. Es un trance negativo, un letargo que apaga las horas de a una.",
  "control": false
 },
 {
  "id": "VnAn_00011",
  "cuadrante": "V-/A-",
  "set": "S4",
  "texto": "Un tedio lánguido te afloja el cuerpo entero y te cierra los párpados. Sentís hastío, apatía y un sopor chato, sin ánimo para nada. Es un trance negativo, un letargo que apaga lentamente las horas.",
  "control": false
 },
 {
  "id": "VnAn_00100",
  "cuadrante": "V-/A-",
  "set": "S4",
  "texto": "Andás apagado y desganado, en un estado gris. La tarde se hace pesada, chata y sombría. Todo apagado, medio triste y con ánimo negativo.",
  "control": false
 },
 {
  "id": "VnAn_00101",
  "cuadrante": "V-/A-",
  "set": "S1",
  "texto": "Sentís el cuerpo flojo y pesado, en un estado gris y desganado. La tarde se hace pesada, chata y sombría. Todo apagado, medio triste y sin fuerza.",
  "control": false
 },
 {
  "id": "VnAn_00110",
  "cuadrante": "V-/A-",
  "set": "S2",
  "texto": "Andás apagado y desganado, en un estado gris. La tarde se hace pesada, chata y sombría, sin nada para hacer ni para esperar. Todo apagado y sin fuerza, largo, aburrido y monótono, hora tras hora.",
  "control": false
 },
 {
  "id": "VnAn_00111",
  "cuadrante": "V-/A-",
  "set": "S3",
  "texto": "Sentís el cuerpo flojo y pesado, en un estado gris y desganado. La tarde se hace chata, larga y sombría, sin nada para hacer ni esperar. Todo apagado y sin fuerza, aburrido y monótono, hora tras hora.",
  "control": false
 },
 {
  "id": "VnAn_01000",
  "cuadrante": "V-/A-",
  "set": "S3",
  "texto": "La oficina gris, en penumbra, con las carpetas apiladas. Te gana un sopor flojo frente al monitor apagado. Es una jornada gris y monótona.",
  "control": false
 },
 {
  "id": "VnAn_01001",
  "cuadrante": "V-/A-",
  "set": "S4",
  "texto": "La oficina gris y en penumbra, el cuerpo cansado, sin energía. El ventilador zumba sobre las carpetas. Un sopor gris. Es una jornada apagada y monótona.",
  "control": false
 },
 {
  "id": "VnAn_01010",
  "cuadrante": "V-/A-",
  "set": "S1",
  "texto": "La oficina gris, en penumbra, el ventilador zumbando y las carpetas apiladas. Te gana un sopor frente al monitor, con la mirada perdida. Es una jornada gris, apagada y monótona, que no termina más.",
  "control": false
 },
 {
  "id": "VnAn_01011",
  "cuadrante": "V-/A-",
  "set": "S2",
  "texto": "La oficina gris y en penumbra, el cuerpo flojo, sin una gota de energía. El ventilador zumba sobre las carpetas. Te gana un sopor frente al monitor, con la mirada perdida. Es una jornada apagada, gris, interminable y monótona.",
  "control": false
 },
 {
  "id": "VnAn_01100",
  "cuadrante": "V-/A-",
  "set": "S2",
  "texto": "Mirás la tele sin ver nada, tirado en el sillón. El cuarto gris, oscuro y frío. La tarde triste y apagada. Un domingo aburrido y sombrío.",
  "control": false
 },
 {
  "id": "VnAn_01101",
  "cuadrante": "V-/A-",
  "set": "S3",
  "texto": "Mirás la tele sin ver nada, el cuerpo pesado en el sillón. El cuarto gris, oscuro y frío. La tarde triste y apagada. Un domingo aburrido y sombrío.",
  "control": false
 },
 {
  "id": "VnAn_01110",
  "cuadrante": "V-/A-",
  "set": "S4",
  "texto": "Mirás la tele sin ver nada, tirado en el sillón. El cuarto gris y frío, la tarde apagada, y no hay nada para hacer. Un domingo aburrido, triste y monótono, de esos que se arrastran, largos y pesados.",
  "control": false
 },
 {
  "id": "VnAn_01111",
  "cuadrante": "V-/A-",
  "set": "S1",
  "texto": "Mirás la tele sin ver nada, el cuerpo pesado en el sillón y los párpados flojos. El cuarto gris, la tarde larga y aburrida, sin nada para hacer. Es un domingo flojo y monótono, de esos que se arrastran hora tras hora.",
  "control": false
 },
 {
  "id": "VnAn_10000",
  "cuadrante": "V-/A-",
  "set": "S1",
  "texto": "Te embarga un abatimiento sordo y una congoja lánguida. Sentís desconsuelo, desamparo y una melancolía solitaria. Es una desolación mustia y sombría.",
  "control": false
 },
 {
  "id": "VnAn_10001",
  "cuadrante": "V-/A-",
  "set": "S2",
  "texto": "Un abatimiento sordo te hunde el pecho, tirado en la cama. Sentís desconsuelo, desamparo y una melancolía solitaria. Es una desolación mustia y sombría.",
  "control": false
 },
 {
  "id": "VnAn_10010",
  "cuadrante": "V-/A-",
  "set": "S3",
  "texto": "Te embarga un abatimiento sordo y una congoja lánguida que no afloja. Sentís desconsuelo, desamparo y una melancolía solitaria, sin consuelo posible. Es una desolación mustia y sombría, un desgano hondo que te apaga de a poco.",
  "control": false
 },
 {
  "id": "VnAn_10011",
  "cuadrante": "V-/A-",
  "set": "S4",
  "texto": "Un abatimiento sordo te hunde el pecho y te pesa en el cuerpo. Sentís los hombros caídos, desconsuelo, desamparo y una melancolía solitaria. Es una desolación mustia y sombría, un desgano hondo que te apaga de a poco.",
  "control": false
 },
 {
  "id": "VnAn_10100",
  "cuadrante": "V-/A-",
  "set": "S4",
  "texto": "Pasás el domingo solo y te gana una tristeza profunda. Sentís un vacío enorme y un desánimo apagado. Es una tarde triste y gris.",
  "control": false
 },
 {
  "id": "VnAn_10101",
  "cuadrante": "V-/A-",
  "set": "S1",
  "texto": "Pasás el domingo solo y se te hunde el pecho en una tristeza honda. Sentís un vacío enorme y un desánimo apagado. Es una tarde triste y gris.",
  "control": false
 },
 {
  "id": "VnAn_10110",
  "cuadrante": "V-/A-",
  "set": "S2",
  "texto": "Pasás el domingo solo en tu casa y te gana una tristeza profunda que no se va con nada. Sentís un vacío enorme, soledad y un desánimo apagado. Es una tarde triste y gris, de esas que te dejan quieto mirando la nada.",
  "control": false
 },
 {
  "id": "VnAn_10111",
  "cuadrante": "V-/A-",
  "set": "S3",
  "texto": "Pasás el domingo solo en tu casa. Se te hunde el pecho en una tristeza profunda, con un vacío enorme, soledad y un desánimo apagado. Sentís el cuerpo pesado. Es una tarde triste y gris, de esas que te dejan quieto mirando la nada.",
  "control": false
 },
 {
  "id": "VnAn_11000",
  "cuadrante": "V-/A-",
  "set": "S3",
  "texto": "La casa en penumbra, las persianas bajas, la vajilla sin lavar. Todo es desamparo frente al ventanal empañado. Es una desolación sombría y melancólica.",
  "control": false
 },
 {
  "id": "VnAn_11001",
  "cuadrante": "V-/A-",
  "set": "S4",
  "texto": "La casa en penumbra. Sentís que se te hunde el pecho y te falta energía. Las persianas bajas, la vajilla sin lavar. Es una desolación sombría y melancólica.",
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
  "id": "VnAn_11011",
  "cuadrante": "V-/A-",
  "set": "S2",
  "texto": "La casa en penumbra, las persianas bajas y los platos sucios en la pileta. Se te hunde el pecho y te falta energía hasta para caminar. La ropa tirada sobre la cama, todo abandono y desamparo. Es una desolación sombría y melancólica.",
  "control": false
 },
 {
  "id": "VnAn_11100",
  "cuadrante": "V-/A-",
  "set": "S2",
  "texto": "Estás en cama con fiebre, muy triste y solo. Nadie te ayuda. La habitación a oscuras. Afuera llueve y todo está gris.",
  "control": false
 },
 {
  "id": "VnAn_11101",
  "cuadrante": "V-/A-",
  "set": "S3",
  "texto": "En la cama, con fiebre y el cuerpo dolorido, triste y solo. No tenés energía ni para llorar. La habitación a oscuras. Una tarde desoladora.",
  "control": false
 },
 {
  "id": "VnAn_11110",
  "cuadrante": "V-/A-",
  "set": "S4",
  "texto": "Estás en cama con fiebre, muy triste, solo y angustiado, sin ganas de nada. Nadie te ayuda. Afuera la lluvia, la habitación a oscuras. Es una tarde triste, solitaria y pesada, que no se termina nunca.",
  "control": false
 },
 {
  "id": "VnAn_11111",
  "cuadrante": "V-/A-",
  "set": "S1",
  "texto": "En la cama, con fiebre, el cuerpo dolorido, muy triste y solo. Nadie te ayuda. No tenés energía ni para llorar. Afuera la lluvia, la habitación a oscuras. Una tarde triste y desolada, con un vacío y una pena que no se terminan nunca.",
  "control": false
 },
 {
  "id": "VnAp_00000",
  "cuadrante": "V-/A+",
  "set": "S1",
  "texto": "Te gana un desasosiego inquieto y una crispación sorda. Sentís desazón, apremio y un agobio molesto. Es un trance enojoso y alterado.",
  "control": false
 },
 {
  "id": "VnAp_00001",
  "cuadrante": "V-/A+",
  "set": "S2",
  "texto": "Un desasosiego inquieto te acelera el pulso y te sofoca. Sentís desazón, apremio y un agobio molesto. Es un trance enojoso y alterado.",
  "control": false
 },
 {
  "id": "VnAp_00010",
  "cuadrante": "V-/A+",
  "set": "S3",
  "texto": "Te gana un desasosiego inquieto y una crispación sorda que va en aumento. Sentís desazón, apremio y un agobio molesto, sin sosiego posible. Es un trance enojoso y alterado, un apremio que te tiene en vilo y a la defensiva.",
  "control": false
 },
 {
  "id": "VnAp_00011",
  "cuadrante": "V-/A+",
  "set": "S4",
  "texto": "Un desasosiego inquieto te acelera el pulso, te tensa los hombros y te ahoga. Surge desazón, apremio y un agobio molesto, sin tregua. Es un trance enojoso y alterado. La crispación va en aumento y sentís tu corazón inquieto y la respiración entrecortada.",
  "control": false
 },
 {
  "id": "VnAp_00100",
  "cuadrante": "V-/A+",
  "set": "S4",
  "texto": "Se te complica el asunto y quedás inquieto. Sentís apuro y crispación por la situación. Es un momento tenso y agitado.",
  "control": false
 },
 {
  "id": "VnAp_00101",
  "cuadrante": "V-/A+",
  "set": "S1",
  "texto": "Se te complica el asunto y el corazón se te acelera. Quedás inquieto, con apuro y crispación por la situación. Es un momento tenso y agitado.",
  "control": false
 },
 {
  "id": "VnAp_00110",
  "cuadrante": "V-/A+",
  "set": "S2",
  "texto": "Se te complica todo de golpe, una cosa atrás de la otra, y te ponés nervioso. Sentís apuro y bastante agobio. Es un momento molesto y alterado, con la cabeza a mil y  preocupación por lo que viene.",
  "control": false
 },
 {
  "id": "VnAp_00111",
  "cuadrante": "V-/A+",
  "set": "S3",
  "texto": "Se te complica el asunto y el corazón se te acelera. Quedás cada vez más inquieto, con apuro y crispación por la situación y el tema pendiente. Es un momento tenso, agitado y pesado, que no te deja pensar.",
  "control": false
 },
 {
  "id": "VnAp_01000",
  "cuadrante": "V-/A+",
  "set": "S3",
  "texto": "LLega el subte y el andén es un hervidero. Entre empujones, te aplastan contra los vidrios del vagón. Es un trajín molesto y agobiante.",
  "control": false
 },
 {
  "id": "VnAp_01001",
  "cuadrante": "V-/A+",
  "set": "S4",
  "texto": "El subte se demora y el gentío te aplasta en el vagón. Se te acelera el corazón y te falta el aire. Es un trajín agobiante, molesto y feo.",
  "control": false
 },
 {
  "id": "VnAp_01010",
  "cuadrante": "V-/A+",
  "set": "S1",
  "texto": "Llega el subte muy demorado y el andén es un hervidero crispado. Entre empujones, forcejeos y gritos, te aplastan contra los vidrios del vagón repleto. Es un trajín molesto y agobiante, que va a durar un rato.",
  "control": false
 },
 {
  "id": "VnAp_01011",
  "cuadrante": "V-/A+",
  "set": "S2",
  "texto": "Llega el subte muy demorado y el gentío te sofoca en el andén repleto. Entre empujones y forcejeos, te gana un fastidio inquieto y el cuerpo te transpira. Es un trajín molesto y engorroso, con el vagón repleto y el aire irrespirable.",
  "control": false
 },
 {
  "id": "VnAp_01100",
  "cuadrante": "V-/A+",
  "set": "S2",
  "texto": "Perdés el colectivo y corrés por la calle entre autos, bocinas y semáforos. Saltás charcos y esquivás a la gente en la vereda. Un apuro feo y molesto.",
  "control": false
 },
 {
  "id": "VnAp_01101",
  "cuadrante": "V-/A+",
  "set": "S3",
  "texto": "Perdés el colectivo y el corazón se te dispara. Corrés por la calle entre autos, bocinas y semáforos, saltando charcos en la vereda. Un apuro feo y molesto.",
  "control": false
 },
 {
  "id": "VnAp_01110",
  "cuadrante": "V-/A+",
  "set": "S4",
  "texto": "Perdés el colectivo por dos minutos y corrés por la vereda entre autos, bocinas y semáforos. Esquivás charcos y gente, apurado y nervioso, con el reloj en contra. Es un lío molesto y un apuro feo.",
  "control": false
 },
 {
  "id": "VnAp_01111",
  "cuadrante": "V-/A+",
  "set": "S1",
  "texto": "Perdés el colectivo y el corazón se te dispara. Corrés por la calle entre autos, bocinas, semáforos y gente, saltando charcos y baldosas rotas, apurado y nervioso. Es un apuro feo, molesto y agotador, con el reloj en contra.",
  "control": false
 },
 {
  "id": "VnAp_10000",
  "cuadrante": "V-/A+",
  "set": "S1",
  "texto": "En medio del gentío te invade un pavor sobrecogedor. Sentís espanto, zozobra y una congoja acuciante. Es un sobresalto angustioso.",
  "control": false
 },
 {
  "id": "VnAp_10001",
  "cuadrante": "V-/A+",
  "set": "S2",
  "texto": "En medio del gentío, el pulso se te dispara de pavor. Sentís espanto, zozobra y una congoja acuciante. Es un sobresalto angustioso y asfixiante.",
  "control": false
 },
 {
  "id": "VnAp_10010",
  "cuadrante": "V-/A+",
  "set": "S3",
  "texto": "En medio del gentío que te aprieta te invade un pánico atroz. Sentís terror, espanto y una angustia terrible. Es un pavor incontenible, un horror que no cede. No tenés escapatoria y te surgen pensamientos atemorizantes.",
  "control": false
 },
 {
  "id": "VnAp_10011",
  "cuadrante": "V-/A+",
  "set": "S4",
  "texto": "En medio del gentío que te aprieta, el corazón se te dispara de pánico. Sentís terror, espanto, angustia y una zozobra que te ahoga sin tregua. Es un pavor incontenible, un horror que no cede y te deja sin aire.",
  "control": false
 },
 {
  "id": "VnAp_10100",
  "cuadrante": "V-/A+",
  "set": "S4",
  "texto": "Estalla una pelea y te agarra un miedo horrible. Sentís pánico, bronca y una angustia que te desborda. Es un momento espantoso.",
  "control": false
 },
 {
  "id": "VnAp_10101",
  "cuadrante": "V-/A+",
  "set": "S1",
  "texto": "Estalla una pelea y el corazón se te acelera. Te agarra un miedo horrible, con pánico y bronca. Es un momento agitado y espantoso.",
  "control": false
 },
 {
  "id": "VnAp_10110",
  "cuadrante": "V-/A+",
  "set": "S2",
  "texto": "Estalla una pelea a los gritos y te agarra un miedo horrible que no te deja pensar. Sentís pánico, bronca y una angustia que te desborda por completo. Es un momento espantoso, de esos que te dejan sin saber qué hacer.",
  "control": false
 },
 {
  "id": "VnAp_10111",
  "cuadrante": "V-/A+",
  "set": "S3",
  "texto": "Estalla una pelea a los gritos y el corazón se te dispara. Te agarra un miedo horrible, con pánico, bronca y las manos sudando. Es un momento espantoso. Temblás entero, con la respiración agitada, de esos que te dejan paralizado.",
  "control": false
 },
 {
  "id": "VnAp_11000",
  "cuadrante": "V-/A+",
  "set": "S3",
  "texto": "Chirrían los frenos y el auto revienta contra la ochava. Estallan los vidrios, el parabrisas y el capó y salta el motor. Es un choque brutal.",
  "control": false
 },
 {
  "id": "VnAp_11001",
  "cuadrante": "V-/A+",
  "set": "S4",
  "texto": "Chirrían los frenos y el corazón te sube a la garganta. El auto revienta contra la ochava, estallan los vidrios, el capó y el motor. Es un choque brutal.",
  "control": false
 },
 {
  "id": "VnAp_11010",
  "cuadrante": "V-/A+",
  "set": "S1",
  "texto": "Chirrían los frenos y el auto revienta de lleno contra la ochava. Estallan los vidrios, el parabrisas, los faros y el capó con un estruendo de terror. El metal se retuerce sobre el asfalto. Es un choque brutal y espantoso.",
  "control": false
 },
 {
  "id": "VnAp_11011",
  "cuadrante": "V-/A+",
  "set": "S2",
  "texto": "Chirrían los frenos y el corazón se te sube a la garganta. El auto revienta de lleno contra la ochava. Estallan los vidrios, el parabrisas y los faros con un estruendo de terror y espanto. Quedás paralizado, con las piernas temblando. Un estruendo aterrador.",
  "control": false
 },
 {
  "id": "VnAp_11100",
  "cuadrante": "V-/A+",
  "set": "S2",
  "texto": "El perro te salta y te clava los dientes y las garras en la pierna y el brazo. Retrocedés a los gritos, muerto de miedo y terror.",
  "control": false
 },
 {
  "id": "VnAp_11101",
  "cuadrante": "V-/A+",
  "set": "S3",
  "texto": "El perro te clava los dientes en la pierna. El corazón se te dispara y el dolor te atraviesa. Retrocedés a los gritos, muerto de miedo. Un ataque feroz.",
  "control": false
 },
 {
  "id": "VnAp_11110",
  "cuadrante": "V-/A+",
  "set": "S4",
  "texto": "El perro se suelta de la cadena y te clava los dientes, los colmillos y las garras en la pierna y el brazo. Retrocedés a los gritos, muerto de miedo, terror y pánico, tropezando en la vereda, mientras el bicho te desgarra la ropa.",
  "control": false
 },
 {
  "id": "VnAp_11111",
  "cuadrante": "V-/A+",
  "set": "S1",
  "texto": "El perro se suelta de la cadena y te clava los dientes y las garras en la pierna. El corazón se te dispara, las manos te tiemblan, el dolor te atraviesa y retrocedés a los gritos, muerto de miedo. Quedás temblando en la vereda.",
  "control": false
 },
 {
  "id": "VpAn_00000",
  "cuadrante": "V+/A-",
  "set": "S1",
  "texto": "Pasás un rato apacible y sereno, sin sobresaltos. Estás en un estado calmo y conforme, de ánimo manso. Es una jornada grata y amena.",
  "control": false
 },
 {
  "id": "VpAn_00001",
  "cuadrante": "V+/A-",
  "set": "S2",
  "texto": "Sentís el cuerpo liviano y sosegado. Pasás un rato apacible y sereno, en un estado calmo. Es una jornada grata y amena.",
  "control": false
 },
 {
  "id": "VpAn_00010",
  "cuadrante": "V+/A-",
  "set": "S3",
  "texto": "Pasás un rato apacible y llevadero, sin sobresaltos ni urgencias. Estás sosegado y conforme, de ánimo tranquilo y sereno. Es una jornada grata y amena, muy relajante, que transcurre mansa y sin apremios.",
  "control": false
 },
 {
  "id": "VpAn_00011",
  "cuadrante": "V+/A-",
  "set": "S4",
  "texto": "Sentís el cuerpo liviano y sosegado, sin contracturas ni tensiones. Pasás un rato apacible y sereno, en un estado calmo y conforme. Es una jornada grata y amena, de ánimo manso, que transcurre sin apremios.",
  "control": false
 },
 {
  "id": "VpAn_00100",
  "cuadrante": "V+/A-",
  "set": "S4",
  "texto": "Pasás un buen rato en tu casa, en un estado sereno. Es un momento calmo y ameno, sin apuro. Estás a gusto toda la tarde.",
  "control": false
 },
 {
  "id": "VpAn_00101",
  "cuadrante": "V+/A-",
  "set": "S1",
  "texto": "Tenés el cuerpo liviano y relajado. Pasás un buen rato en casa, en un estado sereno. Es un momento calmo y ameno.",
  "control": false
 },
 {
  "id": "VpAn_00110",
  "cuadrante": "V+/A-",
  "set": "S2",
  "texto": "Pasás un buen rato en tu casa, en un estado sereno y sin preocupaciones. Es un momento calmo y ameno, sin ningún apuro ni sobresalto. Estás a gusto toda la tarde, en una jornada llevadera y grata.",
  "control": false
 },
 {
  "id": "VpAn_00111",
  "cuadrante": "V+/A-",
  "set": "S3",
  "texto": "Tenés el cuerpo liviano, relajado, sin ninguna tensión. Pasás un buen rato en casa, en un estado sereno y calmo. Es una situación amena y sin apuro. Toda la tarde es llevadera, apacible y sosegada.",
  "control": false
 },
 {
  "id": "VpAn_01000",
  "cuadrante": "V+/A-",
  "set": "S3",
  "texto": "Te acomodás en el sillón mullido junto al ventanal. Todo está tibio, grato y sin barullo. Es una tarde de invierno amena y llevadera.",
  "control": false
 },
 {
  "id": "VpAn_01001",
  "cuadrante": "V+/A-",
  "set": "S4",
  "texto": "Te acomodás en el sillón junto al ventanal con una manta y el cuerpo relajado. Todo es grato y sin barullo. Es una tarde de invierno amena.",
  "control": false
 },
 {
  "id": "VpAn_01010",
  "cuadrante": "V+/A-",
  "set": "S1",
  "texto": "Te acomodás en tu sillón mullido y acogedor junto al ventanal, con el mate al lado. Hoy estás solo en tu casa. Todo transcurre sin barullo ni prisa. Es una tarde de invierno amena y llevadera.",
  "control": false
 },
 {
  "id": "VpAn_01011",
  "cuadrante": "V+/A-",
  "set": "S2",
  "texto": "Te acomodás en el sillón mullido y el cuerpo queda liviano, los hombros sueltos. Todo es grato, apacible, sin barullo. Es una tarde de invierno amena y llevadera, con la modorra justa para dejarte estar.",
  "control": false
 },
 {
  "id": "VpAn_01100",
  "cuadrante": "V+/A-",
  "set": "S2",
  "texto": "Leés un rato en la cama con la ventana abierta. Estás a gusto y sereno, sin apuro. Después dormitás un rato largo.",
  "control": false
 },
 {
  "id": "VpAn_01101",
  "cuadrante": "V+/A-",
  "set": "S3",
  "texto": "Leés en la cama con el cuerpo relajado y descontracturado. Es domingo. Estás sereno, sin apuro. Al rato sentís sueño y dormitás un rato largo.",
  "control": false
 },
 {
  "id": "VpAn_01110",
  "cuadrante": "V+/A-",
  "set": "S4",
  "texto": "Leés un rato largo en la cama, con la ventana abierta y el mate al lado. Es domingo y te sentís tranquilo y sin ningún apuro. Después descansás un rato sereno, con esa fiaca típica de las tardes lentas.",
  "control": false
 },
 {
  "id": "VpAn_01111",
  "cuadrante": "V+/A-",
  "set": "S1",
  "texto": "Leés en la cama con los párpados pesados y el cuerpo cómodo bajo la manta. Es un domingo sereno y de descanso. Estás tranquilo, con el mate al lado y una fiaca tremenda. Después dormís un rato largo.",
  "control": false
 },
 {
  "id": "VpAn_10000",
  "cuadrante": "V+/A-",
  "set": "S1",
  "texto": "Al final del día te invade una ternura honda y un bienestar pleno. Sentís serenidad, sosiego y una dicha silenciosa. Es un remanso plácido y venturoso.",
  "control": false
 },
 {
  "id": "VpAn_10001",
  "cuadrante": "V+/A-",
  "set": "S2",
  "texto": "Al final del día, una ternura honda te afloja los hombros. Sentís serenidad, plenitud y una felicidad silenciosa. Es una sensación placentera y relajante.",
  "control": false
 },
 {
  "id": "VpAn_10010",
  "cuadrante": "V+/A-",
  "set": "S3",
  "texto": "Al final del día te invade una ternura honda, una placidez serena y sin sobresaltos. Sentís sosiego, calma, ternura y una profunda felicidad silenciosa. Es un remanso plácido y hermoso, de tiempo detenido, donde nada urge ni presiona.",
  "control": false
 },
 {
  "id": "VpAn_10011",
  "cuadrante": "V+/A-",
  "set": "S4",
  "texto": "Al final del día, un sosiego dulce te afloja los hombros y la respiración. Sentís serenidad, deleite y una dicha apacible y honda. Es un bienestar venturoso, un remanso tibio donde el cuerpo entero descansa.",
  "control": false
 },
 {
  "id": "VpAn_10100",
  "cuadrante": "V+/A-",
  "set": "S4",
  "texto": "Compartís un rato en tu casa con los tuyos. Sentís cariño, felicidad, plenitud y una alegría inmensa. Es un momento hermoso y sereno.",
  "control": false
 },
 {
  "id": "VpAn_10101",
  "cuadrante": "V+/A-",
  "set": "S1",
  "texto": "Compartís un rato con los tuyos. Hay cariño y una dicha compartida. Esto te hace sentir el cuerpo liviano y en paz. Es un momento hermoso y sereno.",
  "control": false
 },
 {
  "id": "VpAn_10110",
  "cuadrante": "V+/A-",
  "set": "S2",
  "texto": "Compartís un rato con los tuyos y se quedan de sobremesa en familia, sin apuro. Hay paz, cariño y una calma linda que llena el ambiente. Es un momento feliz y tranquilo, de esos que dan ganas de agradecer en silencio.",
  "control": false
 },
 {
  "id": "VpAn_10111",
  "cuadrante": "V+/A-",
  "set": "S3",
  "texto": "Compartís un rato con los tuyos. Hay cariño, felicidad y una dicha tranquila en la familia. Te sentís en paz, con el cuerpo liviano y los hombros sueltos. Es un momento hermoso y feliz, de esos que dan ganas de agradecer.",
  "control": false
 },
 {
  "id": "VpAn_11000",
  "cuadrante": "V+/A-",
  "set": "S3",
  "texto": "Te acomodás en la reposera con una manta, el termo y una taza. Las flores del jardín te llenan de paz y ternura. Un atardecer hermoso.",
  "control": false
 },
 {
  "id": "VpAn_11001",
  "cuadrante": "V+/A-",
  "set": "S4",
  "texto": "Relajado en la reposera, con el termo y la taza en la mano, entre los jazmines. Las flores del jardín te dan paz y ternura. Un atardecer sosegado.",
  "control": false
 },
 {
  "id": "VpAn_11010",
  "cuadrante": "V+/A-",
  "set": "S1",
  "texto": "Te acomodás en la reposera con una manta, el termo, la taza y un libro de tu autor favorito. Las flores del jardín te llenan de paz, ternura y una dicha honda. Un atardecer hermoso y plácido.",
  "control": false
 },
 {
  "id": "VpAn_11011",
  "cuadrante": "V+/A-",
  "set": "S2",
  "texto": "Te acomodás en la reposera con el termo, una taza en la mano y una manta sobre las piernas. Tu cuerpo relajado y tranquilo. Las flores del jardín te llenan de paz, ternura y una dicha honda. Un atardecer plácido.",
  "control": false
 },
 {
  "id": "VpAn_11100",
  "cuadrante": "V+/A-",
  "set": "S2",
  "texto": "Tomás unos mates al sol en el patio de tu casa. Todo está en calma, la tarde hermosa. Es un domingo tranquilo y feliz.",
  "control": false
 },
 {
  "id": "VpAn_11101",
  "cuadrante": "V+/A-",
  "set": "S3",
  "texto": "Tomás unos mates al sol en el patio y sentís el cuerpo relajado y tranquilo. Todo está en calma, la tarde hermosa. Es un domingo sereno y feliz.",
  "control": false
 },
 {
  "id": "VpAn_11110",
  "cuadrante": "V+/A-",
  "set": "S4",
  "texto": "Tomás unos mates al sol en el patio de tu casa, sin apuro. El cielo está despejado, la tarde hermosa y todo en calma. Es un domingo tranquilo y feliz, de esos que invitan a quedarse quieto mirando las plantas.",
  "control": false
 },
 {
  "id": "VpAn_11111",
  "cuadrante": "V+/A-",
  "set": "S1",
  "texto": "Tomás unos mates al sol en el patio, con el termo, la pava y la bombilla al lado y disfrutás del día. El cielo despejado, la tarde hermosa. Es un domingo tranquilo y feliz. Respirás hondo, con el cuerpo liviano.",
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
  "id": "VpAp_00001",
  "cuadrante": "V+/A+",
  "set": "S2",
  "texto": "Al cerrar el proyecto, el pulso te queda vibrante y con un ímpetu en el cuerpo. Te agarran ganas de afrontar lo que venga, con brío audaz.",
  "control": false
 },
 {
  "id": "VpAp_00010",
  "cuadrante": "V+/A+",
  "set": "S3",
  "texto": "Al cerrar el proyecto después de meses, te queda un ímpetu vibrante y una ambición audaz. Te agarran ganas de afrontar lo que sea, con brío, vigor e impulso para encarar lo que se viene. Es un cierre pujante, grato y venturoso.",
  "control": false
 },
 {
  "id": "VpAp_00011",
  "cuadrante": "V+/A+",
  "set": "S4",
  "texto": "Al cerrar el proyecto, el pulso te queda vibrante y con un ímpetu que te recorre el cuerpo. Te agarra una ambición audaz y ganas de afrontar lo que sea, con brío, vigor e impulso para encarar lo que se viene. Es un cierre pujante y venturoso.",
  "control": false
 },
 {
  "id": "VpAp_00100",
  "cuadrante": "V+/A+",
  "set": "S4",
  "texto": "Te llega una noticia sobre tu futuro y quedás movido. Es un momento de acción, con intención de encararlo. Salís con alegría y optimismo.",
  "control": false
 },
 {
  "id": "VpAp_00101",
  "cuadrante": "V+/A+",
  "set": "S1",
  "texto": "Te llega una noticia sobre tu futuro y sentís un cosquilleo en el cuerpo. Quedás movido, con un momento de acción por delante. Salís con alegría y optimismo.",
  "control": false
 },
 {
  "id": "VpAp_00110",
  "cuadrante": "V+/A+",
  "set": "S2",
  "texto": "Te llega una buena noticia sobre tu futuro y quedás de buen humor al toque. Es un momento de encarar nuevos desafíos, que esperás hace tiempo. Salís con impulso y empuje para lo que se viene.",
  "control": false
 },
 {
  "id": "VpAp_00111",
  "cuadrante": "V+/A+",
  "set": "S3",
  "texto": "Te llega una noticia sobre tu futuro y sentís un cosquilleo en el cuerpo. Quedás movido, con un momento de acción por delante, con intención de encararlo. Salís con impulso, optimismo y empuje para lo que se viene.",
  "control": false
 },
 {
  "id": "VpAp_01000",
  "cuadrante": "V+/A+",
  "set": "S3",
  "texto": "Seguís a la murga por la calle, entre bombos y bengalas. Te encontrás con los vecinos del vecindario. Es una velada movida y entretenida.",
  "control": false
 },
 {
  "id": "VpAp_01001",
  "cuadrante": "V+/A+",
  "set": "S4",
  "texto": "Seguís a la murga por la calle y quedás sin aire de tanto saltar. Entre bombos y bengalas, agitás los brazos con los vecinos. Una velada movida y entretenida.",
  "control": false
 },
 {
  "id": "VpAp_01010",
  "cuadrante": "V+/A+",
  "set": "S1",
  "texto": "Seguís a la murga entre bombos, bengalas y redoblantes de la comparsa. En esta velada movida y entretenida, coreás con los vecinos toda la batucada. Es un jolgorio movido y contagioso hasta la madrugada.",
  "control": false
 },
 {
  "id": "VpAp_01011",
  "cuadrante": "V+/A+",
  "set": "S2",
  "texto": "Seguís a la murga y el corazón te late de tanto saltar. Entre bombos y bengalas, agitás los brazos y coreás la comparsa con los vecinos. Bailás con la batucada hasta la madrugada. Es un jolgorio movido y entretenido.",
  "control": false
 },
 {
  "id": "VpAp_01100",
  "cuadrante": "V+/A+",
  "set": "S2",
  "texto": "Jugás al fútbol con tus amigos en la canchita del barrio. Metés un gol y la gente grita con la camiseta puesta. Es un día soñado.",
  "control": false
 },
 {
  "id": "VpAp_01101",
  "cuadrante": "V+/A+",
  "set": "S3",
  "texto": "Jugás al fútbol con tus amigos en la canchita. Metés un gol y quedás agitado, con el pulso acelerado. La gente grita en la tribuna.",
  "control": false
 },
 {
  "id": "VpAp_01110",
  "cuadrante": "V+/A+",
  "set": "S4",
  "texto": "Jugás un buen partido a la pelota en la canchita del barrio. Metés un gol y tus compañeros gritan, te aplauden y te palmean la espalda. Es un día para el recuerdo. Volvés con tus amigos comentando cada jugada por el camino.",
  "control": false
 },
 {
  "id": "VpAp_01111",
  "cuadrante": "V+/A+",
  "set": "S1",
  "texto": "Jugás al fútbol con tus amigos en la canchita del barrio. Metés un buen gol y quedás agitado, con el pulso acelerado y las piernas cansadas. La gente grita y salta en la tribuna. Volvés movido y contento, charlando con tus amigos.",
  "control": false
 },
 {
  "id": "VpAp_10000",
  "cuadrante": "V+/A+",
  "set": "S1",
  "texto": "Al recibir la distinción, te embarga una alegría inmensa y una dicha gloriosa. La hazaña te llena de orgullo, euforia y felicidad. Es un instante sublime.",
  "control": false
 },
 {
  "id": "VpAp_10001",
  "cuadrante": "V+/A+",
  "set": "S2",
  "texto": "Al recibir la distinción, el corazón te retumba de alegría. Una dicha gloriosa te colma de orgullo, euforia y felicidad. Es un instante sublime y palpitante.",
  "control": false
 },
 {
  "id": "VpAp_10010",
  "cuadrante": "V+/A+",
  "set": "S3",
  "texto": "Al recibir la distinción frente a todos, te embarga una alegría inmensa y una dicha gloriosa, incontenible. La hazaña te llena de orgullo, euforia y felicidad plena. Es un instante sublime, una gloria inolvidable.",
  "control": false
 },
 {
  "id": "VpAp_10011",
  "cuadrante": "V+/A+",
  "set": "S4",
  "texto": "Al recibir la distinción frente a todos, el corazón te retumba de alegría y se te eriza la piel. Una dicha gloriosa te colma de orgullo, euforia y felicidad. Es un instante sublime que te deja sin aire.",
  "control": false
 },
 {
  "id": "VpAp_10100",
  "cuadrante": "V+/A+",
  "set": "S4",
  "texto": "Te dan la noticia de que ganaste. Es un momento de pura felicidad y emoción. Al fin llega tu premio deseado. No lo podés creer!",
  "control": false
 },
 {
  "id": "VpAp_10101",
  "cuadrante": "V+/A+",
  "set": "S1",
  "texto": "Te dan la noticia de que ganaste y el corazón se te dispara. Saltás de alegría. Es puro momento de felicidad y emoción. No lo podés creer!",
  "control": false
 },
 {
  "id": "VpAp_10110",
  "cuadrante": "V+/A+",
  "set": "S2",
  "texto": "Te dan la noticia de que ganaste. Es un momento de pura felicidad, emoción y sorpresa. Al fin llega tu premio deseado y anhelado por tantos años. Llamás a todos para contarlo, feliz, sin poder creerlo todavía.",
  "control": false
 },
 {
  "id": "VpAp_10111",
  "cuadrante": "V+/A+",
  "set": "S3",
  "texto": "Te dan la noticia de que ganaste y el corazón se te dispara de alegría. Saltás por toda la casa, con los ojos llenos de emoción y una sonrisa enorme. Es un momento de pura felicidad y sorpresa. Llamás a todos, feliz, sin poder creerlo.",
  "control": false
 },
 {
  "id": "VpAp_11000",
  "cuadrante": "V+/A+",
  "set": "S3",
  "texto": "Estallan los bombos y los tambores en el corso. Pasan las carrozas, los disfraces y las máscaras, mientras vuelan el confeti y las serpentinas. Es un jolgorio radiante.",
  "control": false
 },
 {
  "id": "VpAp_11001",
  "cuadrante": "V+/A+",
  "set": "S4",
  "texto": "Estallan los bombos y los tambores en el corso, y el pecho te retumba. Bailás feliz entre carrozas, globos y máscaras. Un jolgorio hermoso, radiante y dichoso.",
  "control": false
 },
 {
  "id": "VpAp_11010",
  "cuadrante": "V+/A+",
  "set": "S1",
  "texto": "Estallan los bombos en el corso del barrio y pasan sin parar las carrozas y las comparsas. El papel picado, las lentejuelas y las serpentinas vuelan por el aire. Es un jolgorio hermoso, radiante y dichoso. Una noche fastuosa que no querés que termine.",
  "control": false
 },
 {
  "id": "VpAp_11011",
  "cuadrante": "V+/A+",
  "set": "S2",
  "texto": "Estallan los bombos y los tambores en el corso. El pecho te retumba de emoción. Bailás feliz entre carrozas, globos y máscaras, con la piel erizada. Vuelan el confeti y las serpentinas. Es un jolgorio hermoso, radiante y dichoso.",
  "control": false
 },
 {
  "id": "VpAp_11100",
  "cuadrante": "V+/A+",
  "set": "S2",
  "texto": "Metés el gol del desempate y ganás el partido. La cancha estalla y la hinchada corea tu nombre. Todo es alegría y el vestuario es una fiesta.",
  "control": false
 },
 {
  "id": "VpAp_11101",
  "cuadrante": "V+/A+",
  "set": "S3",
  "texto": "Metés el gol del triunfo y el corazón te late a mil. La cancha explota, todos saltan con la camiseta y se abrazan. Gritás de alegría. Es una fiesta.",
  "control": false
 },
 {
  "id": "VpAp_11110",
  "cuadrante": "V+/A+",
  "set": "S4",
  "texto": "Metés el gol del desempate sobre la hora y ganás el partido. La cancha estalla, todos corean felices tu nombre. Es una fiesta enorme, un triunfo soñado. Salís a festejar con tus compañeros contentos con la copa.",
  "control": false
 },
 {
  "id": "VpAp_11111",
  "cuadrante": "V+/A+",
  "set": "S1",
  "texto": "Metés el gol del triunfo y el corazón te late a mil. La cancha estalla, todos se abrazan felices entre las banderas. Es una fiesta hermosa, un triunfo soñado. Salís con tus compañeros a la calle a festejar y saltar de alegría.",
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
