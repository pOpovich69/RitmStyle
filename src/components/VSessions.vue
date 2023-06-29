<script setup>
const sessions = [
  {
    name: "Стандартный RitmStyle"
  },
  {
    name: "RitmStyle для пар"
  },
  {
    name: "RitmStyle для беременных"
  },
  {
    name: "RitmStyle с полным погружением под воду"
  },
  {
    name: "RitmStyle + красочная подводная фотосессия"
  },
]
</script>
<template>
    <div class="sessions limiter">
    <div class="sessions__list">
        <div class="sessions__item" v-for="item in sessions">
        <div class="sessions__item__img">
            <img src="../../public/session_img.png" alt="item">
            <div class="sessions__color"></div>
        </div>
        <div class="sessions__item__title">{{ item.name }}</div>
        </div>
    </div>
    </div>
</template>
<style scoped>
.sessions__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 25px;
  grid-column-gap: 25px;
}
.sessions__item {
  position: relative;
}
.sessions__item__img{
  height: 100%;
  width: 100%;
}
.sessions__item__img img{
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 10px;
}
.sessions__color {
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(1, 138, 190, 0.5);
  height: 100%;
  width: 100%;
}
.sessions__item__title {
  position: absolute;
  bottom: 25px;
  left: 15px;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  padding: 5px;
}
.sessions__list .sessions__item:first-child{
  grid-row: 1 / 3;
  grid-column: 1 / 2;
}
@media (max-width: 1024px) {
  .sessions__item__title{
    font-size: 18px;
  }
  .sessions {
    margin-top: 75px;
  }
  .sessions__title{
    margin-bottom: 50px;
  }
}
@media (max-width: 769px) {
  .sessions__item{
    max-height: 300px;
  }
  .sessions__list {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  .sessions__list .sessions__item:first-child{
    grid-area: 1 / 1 / 2 / -1;
  }
}
@media (max-width: 426px){
  .sessions__list {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
  .sessions__list .sessions__item:first-child{
    grid-area: auto;
  }
}
</style>
