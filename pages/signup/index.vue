<template>
  <div class="login">
    <div class="container">
      <h1 id="title">Create your personal account</h1>

      <div id="login-form">
        <h1>Sign Up</h1>
        <hr>
        <div class="login-content">
first_name
last_name
email
password
date_of_birth
          <div class="login-fields">
            <div class="login-field">
              <label for="login">USERNAME OR EMAIL</label>
              <input id="login" type="email" v-model="email" placeholder="Enter your username or email address">
            </div>
            <div class="login-field">
              <label for="login">first name</label>
              <input id="login" type="text" v-model="first_name" placeholder="Enter your username or email address">
            </div>
            <div class="login-field">
              <label for="login">last name</label>
              <input id="login" type="text" v-model="last_name" placeholder="Enter your username or email address">
            </div>
            <div class="login-field">
              <label for="login">date of birth</label>
              <input id="login" type="text" v-model="date_of_birth" placeholder="Enter your username or email address">
            </div>
            <div class="login-field">
              <label for="password">PASSWORD</label>
              <input type="password" v-model="password" placeholder="Enter your password" id="password">
            </div>
            <div class="login-end">
              <p><input type="checkbox">Remember me</p>
              <p style="color: gray">Forgot password?</p>
            </div>
            <button class="btn-login" @click="onSignup">Sign up</button>
          </div>

          <div class="login-links">
            <div class="login-link">
              LOGIN VIA SOCIAL LINKS
              <div class="login-links-icons">
                <img src="~@/assets/icons/Google.svg" alt="">
                <img src="~@/assets/icons/Facebook.svg" alt="">
                <img src="~@/assets/icons/Mail.ru.svg" alt="">
              </div>
            </div>

            <div class="login-link">
              Already have an account? <nuxt-link to="/login">Log in</nuxt-link>
              <div>
                <button class="btn-reg">APPLICANT</button>
                <button class="btn-reg">EMPLOYER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  layout: "none",
  data() {
    return {
      email: "",
      password: "",
      first_name:"",
      last_name:"",
      date_of_birth:"",
    };
  },
  methods: {
    async onSignup() {
      try {
        let data = {
          email: this.email,
          password: this.password,
          first_name: this.first_name,
          last_name: this.last_name,
          date_of_birth: this.date_of_birth,
        };
        let response = await this.$axios.$post("/api/auth/employee/signup", data);
        console.log(response);
        if (response.success) {
          this.$auth.loginWith("local", {
            data: {
              email: this.email,
              password: this.password
            }
          });
          this.$router.push("/");
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>

<style scoped>
  .login {
    background: #F0F3FA;
    height: 92vh;
  }
  .container {
    width: 70%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #title {
    margin: 80px 0;
  }
  #login-form {
    width: 900px;
    background: white;
    margin: 0 auto;
    text-align: left;
    border-radius: 5px;
  }
  #login-form > h1 {
    padding: 0 30px;
    margin: 30px 0 20px 0;
  }
  .login-content {
    display: flex;
    justify-content: space-between;
    padding: 30px;
  }
  .login-fields {
    display: flex;
    flex-direction: column;
  }
  .login-field {
    display: flex;
    flex-direction: column;
  }
  .login-field > label {
    color: rgba(99, 114, 155, 1);
    padding: 10px 0;
    font-weight: 700;
    font-family: 'Nunito';
  }
  .login-field > input {
    width: 370px;
    height: 30px;
    font-size: 14px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 3px;
  }
  .login-end {
    display: flex;
    justify-content: space-between;
  }
  .btn-login {
    width: 100px;
    height: 40px;
    color: white;
    background: rgba(15, 143, 238, 1);
    border: none;
    border-radius: 30px;
  }
  .login-links {
    width: 370px;
  }
  .login-links-icons > img {
    height: 40px;
    padding: 5px 10px 5px 0 ;
  }
  .login-link {
    color: rgba(99, 114, 155, 1);
    font-weight: 700;
    padding: 10px 0;
  }
  .btn-reg {
    color: #888888;
    font-weight: 700;
    background: #ededed;
    padding: 10px 25px;
    margin: 5px 10px 0 0;
    border: none;
    border-radius: 4px;
  }
</style>
