<template>
  <div>
    <Loading v-if="displayLoading" />
    <h1>Reset Password</h1>
    <p>Forgot your passowrd? Enter your email to reset it</p>
    <vee-form @submit="onSubmit" :validation-schema="schema">
      <vee-field type="email" name="email" placeholder="Email" />
      <ErrorMessage class="error-message" name="email" />
      <button type="submit" class="signup-btn">Reset</button>
    </vee-form>
  </div>
</template>
<script>
import Loading from "./sub_components/Loading.vue";
export default {
  name: "ForgotPassword",
  components: {
    Loading,
  },
  data() {
    return {
      schema: {
        email: "required|email",
      },
      displayLoading: false,
    };
  },
  methods: {
    onSubmit(values) {
      console.log(values);
      this.displayLoading = true;
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  padding: 30px 120px;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  margin: 0;
  input {
    width: 350px;
    padding: 15px;
    background-color: #e7f1f6;
    color: #000;
    border: none;
    outline: none;
    margin-top: 30px;
  }
  p {
    text-transform: lowercase;
    font-weight: 300;
  }
  button {
    padding: 10px 25px;
    border: none;
    outline: none;
    color: white;
    background-color: #283d47;
    border-radius: 20px;
    font-weight: 300;
    cursor: pointer;
  }
}
</style>
