# ============================================================
# Genera estimulos.js con los 160 textos y su set asignado.
# Requiere: asignacion_sets.csv (id, cuadrante, factores, set)
#           y tu tabla de textos (id, texto)
# ============================================================

library(jsonlite)

asign  <- read.csv("asignacion_sets.csv", stringsAsFactors = FALSE)
textos <- read.delim("textos.tsv", stringsAsFactors = FALSE)   # id + texto

d <- merge(asign[, c("id", "cuadrante", "set")], textos[, c("id", "texto")], by = "id")
stopifnot(nrow(d) == 160, !any(is.na(d$texto)))

# el experimento filtra por ?g=N, asi que van los 160 en un solo archivo
# y cada participante ve solo los 40 de su set
json_est <- toJSON(d[, c("id", "cuadrante", "set", "texto")],
                   pretty = TRUE, auto_unbox = TRUE)

practica <- toJSON(list(
  id = "PRAC_01", cuadrante = "practica", set = "practica",
  texto = "Esperás el colectivo en la parada. Mirás la pantalla, faltan seis minutos. Guardás el celular en el bolsillo."
), pretty = TRUE, auto_unbox = TRUE)

panas_items <- c(
  "Interesado/a", "Tenso/a", "Entusiasmado/a", "Disgustado/a", "Enérgico/a",
  "Culpable", "Atemorizado/a", "Hostil", "Entusiasta", "Orgulloso/a",
  "Irritable", "Alerta", "Avergonzado/a", "Inspirado/a", "Nervioso/a",
  "Decidido/a", "Atento/a", "Inquieto/a", "Activo/a", "Temeroso/a"
)

writeLines(c(
  "// GENERADO POR generar_estimulos.R - no editar a mano",
  paste0("const PRACTICA = ", practica, ";"),
  "",
  paste0("const ESTIMULOS = ", json_est, ";"),
  "",
  paste0("const PANAS_ITEMS = ", toJSON(panas_items, pretty = TRUE), ";"),
  "",
  paste0("const PANAS_ESCALA = ", toJSON(c(
    "Nada o casi nada", "Un poco", "Moderadamente", "Bastante", "Muchísimo"
  ), pretty = TRUE), ";")
), "estimulos.js", useBytes = TRUE)

cat("estimulos.js generado con", nrow(d), "textos\n")
cat("por set:\n"); print(table(d$set))
