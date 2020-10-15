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
	//store.dispatch('changeVariable',data);
	store.commit('changeVariableValue',data);
}

export {almacene,cargue,reste,multiplique,muestre,imprima,sume,divida,lea};