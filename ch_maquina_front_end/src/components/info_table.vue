<template>
	<b-container class="info_table">
		<b-row>
			<b-col>
				<b-row>
					<b-col><h4>Instrucciones</h4></b-col>
    			</b-row>
				<b-row>
					<b-col><h6>Pos</h6></b-col>
	    			<b-col><h6>Inst</h6></b-col>
    			</b-row>
    			<div style="height: 500px; overflow-y: scroll;">
					<div v-for = "inst in instructions">
				    	<b-row class = "row_num_">
						    <b-col class = "col_num_">{{inst['Pos']}}</b-col>
						    <b-col class = "col_num_">{{inst['Instruccion']}}</b-col>
					    </b-row>
				    </div>
				</div>
			</b-col>
			<b-col>
				<b-row>
					<b-col><h4>Variables</h4></b-col>
    			</b-row>
				<b-row>
					<b-col><h6>Name</h6></b-col>
	    			<b-col><h6>Value</h6></b-col>
    			</b-row>
    			<div v-for = "var_ in variables">
			    	<b-row class = "row_num_var">
					    <b-col class = "col_num_var">{{var_['name']}}</b-col>
					    <b-col class = "col_num_var">{{var_['value']}}</b-col>
				    </b-row>
			    </div>
			    <b-row>
					<b-col><h4>Etiquetas</h4></b-col>
    			</b-row>
				<b-row>
					<b-col><h6>Inst</h6></b-col>
	    			<b-col><h6>Pos</h6></b-col>
    			</b-row>
    			<div v-for = "label in labels">
			    	<b-row class = "row_num_lab">
					    <b-col class = "col_num_lab">{{label['name']}}</b-col>
					    <b-col class = "col_num_lab">{{label['pos']}}</b-col>
				    </b-row>
			    </div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import {bus} from '../main'

export default {
    data() {
      return {
      	variables:[],
      	labels:[],
      	instructions:[]
      }
    },
    created (){
      bus.$on('infoTable',(data) =>{
        this.variables = data.variables;
        this.labels = data.labels;
        this.instructions = data.instructions;
      })
    }
  }
</script>

<style>
.col_num_var{
  padding: 0.05rem;
  text-align: center;
}

.row_num_var:hover {
  background: LightGreen;
}

.col_num_lab{
  padding: 0.05rem;
  text-align: center;
}

.row_num_lab:hover {
  background: LightSalmon;
}

.col_num_{
  padding: 0.01rem;
  text-align: center;
}

.row_num_:hover {
  background: silver;
}
</style>