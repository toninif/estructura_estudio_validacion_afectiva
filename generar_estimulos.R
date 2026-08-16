# ============================================================
# generar_estimulos.R
# Regenera estimulos.js a partir del Excel de asignacion.
#
# Fuente de verdad: asignacion_grupos_experimentales.xlsx
#   - una hoja por grupo ("Grupo 1"..."Grupo 4")
#   - columnas: orden, id, cuadrante, SEMANTICA, f_*, texto
#
# Uso: poner el xlsx al lado de este script y correrlo entero.
# El bloque ESTIMULOS de estimulos.js se reemplaza; PRACTICA,
# PANAS_ITEMS y PANAS_ESCALA quedan como estan.
# ============================================================

library(readxl)
library(jsonlite)
library(purrr)
library(dplyr)

XLSX <- "asignacion_grupos_experimentales.xlsx"

datos <- map_dfr(1:4, function(g) {
  read_excel(XLSX, sheet = paste("Grupo", g)) |>
    transmute(id, cuadrante, set = paste0("S", g), texto, control = FALSE)
})

stopifnot(nrow(datos) == 160, n_distinct(datos$id) == 160)

# Controles de atencion: presentes en los cuatro sets.
# OJO con la regla de exclusion: los maniquies ocupan las posiciones
# 1-3-5-7-9, asi que "tercer muñequito" = posicion 5 y "quinto" = 9.
checks <- tidyr::crossing(
  set = paste0("S", 1:4),
  tibble(
    id = c("CHECK_01", "CHECK_02"),
    cuadrante = "control",
    texto = c(
      "CONTROL DE ATENCIÓN. Esta pantalla no es una situación: sirve para verificar que estás leyendo. Clickea la tercera casilla en valencia y la quinta casilla en activación.",
      "CONTROL DE ATENCIÓN. Esta pantalla no es una situación: sirve para verificar que estás leyendo. Clickea la casilla central en valencia y la casilla central en activación."
    ),
    control = TRUE
  )
) |> select(id, cuadrante, set, texto, control)

estimulos <- bind_rows(datos, checks)

js <- readLines("estimulos.js", encoding = "UTF-8") |> paste(collapse = "\n")
bloque <- paste0("const ESTIMULOS = ",
                 toJSON(estimulos, auto_unbox = TRUE, pretty = TRUE), ";")
js <- sub("const ESTIMULOS = \\[.*?\\];", bloque, js, perl = TRUE)
writeLines(js, "estimulos.js", useBytes = TRUE)

cat("estimulos.js regenerado:", nrow(estimulos), "entradas\n")
