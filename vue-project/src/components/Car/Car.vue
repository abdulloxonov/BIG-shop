<template>
    <div style="margin: 20px auto;" class="container">
      <div class="card">
        <img class="logo" src="../Car/img/tradeins 7.png" alt="photo">
        <div class="div1">
            <h1>Новая Corolla</h1>
            <p class="stock">B наличии: <span class="red">20 авто</span></p>
            <span class="discount">-20%</span> <img src="../assets/Group 688.png" alt=""> Покупка в трейд-ин<br>
            <span class="discount">-10%</span> <img src="../assets/Group 688.png" alt=""> Кредит <br>
            <span class="discount">-10%</span> <img src="../assets/Group 688.png" alt=""> Распродажа
        </div>
        <div class="gifts">
          <p>Страхование<br> <strong>в подарок</strong></p>
          <p>КАСКО <br><strong>МАСБОК</strong></p>
          <p>Комплект резины  <br><strong>в подарок</strong></p>
        </div>
        <div class="actions">
            <p><strong>Выгода до 300 000 ₽</strong></p>
            <div class="price-container">
                <h2>от 980 000 ₽</h2>
                <p class="old-price">1.200 000 ₽</p>
            </div>
            <button class="btn primary">Купить со скидкой</button>
            <button class="btn secondary">Рассчитать кредит</button>
            <button class="btn info">Подробнее о модели</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .container {
    width: 100%;
    max-width: 1200px;
    margin:  auto;
    background: #ffffff;
    border: 1px solid #e1e1e1;
    border-radius: 25px;
    padding: 20px;
  }
  .card {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  .logo {
    width: 100%;
    max-width: 280px;
    height: auto;
  }
  strong {
    color: red;
  }
  .gifts, .actions {
    text-align: center;
    margin-top: 10px;
  }
  .price-container {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
  .old-price {
    font-size: 12px;
    text-decoration: line-through;
  }
  .btn {
    width: 130px;
    height: 50px;
    border-radius: 6px;
    border: none;
    color: #ffffff;
    cursor: pointer;
    margin: 5px;
  }
  .primary { background: #ca0100; }
  .secondary { background: #262626; }
  .info { background: #737373; }
  
  /* Responsiv dizayn */
  @media (max-width: 768px) {
    .card {
      flex-direction: column;
      align-items: center;
    }
    .logo {
      max-width: 200px;
    }
    .btn {
      width: 100%;
    }
  }
  </style>