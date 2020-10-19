<template>
  <div class="main-search">

    <div class="search">

      <div class="search-inputs">

        <h1>Over <bold>100.000</bold><sup>+</sup> jobs are waiting for you {{$auth.$state.user.first_name}} </h1>
        <div class="search-input">

          <div class="input-field">
            <img src="@/assets/icons/icon-job.svg">
            <input class="input-field" type="text" placeholder="job title / keyword / company name">
          </div>

          <div class="input-field">
            <img src="@/assets/icons/icon-pin.svg">
            <input class="input-field" type="text" placeholder="city / province / zip code">
          </div>
          <button class="btn-search"><img src="@/assets/icons/icon-search.svg" alt=""></button>
        </div>
        <div class="keywords">
          <p>Popular keywords: </p>
          <p class="keyword">python</p>
          <p class="keyword">django</p>
          <p class="keyword">html</p>
        </div>
      </div>
    </div>
    <div class="search-footer">
      <div class="footer-content">
        <div class="footer-option">
          <h3 style="margin: 0">LEADING INDUSTRY</h3>
          <p>ABOUT US</p>
        </div>
        <div class="footer-option">
          <h3 style="margin: 0">HIGH AVARAGE SALARY</h3>
          <p>LEARN MORE</p>
        </div>
        <div class="footer-option">
          <h3 style="margin: 0">1,000,000+ CANDIDATES</h3>
          <p>OUR COMMUNITY</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "MainSearch",

}
</script>

<style scoped>
  .main-search {
    background-image: url("~@/assets/img/Main.png");
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
  }
  .search {
    min-height: 76vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    padding: 20px 0;
    margin: 0;
  }
  .search-inputs {
    margin: 0 auto;
    width: 70%;
  }
  .search-input {
    margin: 0;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    background: rgba(170,174,175,0.2);
    border-radius: 9px;
  }
  .input-field > img {
    position: absolute;
    margin-left: 575px;
    align-items: center;
    padding-top: 15px;
    width: 1.5%;
  }
  .input-field > input {
    width: 580px;
    border-radius: 9px;
    border: none;
    padding: 20px;
    font-size: 20px;
  }
  .btn-search {
    width: 60px;
    height: 63px;
    border-radius: 7px;
    border: none;
    background: #4573E8;
  }
  .keywords {
    display: flex;
  }
  .keywords > p {
    padding: 10px;
    color: white;
    font-size: 18px;
  }
  .keyword {
    border-radius: 4px;
    margin-left: 5px;
    background: blue;
  }
  .footer-content {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .search-footer {
    height: 16vh;
    width: 100%;
    background: rgba(24,24,24,0.6);
    display: flex;
    align-items: center;
  }
  p {
    color: gray;
  }
</style>
