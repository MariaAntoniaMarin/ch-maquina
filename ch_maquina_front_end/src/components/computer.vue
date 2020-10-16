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
	  		<div class="monitor_text">
          <div v-for = "mon in monitor">
            <b-row>
              <b-col>{{mon.screen}}</b-col>
            </b-row>
          </div>
        </div>
	  	</b-row>
      <b-row>
  	  	<b-col><b-button squared>Imprimir</b-button></b-col>
      </b-row>
	  	<b-row>
	  		<b-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMji3dP1Ox9xrrxroFYtfq1b-ugg3s8a7fLw&usqp=CAU" width="250" alt="Center image"></b-img>
	  		<div class="printer_text">
          <div v-for="print in printer">
            <b-row>
              <b-col>{{print.paper}}</b-col>
            </b-row>
          </div>
        </div>
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
  top: 14%;
  left: 8%;
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
  text-align: left;
}

.printer_text {
  position: absolute;
  top: 85.7%;
  left: 18.7%;
  font-weight: bold;
  color: #2F4F4F;
  font-size: 100%;
  text-align: left;
}
</style>
