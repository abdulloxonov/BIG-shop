<template>
  <div class="cars">
    <div class="car-filter-container">
      <div class="brands-filter-wrapper">
        <div class="brands-list">
          <div v-for="(brand, index) in brands" :key="brand.name" class="brand-item" :style="{ gridColumn: (index % 5) + 1, gridRow: Math.floor(index / 5) + 1 }">
            <img :src="brand.logo" :alt="brand.name" />
            <span>{{ brand.name }}</span>
          </div>
        </div>
      </div>
      
      <div class="filter-section">
        <h3>Быстрый подбор авто</h3>
        <label>Цена</label>
        <div class="price-range-wrapper">
          <input type="range" min="0" max="10000000" v-model="price" class="price-range" />
          <div class="price-value">{{ formattedPrice }}</div>
        </div>
        <div class="filter-controls">
          <select v-model="selectedBodyType">
            <option disabled value="">Тип кузова</option>
            <option v-for="body in bodyTypes" :key="body">{{ body }}</option>
          </select>
          <select v-model="selectedTransmission">
            <option disabled value="">Коробка</option>
            <option v-for="trans in transmissions" :key="trans">{{ trans }}</option>
          </select>
        </div>
        <button class="filter-btn">ПОКАЗАТЬ 73</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import kia from '../Rectangle205/img/kia.png';
import brilliance from '../Rectangle205/img/brilliance.png';
import citroen from '../Rectangle205/img/citroen.png';
import ford from '../Rectangle205/img/ford.png';
import haima from '../Rectangle205/img/haima.png';
import lifan from '../Rectangle205/img/lifan.png';
import peugeot from '../Rectangle205/img/peugeot.png';
import uaz from '../Rectangle205/img/uaz.png';
import hyundai from '../Rectangle205/img/hyundai.png';
import changan from '../Rectangle205/img/changan.png';
import datsun from '../Rectangle205/img/datsun.png';
import foton from '../Rectangle205/img/foton.png';
import haval from '../Rectangle205/img/haval.png';
import mazda from '../Rectangle205/img/mazda.png';
import ravon from '../Rectangle205/img/ravon.png';
import zotye from '../Rectangle205/img/zotye.png';
import skoda from '../Rectangle205/img/skoda.png';
import chery from '../Rectangle205/img/chery.png';
import dongfeng from '../Rectangle205/img/dongfeng.png';
import gac from '../Rectangle205/img/gac.png';
import honda from '../Rectangle205/img/honda.png';
import mitsubishi from '../Rectangle205/img/mitsubishi.png';
import renault from '../Rectangle205/img/renault.png';
import volkswagen from '../Rectangle205/img/volkswagen.png';
import cheryexeed from '../Rectangle205/img/cheryexeed.png';
import dw from '../Rectangle205/img/dw.png';
import geely from '../Rectangle205/img/geely.png';
import jac from '../Rectangle205/img/jac.png';
import nissan from '../Rectangle205/img/nissan.png';
import ssangyong from '../Rectangle205/img/ssangyong.png';
import toyota from '../Rectangle205/img/toyota.png';
import chevrolet from '../Rectangle205/img/chevrolet.png';
import faw from '../Rectangle205/img/faw.png';
import greatwall from '../Rectangle205/img/greatwall.png';
import lada from '../Rectangle205/img/lada.png';
import opel from '../Rectangle205/img/opel.png';
import suzuki from '../Rectangle205/img/suzuki.png';
import Lamborghini  from '../Rectangle205/img/Lamborghini.svg';
import li9 from "../Rectangle205/img/li9.png";
import bmw from "../Rectangle205/img/bmw.webp";


const brands = ref([
{ name: "Kia", logo: kia },
{ name: "Brilliance", logo: brilliance },
{ name: "Citroen", logo: citroen },
{ name: "Ford", logo: ford },
{ name: "Haima", logo: haima },
{ name: "Lifan", logo: lifan },
{ name: "Peugeot", logo: peugeot },
{ name: "UAZ", logo: uaz },
{ name: "Hyundai", logo: hyundai },
{ name: "Changan", logo: changan },
{ name: "Datsun", logo: datsun },
{ name: "Foton", logo: foton },
{ name: "Haval", logo: haval },
{ name: "Mazda", logo: mazda },
{ name: "Ravon", logo: ravon },
{ name: "Zotye", logo: zotye },
{ name: "Skoda", logo: skoda },
{ name: "Chery", logo: chery },
{ name: "Dongfeng", logo: dongfeng },
{ name: "GAC", logo: gac },
{ name: "Honda", logo: honda },
{ name: "Mitsubishi", logo: mitsubishi },
{ name: "Renault", logo: renault },
{ name: "Volkswagen", logo: volkswagen },
{ name: "CheryExeed", logo: cheryexeed },
{ name: "DW", logo: dw },
{ name: "Geely", logo: geely },
{ name: "JAC", logo: jac },
{ name: "Nissan", logo: nissan },
{ name: "SsangYong", logo: ssangyong },
{ name: "Toyota", logo: toyota },
{ name: "Chevrolet", logo: chevrolet },
{ name: "FAW", logo: faw },
{ name: "Great Wall", logo: greatwall },
{ name: "Lada", logo: lada },
{ name: "Opel", logo: opel },
{ name: "Suzuki", logo: suzuki },
{name: " Lamborghini " , logo: Lamborghini },
{name:"LI 9", logo:li9},
{name:"BMW", logo:bmw}

]); 

const price = ref(0);
const formattedPrice = computed(() => `${parseInt(price.value || 0).toLocaleString("ru-RU")} UZS`);
const selectedBodyType = ref("");
const selectedTransmission = ref("");
const bodyTypes = ref(["Седан", "Хэтчбек", "Внедорожник", "Купе", "Минивэн"]);
const transmissions = ref(["Механика", "Автомат", "Вариатор", "Робот"]);
</script>

<style scoped>
.cars {
  display: flex;
  justify-content: center;
  margin-top: 100px;

}
.brands-list {
  display: grid;
  grid-template-columns: repeat(5, 8fr);
  gap: 20px;
  
 
}
.brand-item {
  display: flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.brand-item:hover {
  transform: scale(1.05); /* Juda kichik kattalashish, deyarli sezilmaydi */
  filter: brightness(1.1); /* Biroz yorqinroq qilish */
}

.brand-item img {
  width: 40px; /* Logolar hozirgi o‘lchamda qoladi */
  height: auto;
  object-fit: contain;
  transition: filter 0.3s ease;
}

.brand-item:hover img {
  filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.2)); /* Yengil soya qo‘shish */
}

.brand-item span {
  font-weight: 600;
  font-size: 14px;
  color: #333;
}

.filter-section {
  display: flex;
  flex-direction: column;
  gap:20px;
  padding: 20px;
  max-width: 400px;
  text-align: center;
 
}

.car-filter-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 70%;
  border-radius:  20px;
  background-color: #EFF0F0;
  padding: 25px;

  
}

.brands-filter-wrapper {
  flex: 1;
  border-radius: 20px;
}

.filter-section {
  flex: 1;
}

h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #333;
}

label {
  font-size: 14px;
  color: #666;
  display: block;
  text-align: left;
  margin-bottom: 5px;
}

.price-range-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
}

.price-range {
  width: 100%;
  height: 6px;
  border-radius: 5px;
  background: #CA0100;
  outline: none;
  transition: 0.3s;
}

.price-range:hover {
  background: #CA0100;
}

.price-value {
  margin-top: 8px;
  font-size: 16px;
  color: #CA0100;
  font-weight: bold;
}

.filter-controls {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

select {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  background: #f9f9f9;
  transition: 0.3s;
}

select:focus {
  border-color: #CA0100;
  outline: none;
}

.filter-btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #CA0100;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.filter-btn:hover {
  background: #ac0101;
}


</style>
