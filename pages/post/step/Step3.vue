<template>
  <div class="step">

    <div class="content">

      <div>
        <div class="input">
          <label>FIRST NAME</label>
          <input type="text">
        </div>
        <div class="input">
          <label>LAST NAME</label>
          <input type="text">
        </div>
        <div class="input">
          <label>USERNAME</label>
          <input type="text">
        </div>
      </div>

      <div>
        <div class="input">
          <label>USERNAME</label>
          <input type="text">
        </div>
        <div class="input">
          <label>EMAIL</label>
          <input type="text">
        </div>
        <div class="input">
          <label>EMAIL</label>
          <input type="text">
        </div>
      </div>




    </div>
  </div>
</template>

<script>
export default {
name: "Step3.vue"
}
</script>

<style scoped>
.step {
  width: 60%;
  background: white;
  border-radius: 10px;
  padding: 20px 30px;
}

.content {
  display: flex;
  justify-content: space-between;
}
.input {
  padding: 10px 0;
  display: flex;
  flex-direction: column;
}
.input > label {
  color: blue;
  padding: 10px 0;
}
.input > input {
  width: 340px;
  height: 40px;
}
</style>
