<template>
  <div>
    <h1>Post a Job</h1>
    <p>Step {{ current }}: {{ currentMessage }}</p>
        <client-only>
          <div style="height: 100px; width: 400px">
            <ProgressBar
              :steps="[1, 2, 3, 4]"
              :current-step="current-1"
              :active-color="'#1650E2'"
              :active-thickness="2"
              :line-thickness="5"
              :passive-color="'#A0A7BA'"
            />
          </div>
        </client-only>

        <component :is="currentComponent"></component>
    <button v-show="current > 1" @click="current-=1">prev</button>
    <button v-show="current < 5" @click="current+=1">next</button>
  </div>
</template>
<script>
import ProgressBar from "@/components/core/ProgressBar";

export default {
  components: {
    ProgressBar
  },
  data: () => ({
    current: 1
  }),
  computed: {
    currentComponent() {
      switch (this.current){
        case 5:
      }

      return () => import('@/pages/post/step/Step'+this.current)
    },
    currentMessage() {

    }
  }
}
</script>

<style scoped>
.content {
  display: inline-block;
}
</style>
