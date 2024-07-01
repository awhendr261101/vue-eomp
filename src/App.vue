<template>
  <div class="wrapper" >
    <NavBar />
    <main class="container-fluid">
      <router-view/>
    </main>

  
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style src="./assets/css/style.css">

</style>
