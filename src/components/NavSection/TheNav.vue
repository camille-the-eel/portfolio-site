<script setup>
import { RouterLink } from "vue-router";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import { MenuIcon } from "@heroicons/vue/solid";
import AccentCircle from "@/components/AccentElements/AccentCircle.vue";
</script>

<template>
  <AccentCircle
    :class="['navAccent', toggleMobileMenu ? 'mobile-toggle-accent' : '']"
  />
  <header>
    <nav>
      <RouterLink to="/" class="circle"><span>H</span></RouterLink>
      <MenuIcon class="mobile-menu-icon" @click="viewMenu()" />
      <div
        :class="[
          'nav-link-container',
          toggleMobileMenu ? '' : 'mobile-toggle-container',
        ]"
      >
        <RouterLink to="/" class="nav-item mobile-nav-home" @click="hideMenu()"
          >HOME</RouterLink
        >
        <ul class="dropdown-container">
          <li class="nav-work">
            WORK<ChevronDownIcon class="dropdown-icon" />
            <ul class="dropdown-menu">
              <li>
                <RouterLink
                  to="/development"
                  class="nav-item dropdown-item"
                  @click="hideMenu()"
                  >Development
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/design"
                  class="nav-item dropdown-item"
                  @click="hideMenu()"
                >
                  Design
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
        <RouterLink to="/about" class="nav-item nav-about" @click="hideMenu()"
          >ABOUT
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheNav",
  components: {
    AccentCircle,
    RouterLink,
    ChevronDownIcon,
    MenuIcon,
  },
  data() {
    return {
      toggleMobileMenu: false,
    };
  },
  methods: {
    viewMenu() {
      this.toggleMobileMenu = true;
    },
    hideMenu() {
      this.toggleMobileMenu = false;
    },
  },
};
</script>

<style scoped>
@import "@/components/NavSection/nav.css";
</style>
