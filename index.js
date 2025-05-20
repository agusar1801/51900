import antlr4 from "antlr4";
import fs from "fs";
import MiniCLexer from "./MiniCLexer.js";
import MiniCParser from "./MiniCParser.js";
import MiniCListener from "./MiniCListener.js";

class MiniCInterpreter extends MiniCListener {
  constructor() {
    super();
    this.variables = {};
    this.currentSwitchVar = null;
    this.varValue = null;
    this.shouldExecute = false;
    this.foundMatch = false;
    this.hasDefault = false;
    this.defaultExecuted = false;
  }

  enterSeleccion(ctx) {
    this.currentSwitchVar = ctx.IDENTIFICADOR().getText();
    this.varValue = parseInt(this.variables[this.currentSwitchVar], 10);
    this.shouldExecute = false;
    this.foundMatch = false;
    this.hasDefault = false;
    this.defaultExecuted = false;
    console.log(`Evaluando switch(${this.currentSwitchVar}=${this.varValue})`);
  }

  enterCaso(ctx) {
    if (this.foundMatch && !this.shouldExecute) return;

    if (ctx.NUMERO()) {
      const caseVal = parseInt(ctx.NUMERO().getText(), 10);
      console.log(`  Comparando con case ${caseVal}`);
      if (caseVal === this.varValue) {
        this.shouldExecute = true;
        this.foundMatch = true;
      }
    } else {
      console.log("  Detectado caso default");
      this.hasDefault = true;
      if (!this.foundMatch) {
        this.shouldExecute = true;
        this.foundMatch = true;
        this.defaultExecuted = true;
      }
    }
  }

  exitSeleccion(ctx) {
    if (!this.foundMatch && !this.defaultExecuted) {
      console.log("No entra al caso");
    }
  }

  exitCaso(ctx) {
    this.shouldExecute = false;
  }

  enterTerminar(ctx) {
    this.shouldExecute = false;
  }

  enterSalida(ctx) {
    if (this.shouldExecute) {
      const cadena = ctx.CADENA().getText();
      console.log(cadena.slice(1, -1));
    }
  }
}

class ErrorListener extends antlr4.error.ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    console.error(
      `Error sintáctico en línea ${line}, columna ${column}: ${msg}`
    );
    process.exit(1);
  }
}

async function main() {
  try {
    // Obtener archivo de entrada desde parámetros
    const args = process.argv.slice(2);
    if (args.length === 0) {
      console.error("Error: Debes especificar un archivo de entrada");
      console.log("Uso: node index.js <archivo.txt> [valor_de_x]");
      process.exit(1);
    }

    const inputFile = args[0];
    const xValue = args[1] || 1; // Valor por defecto: 1

    // Leer archivo de entrada
    if (!fs.existsSync(inputFile)) {
      console.error(`Error: El archivo ${inputFile} no existe`);
      process.exit(1);
    }

    const input = fs.readFileSync(inputFile, "utf-8");
    const chars = new antlr4.InputStream(input);
    const lexer = new MiniCLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    tokens.fill();

    // Configurar parser
    const parser = new MiniCParser(tokens);
    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    parser.addErrorListener(new ErrorListener());

    // Parsear
    const tree = parser.programa();

    // Mostrar tokens
    console.log("\nTabla de tokens:");
    tokens.getTokens().forEach((token) => {
      const type = lexer.symbolicNames[token.type];
      if (type && token.type !== -1) {
        console.log(`"${token.text}" → ${type}`);
      }
    });

    // Mostrar árbol
    console.log("\nÁrbol sintáctico:");
    console.log(tree.toStringTree(parser.ruleNames));

    // Interpretar
    console.log("\nSalida del intérprete:");
    const interpreter = new MiniCInterpreter();
    interpreter.variables["x"] = parseInt(xValue, 10);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(interpreter, tree);
  } catch (e) {
    console.error("Error:", e.message);
    process.exit(1);
  }
}

main();
