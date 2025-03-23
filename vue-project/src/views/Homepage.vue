<template>
  <div>
    <Header />

    <div class="carousel">
      <button @click="prevSlide" class="nav-btn left">&lt;</button>

      <div class="slide-container">
        <div class="slide" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div v-for="(slide, index) in slides" :key="index" class="slide-item">
            <img :src="slide.image" :alt="'Slide ' + (index + 1)" />
            <div class="text">
              <span class="tag">Осталось всего 10 авто!</span>
              <h1>Грандиозная распродажа <br>
                 тестового парка!</h1>
              <p>Узнай свою цену!</p>
            </div>
          </div>
        </div>
      </div>

      <button @click="nextSlide" class="nav-btn right">&gt;</button>

      <div class="dots">
        <span
          v-for="(slide, index) in slides"
          :key="'dot-' + index"
          class="dot"
          :class="{ active: currentIndex === index }"
          @click="currentIndex = index"
        ></span>
      </div>
    </div> 
    <Rectangle205 />
    <Group />
    <Group4269 />
    <BannerBeat />
    <Group4210 />
    <Rectangle415 />  
    <Bank />
    <Rectangle84 />
    <Rectangle444 />
    <Feedback />
    <Rectangle122 />
    <Group4246 />
    <Selected />
    <Group4270 />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Header from "../components/Header/Header.vue";
import car1 from "@/assets/img/car1.png";
import car2 from "@/assets/img/car2.png";
import car3 from "@/assets/img/car3.png";


import Rectangle205 from "@/components/Rectangle205/Rectangle 205.vue";
import Group from "../components/Group/Group.vue";
import Group4269 from "../components/Group4269/Group4269.vue";
import BannerBeat from "../components/Banner-beat/BannerBeat.vue";
import Group4210 from "../components/Group4210/Group4210.vue";
import Rectangle415 from "../components/Rectangle415/Rectangle415.vue";
import Bank from "../components/Bank/Bank.vue";
import Rectangle84 from "../components/Rectangle84/Rectangle84.vue";
import Rectangle444 from "../components/Rectangle444/Rectangle444.vue";
import Feedback from "../components/Feedback/Feedback.vue";
import Rectangle122 from "../components/Rectangle122/Rectangle122.vue";
import Group4246 from "../components/Group4246/Group4246.vue";
import Selected from "../components/Selected/Selected.vue";
import Group4270 from "../components/Group4270/Group4270.vue";
import Footer from "../components/Footer/Footer.vue";
const slides = ref([
  { image: car1 },
  { image: car2 },
  { image: car3 },
]);

const currentIndex = ref(0);
let interval = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

onMounted(() => {
  interval = setInterval(nextSlide, 3000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.carousel {
  position: relative;
  width: 97vw;
  height: 80vh;
  overflow: hidden;
  left: 20px;
  top: 100px;
  border-radius: 20px;
  background-image: url(../assets/img/rm0331.jpg);
  background-size: cover;
  background-position: center;
}

.slide-container {
  display: flex;
  justify-content:center;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.slide {
  display: flex;
  width: 100%;
  height: 90vh;
  transition: transform 1s ease-in-out;
  
}

.slide-item {
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content:right;
  position: relative;
}

.slide-item img {
  
  width: 600px;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
  position: relative;
  right:150px;
}

.text {
  position: absolute;
  left: 10%;
  top: 30%;
  transform: translateY(-50%);
  color: black;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.tag {
  background: red;
  width: 160px;
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 50px;
}

h1 {
  font-size: 50px;
  font-weight: bold;
}

p {
  font-size: 20px;
  margin-top: 5px;
  color: #737373;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 24px;
  border-radius: 50%;
  z-index: 10;
}

.left {
  left: 10px;
}

.right {
  right: 10px;
}

.dots {
  position: absolute;
  bottom: 10px;
  left: 12%;
  bottom: 5%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
}

.dot {
  width: 10px;
  height: 10px;
  background: #737373;
  border-radius: 50%;
  cursor: pointer;
}

.dot.active {
  background: red;
}
</style>