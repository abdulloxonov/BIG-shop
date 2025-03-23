<template>
    <div class="body">
        <div class="card3">
        <h1>Автомобили в наличии c ПТС</h1>
        <div class="carrr">
      <div v-for="(car, index) in cars" :key="index" class="card">
        <div class="title">{{ car.title }}</div>
        <div class="offer-p">
          <div class="offer">
            <h3>Предложение дня</h3>
          </div>
          <p class="span1">Выгода <br> до {{ car.discount }} ₽</p>
        </div>
        <div class="content">    
          <div class="gifts">
            <div class="gift-item" v-for="(gift, i) in car.gifts" :key="i">
              <div class="div-svg">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.9375 7.7002V13.3252C0.9375 13.8427 1.35844 14.2627 1.875 14.2627H6.5625V7.7002H0.9375Z" fill="white"/>
<path d="M14.0625 3.95046H11.0963C11.3091 3.80515 11.4919 3.66077 11.6194 3.5314C12.3759 2.77108 12.3759 1.53358 11.6194 0.773272C10.8844 0.0326467 9.60375 0.0345217 8.86969 0.773272C8.46281 1.18108 7.38469 2.8414 7.53375 3.95046H7.46625C7.61438 2.8414 6.53625 1.18108 6.13031 0.773272C5.39531 0.0345217 4.11469 0.0345217 3.38063 0.773272C2.625 1.53358 2.625 2.77108 3.37969 3.5314C3.50813 3.66077 3.69094 3.80515 3.90375 3.95046H0.9375C0.420938 3.95046 0 4.3714 0 4.88796V6.29421C0 6.55296 0.21 6.76296 0.46875 6.76296H6.5625V4.88796H8.4375V6.76296H14.5312C14.79 6.76296 15 6.55296 15 6.29421V4.88796C15 4.3714 14.58 3.95046 14.0625 3.95046ZM6.50719 3.91952C6.50719 3.91952 6.46781 3.95046 6.33375 3.95046C5.68594 3.95046 4.44938 3.27733 4.04531 2.87046C3.6525 2.47483 3.6525 1.82983 4.04531 1.43421C4.23563 1.24296 4.48781 1.13796 4.75594 1.13796C5.02313 1.13796 5.27531 1.24296 5.46562 1.43421C6.0975 2.06983 6.72563 3.69358 6.50719 3.91952ZM8.66531 3.95046C8.53219 3.95046 8.49281 3.92046 8.49281 3.91952C8.27437 3.69358 8.9025 2.06983 9.53438 1.43421C9.91219 1.05265 10.5731 1.05077 10.9547 1.43421C11.3484 1.82983 11.3484 2.47483 10.9547 2.87046C10.5506 3.27733 9.31406 3.95046 8.66531 3.95046Z" fill="white"/>
<path d="M8.4375 7.7002V14.2627H13.125C13.6425 14.2627 14.0625 13.8427 14.0625 13.3252V7.7002H8.4375Z" fill="white"/>
</svg>

              </div>
              <h3>{{ gift.title }} <p>{{ gift.description }}</p></h3>
            </div>
          </div>
          <img src="../Group/img/car.png" alt="Car Image">
        </div>
        <div class="price">Narx: {{ car.price }} ₽</div>
        <div class="specs">
            <span>
                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.2083 4.79999H16.9584C16.6076 4.79999 16.2988 5.03357 16.1991 5.37279L15.4296 7.99993H15.3441L15.0021 6.95038C14.8945 6.62158 14.592 6.39999 14.25 6.39999H12.6666V5.59997C12.6666 5.15837 12.3128 4.79999 11.875 4.79999H10.2916V4H11.0833C11.5211 4 11.875 3.64162 11.875 3.20002V0.799986C11.875 0.358386 11.5211 0 11.0833 0H4.75C4.31222 0 3.95835 0.358386 3.95835 0.799986V3.19998C3.95835 3.64158 4.31222 3.99996 4.75 3.99996H5.54166V4.79995H3.16666C2.72888 4.79999 2.375 5.15837 2.375 5.59997V8.79993H1.58335V7.99993C1.58335 7.5584 1.22947 7.19998 0.791691 7.19998C0.353875 7.19998 0 7.5584 0 7.99993V11.1999C0 11.6415 0.353875 11.9999 0.791655 11.9999C1.22943 11.9999 1.58331 11.6415 1.58331 11.1999V10.3999H2.375V11.9999C2.375 12.1183 2.40113 12.2351 2.45178 12.3424L3.57675 14.7424C3.70737 15.0215 3.98525 15.2 4.29163 15.2H13.8336C14.1131 15.2 14.372 15.0504 14.5145 14.808L15.223 13.6H15.4826L16.2212 15.4936C16.3416 15.7992 16.6337 16 16.9583 16H18.2083C18.6461 16 19 15.6416 19 15.2V5.59997C19 5.15837 18.6461 4.79999 18.2083 4.79999Z" fill="#262626"/>
</svg>
            115 l.s.</span>
            <span>
                <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.248 4.465L16.2634 4.44917L12.4255 0.527794L11.3334 1.64667L13.5073 3.87388C12.5389 4.25388 11.8485 5.20917 11.8485 6.33333C11.8485 7.79 13.0024 8.97223 14.4243 8.97223C14.79 8.97223 15.1403 8.89304 15.4546 8.75054V16.3611C15.4546 16.9417 14.9909 17.4167 14.4243 17.4167C13.8576 17.4167 13.394 16.9417 13.394 16.3612V11.6112C13.394 10.4447 12.4719 9.5 11.3334 9.5H10.3031V2.11112C10.303 0.944706 9.38091 0 8.24247 0H2.06063C0.922108 0 0 0.944706 0 2.11112V19H10.303V11.0833H11.8485V16.3612C11.8485 17.8178 13.0024 19 14.4243 19C15.846 19 17 17.8178 17 16.3612V6.33333C17.0001 5.605 16.7116 4.94529 16.248 4.465ZM8.24247 7.38888H2.06063V2.11112H8.24247V7.38888ZM14.4243 7.38888C13.8576 7.38888 13.394 6.91388 13.394 6.33333C13.394 5.75279 13.8576 5.27779 14.4243 5.27779C14.9909 5.27779 15.4546 5.75279 15.4546 6.33333C15.4546 6.91388 14.9909 7.38888 14.4243 7.38888Z" fill="#262626"/>
</svg>
           5.3 l/km</span>
            <span>
                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5292 7.22209C10.3541 7.19564 10.1783 7.1775 10.0029 7.1775C8.85126 7.1775 7.70039 7.67134 7.08291 8.68418C6.16249 10.1945 6.73916 12.1978 8.33329 13.0694C8.85831 13.3567 9.43457 13.421 9.99996 13.421C11.1516 13.421 12.2995 12.855 12.9167 11.8421C13.6133 10.699 13.4379 9.38721 12.6354 8.40355L13.75 4.3421L10.5292 7.22209ZM11.4429 11.1245C11.1462 11.6116 10.595 11.8421 9.99996 11.8421C9.70626 11.8421 9.42414 11.8429 9.16706 11.702C8.37122 11.267 8.09788 10.2995 8.55704 9.54593C8.85378 9.05884 9.40794 8.75605 10.0033 8.75605C10.2966 8.75605 10.5758 8.8275 10.8329 8.96802C11.6287 9.40343 11.902 10.3705 11.4429 11.1245ZM9.99996 0C4.47708 0 0 4.51302 0 9.86843C0 11.8263 0.600416 13.4759 1.62958 15H5.83333V13.421H2.49999C1.89708 12.2846 1.66667 11.1596 1.66667 9.86843C1.66667 5.41263 5.405 1.57895 9.99996 1.57895C14.595 1.57895 18.3333 5.41263 18.3333 9.86843C18.3333 11.1596 18.1029 12.2846 17.5 13.421H14.1666V15H18.3333C19.3625 13.4759 20 11.8263 20 9.86843C20 4.51302 15.5229 0 9.99996 0Z" fill="#262626"/>
</svg>
                189 km/soat</span>
            <span>
                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.84766 0V1.66838H7.51603V2.50255C8.09995 2.41914 8.60046 2.41914 9.18441 2.50255V1.66838H10.8528V0H5.84766Z" fill="#262626"/>
<path d="M14.0209 5.50567L14.6048 4.92176L15.2722 5.58912L16.4401 4.42125L13.9375 1.9187L12.7696 3.08657L13.437 3.75389L12.6862 4.50465C8.68216 2.08551 3.51022 3.33678 1.17453 7.34086C-1.16117 11.3449 0.0900633 16.35 4.01073 18.7692C7.9314 21.1883 13.1033 19.937 15.439 15.933C17.5245 12.5128 16.9406 8.17507 14.0209 5.50567ZM8.34846 17.4345C5.09516 17.4345 2.5092 14.8485 2.5092 11.5952C2.5092 8.34192 5.09516 5.75593 8.34846 5.75593V11.5952H14.1877C14.1878 14.8485 11.6018 17.4345 8.34846 17.4345Z" fill="#262626"/>
</svg>
                10.3 s</span>
        </div>
        <div class="buttons">
            <div class="btn btn-white">Резерв онлайн</div>
            <div class="btn btn-red">Купить</div>
            <div class="btn btn-gray">Подробнее</div>
        </div>
      </div>
    </div>
      <button class="btn-big" >Показать  еще</button>
    </div>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      cars: [
        {
          title: "Skoda Octavia 1.6 MPI MT ",
          discount: "300 000",
          price: "1 615 000",
          gifts: [
            { title: "Оборудование", description: "в подарок" },
            { title: "KACKO", description: "в подарок" },
            { title: "Комплект резины", description: "в подарок" },
          ],
        },
        {
          title: "Toyota Camry 2.5 AT Comfort",
          discount: "400 000",
          image: "../Group/img/car2.png",
          price: "2 100 000",
          horsepower: 181,
          gifts: [
            { title: "Оборудование", description: "в подарок" },
            { title: "KACKO", description: "в подарок" },
            { title: "Комплект резины", description: "в подарок" },
          ],
        },
        {
          title: "Hyundai Solaris 1.6 AT",
          discount: "250 000",
          image: "../Group/img/car3.png",
          price: "1 350 000",
          horsepower: 123,
          gifts: [
            { title: "Оборудование", description: "в подарок" },
            { title: "KACKO", description: "в подарок" },
            { title: "Комплект резины", description: "в подарок" },
          ],
        },
        {
          title: "Kia Rio X 1.6 AT Luxe",
          discount: "280 000",
          image: "../Group/img/car4.png",
          price: "1 450 000",
          horsepower: 123,
          gifts: [
            { title: "Оборудование", description: "в подарок" },
            { title: "KACKO", description: "в подарок" },
            { title: "Комплект резины", description: "в подарок" },
          ],
        },
        {
          title: "Volkswagen Polo 1.4 TSI DSG",
          discount: "350 000",
          image: "../Group/img/car5.png",
          price: "1 800 000",
          horsepower: 150,
          gifts: [
            { title: "Оборудование", description: "в подарок" },
            { title: "KACKO", description: "в подарок" },
            { title: "Комплект резины", description: "в подарок" },
          ],
        },
        {
          title: "Renault Duster 2.0 4x4 MT",
          discount: "320 000",
          image: "../Group/img/car6.png",
          price: "1 600 000",
          horsepower: 143,
          gifts: [
            { title: "Оборудование", description: "в подарок" },
            { title: "KACKO", description: "в подарок" },
            { title: "Комплект резины", description: "в подарок" },
          ],
        },
      ],
    };
  },
};
</script>



<style scoped>
.body {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px; 
  justify-items: center;
  margin-top: 100px;
}
.carrr {

  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 ustun */
  gap: 20px; 
  margin-left: 70px;
  margin-top: 100px;
  margin-bottom: 100px;
}

.btn-big {
    width: 300px;
    height: 50px;
    margin-bottom: 50px;
    border: none;
    color: #fff;
    background-color: #CA0100;
    border-radius: 6px;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #fff;
        color: #CA0100;
        font-size: 17px;
        font-weight: 800;
        transform: scale(1.03);
    box-shadow: 0 4px 10px rgba(115, 115, 115, 0.5);


    }
}
.card3 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
   align-items: center;

}
.card {
  width: 100%;
  max-width: 450px; 
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fff;
}

.card {
    background: white;
    width: 446px;
    height: 449px;
    border-radius: 15px;
    box-shadow: 0px 0px 30px 0px #85939F4D;
    padding: 25px;
    position: relative;
    &:hover {
      transform: scale(1.03);
      transition: all 0.5s;
    }

}
.span1 {
    font-size: 15px;
    color: red;
}
.title {
    font-size: 27px;
    font-weight: 700;
    color: #262626;
    padding: 10px;
    border-radius: 5px;
}
.offer-p {
    display: flex;
    gap: 25px;
}
.offer {
    background-color: #CA0100;
    color: white;
    padding: 8px 12px;
    gap: 10px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 10px;
   width: 150px;
   transition: all 0.3s ease-in-out;
   &:hover{
    color: #CA0100;
    background-color: #fff;
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(115, 115, 115, 0.5);
   }
}
.content {
    display: flex;
    align-items: center;
    gap: 10px;
    background-image: url(../Group/img/10592.jpg);
    background-size: cover;
    background-position: center;
}
img {
    width: 273px;
    height: 152px;
    display: block; 
    margin-left: -40px;
    padding-top: 10px;
}
.gifts {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.gift-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 400;
   
    .div-svg {
        background-color: black;
        padding: 15px;
        border-radius: 50px;
        display: flex;

    }
svg {
    width: 15px;
    height: 15px;
}
h3 {
    color: #262626;
}
p{
    color:#CA0100;
}
    h3 , p {
        font-size: 13px;
        font-weight: 400;
    }
}
.price {
    font-size: 22px;
    font-weight: 700;
    color: #262626;
    padding: 5px;
    border-radius: 5px;
    margin-top: 10px;
}
.specs {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #262626;
  
    

    margin-top: 10px;
    span {
        display: flex;
        align-items: center;
        gap:5px;
         border: 1px solid #C2C2C4;
         padding: 5px 10px;
         border-radius: 50px;
    }
}
.buttons {
    display: flex;
    justify-content: space-between;
    gap: 5px;
    margin-top: 15px;
}

.btn {
    width: 132px;
    height: 29px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 25px 10px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* Qizil tugma */
.btn-white {
    background-color: #CA0100;
    color: white;
}

.btn-white:hover {
    background-color: #a00000;
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(202, 1, 0, 0.5);
}

/* Qora tugma */
.btn-red {
    background-color: #262626;
    color: white;
}

.btn-red:hover {
    background-color: #1a1a1a;
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(38, 38, 38, 0.5);
}

/* Kulrang tugma */
.btn-gray {
    background-color: #737373;
    color: white;
}

.btn-gray:hover {
    background-color: #5e5e5e;
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(115, 115, 115, 0.5);
}



</style> 