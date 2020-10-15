import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		variables:[
			{'name':'var1','value':'val1'},
			{'name':'var2','value':'val2'},
			{'name':'var3','value':'val3'}
		],
		instructions: [
			{'pos':'0001','instruccion':'instr1'},
			{'pos':'0002','instruccion':'instr2'},
			{'pos':'0003','instruccion':'instr3'}
		],
		labels: [
			{'pos':'0001','name':'lab1'},
			{'pos':'0002','name':'lab2'},
			{'pos':'0003','name':'lab3'}
		],
		memory_t: [
			{'pos':'0001','instruccion':'instr1'},
			{'pos':'0002','instruccion':'instr2'},
			{'pos':'0003','instruccion':'instr3'}
		],
		acumulador: {'value':0},
		monitor: {'screen':'CH Maquina'},
		printer: {'paper':'Hola :)'}
	},
	mutations: {
		addData:(state, data) => {
			state.variables = data.variables;
			state.instructions = data.instructions;
			state.labels = data.labels;
			state.memory_t = data.content;
		},
		changeVariableValue: (state, data) => {
			const variable = state.variables.find(variable =>{
				return variable.name == data.name;
			});
			variable.value = data.value;
		},
		changeAcumuladorValue:(state,data) => {
			state.acumulador.value = data;
		},
		changeMonitorValue:(state,data) => {
			state.monitor.screen = data;
		},
		changePrinterValue:(state,data) => {
			state.printer.paper = data;
		}
	},
	actions: {
		changeVariable: ({commit},data) => {
			setTimeout(()=>{
				commit('changeVariableValue',data);
			},50)
		},
		changeAcumulador: ({commit},data) => {
			setTimeout(()=>{
				commit('changeAcumuladorValue',data);
			},50)
		},
		changeMonitor: ({commit},data) => {
			setTimeout(()=>{
				commit('changeMonitorValue',data);
			},50)
		},
		changePrinter: ({commit},data) => {
			setTimeout(()=>{
				commit('changePrinterValue',data);
			},50)
		}
	},
	getters: {
		variablesTable: state =>{
			return state.variables
		},
		variableValue: (state) => (varName) => {
			return state.variables.find(variable => variable.name == varName)
		},
		acumuladorValue: state =>{
			return state.acumulador
		}

	}
});