<template>
    <div class="body">
        <div class="banner">
        <div class="ellipse"></div>
        <div class="glove">
            <img src="../Banner-beat/img/pngwing 3.png" alt="Боксерская перчатка">
        </div>
        <div class="text">
            <h2>ПЕРЕБЬЕМ ПРЕДЛОЖЕНИЯ OT KOHKYPEHTOB!</h2>
            <p>Скидки <span style="color: red;">от 10 до 25%</span> на стоимость автомобиля</p>
           <form>
                <input type="text" placeholder="Ваш телефон">
                <button>ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</button>
            </form>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
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
    max-width: 50%;
    margin-right: 60px;
}

.banner h2 {
    font-size: 20px;
    font-weight: bold;
    color: white;
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
    top: 94.09px;
    left: -127px;
    background: #CA0100;
    filter: blur(199px);
    border-radius: 50%;
}
</style>