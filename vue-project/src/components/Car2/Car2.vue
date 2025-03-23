
<template>
    <div class="archive-models">
        <div class="header">
            <h2>Архивные модели</h2>
            <div class="navigation">
                <button class="nav-btn prev" @click="prevPage" :disabled="currentPage === 1">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="nav-btn next" @click="nextPage" :disabled="currentPage === totalPages">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>

        <div class="cards-grid">
            <div class="car-card" v-for="car in displayedCars" :key="car.id">
                <div class="car-image">
                   <img src="" alt="">
                    <span class="discount-badge">{{ car.discountBadge }}</span>
                </div>

                <div class="car-info">
                    <h3>{{ car.name }}</h3>

                    <div class="price-block">
                        <div class="discount-text">Выгода до {{ formatPrice(car.discount) }} ₽</div>
                        <div class="price">
                            от {{ formatPrice(car.price) }} ₽
                            <span class="old-price">{{ formatPrice(car.oldPrice) }} ₽</span>
                        </div>
                    </div>

                    <div class="discounts">
                        <div class="discount-item" v-for="(discount, idx) in car.discounts" :key="idx">
                            <i class="fas fa-check"></i>
                            <span class="amount">{{ discount.amount }}</span>
                            <span class="text">{{ discount.text }}</span>
                        </div>
                    </div>

                    <div class="gifts">
                        <div class="gift-item" v-for="(gift, idx) in car.gifts" :key="idx">
                            <i :class="gift.icon"></i>
                            <div class="gift-text">
                                {{ gift.title }}
                                <span class="gift-badge">в подарок</span>
                            </div>
                        </div>
                    </div>

                    <div class="actions">
                        <button class="btn-details" @click="showDetails(car)">
                            Подробнее
                        </button>
                        <button class="btn-book" @click="bookCar(car)">
                            Забронировать
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="pagination">
            <span>Страница {{ currentPage }} из {{ totalPages }}</span>
        </div>
    </div>
</template>


<script>

export default {
    
    data() {
        return {
            currentPage: 1,
            carsPerPage: 4,
            cars: [
                {
                    id: 1,
                    name: 'Toyota Prius',
                    image: Toyota1,
                    price: 980000,
                    oldPrice: 1280000,
                    discount: 300000,
                    discountBadge: 'G5',
                    discounts: [
                        { amount: '-20%', text: 'Покупка в трейд-ин' },
                        { amount: '-10%', text: 'Кредит' },
                        { amount: '-10%', text: 'Распродажа' }
                    ],
                    gifts: [
                        { icon: 'fas fa-shield-alt', title: 'Страхование' },
                        { icon: 'fas fa-car', title: 'КАСКО' },
                        { icon: 'fas fa-cog', title: 'Комплект резины' }
                    ]
                },
                {
                    id: 2,
                    name: 'Toyota Prius',
                    image: Toyota1,
                    price: 980000,
                    oldPrice: 1280000,
                    discount: 300000,
                    discountBadge: 'G5',
                    discounts: [
                        { amount: '-20%', text: 'Покупка в трейд-ин' },
                        { amount: '-10%', text: 'Кредит' },
                        { amount: '-10%', text: 'Распродажа' }
                    ],
                    gifts: [
                        { icon: 'fas fa-shield-alt', title: 'Страхование' },
                        { icon: 'fas fa-car', title: 'КАСКО' },
                        { icon: 'fas fa-cog', title: 'Комплект резины' }
                    ]
                },
                {
                    id: 3,
                    name: 'Toyota Prius',
                    image: Toyota1,
                    price: 980000,
                    oldPrice: 1280000,
                    discount: 300000,
                    discountBadge: 'G5',
                    discounts: [
                        { amount: '-20%', text: 'Покупка в трейд-ин' },
                        { amount: '-10%', text: 'Кредит' },
                        { amount: '-10%', text: 'Распродажа' }
                    ],
                    gifts: [
                        { icon: 'fas fa-shield-alt', title: 'Страхование' },
                        { icon: 'fas fa-car', title: 'КАСКО' },
                        { icon: 'fas fa-cog', title: 'Комплект резины' }
                    ]
                },
                {
                    id: 4,
                    name: 'Toyota Prius',
                    image: Toyota1,
                    price: 980000,
                    oldPrice: 1280000,
                    discount: 300000,
                    discountBadge: 'G5',
                    discounts: [
                        { amount: '-20%', text: 'Покупка в трейд-ин' },
                        { amount: '-10%', text: 'Кредит' },
                        { amount: '-10%', text: 'Распродажа' }
                    ],
                    gifts: [
                        { icon: 'fas fa-shield-alt', title: 'Страхование' },
                        { icon: 'fas fa-car', title: 'КАСКО' },
                        { icon: 'fas fa-cog', title: 'Комплект резины' }
                    ]
                },
                {
                    id:5 ,
                    name: 'Toyota Prius',
                    image: Toyota1,
                    price: 980000,
                    oldPrice: 1280000,
                    discount: 300000,
                    discountBadge: 'G5',
                    discounts: [
                        { amount: '-20%', text: 'Покупка в трейд-ин' },
                        { amount: '-10%', text: 'Кредит' },
                        { amount: '-10%', text: 'Распродажа' }
                    ],
                    gifts: [
                        { icon: 'fas fa-shield-alt', title: 'Страхование' },

{ icon: 'fas fa-car', title: 'КАСКО' },
                        { icon: 'fas fa-cog', title: 'Комплект резины' }
                    ]
                },
                {
                    id: 6,
                    name: 'Toyota Prius',
                    image: Toyota1,
                    price: 980000,
                    oldPrice: 1280000,
                    discount: 300000,
                    discountBadge: 'G5',
                    discounts: [
                        { amount: '-20%', text: 'Покупка в трейд-ин' },
                        { amount: '-10%', text: 'Кредит' },
                        { amount: '-10%', text: 'Распродажа' }
                    ],
                    gifts: [
                        { icon: 'fas fa-shield-alt', title: 'Страхование' },
                        { icon: 'fas fa-car', title: 'КАСКО' },
                        { icon: 'fas fa-cog', title: 'Комплект резины' }
                    ]
                }
            ]
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.cars.length / this.carsPerPage);
        },
        displayedCars() {
            const start = (this.currentPage - 1) * this.carsPerPage;
            const end = start + this.carsPerPage;
            return this.cars.slice(start, end);
        }
    },
    methods: {
        formatPrice(price) {
            return new Intl.NumberFormat('ru-RU').format(price);
        },
        showDetails(car) {
            this.$emit('show-details', car);
        },
        bookCar(car) {
            this.$emit('book-car', car);
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        }
    }
}
</script>

<style scoped>
/* @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'); */

.archive-models {
    max-width: 1440px;
    margin: 0 auto;
    padding: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

h2 {
    font-size: 32px;
    margin: 0;
    color: #333;
}

.navigation {
    display: flex;
    gap: 10px;
}

.nav-btn {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: #f5f5f5;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
}

.nav-btn:hover:not(:disabled) {
    background: #e5e5e5;
}

.nav-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.nav-btn.prev {
    background: white;
    border: 1px solid #ddd;
}

.nav-btn.next {
    background: #cc0000;
    color: white;
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.car-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(225, 225, 225, 1);
}

.car-image {
    position: relative;
    padding-top: 60%;
}

.car-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.discount-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #cc0000;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
}

.car-info {
    padding: 20px;
}

h3 {
    margin: 0 0 15px 0;
    font-size: 20px;
    color: #333;
}

.price-block {
    margin-bottom: 20px;
}

.discount-text {
    color: #cc0000;
    font-size: 14px;
    margin-bottom: 5px;
}

.price {
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 10px;
}

.old-price {
    font-size: 16px;
    color: #999;
    text-decoration: line-through;
    font-weight: normal;
}

.discounts {
    margin-bottom: 20px;
}

.discount-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 5px;
}

.discount-item i {
    color: #cc0000;
}

.discount-item .amount {
    color: #cc0000;
    font-weight: bold;
}

.gifts {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 20px;
}

.gift-item {
    display: flex;
    align-items: center;
    gap: 8px;
}

.gift-item i {
    color: #666;
}

.gift-text {
    font-size: 14px;
    display: flex;
    flex-direction: column;
}

.gift-badge {
    color: #cc0000;
    font-size: 12px;
}

.actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.btn-details,
.btn-book {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s;
}

.btn-details {
    background: #f5f5f5;
    color: #333;
}

.btn-details:hover {
    background: #e5e5e5;
}

.btn-book {
    background: #cc0000;
    color: white;
}

.btn-book:hover {
    background: #b00000;
}

.pagination {
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    color: #666;
}

@media (max-width: 1200px) {
    .cards-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 968px) {
    .cards-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 640px) {
    .archive-models {
        padding: 15px;
    }

    h2 {
        font-size: 24px;
    }

    .car-info {
        padding: 15px;
    }

    .gifts {
        flex-direction: column;
    }
}
</style>