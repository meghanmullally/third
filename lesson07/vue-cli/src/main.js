import Vue from 'vue'
import App from './App.vue'
import VueGallerySlideShow from 'vue-gallery-slideshow'


new Vue({
  el: '#app',
  render: h => h(App),
  components: {
    VueGallerySlideShow
  },
});