<template>
  <Loading v-if="displayLoading" />
  <Modal
    :modalMessage="modalMessage"
    v-if="displayModal"
    @close-modal="closeModal"
  />
  <div>
    <router-link :to="{ name: 'home' }" class="link back-home-link"
      ><LeftArrow class="arrow-icon" />Home Page</router-link
    >
    <h3>
      Don't have an account ?
      <router-link :to="{ name: 'register' }" class="link login-link">
        Register
      </router-link>
    </h3>
    <h1>Login to FashionBlogs</h1>

    <vee-form @submit="login" :validation-schema="schema">
      <div class="input-container">
        <EmailIcon class="input-icon" />
        <vee-field type="email" name="email" placeholder="Email" />
      </div>
      <ErrorMessage class="error-message" name="email" />
      <div class="input-container">
        <LockIcon class="input-icon" />
        <vee-field type="password" name="password" placeholder="Password" />
      </div>
      <ErrorMessage class="error-message" name="password" />
      <router-link :to="{ name: 'forgot-password' }" class="link forgot-link"
        >Forgot Your Password</router-link
      >
      <button type="submit" class="signup-btn">SIGN IN</button>
    </vee-form>
  </div>
</template>
<script>
import LeftArrow from "../assets/icons/left-arrow.svg";
import EmailIcon from "../assets/icons/email.svg";
import LockIcon from "../assets/icons/lock.svg";
import Loading from "./sub_components/Loading.vue";
import Modal from "./sub_components/Modal.vue";
import { auth } from "@/includes/firebase";
import { mapWritableState, mapActions } from "pinia";
import useUserStore from "@/stores/user";
export default {
  name: "LoginForm",
  components: {
    LeftArrow,
    EmailIcon,
    LockIcon,
    Loading,
    Modal,
  },
  data() {
    return {
      schema: {
        email: "required|email",
        password: "required",
      },
      displayModal: false,
      modalMessage: "",
      displayLoading: false,
    };
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  methods: {
    ...mapActions(useUserStore, ["getCurrentUser"]),
    async login(values) {
      this.displayLoading = true;
      try {
        await auth.signInWithEmailAndPassword(values.email, values.password);
        this.displayLoading = false;
        this.userLoggedIn = true;
        await this.getCurrentUser();
        this.$router.push({ name: "home" });
      } catch (error) {
        this.displayLoading = false;
        this.displayModal = true;
        this.modalMessage = error.message;
      }
    },
    closeModal() {
      this.displayModal = false;
      this.modalMessage = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.back-home-link {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  position: absolute;
  top: 20px;
  left: 15px;
  transition: 0.5s ease all;
  &:hover {
    border-bottom: 1px solid #303030;
  }
  .arrow-icon {
    width: 10px !important;
    margin-right: 10px;
  }
}
.login-link {
  font-size: 1.1rem;
  text-transform: lowercase;
  color: #283d47;
  border-bottom: 1px solid #303030;
  &:hover {
    border-bottom: none;
    font-weight: 700;
  }
}
h3 {
  margin-top: 50px;
  font-weight: 300;
  padding-bottom: 20px;
}
h1 {
  padding: 20px 80px;
  font-weight: 500;
  margin-bottom: 30px;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  margin: 0;
  .input-icon {
    top: 12px !important;
  }
  input {
    width: 350px;
    padding: 15px;
    padding-left: 37px;
    background-color: #e7f1f6;
    color: #000;
    border: none;
    outline: none;
  }
  .forgot-link {
    text-transform: lowercase;
    font-weight: 300;
    transition: all 0.5s ease;
    margin: 10px 0;
    &:hover {
      border-bottom: 1px solid #303030;
      transition: 0.5s ease all;
    }
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
