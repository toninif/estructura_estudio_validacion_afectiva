# ============================================================
# leer_datos.R
# Lee todos los CSV descargados de OSF y arma tres tablas ordenadas.
#
# Uso: poner los CSV en una carpeta "datos/" al lado de este script.
# ============================================================

library(dplyr)
library(tidyr)
library(readr)
library(purrr)

# --- 1. Leer todo ---------------------------------------------------
# locale UTF-8 explicito: si no, los acentos se rompen en Windows.
crudo <- list.files("datos", pattern = "\\.csv$", full.names = TRUE) |>
  map_dfr(~ read_csv(.x, locale = locale(encoding = "UTF-8"),
                     show_col_types = FALSE))

cat("participantes:", n_distinct(crudo$sujeto), "\n")
cat("por set:\n"); print(table(crudo$set[!duplicated(crudo$sujeto)]))
cat("por dispositivo:\n"); print(table(crudo$dispositivo[!duplicated(crudo$sujeto)]))


# --- 2. Valoraciones de los textos (formato largo) -------------------
# Una fila por participante x texto. Es la tabla principal.
sam <- crudo |>
  filter(tarea == "sam", !es_control) |>
  select(sujeto, set, dispositivo, id_texto, cuadrante,
         valencia, activacion, orden, rt,
         t_valencia, t_activacion, clicks_valencia, clicks_activacion) |>
  mutate(
    # Descomposicion del tiempo:
    #   t_valencia   = leer el texto + primera decision
    #   t_decision_2 = segunda decision sola, sin lectura
    t_decision_2   = t_activacion - t_valencia,
    # Cambios de opinion: la secuencia guarda cada re-eleccion.
    # El primer valor es la impresion inicial; el ultimo, la respuesta final.
    cambios_val    = lengths(strsplit(clicks_valencia,   "\\|")) - 1,
    cambios_act    = lengths(strsplit(clicks_activacion, "\\|")) - 1,
    val_inicial    = as.integer(sub("\\|.*", "", clicks_valencia)),
    act_inicial    = as.integer(sub("\\|.*", "", clicks_activacion))
  ) |>
  arrange(sujeto, orden)


# --- 2b. Chequeos que habilitan las columnas de tiempo ---------------
# ¿La manipulacion de longitud funciono? El tiempo de lectura deberia
# escalar con f_longitud; el de decision, no.
#   sam |> left_join(asign, by = c("id_texto" = "id")) |>
#     group_by(f_longitud) |>
#     summarise(lectura = median(t_valencia), decision = median(t_decision_2))

# ¿Los textos con mas vacilacion son los que producen mas dispersion?
#   ambiguedad <- sam |> group_by(id_texto) |>
#     summarise(p_cambio = mean(cambios_val > 0), sd_val = sd(valencia))
#   cor.test(ambiguedad$p_cambio, ambiguedad$sd_val)

# ¿Cambian las normas si se usa la impresion inicial en vez de la final?
#   sam |> group_by(id_texto) |>
#     summarise(final = mean(valencia), inicial = mean(val_inicial)) |>
#     summarise(r = cor(final, inicial), dif_max = max(abs(final - inicial)))


# --- 3. PANAS (formato ancho, una fila por participante) -------------
panas <- crudo |>
  filter(tarea == "panas") |>
  select(sujeto, adjetivo, puntaje) |>
  pivot_wider(names_from = adjetivo, values_from = puntaje)

# Subescalas. OJO: con 18 items faltan dos de afecto positivo
# (Emocionado/a y Alerta), asi que PA queda con 8 items y NA con 10.
items_pa <- c("Interesado/a", "Fuerte", "Entusiasmado/a", "Orgulloso/a",
              "Inspirado/a", "Decidido/a", "Atento/a", "Activo/a")
items_na <- c("Afligido/a", "Disgustado/a", "Culpable", "Asustado/a",
              "Hostil", "Irritable", "Avergonzado/a", "Nervioso/a",
              "Intranquilo/a", "Temeroso/a")

panas <- panas |>
  mutate(PA = rowMeans(across(all_of(items_pa))),
         NA_ = rowMeans(across(all_of(items_na))))


# --- 4. Controles de atencion y exclusiones --------------------------
# Los checks piden "casillas" contando las NUEVE posiciones de la escala
# (muñequitos y recuadros intermedios por igual, de izquierda a derecha):
#   CHECK_01 (posicion 11): tercera casilla en valencia = 3
#                           quinta casilla en activacion = 5
#   CHECK_02 (posicion 32): casilla central en ambas = 5
controles <- crudo |>
  filter(tarea == "sam", es_control) |>
  select(sujeto, id_texto, valencia, activacion) |>
  mutate(paso = case_when(
    id_texto == "CHECK_01" & valencia == 3 & activacion == 5 ~ TRUE,
    id_texto == "CHECK_02" & valencia == 5 & activacion == 5 ~ TRUE,
    TRUE ~ FALSE)) |>
  group_by(sujeto) |>
  summarise(controles_ok = sum(paso), .groups = "drop")

# Duracion total por participante, en minutos
duracion <- crudo |>
  group_by(sujeto) |>
  summarise(minutos = max(time_elapsed) / 60000, .groups = "drop")

# Sociodemograficos (ahora al principio del experimento)
socio <- crudo |>
  filter(tarea == "sociodemograficos") |>
  select(sujeto, edad, genero, region, educacion, nse, lengua, repetido)

# --- Autoinforme del cierre (dos sliders 0-100) ---------------------
# La pantalla final reemplazo el select de atencion por dos escalas continuas.
autoinforme <- crudo |>
  filter(tarea == "cierre") |>
  select(sujeto, concentracion, sinceridad,
         ip, navegador, so, ancho_pantalla, alto_pantalla, ua_completo)
# OJO: la IP es dato personal (Ley 25.326). No publicarla junto a los datos:
# usarla solo para control de calidad (duplicados, red del aula) y eliminarla
# o separarla del dataset antes de compartirlo en OSF.
# regla de exclusion sugerida (preregistrar antes de recolectar):
#   excluir por baja concentracion/sinceridad autoinformada, p.ej. < 30

resumen <- controles |>
  left_join(duracion, by = "sujeto") |>
  left_join(distinct(crudo, sujeto, set, dispositivo), by = "sujeto") |>
  left_join(socio, by = "sujeto")

print(resumen, n = Inf)

# Regla de exclusion: dejarla preregistrada ANTES de recolectar.
# excluir <- resumen |> filter(controles_ok < 2 | minutos < 5) |> pull(sujeto)
# sam <- filter(sam, !sujeto %in% excluir)


# --- 5. Normas por texto (el producto final del estudio) -------------
normas <- sam |>
  group_by(id_texto, cuadrante) |>
  summarise(n = n(),
            val_m = mean(valencia), val_sd = sd(valencia),
            act_m = mean(activacion), act_sd = sd(activacion),
            .groups = "drop")

write_csv(sam,    "salida_sam.csv")
write_csv(panas,  "salida_panas.csv")
write_csv(socio,  "salida_socio.csv")
write_csv(normas, "salida_normas.csv")
cat("\nlisto: salida_sam.csv, salida_panas.csv, salida_socio.csv, salida_normas.csv\n")
