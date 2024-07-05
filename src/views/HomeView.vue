<template>
    <div class="container-fluid">
    <section class="row min-vh-100" id="landing">
      <Landing />
    </section>

    <section class="row min-vh-100" id="about">
      <About/>
    </section>

    <section class="row min-vh-100" id="resume">
      <Resume/>
    </section>
    <section class="row min-vh-100" id="skills">
      <Skills/>
    </section>
    <section class="row min-vh-100" id="project">
      <Projects/>
    </section>
    <section class="row min-vh-100" id="testimonials">
      <Testimonials/>
    </section>
    <section class="row min-vh-100" id="reachme">
      <ReachMe/>
    </section>
  </div>
</template>

<script>
import Landing from '@/components/LandingSection.vue'
import About from '@/components/AboutSection.vue'
import Resume from '@/components/ResumeSection.vue'
import Skills from '@/components/SkillsSection.vue'
import Projects from '@/components/ProjectSection.vue'
import Testimonials from '@/components/TestimonialsSection.vue'
import ReachMe from '@/components/ReachMeSection.vue'

export default {
  name: 'HomeView',
  components: {
    Landing,About,Resume,Skills,Projects,Testimonials,ReachMe
  },
  mounted(){ 
    return this.$store.dispatch('getPortfolioData')
  }
}
</script>

<style scoped>
  #reachme{
        background-image: url('https://awhendr261101.github.io/allImages/images/vue-eomp/galaxy11.jpg');
        background-repeat: no-repeat;
        background-size: cover;
  }

  

</style>
