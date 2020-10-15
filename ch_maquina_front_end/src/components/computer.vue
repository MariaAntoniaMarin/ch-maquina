<template>
	<b-container class="computer">
	  <b-col>
	  	<b-row><h5>Acumulador</h5></b-row>
	  	<b-row>
	  		<b-img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.icons8.com%2Fpastel-glyph%2F2x%2Fbox--v2.png&f=1&nofb=1" width="130" height="130" alt="Center image" ></b-img>
	  		<div class="acumulador_text">{{acumulador.value}}</div>
	  	</b-row>
	  	<b-row>
	  		<b-img src="https://img.icons8.com/cotton/2x/monitor.png" alt="Center image"></b-img>
	  		<div class="monitor_text">{{monitor.screen}}</div>
	  	</b-row>
      <b-row>
  	  	<b-col><b-button squared>Imprimir</b-button></b-col>
        <b-col><b-button squared>M. Memoria</b-button></b-col>
      </b-row>
	  	<b-row>
	  		<b-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMji3dP1Ox9xrrxroFYtfq1b-ugg3s8a7fLw&usqp=CAU" alt="Center image"></b-img>
	  		<div class="printer_text">{{printer.paper}}</div>
	  	</b-row>
	  </b-col>
    </div>
	</b-container>
</template>

<script>
  
  export default{
    computed:{
      acumulador(){
        return this.$store.getters.acumuladorValue;
      },
      monitor(){
        return this.$store.state.monitor;
      },
      printer(){
        return this.$store.state.printer;
      }
    }
  }

</script>

<style type="text/css">
/* acumulador */
.acumulador_text {
  position: absolute;
  top: 14.3%;
  left: 8%;
  background-color: white;
  font-weight: 900;
  color: black;
  font-size: 170%;
}

/* monitor */
.monitor_text {
  position: absolute;
  top: 28%;
  left: 10%;
  font-weight: bold;
  color: #2F4F4F;
  font-size: 100%;
}

.printer_text {
  position: absolute;
  top: 88%;
  left: 17%;
  font-weight: bold;
  color: #2F4F4F;
  font-size: 100%;
}
</style>
