<template>
  <div>
    <MainSearch />
  </div>
</template>

<script>
import MainSearch from "@/components/Main/MainSearch";
export default {
  components: {MainSearch},
  async asyncData({$axios}) {
    try {
      let response = await $axios.$get("/api/vacancies")
      return {
        vacancies:response.vacancies // Use to list over vacancies
      }
    } catch (error) {
      console.log(error)
    }
  }

}
</script>
<style>
 body {
   margin: 0;
   padding: 0;
   font-family: 'Manjari', sans-serif;
   font-weight: 300;
 }
</style>
