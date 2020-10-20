<template>
  
</template>

<script>
export default {
    async asyncData({ $axios }) {
        try {
        let singleVacancy = $axios.$get(`/api/vacancies/${params.id}`);
        let manyComments = $axios.$get(`/api/comments/${params.id}`);

        const [vacancyResponse, commentResponse] = await Promise.all([
            singleVacancy,
            manyComments
        ]);

        return {
            vacancy: vacancyResponse.vacancy,
            reviews: commentResponse.comments
        };
        } catch (err) {
            console.log(err);
        }
  },
}
</script>

<style>

</style>