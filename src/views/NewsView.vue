<script setup>
import VHeader from '../components/VHeader.vue';
import VFooter from '../components/VFooter.vue';
import VTitle from '../components/VTitle.vue';
import VNews from '../components/VNews.vue';



</script>
<template>
    <VHeader />
    <main class="news limiter lines">
        <VTitle
        class="newsTitle"
        text="Новости"
        />
        <VNews/>
    </main>
    <VFooter/>
</template>
<style>
.newsTitle{
    margin: 60px 0px;
}
</style>

