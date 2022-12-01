<template>
  <router-link :to="{ name: 'home' }" class="link back-home-link"
    ><LeftArrow class="arrow-icon" />Home Page</router-link
  >
  <h3>
    Already have an account ?
    <router-link :to="{ name: 'login' }" class="link login-link">
      Login
    </router-link>
  </h3>
  <h1>Create Your FashionBlog Account</h1>

  <vee-form @submit="onSubmit" :validation-schema="schema">
    <div class="input-container">
      <PersonIcon class="input-icon" />
      <vee-field type="text" name="firstName" placeholder="First Name" />
    </div>
    <ErrorMessage class="error-message" name="firstName" />
    <div class="input-container">
      <PersonIcon class="input-icon" />
      <vee-field type="text" name="lastName" placeholder="Last Name" />
    </div>
    <ErrorMessage class="error-message" name="lastName" />

    <div class="input-container">
      <PersonIcon class="input-icon" />
      <vee-field type="text" name="username" placeholder="Username" />
    </div>
    <ErrorMessage class="error-message" name="username" />
    <div class="input-container">
      <EmailIcon class="input-icon" id="emailIcon" />
      <vee-field type="email" name="email" placeholder="Email" />
    </div>
    <ErrorMessage class="error-message" name="email" />
    <div class="input-container">
      <LockIcon class="input-icon" id="lockIcon" />
      <vee-field type="password" name="password" placeholder="Password" />
    </div>
    <ErrorMessage class="error-message" name="password" />

    <button type="submit" class="signup-btn">SIGN UP</button>
  </vee-form>
</template>
<script>
import { ErrorMessage } from "vee-validate";
import LeftArrow from "../assets/icons/left-arrow.svg";
import PersonIcon from "../assets/icons/person.svg";
import EmailIcon from "../assets/icons/email.svg";
import LockIcon from "../assets/icons/lock.svg";

export default {
  name: "RegisterForm",
  components: {
    LeftArrow,
    ErrorMessage,
    PersonIcon,
    EmailIcon,
    LockIcon,
  },
  data() {
    return {
      schema: {
        firstName: "required",
        lastName: "required",
        email: "required|email",
        username: "required",
        password: "required|min:9",
      },
    };
  },
  methods: {
    onSubmit(values) {
      console.log(values);
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
    top: 14px !important;
  }
  #emailIcon,
  #lockIcon {
    top: 12px !important;
  }
  input {
    width: 350px;
    padding: 15px;
    padding-left: 38px;
    background-color: #e7f1f6;
    color: #000;
    border: none;
    outline: none;
  }
  button {
    margin-top: 12px;
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
