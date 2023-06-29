<script setup>

const props = defineProps(['title', 'isLeft']);

</script>
<template>
    <div :class="{aboutUsLeft: isLeft}" class="about-us limiter2">
        <div :class="{aboutUsTextLeft: isLeft}" class="aboutUsText">
            <div class="about-us__title">{{ props.title }}</div>
            <div class="abut-us__description">
                <p class="first">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in purus, sed tellus eget mattis nibh quam. Eu ornare nunc, id est. Erat consectetur etiam a sit diam in imperdiet amet. Diam nisl, ipsum suscipit amet. Eleifend amet habitasse proin quis adipiscing.</p>
                <p>Nisl convallis mauris in consequat. Sit ac vitae posuere maecenas dictumst quam. Felis amet diam, non augue massa. Egestas molestie lobortis rhoncus, elit nulla nisl. Habitant tortor at tempor.</p>
            </div>
        </div>
        <div class="about-us__img">
            <img src="../../public/session_img.png" alt="img">
        </div>
    </div>
</template>
<style scoped>
.about-us {
    display: flex;
    align-items: center;
    padding: 0px 50px;
}
.aboutUsLeft{
    flex-direction: row-reverse;
}
.aboutUsText {
    padding-right: 85px;
}
.aboutUsTextLeft {
    padding-right: 0px;
    padding-left: 85px;
}
.about-us__title {
    font-size: 24px;
    margin-bottom: 30px;
}
.abut-us__description {
    font-size: 16px;
}
.about-us__img{
    width: 100%;
    height: 100%;
}
.about-us__img img{
    width: 100%;
    height: 100%;
}
@media (max-width: 921px) {
.about-us {
    padding: 0px 10px;
}
.about-us {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.aboutUsText {
    padding-right: 0px;
    padding-left: 0px;
}
.aboutUsTextLeft {
    padding-right: 0px;
    padding-left: 0px;
}
}
</style>
