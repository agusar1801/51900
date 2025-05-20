grammar MiniC;

programa     : instrucciones EOF ;
instrucciones: instruccion | instrucciones instruccion ;
instruccion  : seleccion ;
seleccion    : 'switch' '(' IDENTIFICADOR ')' '{' casos '}' ;
casos        : caso | casos caso ;
caso         : 'case' NUMERO ':' sentencia
             | 'default' ':' sentencia ;
sentencia    : salida
             | salida sentencia
             | terminar ;
salida       : 'printf' '(' CADENA ')' ';' ;
terminar     : 'break' ';' ;

// --- Reglas léxicas (tokens) ---
IDENTIFICADOR: LETRA (LETRA | DIGITO)* ;
NUMERO       : DIGITO+ ;
CADENA : '"' (~["\\] | '\\' .)* '"' ;
LETRA      : [a-zA-Z] ;
DIGITO     : [0-9] ;
SIMBOLO    : '.' | ',' | '!' | '?' | ':' | ';' ;

WS           : [ \t\r\n]+ -> skip ;
