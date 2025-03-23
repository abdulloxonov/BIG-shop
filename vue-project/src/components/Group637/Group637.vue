<template >
    <div class="body">
        <div class="offer-container">
        <div class="offer-text">
            <h1>Госпрограмма льготного автокредитования <span class="highlight">1,9%</span> ставка по кредиту</h1>
            <p class="discount">-10% </p>
            <p>от стоимости авто</p>
            <p>выгода по программе "Семейный автомобиль", "Первый автомобиль" и др.</p>
            <div class="input-box">
                <input type="text" placeholder="Ваше имя">
                <input type="text" placeholder="Ваш телефон">
            </div>
            <button class="btn">ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</button>
            <p class="privacy-text">Нажимая кнопку "Получить предложение", Вы соглашаетесь с политикой конфиденциальности</p>
        </div>
        <div class="offer-image">
            <img src="./img/stock-photo-laughing-fun-young-happy-parents-mom-mama-dad-papa-with-child-kid-daughter-teen-girl-in-white-1938829744 1@2x.png" alt="Семья и автомобиль">
        </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */
    /* background-color: #f8f8f8; */
    margin: 0;
}
.offer-container {
    background: white;
    padding: 30px;
    margin: 20px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* max-width: 900px; */
    width: 100%;
    /* box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); */
    background-image: url(./img/10881.png);
}
.offer-text {
    max-width: 50%;
}
.offer-text h1 {
    font-size: 26px;
    margin: 0 0 10px;
}
.highlight {
    color: red;
    font-size: 22px;
    font-weight: bold;
}
.discount {
    font-size: 32px;
    font-weight: bold;
    color: red;
}
.input-box {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}
.input-box input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    width: 100%;
}
.btn {
    background: red;
    color: white;
    border: none;
    padding: 12px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 25px;
    width: 100%;
}
.offer-image img {
    width: 350px;
    height: 333px;
    border-radius: 10px;
}
.privacy-text {
    font-size: 12px;
    color: gray;
    margin-top: 10px;
}
</style>