<template>
 <div id="app">
     <button v-on:click="changeDisabled"
     type="button" name="button" class="btn btn-primary">
       Click Me
     </button>
      <button v-bind:disabled="isDisabled" type="button" name="button" class="btn btn-primary"
      data-toggle="tooltip" data-placement="top" v-bind:title="Tooltip">
         Can You Click Me?
       </button>
 </div>
</template>

<script>
 export default {
 name: 'app',
 data () {
   return {
       isDisabled: true,
       Tooltip: "Please press the other button"
   }
 },
 methods: {
     changeDisabled: function(){
       this.isDisabled  = !this.isDisabled;
       if(this.Tooltip == ""){
          this.Tooltip = "Please press the other button";
       }else{
         this.Tooltip = "";
       }
     }
 }
}
</script>

<style lang="scss">
#app {
 font-family: 'Avenir', Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
 margin-top: 60px;
}

.secondButton{

}

h1, h2 {
 font-weight: normal;
}

ul {
 list-style-type: none;
 padding: 0;
}

li {
 display: inline-block;
 margin: 0 10px;
}

a {
 color: #42b983;
}
</style>
