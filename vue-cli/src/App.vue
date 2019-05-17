<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
   <!-- <input type="text" v-on:input="changeTitle">
   <a v-bind:href="link" target="_blank">google</a>
   <button v-on:click = "increase">CLick Me</button>
<p>{{counter}}</p>
   </div> -->
    <div class="demo"
        v-on:click="attachRed = !attachRed"
        v-bind:class="{red:attachRed}">
      </div>
</div>
</template>

<script>
export default {
  name: 'app',
//   data () {
//     return {
//       msg: 'Welcome to Your Vue.js App',
//       link: 'https://www.google.com/'
//     }
//   },
// methods:{
// changeTitle: function(event){
// this.msg = event.target.value;
//   }
// }
// }
// data () {
//   return {
//   counter: 0
//   }
// },
// methods:{
//   increase: function(){
//   this.counter++;
//   }
// }
// }
data () {
return {
attachRed: false,
    }
  },
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


.demo{
height: 100px;
width: 100px;
background-color: green;
}
.red{
background-color: red;
}
</style>
