<template>
	<b-container class="memory_table">
	  <b-row >
	    <b-col><h4>Memoria</h4></b-col>
	  </b-row>
    <b-row>
          <b-col><h5>Pos</h5></b-col>
            <b-col><h5>Item</h5></b-col>
          </b-row>
          <div style="height: 620px; overflow-y: scroll;">
            <div v-for = "row_ in memory_t">
              <b-row class = "row_num">
                <b-col class = "col_num_p">{{row_['Pos']}}</b-col>
                <b-col class = "col_num_i">{{row_['Instruccion']}}</b-col>
              </b-row>
            </div>
          </div>
	</b-container>
</template>

<script>

import {bus} from '../main'

export default {
    data() {
      return {
        memory_t:[]
      }
    },
    created (){
      bus.$on('memoryTable',(data) =>{
        this.memory_t = data;
      })
    }
  }
</script>

<style type="text/css">

.memory_table{
/*	border: 1px solid #ccc;*/
/*	border-collapse: collapse;*/
  	width: 100%;
  	font: normal medium/1.4 sans-serif;
}

.col_num_p{
  padding: 0.05rem;
  text-align: center;
/*  border: 1px solid #ccc;*/
}

.col_num_i{
  padding: 0.05rem;
  text-align: left;
/*  border: 1px solid #ccc;*/
}

.row_num:hover {
  background: LightSteelBlue
}

</style>