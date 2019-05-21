<template>

  <body>
    <div id="app">
      <!-- <img src="./assets/logo.png"> -->
      <!---vue jumbotron-->
      <div>
        <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
          <template slot="header">BootstrapVue</template>

          <!-- <template slot="lead"> -->
          <!--Title and message-->
          <h1>{{ title }}</h1>
          <h2>{{msg}}</h2>
          <!-- </template> -->

          <hr class="my-4">
          <!--nav links--->
          <ul>
            <li><a href="index.html" target="_blank">Home</a></li>
            <li><a href="#" target="_blank">Pictures</a></li>
            <li><a href="#" target="_blank">Accordian</a></li>
            <li><a href="#" target="_blank">Grid</a></li>
          </ul>
        </b-jumbotron>
      </div>
      <section>
        <h3>{{ section }}</h3>
        <article>
          <h4>{{main}}</h4>
          <p>{{msg1}}</p>
          <hr>
          <!---vue-if else statement--->
          <button v-on:click="show = !show">Are you interetsed in traveling??</button>
          <p v-if="show">Yes!!! :)</p>
          <p v-else>No traveling sucks</p>
        </article>
      </section>

      <hr>

      <!---Image Page---->
      <!-- V-For for array of images -->
      <div class="gallery">
         <img class="image1" v-for="(image, i) in images" :src="image" @click="onClick(i)">
  <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
      </div>

      <hr>

      <!--Third Page -->
      <!--Object-->

      <h4>{{title2}}</h4>
      <div class="places">
<ul id="v-for-object" class="demo">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>
</div>




      <footer>
        <p> {{ footer }} </p>
        <p> {{ contact }}</p>
      </footer>





    </div>
  </body>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      onClick(i) {
        this.index = i;
      }
    },
    data() {
      return {
        show: true,
        title: 'Travel',
        title2: 'Places Ive Been',
        msg: 'Welcome to My Website!',
        section: 'Info about my website',
        msg1: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. morbi cursus vulputate ligu lorem ispumorem ipsum ligu lorem ispumorem ipsum dolor sit amet,consectetur adipiscing elit. morbi cursus vulputate ligu lorem ispum',
        footer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vulputate ligu Lorem ipsum dolor sit',
        contact: 'Name: Jon Snow Location: Winter is Coming Email: winter@fall.com Telephone Number: 345-634-5633',
        images: [
          'img/horse.jpg',
          'img/palace.jpg',
          'img/london.jpg',
          'img/cherry-blossoms.jpg',
          'img/new_orleans.jpg',
          'img/monet.jpg'
        ],
        index: 0,
        object: {
      Europe: 'Spain, Italy, France, Switzerland, Netherlands, Belguim',
      Year: '2014',
      Asia: 'Thailand, Laos, Japan',
      Year: '2012, 2019',
    }

      }
    }
  } //default  

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

  h1,
  h2 {
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


  /*CSS FROM ASSIGNMENT 6*/

  * {
    box-sizing: border-box;
  }

  // body 

  body {
    position: absolute;
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    //padding-top: 50px;
  }

  // header tags 

  h1,
  h2 {
    color: #004466;
    margin: 0;
    padding: 10px;
    font-size: 50px;
    font-family: Neuton;
    text-align: center;
  }


  h5 {
    color: black;
    margin: 0;
    padding: 10px;
    font-family: Neuton;
  }

  // header

  header {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
  }



  // Nav bar 

  // ul {
  //   list-style-type: none;
  //   margin: 0;
  //   padding: 0;
  //   overflow: hidden;
  //   background-color: rgb(37, 37, 37);
  // }

  // li {
  //   float: left;
  // }

  // li a {
  //   display: block;
  //   color: white;
  //   text-align: center;
  //   padding: 14px 16px;
  //   text-decoration: none;
  // }

  // li a:hover:not(.active) {
  //   background-color: #111;
  // }

  // .active {
  //   background-color: rgb(58, 136, 172);
  // }

  //search transition 

  // input[type=text] {
  //   width: 100px;
  //   -webkit-transition: width .35s ease-in-out;
  //   transition: width .35s ease-in-out;
  // }
  // input[type=text]:focus {
  //   width: 250px;
  // }

  // section 

  section {
    margin: 10px;
    padding: 10px;
  }


  // article 

  article {
    padding: 20px;
    margin: 20px;
    bottom: 0;
  }

  // image transform & translate

  //https://www.w3schools.com/howto/howto_css_image_overlay.asp 
  // for the hover over lay effect...im going to mess around with it a little when I have more time

  // images used were taken by me 

  .container {
    position: relative;
    width: 50%;
    padding: 20px;
    margin: 20px;
  }

  .image {
    display: block;
    width: 25%;
    height: auto;
    padding: 20px;
    margin: 20px;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: auto;
    width: 50%;
    opacity: 0;
    transition: .7s ease;
    background-color: rgb(26, 28, 29);
  }

  .container:hover .overlay {
    opacity: 1;
  }

  .text {
    color: #ffb7c5;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  // gallery 

  .gallery img {
    width: 25%;
  }

  .image1 {
    width: 100%;
    height: auto;
    background-size: contain;
    cursor: pointer;
    margin: 10px;
    border-radius: 3px;
  }

// objects - places i've been

.places {
  list-style-type: circle;
  margin: 0;
  padding: 0;
}

  // footer 


  footer {
    position: relative;
    background-color: rgb(37, 37, 37);
    padding: 8px;
    width: 100%;
    bottom: 0;
    text-align: center;
    color: white;
  }

  footer p {
    font-size: 8px;
    text-indent: 50px;
    text-align: center;
    padding: 2px 2px;
    font-family: sans-serif;
  }

</style>
