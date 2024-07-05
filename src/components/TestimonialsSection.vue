<template>
    <div class="container">
      <h1>Testimonials</h1>
  
      <div v-if="testimonials && testimonials.length" class="col d-flex flex-row justify-content-center gap-3">

        <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial">
          <blockquote>
            <p>{{ testimonial.quote }}</p>
            <footer>{{ testimonial.author }}</footer>
          </blockquote>
        </div>

      </div>
      <p v-else>No testimonials available.</p>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState({
        testimonials: state => state.testimonials,
      })
    },
    created() {
      this.$store.dispatch('getPortfolioData');
    }
  }
  </script>
  
  <style scoped>
    h1 {
      color: aliceblue;
      text-align: center;
    }
    .container {
        background-image: url('https://awhendr261101.github.io/allImages/images/vue-eomp/galaxy10.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center; 
        height:  100vh;
    }
    .testimonial {
      margin-bottom: 20px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      background-color: #f9f9f9;
      width: 20rem;
      display: flex;
      justify-content: center;
      align-items: center;
      
    }
   
    
    p {
      color: white;
    }
  </style>