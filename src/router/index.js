import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/design",
      name: "design-work",
      component: () => import("../views/DesignView.vue"),
    },
    {
      path: "/development",
      name: "dev-work",
      component: () => import("../views/DevelopmentView.vue"),
    },
    // Design feature pages
    // ---------------------
    //TODO: pass props to route
    {
      path: "/designing/:routeName",
      name: "design-feature",
      component: () => import("../views/DesignFeatureView.vue"),
      props: true,
    },
    // {
    //   path: "/designing/a-lobby-menu",
    //   name: "lobby-menu",
    //   component: () =>
    //     import("../views/designWorkViews/LobbyMenuFeatureView.vue"),
    // },
    // {
    //   path: "/designing/the-incision-logo",
    //   name: "incision-logo",
    //   component: () =>
    //     import("../views/designWorkViews/IncisionLogoFeatureView.vue"),
    // },
    // {
    //   path: "/designing/the-crown-room-brochure",
    //   name: "the-crown-room-brochure",
    //   component: () =>
    //     import("../views/designWorkViews/CRBrochureFeatureView.vue"),
    // },
    // {
    //   path: "/designing/a-passport-illustration",
    //   name: "passport-illustration",
    //   component: () =>
    //     import("../views/designWorkViews/PassportIllustrationFeatureView.vue"),
    // },
    // {
    //   path: "/designing/passport-stamps",
    //   name: "passport-stamps",
    //   component: () =>
    //     import("../views/designWorkViews/PassportStampsFeatureView.vue"),
    // },
    // {
    //   path: "/designing/grand-opening-layouts",
    //   name: "grand-opening-layouts",
    //   component: () =>
    //     import("../views/designWorkViews/GrandOpeningFeatureView.vue"),
    // },
    // { name: '404', path: '/:notfound(.*)', component: NotFound },
  ],
});

export default router;
