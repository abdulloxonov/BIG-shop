<template>
  <div id="map-container" :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="info-box">
      <h2>МКАД, 38-й километр, 66с1</h2>
      <p>📞 +7 (800) 551-94-31</p>
      <p>📞 +7 (495) 291-18-67</p>
      <p>🕒 Ежедневно: 08:00 - 21:00</p>
      <p>📍 Россия, Москва, 38км МКАД, 66с1</p>
      <button class="directions-btn">КАК ДО НАС ДОБРАТЬСЯ</button>
    </div>
  </div>
</template>

<script setup>
import bgImage from '../Group4270/img/image 1.png';
</script>

<style>
#map-container {
  position: relative;
  width: 100%;
  height: 600px;
  margin: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.info-box {
  position: absolute;
  top: 50%;
  right: 15%;
  transform: translate(50%, -50%);
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.directions-btn {
  background-color: red;
  color: white;
  border: none;
  padding: 12px;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}
.directions-btn:hover {
  background-color: darkred;
}
</style>
