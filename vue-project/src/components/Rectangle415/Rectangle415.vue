<template>
    <div class="container">
        <div class="left">
            <h2>Заявка на автокредит</h2>
            <select v-model="selectedBrand">
                <option disabled value="">Марка</option>
                <option v-for="brand in brands" :key="brand" :value="brand">{{ brand }}</option>
            </select>
            <select v-model="selectedModel">
                <option disabled value="">Модель</option>
                <option v-for="model in models" :key="model" :value="model">{{ model }}</option>
            </select>
            <!-- Rasm faqat bitta bo'ladi -->
            <div class="car-image" ><img src="../Rectangle415/img/Urus.webp" alt="photo"></div>
            <div class="slider-container">
                <p class="slider-label">Сумма кредита, руб:</p>
                <input type="range" min="0" max="3000000" step="50000" v-model="creditAmount">
            </div>
            <div class="slider-container">
                <p class="slider-label">Срок кредита, мес:</p>
                <input type="range" min="0" max="100" step="0" v-model="creditTerm">
            </div>
        </div>
        <div class="right">
            <h3>Получить выгоду <span class="discount">300 000 ₽</span></h3>
            <input type="text" placeholder="Ваше имя" v-model="userName">
            <input type="tel" placeholder="Ваш телефон" v-model="userPhone">
            <button class="btn" @click="submitForm">ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</button>
            <p style="font-size: 12px; color: gray;">Нажимая кнопку "Получить скидку" Вы даете согласие на обработку своих персональных данных</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            brands: ["Toyota", "BMW", "Lamborghini Urus"],
            models: ["Camry", "X5", "Urus Mansory"], // Endi doimiy modellar bor
            selectedBrand: "",
            selectedModel: "",
            creditAmount: 15000000,
            creditTerm: 30,
            userName: "",
            userPhone: ""
        };
    },
};
</script>

<style scoped>
.container {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 900px;
    
    /* Markazga joylash uchun qo‘shildi */
    display: flex;
    justify-content: space-between;
    gap: 20px;
    
    /* Ekran markazida joylash */
    margin: 50px auto; /* Yuqori va pastdan 50px bo‘sh joy, yonlardan avtomatik markazlash */
    display: flex;
    justify-content: center;
    align-items: center;
}

.left {
    width: 60%;
}
.right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    width: 40%;
    height: 600px;
    background: #fff;
    padding: 20px;
    text-align: center;
}
select, input {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}
.btn {
    width: 100%;
    background: red;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
}
.btn:hover {
    background: darkred;
}
.discount {
    font-size: 24px;
    font-weight: bold;
    color: red;
}

/* Rasm blokini to'g'irlash */
.car-image {
    width: 100%;
    height: 300px; /* Rasm balandligini belgilash */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 20px; /* Rasm va slider orasidagi masofa */
}

.car-image img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Rasmni chiroyli joylashtirish */
    border-radius: 10px;
}

/* Slider ustiga chiqib ketmasligi uchun */
.slider-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px; /* Rasm bilan oraliq qo'shildi */
}

</style>
