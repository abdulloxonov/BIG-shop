<template >
    <div class="body">
        <div class="container">
        <div class="card">
            <div class="video">
                <img src=".//img/Group 673 (1).png" alt="photo">
            </div>
            <div class="content">
                <div class="name">Сергей Васильев</div>
                <div class="text">
                    «Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, добрые люди, приветствуют, 
                    это не обман, вам гарантия 100 % точно, чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA...»
                </div>
                <div class="button">Подробнее <span class="arrow">▼</span></div>
            </div>
        </div>

        <div class="card">
            <div class="video">
                <img src=".//img/Group 673 (1).png" alt="photo">
            </div>
            <div class="content">
                <div class="name">Сергей Васильев</div>
                <div class="text">
                    «Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, добрые люди, приветствуют, 
                    это не обман, вам гарантия 100 % точно, чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA...»
                </div>
                <div class="button">Подробнее <span class="arrow">▼</span></div>
            </div>
        </div>

        <div class="card">
            <div class="video">
                <img src=".//img/Group 673 (1).png" alt="photo">
            </div>
            <div class="content">
                <div class="name">Сергей Васильев</div>
                <div class="text">
                    «Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, добрые люди, приветствуют, 
                    это не обман, вам гарантия 100 % точно, чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA...»
                </div>
                <div class="button">Подробнее <span class="arrow">▼</span></div>
            </div>
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
   
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}
.container {
    width: 90%;
    max-width: 1100px;
    display: flex;
    gap: 30px;
    justify-content: center;
}
.card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 320px;
}
.video {
    background: #222;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
  img {
    width: 110px;
  }

}

.content {
    padding: 16px;
}
.name {
    font-weight: bold;
    font-size: 16px;
}
.text {
    font-size: 14px;
    color: #555;
    margin: 10px 0;
    line-height: 1.4;
}
.button {
    background: #000;
    color: white;
    padding: 10px 16px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}
.button:hover {
    background: #333;
}
.arrow {
    margin-left: 6px;
    font-size: 12px;
}
</style>