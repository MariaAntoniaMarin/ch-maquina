import * as functions from './functions.js'

function stepByStep(instructions){
	var band = true;
	for (var i in instructions){
		var row = instructions[i].instruccion.split(' ');
		switch(row[0]){
			case 'cargue':
				functions.cargue(row[1]);
				break;
			case 'almacene': 
				functions.almacene(row[1]);
				break;
			case 'reste': 
				functions.reste(row[1]);
				break;
			case 'multiplique':
				functions.multiplique(row[1]);
				break;
			case 'muestre':
				functions.muestre(row[1]);
				break;
			case 'imprima':
				functions.imprima(row[1]);
				break;
			case 'sume':
				functions.sume(row[1]);
				break;
			case 'divida':
				functions.divida(row[1]);
				break;
			case 'lea':
				var value = prompt("Por favor ingrese el valor para la variable: " + row[1], 2);
				functions.lea(row[1],value);
				break;
		}
		wait(3000)
		band = window.confirm("Desea continuar con la ejecucion?");
		if (band == false) {break;}
		console.log(band)
	}
}

function wait(ms){
	var d = new Date();
	var d2 = null;
	do {d2 = new Date();}
	while(d2-d < ms);
}

export default stepByStep;