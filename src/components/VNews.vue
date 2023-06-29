<script setup>
import VNewsItem from './VNewsItem.vue';

import { ref } from 'vue'
import data from "../data.json"

const news = ref(data);

</script>
<template>
    <div class="news__list">
        <VNewsItem
        v-for="item in news"
        :item="item"
        />
    </div>
</template>
<style scoped>
.news__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 24px;
    padding-bottom: 120px;
}

@media (max-width: 1024px) {
.news__list {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);

}
}
@media (max-width: 605px) {
.news__list {
    grid-template-columns: repeat(1, 1fr);
}
}
</style>
