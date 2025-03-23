<template>
    <div class="body">
    

        <header class="navbar">
    <!-- Yuqori qism -->
    <div class="navbar-top">
        <div class="navbar-left">
            <button class="menu-btn">☰</button>
            <img src="../Header/img/Group 673.png" alt="ABC AUTO" class="logo" />
            <div class="badge-container">
                <span class="badge">10 лет</span>
                <span class="subtext">превосходим ваши ожидания</span>
            </div>
        </div>

        <div class="navbar-center">
            <nav class="top-links">
                <router-link to="/">Home</router-link>
          <router-link to="/about">Подбор авто</router-link>
                <router-link to="/okompon">О компании</router-link>
                <a href="#">Техцентр</a>
                <a href="#">Отзывы</a>
                <a href="#">Контакты</a>
            </nav>
        </div>

        <div class="navbar-right">
            <div class="contact-info">
                <a href="tel:+78005519431" class="phone">📞 +7 (800) 551-94-31</a>
                <span class="subphone">+7 (495) 292-18-67</span>
            </div>
            <button class="callback-btn">ОБРАТНЫЙ 3BOHOK</button>
        </div>
    </div>

    <!-- Pastki qism -->
    <div class="navbar-bottom">
        <nav class="navbar-menu">
            <a href="#">Каталог авто </a>
            <a href="#">Авто c пробегом </a>
            <a href="#">Кредит и рассрочка </a>
            <a href="#">Спецпредложения </a>
            <a href="#">Такси в кредит</a>
        </nav>

        <div class="icons">
            <span class="icon"><img src="./img/Vector 348.png" alt="photo"> <span class="count">10</span></span>
            <span class="icon"><img src="./img/Vector (6).png" alt="photo"> <span class="count">12</span></span>
            <span class="icon"><img src="./img/Vector (7).png" alt="photo"></span>
        </div>
    </div>
</header>


    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
.body {
    background-color: #fff;
}

.navbar {
    width: 100%;
    height: 100px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
  
}

/* Upper navbar */
.navbar-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    border-bottom: 1px solid #ddd;
}

.navbar-left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    

}

.menu-btn {
    font-size: 20px;
    background: none;
    border: none;
    cursor: pointer;
}

.logo {
    height: 50px;
    margin-left: 15px;
}

.badge-container {
    margin-left: 10px;
}

.badge {
    background-color: red;
    color: white;
    padding: 2px 5px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: bold;
    margin-right: 5px;
}

.subtext {
    font-size: 14px;
    color: #666;
}

.top-links a {
    text-decoration: none;
    color: #333;
    margin: 0 10px;
    font-size: 14px;
    transition: all 0.2s ;
    &:hover{
        color: #CA0100;
    }
}

.navbar-right {
    display: flex;
    align-items: center;
}

.contact-info {
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-right: 15px;
}

.phone {
    color: black;
    font-weight: bold;
    text-decoration: none;
}

.subphone {
    font-size: 12px;
    color: #666;
}

.callback-btn {
    background-color: red;
    color: white;
    border: none;
    padding: 15px 15px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 5px;
}

/* Bottom navbar */
.navbar-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    
  
}

.navbar-menu {
    display: flex;
    gap: 150px;
}

.navbar-menu a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 14px;
    position: relative;
}



.icons {
    display: flex;
    align-items: center;
    gap: 15px;
}

.icon {
    display: flex;
    align-items: center;
    font-size: 18px;
    cursor: pointer;
    position: relative;
}

.count {
    display: inline-block;
    background-color: red;
    color: white;
    font-size: 12px;
   padding: 2px 5px;
    border-radius: 50%;
    /* margin-top: -30px; */
   margin: -35px 20px -10px ;
    font-weight: bold;
    margin-left: 5px; /* Yoniga joylash uchun */
}

@media screen and (max-width: 768px) {
    .navbar-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 10px;
    }

    .navbar-left {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .menu-btn {
        font-size: 22px;
        background: none;
        border: none;
        cursor: pointer;
    }

    .logo {
        height: 35px;
    }

    .badge-container {
        display: none; /* Kichik ekranda badge yashiriladi */
    }

    .navbar-center {
        display: none; /* Menyuni yashirish */
    }

    .navbar-right {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .contact-info {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 14px;
    }

    .phone {
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
        color: black;
    }

    .callback-btn {
        background-color: transparent;
        color: red;
        font-size: 14px;
        border: none;
        cursor: pointer;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .callback-btn::before {
        content: "📞";
        font-size: 16px;
    }

    .navbar-bottom {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 5px 10px;
    }

    .navbar-menu {
        display: none; /* Asosiy menyu yashiriladi */
    }

    .icons {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .icon {
        position: relative;
        font-size: 20px;
        cursor: pointer;
    }

    .count {
        position: absolute;
        top: -5px;
        right: -8px;
        background-color: red;
        color: white;
        font-size: 12px;
        padding: 2px 5px;
        border-radius: 50%;
        font-weight: bold;
    }
}


  </style>
  