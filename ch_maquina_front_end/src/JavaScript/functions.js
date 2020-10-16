import {store} from '../store/store.js'

function almacene(varName){
	const data = {'name':varName,'value':store.state.acumulador.value};
	store.commit('changeVariableValue',data);
}

function cargue(varName){
	const value = store.getters.variableValue(varName);
	store.commit('changeAcumuladorValue',value.value);
}

function reste(varName){
	const value = store.getters.variableValue(varName);
	const newValue = store.state.acumulador.value - value.value;
	store.commit('changeAcumuladorValue',newValue);
}

function multiplique(varName){
	const value = store.getters.variableValue(varName);
	const newValue = store.state.acumulador.value * value.value;
	store.commit('changeAcumuladorValue',newValue);
}

function muestre(varName){
	const value = store.getters.variableValue(varName);
	store.commit('changeMonitorValue',value.value);
}

function imprima(varName){
	const value = store.getters.variableValue(varName);
	store.commit('changePrinterValue',value.value);
}

function sume(varName){
	const value = store.getters.variableValue(varName);
	const newValue = store.state.acumulador.value + value.value;
	store.commit('changeAcumuladorValue',newValue);
}

function divida(varName){
	const value = store.getters.variableValue(varName);
	const newValue = store.state.acumulador.value / value.value;
	store.commit('changeAcumuladorValue',newValue);
}

function lea(varName,value){
	const data = {'name':varName,'value':value};
	store.commit('changeVariableValue',data);
}

function vayasi(labelName1,labelName2){
	const acumulador = store.state.acumulador.value;
	if (acumulador > 0){
		const label1 = store.getters.labelValue(labelName1);
		return store.getters.instruccionIndex(label1.pos);
	}
	else if (acumulador < 0){
		const label2 = store.getters.labelValue(labelName2);
		return store.getters.instrucctionIndex(label2.pos);
	}
	else{
		return NaN;
	}
}

function vaya(labelName){
	const label = store.getters.lavelValue(labelName);
	return store.getters.instrucctionIndex(label.pos);
}

function Y(varName1,varName2,varName3){
	const value1 = store.getters.variableValue(varName1);
	const value2 = store.getters.variableValue(varName2);
	//const newValue = value1 && value2;
	const data = {'name':varName3,'value':value1.value && value2.value};
	store.commit('changeVariableValue',data);
}

function O(varName1,varName2,varName3){
	const value1 = store.getters.variableValue(varName1);
	const value2 = store.getters.variableValue(varName2);
	//const newValue = value1 && value2;
	const data = {'name':varName3,'value':value1.value || value2.value};
	store.commit('changeVariableValue',data);
}

function NO(varName1,varName2){
	const value1 = store.getters.variableValue(varName1);
	const data = {'name':varName2,'value':!value1.value};
	store.commit('changeVariableValue',data);
}

export {almacene,cargue,reste,multiplique,muestre,imprima,sume,divida,lea,vayasi,vaya,Y,O,NO};