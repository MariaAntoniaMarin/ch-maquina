<template>
	<div class="main_menu">
		<b-row>
				<div class="upload_file">
					<b-button size="mg" variant="outline-secondary"><b-form-file v-model="file2" plain></b-form-file></b-button>
			    </div>
		    <b-col><b-button size="mg" variant="outline-primary" v-on:click="uploadFile">Cargar</b-button></b-col>
		    <b-col><b-button size="mg" variant="outline-success" v-on:click="executeFile">Ejecutar</b-button></b-col>
		    <b-col><b-button size="mg" variant="outline-warning">Pausar</b-button></b-col>
		    <b-col><b-button size="mg" variant="outline-light" v-on:click="executeFileStepByStep">Paso a paso</b-button></b-col>
		    <b-col><b-button size="mg" variant="outline-danger" onclick = "window.close()">Apagar</b-button></b-col>
		    <b-col><b-button size="mg" variant="outline-info" onclick = "window.location.reload()">Reiniciar</b-button></b-col>
		</b-row>
	</div>
</template>

<script>
import axios from 'axios'
import execute from '../JavaScript/execute.js'
import stepByStep from '../JavaScript/stepByStep.js'

export default {
    data() {
      return {
        myWindow: '',
        file1: null,
        file2: null
      }
    },

    methods: {
    	uploadFile() {
    		const form = new FormData();
    		form.append('file', this.file2)
    		const config = {
    			headers: {
    				'Content-Type': 'application/x-www-form-urlencoded'
    			}
    		}
    		axios.post('http://127.0.0.1:8000/ch_Maquina', form, config)
            .then(response =>{
                //console.log(response.data.content)
                //bus.$emit('memoryTable',response.data.content);
                this.$store.commit('addData',response.data);
            }).catch(e =>{
                console.log(e)
            })
    	},
        executeFile() {
            execute(this.$store.state.instructions);
            //console.log(this.$store.state.monitor)
        },
        executeFileStepByStep(){
            stepByStep(this.$store.state.instructions);
        }
    }
  }

</script>

<style>
.main_menu{
	background-color: black;
	overflow: auto;
	white-space: nowrap;
	padding: 10px;
}

.upload_file{
	width: 30%;
}
</style>