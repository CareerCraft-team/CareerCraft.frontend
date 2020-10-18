<template>
  <div>
    <div class="main__navigation">
      <h1 style="font-family: 'Nunito'"><router-link to="/">CareerCraft</router-link></h1>
      <div class="main__navigation-menu">
        <ul>
          <li>Home <img src="@/assets/icons/icon-vector.png" alt=""></li>
          <li>About</li>
          <li>Candidates <img src="@/assets/icons/icon-vector.png" alt=""></li>
          <li>Companies <img src="@/assets/icons/icon-vector.png" alt=""></li>
          <li>Blog</li>
        </ul>
        <div>
          <button @click="postJob" class="btn-post">POST A JOB</button>
          <button class="btn-login"><nuxt-link to="/login">LOGIN</nuxt-link></button>
        </div>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "MainNavigation",
  methods: {
    postJob() {
      // this.$router.push({ name:  })
    },
    login() {
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style scoped>
.main__navigation {
  display: flex;
  height: 8vh;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: auto;
}
ul {
  list-style: none;
}
li {
  display: inline-block;
  padding: 10px;
  font-size: 23px;
  color: black;
  font-weight: 550;
  cursor: pointer;
  border-radius: 10px;
}
li:hover {
  background: blue;
  color: white;
}
.main__navigation-menu {
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
img {
  padding-bottom: 5px;
}
a {
  text-decoration: none;
  color: black;
}
</style>
