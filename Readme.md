# 🛠️ Analizador Sintáctico con ANTLR4 y JavaScript

Este proyecto implementa un analizador para una **gramática reducida de ANSI C**, usando **ANTLR4** y **JavaScript** ejecutado con nodejs. Reconoce estructuras `switch-case`, analiza sintácticamente el código fuente, genera tokens y un árbol de análisis, e interpreta el código como JavaScript.

---

## 📂 Estructura del Proyecto

-MiniC.g4 # Gramática ANTLR  (definición del lenguaje)

-MiniCLexer.js # Lexer generado por ANTLR

-MiniCParser.js # Parser generado por ANTLR

-index.js # Script principal: analiza e interpreta

-input_correcto_1.txt # Ejemplos de entrada (válidos)

-input_incorrecto_1.txt # Ejemplos de entrada (inválidos)

-package.json # archivo de dependencias de node

-README.md # Este archivo

-antlr-4.13.1-complete.jar # compilador de gramáticas de ANTLR4


---

## ✅ Requisitos

- Node.js (v18+ recomendado)
- Java (para ejecutar ANTLR)
- ANTLR 4 (descargar JAR)
- VSCode o terminal con bash/CMD

---

## 🚀 Instalación

### 1. Cloná el repositorio:

```bash
git clone https://github.com/agusar1801/51900
cd 51900
```

### 2. Instalá dependencias

```bash
npm install antlr4
```

### 3. Descargar ANTLR4

- Ir a la sitio: https://www.antlr.org/download.html
- Ubicar el icono download
- Descomprimir el zip y ubicar el archivo antlr-4.13.1-complete.jar en el raiz del proyecto

### 4. Generar el Lexer y Parser

```bash
java -jar antlr-4.13.1-complete.jar -Dlanguage=JavaScript MiniC.g4
```

- Requerimiento: tener java instalado

### 5. Ejecutar el Analizador

node index.js [FILE] [SWITCH_CASE_VALUE]

- ej:

```bash
node index.js input_correcto_1.txt 2
```

### 6. Ejemplos de Entrada

- Correcto

```C
switch(x) {
case 1:
  printf("Hola, mundo!");
  break;
case 2:
  printf("Segundo caso.");
  break;
default:
  printf("Caso por defecto.");
  break;
}
```

- Incorrecto

```C
opcion(x) {
case 1:
  printf("Sin switch válido");
  break;
}
```

### 7. Ejemplo de Salida

✅ Análisis léxico: tabla de tokens
Lexema: switch → SWITCH
Lexema: x → IDENTIFICADOR
...

✅ Árbol sintáctico:
(programa (instrucciones (instruccion (seleccion ... ))))

✅ Salida del intérprete:
Hola, mundo!

### 8. Imágenes

- Input correcto 1 [node index.js input_correcto_1.txt 1]
  https://postimg.cc/9RC49QTM

- Input correcto 2 [node index.js input_correcto_2.txt 3]
  https://postimg.cc/bZndFt9r

- Input incorrecto 1 [node index.js input_incorrecto_1.txt 1]
  https://postimg.cc/5HqyfWGM

- Input incorrecto 2 [node index.js input_incorrecto_2.txt 2]
  https://postimg.cc/Jym76dhY


👤 Autor

Agustín Arselli

GitHub: @agusar1801
