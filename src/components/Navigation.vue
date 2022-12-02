<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link :to="{ name: 'home' }" class="link brand-name"
          >Fashion Blogs</router-link
        >
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link :to="{ name: 'home' }" class="link">Home</router-link>
          <router-link :to="{ name: 'blogs' }" class="link">Blogs</router-link>
          <router-link to="#" class="link">Create Post</router-link>
          <router-link v-if="!userLoggedIn" :to="{ name: 'login' }" class="link"
            >Login / Register</router-link
          >
          <span v-else class="link" @click="logOut" :to="{ name: 'home' }"
            >Logout</span
          >
        </ul>
      </div>
    </nav>
    <menuIcon class="menu-icon" @click="toggleMobileNav" v-show="mobile" />
    <!--menu for mobile nav-->
    <transition name="mobileNav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link :to="{ name: 'home' }" class="link">Home</router-link>
        <router-link :to="{ name: 'blogs' }" class="link">Blogs</router-link>
        <router-link to="#" class="link">Create Post</router-link>
        <router-link v-if="!userLoggedIn" :to="{ name: 'login' }" class="link"
          >Login / Register</router-link
        >
        <router-link v-else class="link" :to="{ name: 'home' }" @click="logOut"
          >Logout</router-link
        >
      </ul>
    </transition>
  </header>
</template>
<script>
import menuIcon from "../assets/icons/menu.svg";
import { mapWritableState } from "pinia";
import useUserStore from "../stores/user";
import { auth } from "../includes/firebase";
export default {
  name: "navigation",
  components: {
    menuIcon,
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    async logOut() {
      await auth.signOut();

      this.userLoggedIn = false;
      this.$router.push({ name: "home" });
    },
  },
};
</script>
<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  padding: 30px 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);
  z-index: 99;
  .branding {
    font-weight: 500;
    font-size: 1.3rem;
    .brand-name:hover {
      color: #bb4991;
    }
  }
  .nav-links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;

    ul {
      margin-right: 35px;
      .link {
        margin-right: 20px;
        &:hover {
          color: #9e467e;
        }
      }
      .link:last-child {
        margin-right: 0;
      }
    }
  }
}
.menu-icon {
  position: absolute;
  top: 25px;
  right: 20px;
  cursor: pointer;
}

.mobile-nav {
  padding: 20px;
  width: 70%;
  max-width: 250px;
  background-color: #303030;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  .link {
    padding: 20px 0;
    color: #fff;
  }
}
/* mobile nav teansitions */

.mobileNav-enter-from,
.mobileNav-leave-to {
  transform: translateX(-250px);
}
.mobileNav-enter-active,
.mobileNav-leave-active {
  transition: all 1s ease;
}
.mobileNav-enter-to {
  transform: translateX(0);
}
</style>
