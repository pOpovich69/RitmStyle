<script setup>

const props = defineProps({
  text:{
    type: String
  }
});

</script>
<template>
    <h2>{{ props.text }}</h2>
</template>
<style scoped>
h2{
  font-weight: bold;
  font-size: 42px;
  color: #fff;
  text-align: center;
  text-align: center;
}
h2::before{
  content: url(../../public/R1.png);
  position: relative;
  bottom: 5px;
  left: 0;
  margin-right: 45px;
}
h2::after{
  content: url(../../public/R2.png);
  position: relative;
  bottom: 5px;
  left: 0;
  margin-left: 45px;
}
@media (max-width:617px) {
  h2{
    font-size: 35px;
  }
  h2::before{
    margin-right: 20px;
  }
  h2::after{
    margin-left: 20px;
  }
}
@media (max-width:506px) {
  h2{
    font-size: 24px;
  }
  h2::before{
    margin-right: 20px;
  }
  h2::after{
    margin-left: 20px;
  }
}
@media (max-width:373px) {
  h2{
    font-size: 20px;

  }
  h2::before{
    margin-right: 10px;
  }
  h2::after{
    margin-left: 10px;
  }
}
</style>

