<template>
  <div class="post">
    <div class="content">
      <h1>Post a Job</h1>
      <p>Step {{ current }}: {{ currentMessage }}</p>
      <client-only>
        <div style="height: 100px; width: 600px">
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

      <div class="navigation-btn">
        <div v-show="current > 1" @click="current-=1">BACK</div>
        <div v-show="current < 5" @click="current+=1">GO TO STEP {{ current + 1 }}</div>
      </div>

    </div>
  </div>
</template>
<script>
import ProgressBar from "@/components/core/ProgressBar";

export default {
  components: {
    ProgressBar
  },
  data: () => ({
    current: 1,
    messages: [
      'Choose your pricing plan',
      'Create an account',
      'Job Detail',
      'Review Job'
    ]
  }),
  computed: {
    currentComponent() {
      switch (this.current){
        case 5:
      }

      return () => import('@/pages/post/step/Step'+this.current)
    },
    currentMessage() {
      return this.messages[this.current-1]
    }
  }
}
</script>

<style scoped>
.post {
  background: #F0F3FA;
  min-height: 91vh;
}
.content {
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.navigation-btn {
  background: white;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 0 30px;
}
.navigation-btn > div {
  background: blue;
  height: 30px;
  padding: 10px 26px 0 26px;
  color: white;
  margin: 10px;
  border-radius: 50px;
}
</style>
