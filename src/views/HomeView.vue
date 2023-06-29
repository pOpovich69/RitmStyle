<script setup>
import VHeader from '../../src/components/VHeader.vue'
import VTitle from '../../src/components/VTitle.vue'
import VAboutUs from '../../src/components/VAboutUs.vue'
import VPrice from '../../src/components/VPrice.vue'
import VMap from '../../src/components/VMap.vue'
import VFooter from '../../src/components/VFooter.vue'
import VSessions from '../../src/components/VSessions.vue'

$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    centerMode: true,
    responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 591,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]})});

const slider_data = [
  {
    id: 0,
    name: "Кира Иванова",
    text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed blandit.",
    text2: "Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis."
  },
  {
    id: 1,
    name: "Яна Жернова",
    text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed blandit.",
    text2: "Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis."
  },
  {
    id: 2,
    name: "Александра Дмитриева",
    text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed blandit.",
    text2: "Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis."
  },
  {
    id: 3,
    name: "Василий Пупкин",
    text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed blandit.",
    text2: "Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis."
  },
]
const mapData = [
  {
    title: "Бассейн WorkClass",
    address: "Невский 140",
    some: "м. Спасская"
  },
  {
    title: 'Бассейн "На Гороховой"',
    address: "3-й проезд Иванова",
    some: "м. Крестовский остров"
  },
]
</script>

<template>
  <VHeader/>
  <main class="main">
      <div class="welcome-block limiter">
        <div class="walcome__img">
          <img src="../../public/bg_1.png" alt="bg_1">
          <div class="walcome__text">
            <h3>Укрепление здоровья</h3>
            <h1>Акватерапия</h1>
            <h2>RitmStyle</h2>
          </div>
        </div>
      </div>
      <div class="block__title"><VTitle text="Сеансы RitmStyle"/></div>
      <VSessions/>
      <div class="block__title"><VTitle text="Отзывы"/></div>
      <div class="slider">
        <div class="slider__item" v-for="item in slider_data" :key="item.id">
          <h3 class="slider__item__title">{{ item.name }}</h3>
          <p class="slider__item__text first">{{ item.text1 }}</p>
          <p class="slider__item__text">{{ item.text2 }}</p>
        </div>
      </div>
      <div class="block__title"><VTitle text="Об RitmStyle"/></div>
      <VAboutUs class="space__bottom" title="RitmStyle массаж" :isLeft="false"/>
      <VAboutUs title="RitmStyle гидротерапия" :isLeft="true"/>
      <div class="block__title"><VTitle text="Стоимость сеансов"/></div>
      <VPrice
      class="price__some"
      />
      <VMap :data="mapData"/>
    </main> 
    <VFooter/>
</template>

<style>
/* Walcome block */
.welcome-block {
  position: relative;
}
.walcome__img img{
  width: 100%;
}
.walcome__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 1;
  text-align: center;
  color: #fff;
  font-weight: bold;
}
.walcome__text h1{
  font-size: 64px;
}
.walcome__text h2{
  font-size: 64px;
}
.walcome__text h3{
  font-size: 24px;
  margin-bottom: 24px;
}
@media (max-width: 558px) {
  .walcome__text h1{
    font-size: 30px;
  }
  .walcome__text h2{
      font-size: 30px;
  }
  .walcome__text h3{
      font-size: 14px;
      margin-bottom: 12px;
  }
}
/* Walcome block */
/* Slider */
.slider__item {
  min-width: 200px;
  margin: 0px 10px;
  padding: 40px 50px;
  background-color: #018ABE;
  border-radius: 10px;
  transform: scale(0.8);
  opacity: 0.4;
  transition: all 300ms;
}
.slider__item__title {
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
  font-family: Proxima Nova;
}
.slider__item__text {
  color: #fff;
  font-size: 14px;
  font-family: Proxima Nova;
}
.slider__item.slick-center{
  transform: scale(1);
  opacity: 1;
}
.slider .slick-list {
  overflow: hidden;
}
.slider .slick-track{
  display: flex;
  align-items: center;
}
.slider .slick-dots{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding: 5px;
}
.slider .slick-dots li{
  margin: 0px 10px;
}
.slider .slick-dots button{
  font-size: 0;
  width: 16px;
  height: 16px;
  border-radius: 5px;
  background-color: #fff;
  opacity: 0.4;
}
.slider .slick-dots li.slick-active button{
  opacity: 1;
}

@media (max-width:1180px) {
  .slider__item {
    margin: 0px 10px;
    padding: 30px 40px;
    background-color: #018ABE;
    border-radius: 10px;
    transform: scale(1);
    opacity: 1;
    transition: all 300ms;
  }
}
@media (max-width:540px) {
  .slider__item {
    padding: 30px 40px;
    background-color: #018ABE;
    border-radius: 10px;
    transform: scale(1);
    opacity: 1;
    transition: all 300ms;
  }
}
/* Slider */
/* Price */
.price__some{
  margin-bottom: 150px;
}

/* Price */
</style>
