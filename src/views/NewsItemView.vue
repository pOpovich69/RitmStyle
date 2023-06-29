<script setup>
import news from "../data.json"
import VHeader from "../components/VHeader.vue";
import VFooter from "../components/VFooter.vue";
import VTitle from "../components/VTitle.vue";

import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

const data = ref(null);
const route = useRoute();
const { id } = route.params;

onMounted(async () => {
    const newsWithId = news.find(newsWithId => newsWithId.id === parseInt(id));
    data.value = newsWithId;
    console.log(data.value.title);
});

</script>   
<template>
    <VHeader/>
    <main class="news__item__main limiter lines" v-if="data">
        <VTitle
        :text="data.title"
        class="block__title"
        />
        <div class="news__row">
            <div class="news__text">
                <div class="news__time">{{ data.time }}</div>
                <div class="news__title">{{ data.title }}</div>
                <div class="news__description">{{ data.text }}</div>
            </div>
            <div class="news__img">
                <img src="../../public/news_image.png" alt="news__img">
            </div>
        </div>
    </main>
    <div v-else>
        <h1>Page Not Found</h1>
    </div>
    <VFooter/>
</template>
<style scoped>
.news__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 160px;
}
.news__text {
    width: 100%;
    padding-right: 120px;
}
.news__time {
    font-family: Proxima Nova;
    font-weight: bold;
    background-color: #018ABE;
    padding: 6px 12px;
    max-width: 80px;
    border-radius: 5px;
    margin-bottom: 45px;
}
.news__title {
    font-size: 24px;
    margin-bottom: 30px;
}
.news__description {
    font-size: 16px;
    opacity: 0.6;
    font-family: Proxima Nova;
    line-height: 150%;
}
.news__img {
    width: 100%;
    height: 100%;
}
.news__img img{
    width: 100%;
    height: 100%;
}
@media (max-width: 768px) {
.news__row {
    flex-direction: column;
}
.news__text {
    padding-right: 0px;
    margin-bottom: 30px;
}
}

</style>

