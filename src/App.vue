<template>
  <Navigation v-if="navigation" />
  <router-view />
  <FooterApp v-if="navigation" />
</template>
<script>
import Navigation from "./components/Navigation.vue";
import FooterApp from "./components/Footer.vue";
import { auth } from "./includes/firebase";
import { mapWritableState, mapActions } from "pinia";
import useUserStore from "@/stores/user";
export default {
  name: "App",
  components: {
    Navigation,
    FooterApp,
  },
  created() {
    if (auth.currentUser) this.userLoggedIn = true;
    console.log(auth.currentUser);
    this.getCurrentUser();
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  data() {
    return {
      navigation: null,
    };
  },
  methods: {
    ...mapActions(useUserStore, ["getCurrentUser"]),
    checkRoute() {
      if (
        this.$route.name === "login" ||
        this.$route.name === "register" ||
        this.$route.name === "forgot-password"
      ) {
        this.navigation = false;
        return;
      }
      this.navigation = true;
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container {
  max-width: 1440px;
  margin: 0 auto;
}
.link {
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  cursor: pointer;
  transition: 0.3s color ease;
}
/**style cards wrap */
.blog-cards-wrap {
  position: relative;
  background-color: #f1f1f1;
  margin-top: 10px;
  @media (min-width: 500px) {
    padding: 100px 16px;
  }
  .blog-cards {
    position: relative;
    padding: 20px 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    grid-template-columns: 1fr;
    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
      padding: 20px 100px;
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
.input-container {
  position: relative;
}
.input-icon {
  width: 20px !important;
  position: absolute;
  left: 8px;
  top: 43px;
}
.error-message {
  color: red;
  width: 350px;
  align-self: start;
  font-size: 0.9rem;
}

// classes applied from vueup editor
.ql-editor {
  height: 60vh !important;
  img {
    height: 100% !important;
  }
  // overflow: scroll !important;
}
</style>
