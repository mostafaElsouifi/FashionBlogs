<template>
  <div>
    <Loading v-if="displayLoading" />
    <Modal
      v-if="displayModal"
      @close-modal="closeModal"
      :modalMessage="modalMessage"
    />
    <h3>
      Login to account
      <router-link :to="{ name: 'login' }" class="link login-link">
        Login
      </router-link>
    </h3>
    <h1>Reset Password</h1>
    <p>Forgot your passowrd? Enter your email to reset it</p>
    <vee-form @submit="resetPassword" :validation-schema="schema" class="form">
      <div class="input-container">
        <EmailIcon class="input-icon" />
        <vee-field
          type="email"
          name="email"
          placeholder="Email"
          v-model="email"
        />
      </div>

      <ErrorMessage class="error-message" name="email" />
      <button type="submit" class="signup-btn">Reset</button>
    </vee-form>
  </div>
</template>
<script lang="js">
import Loading from "./sub_components/Loading.vue";
import Modal from "./sub_components/Modal.vue";
import EmailIcon from '../assets/icons/email.svg';
import {auth} from '@/includes/firebase';
export default {
  name: "ForgotPassword",
  components: {
    Loading,
    Modal,
    EmailIcon
  },
  data() {
    return {
      schema: {
        email: "required|email",
      },
      displayLoading: false,
      displayModal:null,
      modalMessage:'',
      email: ''
    };
  },
  methods: {
    async resetPassword(values) {
      this.displayLoading = true;
      try{
        await auth.sendPasswordResetEmail(values.email);
        this.displayLoading = false;
        this.modalMessage = 'if your email exists, the reset email will sent to you.check inbox or spam';
        this.displayModal = true;

      }catch(error){
        this.displayLoading = false;
        this.displayModal = true;
        this.modalMessage = error.message;
      }
    },
    closeModal(){
      this.displayModal= false;
    }
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
    padding-left: 40px;
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
</style>
