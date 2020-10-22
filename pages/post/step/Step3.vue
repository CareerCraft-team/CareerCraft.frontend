<template>
  <div class="step">

    <div class="content">

      <div>
        <div class="input">
          <label>COMPANY NAME</label>
          <input type="text">
        </div>
        <div class="input">
          <label>PHONE NUMBER</label>
          <input type="text">
        </div>
        <div class="input">
          <label>COMPANY LOGO <span style="color: gray">(MAXIMUM FILE SIZE: 5MB)</span></label>
          <input type="text" placeholder="Upload your logo">
        </div>
      </div>

      <div>
        <div class="input">
          <label>ADDRESS</label>
          <input type="text">
        </div>
        <div class="input">
          <label>EMAIL</label>
          <input type="text">
        </div>
        <div class="input">
          <label>WEBSITE <span style="color: gray">(OPTIONAL)</span></label>
          <input type="text">
        </div>
      </div>
    </div>
    <div class="company-description" style="margin-top: 32px">
        <div>COMPANY DESCRIPTION <span style="color: gray">(OPTIONAL)</span></div>
      <div>
        <div style="width: 100%; background: #EDEDED; height: 30px; display: flex; align-items: center; border-top-right-radius: 4px; border-top-left-radius: 4px;">
          <div v-for="i in 10" :key="i">
            <div style="width: 14px; height: 14px; background: #C4C4C4; margin-left:10px"></div>
          </div>
        </div>
        <div>
          <textarea name="" id="" cols="96" rows="10"></textarea>
        </div>
      </div>
    </div>

    <div class="job-details">
      <label>JOB TITLE</label>
      <input />
      <div>
        <div>
          <label>JOB TYPE</label>
          <input type="text">
        </div>
        <div>
          <label>JOB CATEGORY</label>
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
