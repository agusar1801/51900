// Generated from MiniC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MiniCListener from './MiniCListener.js';
const serializedATN = [4,1,18,77,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,5,1,27,8,
1,10,1,12,1,30,9,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,
4,1,4,5,4,47,8,4,10,4,12,4,50,9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,59,8,5,
1,6,1,6,1,6,1,6,1,6,3,6,66,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,0,
2,2,8,9,0,2,4,6,8,10,12,14,16,0,0,72,0,18,1,0,0,0,2,21,1,0,0,0,4,31,1,0,
0,0,6,33,1,0,0,0,8,41,1,0,0,0,10,58,1,0,0,0,12,65,1,0,0,0,14,67,1,0,0,0,
16,73,1,0,0,0,18,19,3,2,1,0,19,20,5,0,0,1,20,1,1,0,0,0,21,22,6,1,-1,0,22,
23,3,4,2,0,23,28,1,0,0,0,24,25,10,1,0,0,25,27,3,4,2,0,26,24,1,0,0,0,27,30,
1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,3,1,0,0,0,30,28,1,0,0,0,31,32,3,6,
3,0,32,5,1,0,0,0,33,34,5,1,0,0,34,35,5,2,0,0,35,36,5,12,0,0,36,37,5,3,0,
0,37,38,5,4,0,0,38,39,3,8,4,0,39,40,5,5,0,0,40,7,1,0,0,0,41,42,6,4,-1,0,
42,43,3,10,5,0,43,48,1,0,0,0,44,45,10,1,0,0,45,47,3,10,5,0,46,44,1,0,0,0,
47,50,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,9,1,0,0,0,50,48,1,0,0,0,51,
52,5,6,0,0,52,53,5,13,0,0,53,54,5,7,0,0,54,59,3,12,6,0,55,56,5,8,0,0,56,
57,5,7,0,0,57,59,3,12,6,0,58,51,1,0,0,0,58,55,1,0,0,0,59,11,1,0,0,0,60,66,
3,14,7,0,61,62,3,14,7,0,62,63,3,12,6,0,63,66,1,0,0,0,64,66,3,16,8,0,65,60,
1,0,0,0,65,61,1,0,0,0,65,64,1,0,0,0,66,13,1,0,0,0,67,68,5,9,0,0,68,69,5,
2,0,0,69,70,5,14,0,0,70,71,5,3,0,0,71,72,5,10,0,0,72,15,1,0,0,0,73,74,5,
11,0,0,74,75,5,10,0,0,75,17,1,0,0,0,4,28,48,58,65];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiniCParser extends antlr4.Parser {

    static grammarFileName = "MiniC.g4";
    static literalNames = [ null, "'switch'", "'('", "')'", "'{'", "'}'", 
                            "'case'", "':'", "'default'", "'printf'", "';'", 
                            "'break'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, "IDENTIFICADOR", "NUMERO", 
                             "CADENA", "LETRA", "DIGITO", "SIMBOLO", "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "seleccion", 
                         "casos", "caso", "sentencia", "salida", "terminar" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiniCParser.ruleNames;
        this.literalNames = MiniCParser.literalNames;
        this.symbolicNames = MiniCParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.instrucciones_sempred(localctx, predIndex);
    	case 4:
    	    		return this.casos_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    instrucciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    casos_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiniCParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.instrucciones(0);
	        this.state = 19;
	        this.match(MiniCParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	instrucciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new InstruccionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, MiniCParser.RULE_instrucciones, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.instruccion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 28;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new InstruccionesContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, MiniCParser.RULE_instrucciones);
	                this.state = 24;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 25;
	                this.instruccion(); 
	            }
	            this.state = 30;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiniCParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.seleccion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	seleccion() {
	    let localctx = new SeleccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiniCParser.RULE_seleccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(MiniCParser.T__0);
	        this.state = 34;
	        this.match(MiniCParser.T__1);
	        this.state = 35;
	        this.match(MiniCParser.IDENTIFICADOR);
	        this.state = 36;
	        this.match(MiniCParser.T__2);
	        this.state = 37;
	        this.match(MiniCParser.T__3);
	        this.state = 38;
	        this.casos(0);
	        this.state = 39;
	        this.match(MiniCParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	casos(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CasosContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, MiniCParser.RULE_casos, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.caso();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 48;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new CasosContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, MiniCParser.RULE_casos);
	                this.state = 44;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 45;
	                this.caso(); 
	            }
	            this.state = 50;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	caso() {
	    let localctx = new CasoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiniCParser.RULE_caso);
	    try {
	        this.state = 58;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 51;
	            this.match(MiniCParser.T__5);
	            this.state = 52;
	            this.match(MiniCParser.NUMERO);
	            this.state = 53;
	            this.match(MiniCParser.T__6);
	            this.state = 54;
	            this.sentencia();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.match(MiniCParser.T__7);
	            this.state = 56;
	            this.match(MiniCParser.T__6);
	            this.state = 57;
	            this.sentencia();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiniCParser.RULE_sentencia);
	    try {
	        this.state = 65;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.salida();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
	            this.salida();
	            this.state = 62;
	            this.sentencia();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 64;
	            this.terminar();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiniCParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(MiniCParser.T__8);
	        this.state = 68;
	        this.match(MiniCParser.T__1);
	        this.state = 69;
	        this.match(MiniCParser.CADENA);
	        this.state = 70;
	        this.match(MiniCParser.T__2);
	        this.state = 71;
	        this.match(MiniCParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiniCParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(MiniCParser.T__10);
	        this.state = 74;
	        this.match(MiniCParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiniCParser.EOF = antlr4.Token.EOF;
MiniCParser.T__0 = 1;
MiniCParser.T__1 = 2;
MiniCParser.T__2 = 3;
MiniCParser.T__3 = 4;
MiniCParser.T__4 = 5;
MiniCParser.T__5 = 6;
MiniCParser.T__6 = 7;
MiniCParser.T__7 = 8;
MiniCParser.T__8 = 9;
MiniCParser.T__9 = 10;
MiniCParser.T__10 = 11;
MiniCParser.IDENTIFICADOR = 12;
MiniCParser.NUMERO = 13;
MiniCParser.CADENA = 14;
MiniCParser.LETRA = 15;
MiniCParser.DIGITO = 16;
MiniCParser.SIMBOLO = 17;
MiniCParser.WS = 18;

MiniCParser.RULE_programa = 0;
MiniCParser.RULE_instrucciones = 1;
MiniCParser.RULE_instruccion = 2;
MiniCParser.RULE_seleccion = 3;
MiniCParser.RULE_casos = 4;
MiniCParser.RULE_caso = 5;
MiniCParser.RULE_sentencia = 6;
MiniCParser.RULE_salida = 7;
MiniCParser.RULE_terminar = 8;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	EOF() {
	    return this.getToken(MiniCParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_instrucciones;
    }

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitInstrucciones(this);
		}
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_instruccion;
    }

	seleccion() {
	    return this.getTypedRuleContext(SeleccionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitInstruccion(this);
		}
	}


}



class SeleccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_seleccion;
    }

	IDENTIFICADOR() {
	    return this.getToken(MiniCParser.IDENTIFICADOR, 0);
	};

	casos() {
	    return this.getTypedRuleContext(CasosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterSeleccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitSeleccion(this);
		}
	}


}



class CasosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_casos;
    }

	caso() {
	    return this.getTypedRuleContext(CasoContext,0);
	};

	casos() {
	    return this.getTypedRuleContext(CasosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterCasos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitCasos(this);
		}
	}


}



class CasoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_caso;
    }

	NUMERO() {
	    return this.getToken(MiniCParser.NUMERO, 0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterCaso(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitCaso(this);
		}
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitSentencia(this);
		}
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_salida;
    }

	CADENA() {
	    return this.getToken(MiniCParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitSalida(this);
		}
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_terminar;
    }


	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitTerminar(this);
		}
	}


}




MiniCParser.ProgramaContext = ProgramaContext; 
MiniCParser.InstruccionesContext = InstruccionesContext; 
MiniCParser.InstruccionContext = InstruccionContext; 
MiniCParser.SeleccionContext = SeleccionContext; 
MiniCParser.CasosContext = CasosContext; 
MiniCParser.CasoContext = CasoContext; 
MiniCParser.SentenciaContext = SentenciaContext; 
MiniCParser.SalidaContext = SalidaContext; 
MiniCParser.TerminarContext = TerminarContext; 
