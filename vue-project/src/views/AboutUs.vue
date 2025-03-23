<template >
    <div>
      <Header />
      <div class="Rectangle205div">
        <h1>
          Каталог авто
      </h1> 
      <Rectangle205 />
    </div>
    <Group />
     <Lorem />
     <Footer />
    </div>
</template>
<script>
import Header from "@/components/Header/Header.vue";
import Rectangle205 from "@/components/Rectangle205/Rectangle 205.vue";
import Group from "@/components/Group/Group.vue";
import Lorem from "@/components/Lorem/Lorem.vue";
import Footer from "@/components/Footer/Footer.vue";


export default {
    components :{
      Header,
      Rectangle205,
      Group,
      Footer,
      Lorem
    }
}
</script>
<style scoped>
.Rectangle205div {
  margin-top:150px;
  margin-left: 100px;
 h1 {
  font-size:50px;
  margin-left: 200px;
 }
}
    
</style>