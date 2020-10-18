<template>
  <div class="step">
    <div class="price">FREE</div>
    <div class="plan">
      <h3>Pricing plan 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum dolorum, ea eligendi esse fugiat incidunt magni necessitatibus nihil provident tenetur vel veritatis. At hic magnam quae recusandae sit.</p>
    </div>
    <hr>
    <div class="price price-active">50$</div>
    <div class="plan" >
      <h3>Pricing plan 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum dolorum, ea eligendi esse fugiat incidunt magni necessitatibus nihil provident tenetur vel veritatis. At hic magnam quae recusandae sit.</p>
      <ul>
        <li>1 job posting</li>
        <li>No featured job</li>
        <li>1 month displayed</li>
      </ul>
    </div>

    <hr>
    <div class="price">100$</div>
    <div class="plan">
      <h3>Pricing plan 3</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum dolorum, ea eligendi esse fugiat incidunt magni necessitatibus nihil provident tenetur vel veritatis. At hic magnam quae recusandae sit.</p>
    </div>
  </div>
</template>

<script>
export default {
name: "Step1",
}
</script>

<style scoped>
.step {
  width: 60%;
  background: white;
  border-radius: 8px;
  margin-bottom: 100px;
}
.plan {
  padding: 10px 100px 10px 100px;
}
.price {
  margin: 33px 0;
  position: absolute;
  background: gray;
  color: white;
  padding: 5px;
  text-align: center;
  width: 40px;
  height: 20px;
}
.price-active {
  background: blue;
}
ul {
  list-style: none;
}
</style>
