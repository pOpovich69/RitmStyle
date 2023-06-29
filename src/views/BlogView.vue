<script setup>
import data from '../data.json'
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import VHeader from '../components/VHeader.vue';
import VFooter from '../components/VFooter.vue';
import VTitle from '../components/VTitle.vue'

const news_list = ref(data);

const router = useRouter();

const news_link = (newsId) =>{
    router.push(`/news/${newsId}`);
}

</script>
<template>

<VHeader/>
<main class="blog__main  limiter lines">
    <VTitle
        text="Blog"
        class="block__title"
    />
    <div class="blog__news">
        <div class="blog__item" v-for="data in news_list">
            <div class="blog__img">
                <img src="../../public/news_image.png" alt="blog__img">
            </div>
            <div class="blog__text">
                <div class="blog__time">{{ data.time }}</div>
                <div class="blog__title">{{ data.title }}</div>
                <div class="blog__content">{{ data.text }}</div>
                <button class="blog__btn" @click="news_link(data.id)">Read article</button>
            </div>
        </div>
    </div>
</main>
<VFooter/>

</template>
<style scoped>
.blog__main {

}
.blog__news {
    margin-bottom: 120px;
}
.blog__item {
    display: flex;
    align-items: center;
    border: 2px solid #018ABE;
    border-radius: 20px;
    padding: 50px;
    margin-bottom: 45px;
}

.blog__item:last-child {
    margin-bottom: 0px;
}
.blog__img {
    flex: 0 0 40%;
    margin-right: 50px;
    height: 100%;
}
.blog__img img{
    width: 100%;
    height: 100%;
    object-fit: cover;

}
.blog__text{

}
.blog__time {
    margin-bottom: 30px;
    font-family: Proxima Nova;
    font-weight: bold;
    background-color: #018ABE;
    padding: 6px 12px;
    max-width: 80px;
    border-radius: 5px;
}
.blog__title {
    margin-bottom: 20px;
    font-size: 24px;
}
.blog__content {
    margin-bottom: 40px;
    font-size: 16px;
    opacity: 0.6;
    font-family: Proxima Nova;
    line-height: 150%;
}
.blog__btn {
    background-color: #018ABE;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    font-family: Proxima Nova;
    cursor: pointer;
}

@media (max-width:768px) {
.blog__img {
    flex: 0 0 100%;
}
.blog__item {
    flex-direction: column;
    padding: 15px;
}
.blog__img{
    margin-right: 0px;
    margin-bottom: 20px;
}
}

</style>
