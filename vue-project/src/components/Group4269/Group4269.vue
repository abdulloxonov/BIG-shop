<template>
  <div class="carousel-container">
    <div class="header">
      <div class="btn-h2">
      <h2>Наши подборки</h2>
      <button class="all-btn">Bce подборки</button></div>   <div class="nav-buttons">
      <button class="nav-btn" @click="prevSlide">&#x276E;</button>
      <button class="nav-btn" @click="nextSlide">&#x276F;</button>
    </div>
    </div>
    <div class="carousel-wrapper">
      <swiper :keyboard="keyboardConfig" slidesPerView="3" spaceBetween={20}>
        <swiper-slide v-for="(item, index) in visibleItems" :key="index">
          <img :src="item.image" :alt="item.title" class="card-img" />
          <div class="card-content">
            <h3>{{ item.title }}</h3>
            <button class="view-btn">Посмотреть</button>
          </div>
        </swiper-slide>
      </swiper>
    </div>
 
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import famliy1 from '../Group4269/img/famliy1.png'
import famliy2 from '../Group4269/img/famliy2.png'
import famliy3 from '../Group4269/img/famliy3.png'

const items = ref([
  { image: famliy1, title: 'Item 1' },
  { image: famliy2, title: 'Item 2' },
  { image: famliy3, title: 'Item 3' },
  { image: famliy1, title: 'Item 4' },
  { image: famliy2, title: 'Item 5' },
  { image: famliy3, title: 'Item 6' },
]);

const currentIndex = ref(0);

// 3 ta item ko'rsatiladi: currentIndex, currentIndex+1, currentIndex+2
const visibleItems = computed(() => {
  return items.value.slice(currentIndex.value, currentIndex.value + 3);
});

const keyboardConfig = {
  enabled: true,  // Klaviatura boshqaruvini yoqish
  onlyInViewport: true,  // Faqat ko'rinadigan slayderni boshqarish
  pageUpDown: true  // Page Up va Page Down yordamida ko'rsatilgan slayderlarni boshqarish
};

const nextSlide = () => {
  if (currentIndex.value < items.value.length - 3) {
    currentIndex.value++;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
</script>

<style scoped>
.carousel-container {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
  margin-bottom: 100px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.btn-h2 {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.all-btn {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
}

.carousel-wrapper {
  overflow: hidden;
}

.swiper-container {
  display: flex;
  width: 100%;
}

.swiper-slide {
  width: 33.33%; /* 3 ta rasmni ekranda ko'rsatish */
  padding-right: 20px; /* Right margin */
  box-sizing: border-box; /* Paddingni hisoblash */
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.card-img {
  width: 100%;
  display: block;
  border-radius: 10px;
}

.card-content {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
}

.view-btn {
  background-color: red;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 10px;
}

.nav-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 25px;
  margin-top: 50px; 
 
}

.nav-btn {
  background-color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 50px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  padding: 12px 18px;
  border-radius: 5px;
  width: 40px; /* Kengligini biroz oshirdim */
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-btn:hover  {
  background-color: #CA0100;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Yengil soyali effekt */
  transform: scale(1.1);
}
.nav-btn:focus  {
  background-color: #CA0100;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Yengil soyali effekt */
  transform: scale(1.1);
}

.nav-btn:active {
  transform: scale(0.95);
}

</style>
