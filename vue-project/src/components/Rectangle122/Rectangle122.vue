<template>
    <div class="body">
        
    <div class="container">
        <h2>O компании</h2>
        <p class="description">
            Мы располагаем огромной торговой площадкой более 5000 квадратных метров, y нас в наличии не менее 200 
            автомобилей как отечественного, так и иностранного производства. B штате автосалона «Альтера» работают 
            настоящие профессионалы, которые знают особенности каждого конкретного автомобиля.
        </p>
        
        <div class="video-container">
            <img src="../Rectangle122/img/Rectangle 122.png" alt="O компании">
            <div class="play-button"></div>
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
    text-align: center;
    background-color: #f5f5f5;
    padding: 40px 20px;
}
.container {
    max-width: 800px;
    margin: 0 auto;
}
h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
}
.description {
    font-size: 16px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 30px;
}
.video-container {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    border-radius: 12px;
    overflow: hidden;
}
.video-container img {
    width: 100%;
    display: block;
    border-radius: 12px;
}
.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.6);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.play-button::before {
    content: "▶";
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-left: 4px;
}
</style>