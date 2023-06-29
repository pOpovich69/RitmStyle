import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import NewsView from "../views/NewsView.vue"
import NewsItemView from "../views/NewsItemView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView
        },
        {
            path: "/news",
            name: "News",
            component: NewsView
        },
        {
            path: "/news/:id",
            name: "NewsId",
            component: NewsItemView
        },
        {
            path: "/blog",
            name: "Blog",
            component: () => import("../views/BlogView.vue")
        },
    ]
});

export default router;