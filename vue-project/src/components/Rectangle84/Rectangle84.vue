<template>
    <div class="carousel-container">
      <div class="header">
        <div class="btn-h2">
        <h2>Банки-партнеры</h2>
        </div>   <div class="nav-buttons">
        <button class="nav-btn" @click="prevSlide">&#x276E;</button>
        <button class="nav-btn" @click="nextSlide">&#x276F;</button>
      </div>
      </div>
      <div class="carousel-wrapper">
        <swiper :keyboard="keyboardConfig" slidesPerView="3" spaceBetween={20}>
          <swiper-slide v-for="(item, index) in visibleItems" :key="index">

            <div class="card">
        <div class="title">Сайт отзывик</div>
        <div class="subtitle">Название автосалона</div>
        <div class="recommend">
            Рекомендуют 90%
            <div class="stars">
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star gray-star">★</span>
            </div>
            <div class="rating">4.5</div>
        </div>
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
  import img1 from '../Bank/img/Group 1875.png'
  import img2 from '../Bank/img/bank.png'
  import img3 from '../Bank/img/bank (1).png'

  
  const items = ref([
    { image: img1, title: 'Первый автомобиль' },
    { image: img2, title: 'Первый автомобиль' },
    { image: img3, title: 'Первый автомобиль' },
    { image: img1, title: 'Первый автомобиль' },
    { image: img2, title: 'Первый автомобиль' },
    { image: img3, title: 'Первый автомобиль' },

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


        .card {
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0px 0px 30px 0px #85939F4D;
            width: 300px;
        }
        .title {
            font-size: 18px;
            font-weight: bold;
            color: #000;
        }
        .subtitle {
            font-size: 14px;
            color: #999;
            margin-top: 4px;
        }
        .recommend {
            font-size: 14px;
            color: #000;
            margin-top: 12px;
            display: flex;
            align-items: center;
        }
        .stars {
            margin-left: 8px;
            display: flex;
        }
        .star {
            color: #FFC107;
            font-size: 16px;
        }
        .gray-star {
            color: #ddd;
        }
        .rating {
            background: #4CAF50;
            color: white;
            font-size: 14px;
            font-weight: bold;
            padding: 4px 8px;
            border-radius: 6px;
            margin-left: auto;
        }


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
    /* color: white; */
  }
  .card-content p {
    color: #737373;
  }
  
  .view-btn {
    background-color: #C2C2C4;
    color: black;
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
  