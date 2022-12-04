import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import Profile from "../views/Profile.vue";
import Auth from "../views/Auth.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/blogs",
      name: "blogs",
      component: Blogs,
      meta: {
        title: "Blogs",
      },
    },
    {
      path: "/register",
      name: "register",
      component: Auth,
      meta: {
        title: "Register",
      },
    },
    {
      path: "/login",
      name: "login",
      component: Auth,
      meta: {
        title: "Login",
      },
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: Auth,
      meta: {
        title: "Forgot Password",
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: {
        title: "Profile",
      },
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | FashionBlogs`;
  next();
});

export default router;
