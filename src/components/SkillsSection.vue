<template>
    <div class="container">
      <h1>My Skills</h1>
  
      <ul v-if="skills && skills.length">
        <li v-for="skill in skills" :key="skill.id">{{ skill.name }}</li>
      </ul>
      <p v-else>No skills found.</p>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState({
        skills: state => state.skills,
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
    }
    .container {
        background-image: url('https://awhendr261101.github.io/allImages/images/vue-eomp/galaxy16.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center; 
        height:  100vh;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      margin-bottom: 10px;
      font-size: 18px;
    }
    p {
      color: white;
    }
  </style>
  