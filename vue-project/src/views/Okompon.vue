<template >
  <div class="body-div">
    <div>
        <Header />
        <div class="carousel">
           
 

      <div class="slide-container">
        <div class="slide" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div v-for="(slide, index) in slides" :key="index" class="slide-item">
             <img src="../assets/img/car2.png" alt="photo">
            <div class="text">
              <span class="tag"><p class="pp">Скидки до</p><h2>350 000 ₽</h2></span>
              <h1>Грандиозная <br>
                распродажа Toyota</h1>
              <p>Получите специальную цену + подарок <br> на выбор припокупке авто</p>
            </div>
          </div>
        </div> 
      </div>

  

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
    <Group3971 />
  <Car />
  <Car />
  <Car />
  
  <div class="body">
        <div class="banner">
        <div class="ellipse"></div>
        <div class="glove">
            <img src="../assets/img/car1.png" alt="Боксерская перчатка">
        </div>
        <div class="text">
            <h2>ВЫгодный Trade-in <span>от 1,9%</span>По льготной ставке</h2>
           <p class="ppp" >Обменяйте свой автомобиль на новый с максимальной скидкой</p>
           <form>
                <input type="text" placeholder="Ваш телефон">
                <button>ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</button>
            </form>
        </div>
    </div>
    </div>
    <Car />
    <Car />
    <Car />
    <Car2 />
    <Group4210 />
    <Group637 />
    </div>
    <div class="body">
      <div class="container">
        <h1>Преимущества Toyota</h1>
        <div class="grid">
            <div class="card">
                <img src="../assets/img/Rectangle 438 (1).png" alt="Автомобиль">
                <div class="info">
                    <span class="number">01</span>
                    <p class="title">Автомобиль для любых задач</p>
                    <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div class="card">
                <img src="../assets/img/Rectangle 115.png" alt="Стиль">
                <div class="info">
                    <span class="number">02</span>
                    <p class="title">Единый корпоративный стиль</p>
                    <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div class="card">
                <img src="../assets/img/Rectangle 170.png" alt="Технологии">
                <div class="info">
                    <span class="number">03</span>
                    <p class="title">Современные технологичные решения</p>
                    <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div class="card">
                <img src="../assets/img/Rectangle 450.png" alt="Запчасти">
                <div class="info">
                    <span class="number">04</span>
                    <p class="title">Надежные запчасти от производителя</p>
                    <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div class="card">
                <img src="../assets/img/Rectangle 451.png" alt="Доверие">
                <div class="info">
                    <span class="number">05</span>
                    <p class="title">Заслуживает доверия</p>
                    <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div class="card">
                <img src="../assets/img/Rectangle 452.png" alt="Качество">
                <div class="info">
                    <span class="number">06</span>
                    <p class="title">Качество, проверенное временем</p>
                    <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    </div>
   
    <Bank />
    <Rectangle84 />
    <Rectangle444 />
    <Feedback />
    <Group4246 />
    <Lorem />
    <Footer />

 
  </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import car1 from "@/assets/img/car1.png";
import car2 from "@/assets/img/car2.png";
import car3 from "@/assets/img/car3.png";
import Header from "../components/Header/Header.vue";
import Group3971 from "@/components/Group3971/Group3971.vue";
import Group4210 from "@/components/Group4210/Group4210.vue";
import Group637 from "@/components/Group637/Group637.vue";
import Bank from "../components/Bank/Bank.vue";
import Rectangle84 from "../components/Rectangle84/Rectangle84.vue";
import Rectangle444 from "../components/Rectangle444/Rectangle444.vue";
import Feedback from "../components/Feedback/Feedback.vue";
import Group4246 from "../components/Group4246/Group4246.vue";
import Footer from "../components/Footer/Footer.vue";
import Lorem from "@/components/Lorem/Lorem.vue";
import Car from "@/components/Car/Car.vue";
import Car2 from "@/components/Car2/Car2.vue";
const slides = ref([
  { image: car1 },
  { image: car2 },
  { image: car3 },
]);

</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
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

.text h2 span {
    font-size: 45px;
    font-weight: 900;
}

.text .ppp {
    font-size: 13px;
    font-weight: 200;
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
  padding: 10px 12.4px;
  font-size: 20px;
  border-radius: 50px;
}

h1 {
  font-size: 50px;
  font-weight: bold;
}

p {
  font-size: 20px;
  margin-top: 5px;
  font-weight: 900;
  
}

.pp {
    font-size: 10px;
    font-weight: 400;
}

h2{
    font-size: 28px;
    font-weight: 900;
    padding-left: 5px;
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


/* banner-beat */


.banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #111;
    color: white;
    padding: 20px;
    border-radius: 10px;
    max-width: 1000px;
    margin: 20px auto;
    position: relative;
    overflow: hidden;
    height: 250px;
}

.banner .text {
    margin-left: 300px;
}

.banner .text h2 {
    font-size: 20px;
    font-weight: bold;
    color: white;
    margin-top: 100px;
    margin-right: 10px;
}

.banner p {
    color: white;
    font-size: 16px;
}

form {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

form input {
    padding: 10px;
    border-radius: 5px;
    border: none;
    flex: 1;
    width: 200px;
}

form button {
    background: red;
    color: white;
    border: none;
    padding: 20px 50px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
      color: red;
      background-color: #fff;
    }
}
.glove {
    max-width: 40%;
    img {
        margin-left: -20px;
    }
}

.glove img {
    max-width: 100%;
    border-radius: 10px;
}

.ellipse {
    position: absolute;
    width: 881px;
    height: 134px;
    top: 100px;
    left: -127px;
    background: #CA0100;
    filter: blur(199px);
    border-radius: 50%;
}

/* Group 4213 */

        .body {
            font-family: Arial, sans-serif;
            background-color: #f8f8f8;
            margin: 0;
            /* padding: 40px; */
        }
        .container {
            max-width: 1200px;
            margin: auto;
        }
        h1 {
            font-size: 28px;
            margin-bottom: 20px;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }
        .card {
            background: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            padding: 15px;
        }
        .card img {
            width: 100%;
            border-radius: 10px;
        }
        .info {
            padding: 15px 0;
        }
        .number {
            background: red;
            color: white;
            display: inline-block;
            padding: 5px 10px;
            border-radius: 50px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .title {
            font-weight: bold;
            font-size: 16px;
        }
        .desc {
            font-size: 14px;
            color: gray;
        }
</style>