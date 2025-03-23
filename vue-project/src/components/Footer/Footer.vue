<template>
    <div class="footer">
      <div class="top-section">
        <div class="menu-item">Каталог авто</div>
        <div class="menu-item">Авто c пробегом</div>
        <div class="menu-item">Кредит и рассрочка</div>
        <div class="menu-item">Спецпредложения</div>
        <div class="menu-item">Такси в кредит</div>
      </div>
      <div class="middle-section">
        <div class="car-catalog">
          <h3>Каталог авто</h3>
          <div class="car-columns">
            <div class="column">
              <a href="#">Kia</a>
              <a href="#">Hyundai</a>
              <a href="#">Skoda</a>
              <a href="#">Volkswagen</a>
              <a href="#">Toyota</a>
              <a href="#">Brilliance</a>
            </div>
            <div class="column">
              <a href="#">Changan</a>
              <a href="#">Chery</a>
              <a href="#">Chevrolet</a>
              <a href="#">Citroen</a>
              <a href="#">Datsun</a>
            </div>
            <div class="column">
              <a href="#">Ford</a>
              <a href="#">Foton</a>
              <a href="#">Geely</a>
              <a href="#">Great Wall</a>
              <a href="#">Haval</a>
            </div>
          </div>
        </div>
        <div class="credit-info">
          <h3>Кредит и рассрочка</h3>
          <a href="#">Экспресс-кредит</a>
          <a href="#">Семейный автомобиль</a>
          <a href="#">Первый автомобиль</a>
          <a href="#">Работникам медицины</a>
          <a href="#">Рассрочка</a>
          <a href="#">Trade-in</a>
        </div>
        <div class="contact-info">
          <h3>Контакты</h3>
          <p>📞 +7 (800) 551-94-31</p>
          <p>📞 +7 (495) 292-18-67</p>
          <p>🕒 Ежедневно с 08:00 до 21:00</p>
          <p>📍 Россия, Москва, 38КМ МКАД, 6Бс1</p>
          <a href="#" class="red-link">Схема проезда</a>
        </div>
      </div>
      <div class="bottom-section">
        <p>© 2021 Автосалон "ABC AUTO". Официальный дилер</p>
      </div>
    </div>
  </template>
  
  <style>
  .footer {
    background-color: #191919;
    color: white;
    padding: 20px 100px;
    height: 500px;
   
  }
  .top-section {
    display: flex;
    justify-content: space-around;
    font-weight: bold;
    padding: 30px;
    gap: 20px;
  }
  .middle-section {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
  }
  .car-catalog, .credit-info, .contact-info {
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .car-columns {
    display: flex;
  }
  .column {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;

  }
  .car-catalog h3, .credit-info h3, .contact-info h3 {
    border-bottom: 2px solid red;
    display: inline-block;
    margin-bottom: 10px;
    width: 250px;

  }
  .car-catalog a, .credit-info a, .contact-info p {
    color: #bdbdbd;
    text-decoration: none;
    display: block;
  }
  .car-catalog a:hover, .credit-info a:hover {
    text-decoration: underline;
  }
  .red-link {
    color: red;
  }
  .bottom-section {
    text-align: center;
    font-size: 12px;
    color: #888;
    margin-top: 25px;
  }
  </style>
  