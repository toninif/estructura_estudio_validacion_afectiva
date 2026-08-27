# Valoración afectiva de textos — plantilla de experimento (SAM + PANAS)

Plantilla reutilizable para un estudio de **valoración afectiva de textos breves** con
escalas **SAM** (Self-Assessment Manikin), corrido en el navegador con
[jsPsych 8.3.0](https://www.jspsych.org/) y sin dependencias externas: todo
—librería, fuentes, imágenes— se sirve desde el propio repo. Está pensado para
correr en aula o de forma remota, con guardado automático a
[DataPipe](https://pipe.jspsych.org/) y respaldo local si la red falla.

> Este repo es un **esqueleto**: trae la maquinaria armada y probada, pero **no**
> trae textos de estímulo. Para usarlo, enchufás tus propios textos, tu estudio
> de DataPipe y tu texto de consentimiento. Ver [Qué reemplazar antes de
> reutilizar](#qué-reemplazar-antes-de-reutilizar).

---

## Qué mide

Cada participante pasa por dos partes:

1. **Estado afectivo (PANAS).** Una lista de adjetivos ("En este momento me siento…")
   que se responden en una escala de 5 puntos. Los ítems y las etiquetas de la escala
   viven en `estimulos.js` (`PANAS_ITEMS`, `PANAS_ESCALA`) y se pueden editar sin tocar
   el motor.
2. **Valoración de textos (SAM).** Para cada texto, el participante lee una situación
   breve e imagina que le pasa a sí mismo. Responde dos dimensiones en una escala de
   **9 posiciones** (los cinco muñequitos ocupan las posiciones 1–3–5–7–9 y hay recuadros
   intermedios clickeables entre ellos):
   - **Valencia:** qué tan agradable o desagradable resulta la situación.
   - **Activación (arousal):** qué tan activado o calmo se siente frente a ella.

El flujo registra no solo la respuesta final sino también los **tiempos** de cada
decisión y los **cambios de opinión** (cada re-clic queda guardado). Hay **controles de
atención** en posiciones fijas y un cierre con dos preguntas de autorreporte
(concentración y sinceridad).

---

## Estructura del repo

```
.
├── index.html               # Motor del experimento (config + timeline + guardado)
├── g1.html … g4.html         # Redirecciones a index.html?g=N (un link por grupo/set)
├── estimulos.js             # TUS TEXTOS + práctica + ítems del PANAS
├── generar_estimulos.R      # Regenera el bloque ESTIMULOS de estimulos.js desde un Excel
├── leer_datos.R             # Lee los CSV descargados y arma tablas ordenadas
├── lib/                     # jsPsych 8.3.0 + plugins (vendorizados, no tocar)
├── fuentes/                 # Fuentes autoalojadas (Archivo + Newsreader) + fuentes.css
├── img/                     # Imágenes SAM (val_*, aro_*, sam_intermedio)
└── README.md
```

- **`index.html`** es el único archivo que corre el estudio. `g1.html`…`g4.html` son
  redirecciones cómodas: abrir `g2.html` equivale a abrir `index.html?g=2`.
- **`lib/`**, **`fuentes/`** e **`img/`** son andamiaje reutilizable tal cual. No hace falta
  tocarlos salvo que quieras cambiar la estética o las imágenes de las escalas.

---

## Puesta en marcha

### 1. Poné tus textos

Editás `estimulos.js`. Hay dos formas:

- **A mano:** reemplazás el contenido del array `ESTIMULOS` (y de `PRACTICA`) con tus
  objetos. Formato de cada estímulo:

  ```js
  {
    "id": "MI_ID_001",     // identificador único del texto
    "cuadrante": "Neutro", // etiqueta de condición/categoría (libre)
    "set": "S1",           // grupo experimental: "S1".."S4"
    "texto": "…",          // el texto que ve el participante
    "control": false       // true solo para controles de atención
  }
  ```

  Los textos de **práctica** usan `"set": "practica"`. Los **controles** llevan
  `"control": true` y su `texto` es la consigna de verificación.

- **Con el script de R (recomendado si tenés muchos textos):** `generar_estimulos.R`
  lee un Excel de asignación y reescribe **solo** el bloque `ESTIMULOS`, dejando
  `PRACTICA`, `PANAS_ITEMS` y `PANAS_ESCALA` como están. Ver
  [Formato de los estímulos](#formato-de-los-estímulos).

Si un grupo queda sin textos cargados, el experimento **no rompe**: muestra un aviso
claro ("este grupo todavía no está activo") en vez de una pantalla en blanco.

### 2. Configurá el guardado (DataPipe)

1. Creá tu experimento en [DataPipe](https://pipe.jspsych.org/) y copiá su ID.
2. En `index.html`, cambiá la constante `DATAPIPE_ID` por tu ID.

> Mientras `DATAPIPE_ID` valga `"CAMBIAR_POR_TU_ID"`, el experimento arranca en **modo
> prueba**: no envía nada a ningún servidor y al final ofrece descargar el CSV localmente.
> Es el estado ideal para pilotear el flujo antes de salir a producción.

### 3. Probá en local

Abrí `index.html` en el navegador (o serví la carpeta con cualquier servidor estático).
Sin un `?g=` válido, al abrir el archivo local asume el grupo 1. Dos ayudas para el
pilotaje, ambas en el bloque de config de `index.html`:

- `MOSTRAR_SOLO_ID = true` muestra solo el **id** del estímulo en vez del texto (sirve
  para revisar el flujo y el layout sin leer todo).
- **Modo prueba** (ver arriba) evita mandar datos de prueba a tu experimento real.

### 4. Publicá

Es un sitio estático: subilo a **GitHub Pages** o a cualquier hosting de archivos
estáticos. No necesita servidor propio ni build.

### 5. Repartí los links

A cada participante le pasás el link de su grupo. Podés agregar un código de participante
opcional con `?p=`:

```
https://TU-SITIO/g1.html            → grupo 1
https://TU-SITIO/g2.html?p=abc123    → grupo 2, participante "abc123"
```

### 6. Bajá y leé los datos

Descargás los CSV desde DataPipe (o desde OSF, según cómo lo tengas conectado), los
ponés en una carpeta `datos/` al lado de `leer_datos.R` y corrés el script. Arma tablas
ordenadas (formato largo, una fila por participante × texto) listas para analizar.

---

## Formato de los estímulos

`generar_estimulos.R` espera un Excel (`asignacion_grupos_experimentales.xlsx`) con
**una hoja por grupo** (`Grupo 1`…`Grupo 4`) y estas columnas: `orden`, `id`,
`cuadrante`, `SEMANTICA`, `f_*`, `texto`. De ahí toma `id`, `cuadrante`, `texto`, arma el
`set` según la hoja y agrega, a cada set, dos **controles de atención** (`CHECK_01`,
`CHECK_02`).

El script tiene un chequeo (`stopifnot`) que asume **160 textos en total** (40 por set,
todos con id distinto). Si tu diseño usa otra cantidad de textos o de grupos, hay que
ajustar ese chequeo y la lógica asociada — ver [Adaptar el diseño](#adaptar-el-diseño-a-tu-estudio).


---

## Configuración (constantes de `index.html`)

Están todas juntas al principio del bloque `CONFIGURACION`:

| Constante          | Para qué sirve                                                                 |
|--------------------|--------------------------------------------------------------------------------|
| `DATAPIPE_ID`      | ID de tu experimento en DataPipe. Con el placeholder → modo prueba.            |
| `MOSTRAR_SOLO_ID`  | `true` muestra solo el id del estímulo (pilotaje de flujo/layout).             |
| `MARCA_MS`         | Cuántos ms queda visible la opción elegida en el PANAS antes de avanzar.       |
| `IMGS`             | Lista de imágenes SAM a precargar (val/aro + intermedio).                      |

**Parámetros por URL:**

- `?g=1`…`?g=4` — **obligatorio en producción**: define el grupo/set. Sin un `g` válido,
  el experimento no arranca (así nadie del set 3 termina, por error, en la lista del set 1).
- `?p=codigo` — código de participante opcional (queda registrado en los datos).

---

## Los datos

- **Dónde caen:** en producción, cada sesión se envía a DataPipe como
  `<sujeto>_g<grupo>.csv` (con tres reintentos ante fallos puntuales de red). Si el envío
  falla, el participante puede descargar un CSV de respaldo y mandártelo.
- **Qué se registra:** además de las respuestas SAM (`valencia`, `activacion`) y del PANAS,
  se guardan tiempos por decisión (`t_valencia`, `t_activacion`), la secuencia de re-clics
  (`clicks_valencia`, `clicks_activacion`), el `cuadrante`, si el ítem era control
  (`es_control`), el `orden`, y metadatos de sesión: navegador, sistema operativo, tamaño de
  pantalla/ventana, IP pública (si el servicio responde), huso horario y marcas de tiempo de
  inicio y envío. El cierre agrega autorreportes de concentración y sinceridad y un campo de
  comentarios.
- **Cómo leerlos:** `leer_datos.R` es el lector canónico. Lee todos los CSV de `datos/` en
  UTF-8, arma la tabla principal en formato largo (una fila por participante × texto) y
  deriva medidas útiles (por ejemplo, tiempo de la segunda decisión y cantidad de cambios de
  opinión). Si cambiás columnas en `index.html`, actualizá este script en consecuencia.

Los controles de atención caen en **posiciones fijas** (después de 10 y de 30 textos), así
son comparables entre participantes; los 40 textos se mezclan al azar por persona.

---

## Qué reemplazar antes de reutilizar

Checklist para que la plantilla no arrastre nada del estudio original:

- [ ] **`estimulos.js` → `ESTIMULOS`**: tus textos (o corré `generar_estimulos.R` con tu Excel).
- [ ] **`estimulos.js` → `PRACTICA`**: los 3 textos de práctica actuales son de ejemplo; reemplazalos o dejalos según te sirvan.
- [ ] **`index.html` → `DATAPIPE_ID`**: tu ID de DataPipe. Si no, los datos de quien use la plantilla se escriben en el experimento original.
- [ ] **`index.html` → bloque de consentimiento y contacto** (portada, aprox. líneas 465–560). Reemplazalos por tus datos y por el texto de consentimiento aprobado por **tu** comité de ética.
- [ ] **`index.html` → información de portada**: título del estudio, descripción y toda referencia institucional.
- [ ] **`estimulos.js` → `PANAS_ITEMS` / `PANAS_ESCALA`**: si usás otro instrumento o traducción.

Lo que **no** hace falta tocar (reutilizable tal cual): `lib/`, `fuentes/`, `img/` y todo el
motor del timeline.

---

## Adaptar el diseño a tu estudio

Algunos supuestos están fijos en el código. Si tu diseño difiere, estos son los puntos a
tocar:

- **Cantidad de grupos/sets.** Hoy son 4 (`S1`…`S4`), con `GRUPOS_VALIDOS` en `index.html`
  y una hoja por grupo en `generar_estimulos.R`. Para más o menos grupos, ajustá ambos y
  agregá/quitá los `gN.html`.
- **Cantidad de textos.** El `stopifnot` de `generar_estimulos.R` asume 160 (40 por set), y
  la secuencia de `index.html` ubica los controles tras 10 y tras 30 textos. Si cambiás el N,
  revisá el chequeo y esas posiciones.
- **Controles de atención.** Se definen en `generar_estimulos.R` (dos por set). Editá sus
  consignas o su cantidad ahí.
- **Escalas SAM.** Las imágenes viven en `img/` y se listan en `IMGS`. Podés reemplazarlas
  manteniendo los nombres de archivo.

---

## Dependencias

- **Correr el experimento:** ninguna. Es HTML/JS estático (jsPsych va vendorizado en `lib/`).
- **`generar_estimulos.R`:** `readxl`, `jsonlite`, `purrr`, `dplyr` (y `tidyr`).
- **`leer_datos.R`:** `dplyr`, `tidyr`, `readr`, `purrr`.

---

## Accesibilidad y decisiones de diseño

- **Sin CDN.** Librería, fuentes e imágenes se sirven desde el repo. La razón original:
  con mucha gente en la misma wifi de aula, depender de un servidor externo es un riesgo.
- **Fuentes autoalojadas** (Archivo + Newsreader, subconjunto latin) en `fuentes/`.
- **Movimiento reducido:** se respeta `prefers-reduced-motion` (se desactivan transiciones
  y animaciones).
- **Área de toque generosa** en los recuadros intermedios de la escala, para que el dedo no
  falle en pantallas chicas.
- **A prueba de fallos:** si algo revienta antes de dibujar, se muestra el error en pantalla
  en lugar de dejar la página en blanco; y el guardado reintenta y ofrece respaldo local.

---


