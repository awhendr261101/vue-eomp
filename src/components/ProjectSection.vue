<template>
    <div class="container">
      <h1>Projects</h1>
    <main class="main">
        <div class="projects-container" v-for="(project, index) in projects" :key="index">
            <div class="project">
                <div class="project__content">
                  <div class="inner">
                    <p>{{ project.name }}</p>

                    <p class="p"> hey</p>

                  </div>
                </div>
            </div>
        
        </div>
    </main>

    </div>
  </template>
  
<script setup>
  import {computed,  } from 'vue'
  import {useStore} from 'vuex'
    const store = useStore()
    const projects = computed(() => store.state.projects)
    console.log(projects);


</script>
  
<style scoped>

@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
@import url("https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&display=swap");

    h1 {
      color: aliceblue;
      text-align: center;}
      .container {
        background-image: url('https://awhendr261101.github.io/allImages/images/vue-eomp/galaxy11.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center; 
        min-height: 100dvh;
}


*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100dvh;
  background-position: center 33%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(203, 203, 203);
  font-family: "Covered By Your Grace", cursive;

}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.inner{
  height: 100%;
}

.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
}

.main {
  z-index: 1;
  width: 100%;
  padding: 2rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
}

.projects-container {
  padding: 3rem;
  gap: 4rem;
/*   overflow-y: scroll; */
}

.project {
  position: relative;
  width: 13rem;
  height: 19.5rem;
  overflow: hidden;
  box-shadow: -5px 5px 20px 7px black;
  transform: skewY(10deg) rotateY(20deg);
  transition: all 0.5s ease-in-out;
}

.project__content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.126);
  opacity: 1;
  transition: all 0.5s ease-in-out;
}
.project__content h2{
    color: white;
}



.project:hover {
  transform: skewY(0deg) rotateY(0deg);
  border: 1px solid yellow;
  background-color: black;
}
.project:hover .project__content {
  opacity: 0.9;
}

.credits {
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 200;
}
.credits__link {
  color: blue;
  text-decoration: underline;
}

@media screen and (max-width: 802px) {
  body {
    min-height: 100vh;
    height: auto;
  }
  h2 {
    font-size: 1.75rem;
  }
}

p{
  color: white;
  padding-top: 2rem;
}

  </style>
  