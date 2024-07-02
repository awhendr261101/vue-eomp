<template>
    <div class="container-fluid">
    <section class="row" id="landing">
      <Landing />
    </section>

    <section class="row" id="about">

    </section>

    <section class="row" id="resume"></section>
    <section class="row" id="project"></section>
    <section class="row" id="testimonials"></section>
    <section class="row" id="reachme"></section>
  </div>
</template>

<script>
import Landing from '@/components/LandingSection.vue'
export default {
  name: 'HomeView',
  components: {
    Landing, 
  },
  mounted(){ 
    return this.$store.dispatch('getPortfolioData')
  }
}
</script>
