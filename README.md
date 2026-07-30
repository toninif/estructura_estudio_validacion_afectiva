# Valoración afectiva de textos — Set 1

Experimento jsPsych con los 40 textos del Set 1 más 2 controles de atención.
Corre en el navegador. Ahora mismo está en **modo prueba**: no manda nada a
ningún servidor y al final te ofrece descargar el CSV.

## Subirlo a GitHub Pages

1. Creá un repo **público** en GitHub. Nombre corto, por ejemplo `textos-sam`.
2. Subí el contenido de esta carpeta a la **raíz** del repo, no dentro de una
   subcarpeta. Tiene que quedar así:

       index.html
       estimulos.js
       generar_estimulos.R
       .nojekyll
       img/   (11 PNG)

3. Settings → Pages → Source: *Deploy from a branch* → Branch `main`,
   carpeta `/ (root)` → Save.
4. Esperá uno o dos minutos y entrá a:

       https://toninif.github.io/textos-sam/?g=1

   (cambiá `textos-sam` por el nombre real del repo)

Si ves la pantalla de consentimiento, está andando. Si ves un recuadro rojo, es la
trampa de errores: pegame el mensaje.

## Los dos interruptores

Arriba del `<script>` en `index.html`:

    const DATAPIPE_ID = "CAMBIAR_POR_TU_ID";   // modo prueba mientras diga esto
    const MOSTRAR_SOLO_ID = true;              // true = muestra el id del estimulo

- `MOSTRAR_SOLO_ID = true` muestra `NEU_00101` en lugar del texto. Sirve para
  pilotear flujo y layout sin leer 40 textos. Los controles de atención se
  muestran siempre completos, porque si no no se entienden.
- `MOSTRAR_SOLO_ID = false` muestra los textos reales. Ponelo en false antes de
  recolectar, y usá esa versión para probar en celular: es la única forma de ver si
  un texto de cuatro líneas más las dos filas de muñequitos entran en un teléfono.

## Pasar a producción con OSF

1. OSF → creá el proyecto. Settings → Personal Access Tokens → generá un token.
2. `pipe.jspsych.org` → creá cuenta → Account/Settings → pegá el token.
3. *Create New Experiment* apuntando a tu proyecto. Habilitá la recolección.
4. Copiá el experiment ID y pegalo en `DATAPIPE_ID`.
5. Commiteá, esperá el redeploy, probá el link y confirmá que el CSV llegue a OSF.
6. **Cuando termines de recolectar, deshabilitá la recolección en DataPipe.**

## Links por grupo

El grupo se lee de la URL: `?g=1` filtra los estímulos con `set == "S1"`.
Para habilitar los otros tres sets, corré `generar_estimulos.R` con los 160 textos
y quedan los cuatro links andando sobre el mismo deploy.

## Datos

Una fila por pantalla. Las de la tarea (`tarea == "sam"`) traen `id_texto`,
`cuadrante`, `es_control`, `valencia`, `activacion`, `orden` (posición real de
presentación) y `rt`.

    library(dplyr)
    d <- purrr::map_dfr(list.files("datos", full.names = TRUE), readr::read_csv)

    sam <- d |> filter(tarea == "sam", is.na(es_control)) |>
      select(sujeto, set, id_texto, cuadrante, valencia, activacion, orden, rt)

    controles <- d |> filter(tarea == "sam", es_control)

Dejá preregistrada la regla de exclusión antes de recolectar: CHECK_01 espera 1 en
valencia y 9 en activación, CHECK_02 espera 5 en las dos.

## Pendientes antes de recolectar

- Reemplazar el consentimiento por el texto aprobado por el comité.
- Verificar los 20 adjetivos del PANAS contra la adaptación argentina.
- `MOSTRAR_SOLO_ID = false`.
- Piloto en celular con los textos reales.
