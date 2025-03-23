<template>
    <div class="body">
        <div class="tabs">
            <a href="#" class="tab" 
               :class="{ active: activeTab === 'Автосалон' }" 
               @click.prevent="changeTab('Автосалон')">Автосалон</a>

            <a href="#" class="tab" 
               :class="{ active: activeTab === 'Трейд-ин' }" 
               @click.prevent="changeTab('Трейд-ин')">Трейд-ин</a>

            <a href="#" class="tab" 
               :class="{ active: activeTab === 'Покупка' }" 
               @click.prevent="changeTab('Покупка')">Покупка</a>
        </div>

        <div class="content">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 'Автосалон',
            title: 'Об автосалоне ABC',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollis magna, in bibendum massa. Praesent malesuada sit amet nibh ut vestibulum.'
        };
    },
    methods: {
        changeTab(tabName) {
            this.activeTab = tabName;
            
            if (tabName === "Автосалон") {
                this.title = "Об автосалоне ABC";
                this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollis magna, in bibendum massa. Praesent malesuada sit amet nibh ut vestibulum.";
            } else if (tabName === "Трейд-ин") {
                this.title = "Трейд-ин в ABC";
                this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam.";
            } else if (tabName === "Покупка") {
                this.title = "Покупка автомобиля";
                this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet vulputate.";
            }
        }
    }
};
</script>

<style scoped>
.body {
    margin-left: 150px;
    margin-bottom: 100px;
    color: #222;
}
.tabs {
    display: flex;
    gap: 20px;
    font-size: 16px;
    border-bottom: 2px solid #eee;
    padding-bottom: 10px;
    margin-bottom: 20px;
}
.tab {
    text-decoration: none;
    color: black;
    font-weight: bold;
    position: relative;
    padding-bottom: 5px;
    cursor: pointer;
}
.tab.active {
    color: #d60000;
}
.tab.active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #d60000;
}
.content h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
}
.content p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    max-width: 900px;
}
</style>
