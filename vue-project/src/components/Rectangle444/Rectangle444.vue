<template >
    <div class="body">
        
    <div class="container">
        <div class="card">
            <div class="left">
                <div class="logo">
                    <img src="../Rectangle444/img/yandex-maps-logo 1.png" alt="Yandex">
                </div>
                <div class="recommend">
                    Рекомендуют 90%
                    <div class="stars">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star gray-star">★</span>
                    </div>
                </div>
            </div>
            <div class="rating">4.5</div>
        </div>

        <div class="card">
            <div class="left">
                <div class="logo">
                    <img src="../Rectangle444/img/Google_Maps_Logo 2.png" alt="Google Maps">          
                </div>
         <div class="aaa">
                <div class="recommend">
                    Рекомендуют 90%
                    <div class="stars">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star gray-star">★</span>
                    </div>
                </div>
            </div>
            </div>
            <div class="rating">4.1</div>
        </div>
    </div>

    </div>
</template>
<script>
export default {
    
}
</script>


<style scoped>
.aaa {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  
}
.body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
}
.container {
    display: flex;
    gap: 16px;
}
.card {
    background-color: #EFF0F0;
    padding: 20px;
    border-radius: 12px;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
    width: 500px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.left {
    display: flex;
    /* flex-direction: column; */
    gap: 50px;
}
.logo {
    display: flex;
    align-items: center;
    gap: 6px;
}
.logo img {
    width: 150px;
    height: 40px;
}
.title {
    font-size: 18px;
    font-weight: bold;
    color: #000;
}
.subtitle {
    font-size: 14px;
    color: #999;
}
.recommend {
    font-size: 14px;
    color: #000;
    margin-top: 12px;
}
.stars {
    display: flex;
    margin-top: 4px;
}
.star {
    color: #FFC107;
    font-size: 16px;
}
.gray-star {
    color: #ddd;
}
.rating {
    background: #4CAF50;
    color: white;
    font-size: 14px;
    font-weight: bold;
    padding: 6px 10px;
    border-radius: 6px;
}
</style>