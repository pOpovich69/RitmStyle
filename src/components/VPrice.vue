<script setup>

const priceList = [
    {
        name: "RitmStyle с погружением",
        price: 1000
    },
    {
        name: "Абонемент на RitmStyle",
        price: 5500
    },
    {
        name: "RitmStyle для пар",
        price: 6000
    },
    {
        name: "RitmStyle для беременных",
        price: 13500
    },
    {
        name: "RitmStyle + фотосессия",
        price: 11500
    },
]

</script>
<template>
    <div class="price limiter2">
        <ul class="price__list">
            <li v-for="item in priceList">
                <div class="price__row">
                    <div>{{ item.name }}</div>
                    <div>{{ item.price }}$</div>
                </div>
            </li>
        </ul>
        <div class="price__img">
            <img src="../../public/price.png" alt="price">
            <div class="price__description">Подарочный сертификат</div>
        </div>
    </div>
</template>
<style scoped>
.price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 60px - 20px) ;
}
.price__list {
    width: calc(100%);
    padding: 50px;
    padding-right: 130px;
}
.price__row{
    display: flex;
    font-size: 18px;
    justify-content: space-between;
    align-items: center;
}
.price__list li{
    position: relative;
    margin-bottom: 30px;
}
.price__list li:last-child{
    margin-bottom: 0px;
}
.price__list li::before{
    content: url(../../public/R1.png);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -60px;
}
.price__img {
    width: 100%;
    height: 100%;
}
.price__img img{
    width: 100%;
    height: 100%;
}
.price__description{
    text-align: center;
}

@media (max-width:1025px) {
.price {
    flex-direction: column;
}
.price__list {
    padding: 0px;
    margin-bottom: 20px;
}
.price__list li::before{
    content: url(../../public/R1.png);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -40px;
}
}

</style>

