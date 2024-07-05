<template>
    <div class="container">
      <h1>About me</h1>
      <div v-if="about" class="row d-flex flex-row justify-content-center align-items-center">
        <p>{{ about[0] }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  


  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState({
        about: state => state.about
      })
    },
    methods: {
      ...mapActions(['getPortfolioData'])
    },
    mounted() {
      this.getPortfolioData(); 
    }
  };
  </script>
  
  <style scoped>

  .row{
    height: 100%;
  }
  .container {
        background-image: url('https://awhendr261101.github.io/allImages/images/vue-eomp/galaxy13.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center; 
  }
  h1 {
    color: white;
    text-align: center;
    padding-top: 2vh;
  }
  p {
    color: white;
    text-align: center;
  }
  
  </style>