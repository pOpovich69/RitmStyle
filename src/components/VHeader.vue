<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const props = defineProps({
    isHomePage:{
        type: Boolean
    }
});

const router = useRouter();

const links = [
  {
    name: "Главная",
    path: "/"
  },
  {
    name: "Сеансы",
    path: "/"
  },
  {
    name: "Отзывы",
    path: "/"
  },
  {
    name: "Контакты",
    path: "/"
  },
  {
    name: "Новости",
    path: "/news"
  },
  {
    name: "Обо мне",
    path: "/"
  },
  {
    name: "Блог",
    path: "/blog"
  },
]
const burger_active = ref(false);

const burger_click = () =>{
    burger_active.value = !burger_active.value;
    document.body.classList.toggle('lock');
}

const link_click = (path) =>{
    document.body.classList.remove('lock');
    router.push(path);
}

</script>
<template>
    <div class="header__bg">
        <header class="header limiter" :class="{header__underline: !isHomePage}">
            <div class="header__row">
                <div class="header__logo">
                    <RouterLink to="/"><img src="../../public/logo.png" alt="logo"></RouterLink>
                </div>
                <div :class="{burger_menu__btn_active: burger_active}" class="burger-menu__btn" @click="burger_click()">
                    <span></span>
                </div>
                <ul class="header__links">
                    <li v-for="link in links" :key=link.id @click="link_click(link.path)"><a>{{link.name}}</a></li>
                </ul>
                <div class="header__button">
                    <a href="#">Записаться на сеанс</a>
                </div>
                <nav class="burger__nav" :class="{burger__nav_active: burger_active}">
                    <ul class="burger__links">
                        <li v-for="link in links" :key=link.id  @click="link_click(link.path)"><a>{{link.name}}</a></li>
                    </ul>
                    <div class="burger__button limiter">
                        <a href="#">Записаться на сеанс</a>
                    </div>
                </nav>
            </div>
        </header>
    </div>
</template>
<style scoped>
.header__bg{
    height: 100%;
    background-color: #162831;
}
.header {
    height: 60px;
    padding: 30px 0px;
}
/* .header__underline{
    border-bottom: 1px solid #fff;
} */
.header__row{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header__logo {
    height: 60px;
    width: 60px;
    position: relative;
    z-index: 101;
}
.header__logo a{
    height: 100%;
    width: 100%;
    display: block;
}
.header__logo img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.header__links{
    display: flex;
}
.header__links li{
    color: #fff;
    margin: 0px 20px;
    cursor: pointer;
    font-size: 14px;
    transition: all 50ms;
}
.header__links li:hover{
    text-shadow: 1px 0 1px #000, 
    0 1px 1px #000, 
    -1px 0 1px #000, 
    0 -1px 1px #000;
    transform: scale(1.1);
} 
.header__links li a{
    padding: 5px;
    font-family: Proxima Nova;
} 
.header__button a{
    padding: 9px 15px; 
    background-color: #018ABE;
    border-radius: 3px;
    text-align: center;
    font-family: Proxima Nova;
    transition: box-shadow 300ms;
}
.header__button a:hover{
    box-shadow: 0px 0px 20px 0px rgba(4, 108, 148, 1);
}
.burger-menu__btn{
    display: none;
}
.burger__nav {
    display: none;
}
@media (max-width: 963px) {
    .burger-menu__btn{
        display: block;
        z-index: 101;
        position: relative;
        width: 30px;
        height: 18px;
        cursor: pointer;
    }
    .burger-menu__btn span,
    .burger-menu__btn::before,
    .burger-menu__btn::after{
        transition: all 300ms;
        left: 0;
        position: absolute;
        height: 10%;
        width: 100%;
        background-color: #fff;
    }
    .burger-menu__btn::before{
        content: '';
        top: 0;
    }
    .burger-menu__btn span{
        top: 50%;
        transform: scale(1) translate(0px, -50%);
        
    }
    .burger-menu__btn::after{
        content: '';
        bottom: 0;
    }
    .burger_menu__btn_active span{
        transform: scale(0)
    }
    .burger_menu__btn_active::after{
        transform: rotate(45deg);
       bottom: 15px;
    }
    .burger_menu__btn_active::before{
        transform: rotate(-45deg);

    }

    .header__links {
        display: none;
    }
    .header__button {
        display: none;
    }
    .burger__nav {
        display: block;
        position: fixed;
        transform: translate(0px, -100%);
        top: 0;
        left: 0;
        z-index: 100;
        width: calc(100% - 40px);
        height: calc(100% - 100px - 10px);
        background-color: #174e64;
        padding: 20px;
        padding-top: 90px;
        text-align: center;
        overflow: auto;
        transition: all 300ms;
    }
    .burger__nav_active{
        transform: translate(0px, 0px);
    }
    .burger__links li{
        margin-bottom: 30px;
        font-size: 25px;
        font-family: Proxima Nova;
    }
    .burger__links li a{
        font-family: Proxima Nova;
    }
    .burger__links li:last-child{
        margin-bottom: 40px;
    }
    .burger__button a{
        padding: 9px 15px; 
        background-color: #018ABE;
        font-size: 25px;
        border-radius: 3px;
        font-family: Proxima Nova;
        width: 320px;
    }
}
</style>

