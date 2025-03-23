import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Routerni import qilish
import "./assets/main.css"; // CSS faylni to‘g‘ri import qilish

const app = createApp(App);

app.use(router); // Vue Routerni qo‘shish

app.mount("#app"); // Vue ilovasini yuklash
