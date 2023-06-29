<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
    item:{
        type: Object,
    }
});

const router = useRouter();

const news_link = (newsId) =>{
    router.push(`/news/${newsId}`);
}

</script>
<template>
    <div class="news__item" @click="news_link(item.id)">
        <div class="news__img">
            <img src="../../public/session_img.png" alt="news">
            <div class="img__bg"></div>
        </div>
        <div class="news__text">
            <div class="news__time">{{ item.time }}</div>
            <div class="news__tilte">{{ item.title }}</div>
        </div>
    </div>
</template>
<style scoped>
.news__item {
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
}
.news__img {
    width: 100%;
    height: 100%;
}
.news__img img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
.img__bg {
    background-color: rgba(1, 138, 190, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
}
.news__text{
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 60px);
    padding: 30px 0px;
    padding-left: 35px;
}  
.news__time {
    font-family: Proxima Nova;
    font-weight: bold;
    background-color: #018ABE;
    padding: 6px 12px;
    max-width: 80px;
    border-radius: 5px;
}
.news__tilte {
    font-size: 21px;
}
</style>
