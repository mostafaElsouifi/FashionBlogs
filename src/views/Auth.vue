<template>
  <div class="container">
    <div class="left-side">
      <register-form v-if="dispalyForm === 'register'" />
      <login-form v-if="dispalyForm === 'login'" />
      <forgot-password v-if="dispalyForm === 'forgot-password'" />
    </div>
    <div class="background-image"></div>
  </div>
</template>
<script>
import RegisterForm from "@/components/RegisterForm.vue";
import LoginForm from "@/components/LoginForm.vue";
import ForgotPassword from "@/components/ForgotPassword.vue";
export default {
  name: "Register",
  components: {
    RegisterForm,
    LoginForm,
    ForgotPassword,
  },
  data() {
    return {
      dispalyForm: this.$route.name,
    };
  },
  watch: {
    $route() {
      this.dispalyForm = this.$route.name;
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: grid;
  margin-right: 0;
  margin-left: 0;
  grid-template-columns: 1fr 1.6fr;
  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
}
.left-side {
  order: 1;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.background-image {
  order: 2;
  width: 100%;
  margin-right: 0;
  min-width: 850px;
  height: 100vh;

  background-image: url("https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
  background-size: cover;

  @media (max-width: 820px) {
    display: none;
  }
}
</style>
