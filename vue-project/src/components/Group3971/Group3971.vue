<template>
    <div class="body">
        <div class="offer-box">
        <div>
            <p class="offer-text">Получите <br>
                 специальную цену</p>
            <span class="offer-badge">Только до 10.10.21</span>
        </div>
        <div class="input-box">
            <input type="text" placeholder="Ваше имя">
            <input type="text" placeholder="Ваш телефон">
        </div>
        <button class="btn">ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</button>
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
    /* background-color: #f8f8f8; */
    position: relative;
   top: 20px;
}
.offer-box {
    height: 160px;
    background: white;
    padding: 20px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    gap: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.offer-text {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
}
.offer-badge {
    background: red;
    color: white;
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 50px;
}
.input-box {
    display: flex;
    gap: 10px;
}
.input-box input {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
}
.btn {
    background: red;
    color: white;
    border: none;
    padding: 20px 15px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
        color: red;
        background-color: #fff;
        border:1px solid red;

    }
}
</style>