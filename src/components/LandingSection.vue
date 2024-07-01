<template>
    <div class="container">
      <div class="row vh-100 align-items-center">
          <div class="col">
                  <img src="https://awhendr261101.github.io/allImages/images/Daniel.png" alt="me" me loading="lazy">
          </div>
          <div class="col">
              <div id="details">
                  <h1 class="display-1">Awodwa Hendrick</h1>
                  <p v-if="true">
                      I am
                  <span>{{ title }}</span>
                  </p>
                  <Spinner v-else />
              </div>
          </div>
      </div>
    </div>
</template>

<script setup>

import {computed, onMounted, ref } from 'vue'
import {useStore} from 'vuex'
import Spinner from '@/components/Spinner.vue'
    const store = useStore()
      const jobtitle =
      computed(() => store.state.jobtitle)
      const title = ref('a software developer')
      const cnt = ref(-1)
      function repeat() {
          try {
              if (cnt.value == jobtitle.value?.length) cnt.value = 0;
              title.value =
                  jobtitle.value?.at(cnt.value)?.title;
                  setTimeout(repeat, 2000)
                  cnt.value++
          } catch (e) {
              //
          }
      }
      onMounted(() => {
          repeat()
      })


</script>

<style>

</style>