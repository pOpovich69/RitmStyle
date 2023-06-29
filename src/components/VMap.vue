<script setup>

const props = defineProps({
    data:{
        type: Array
    }
});

</script>
<template>
    <div class="map limiter">
        <div class="map__img">
            <img src="../../public/map.png" alt="map">
        </div>
        <div class="map__sessions">
            <div class="session__item" v-for="item in data">
                <div class="item__title">{{ item.title }}</div>
                <div class="item__address">
                    <span>
                        <img src="../../public/i1.png" alt="icon">
                    </span>
                    {{ item.address }}
                </div>
                <div class="item__some">
                    <span>
                        <img src="../../public/i2.png" alt="icon">
                    </span>
                    {{ item.some }}
                </div>
                <div class="item__session">
                    <span>
                        <img src="../../public/i3.png" alt="icon">
                    </span>
                    Запись по договоренности
                </div>
                <a class="item__btn" href="#">Записаться на сеанс</a>
            </div>
        </div>
    </div>
</template>
<style scoped>

.map {
    display: flex;
    width: calc(100% - 60px);
}
.map__img {
    width: 100%;
    min-height: 100%;
}
.map__img img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
.session__item {
    background-color: #018ABE;
    padding: 35px 45px;
    margin-left: 50px;
    border-radius: 10px;
}
.session__item:first-child{
    margin-bottom: 24px;
}
.session__item div{
    margin-bottom: 20px;
}
.item__title {
    font-size: 24px;
    font-weight: bold;
}
.item__some,
.item__session,
.item__address {
    font-family: Proxima Nova;
    font-size: 14px;
    display: flex;
    align-content: center;
}
.item__address img,
.item__some img,
.item__session img{
    margin-right: 20px;
}
.item__btn {
    font-family: Proxima Nova;
    font-size: 13px;
    padding: 9px 15px;
    background-color: #fff;
    color: #018ABE;
    border-radius: 3px;
}
@media (max-width:1025px) {
.map {
    display: block;
}
.session__item {
    margin-left: 0px;
}
}
</style>
