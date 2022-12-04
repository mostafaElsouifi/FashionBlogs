<template>
  <Loading v-if="displayLoading" />
  <div class="modal">
    <div class="modal-content">
      <div class="close-icon" @click="closeForm">
        <CloseIcon />
      </div>
      <h1>Update Profile</h1>
      <vee-form @submit="updateData" :validation-schema="schema">
        <div class="input-container">
          <label>First Name: </label>
          <vee-field
            type="text"
            name="firstName"
            :value="userProfile.firstName"
          />
        </div>
        <ErrorMessage class="error-message" name="firstName" />
        <div class="input-container">
          <label>Last Name: </label>
          <vee-field
            type="text"
            name="lastName"
            :value="userProfile.lastName"
          />
        </div>
        <ErrorMessage class="error-message" name="lastName" />

        <div class="input-container">
          <label>Username: </label>
          <vee-field
            type="text"
            name="username"
            :value="userProfile.username"
          />
        </div>
        <ErrorMessage class="error-message" name="username" />
        <div class="input-container">
          <label>Email: </label>
          <vee-field type="email" name="email" :value="userProfile.email" />
        </div>
        <ErrorMessage class="error-message" name="email" />

        <button type="submit">Save</button>
      </vee-form>
    </div>
  </div>
</template>

<script>
import CloseIcon from "@/assets/icons/close.svg";
import Loading from "./Loading.vue";
import { db } from "@/includes/firebase";
import { mapWritableState } from "pinia";
import useUserStore from "@/stores/user";
export default {
  components: { CloseIcon, Loading },
  data() {
    return {
      schema: {
        firstName: "required",
        lastName: "required",
        username: "required",
        email: "required|email",
      },
      displayLoading: false,
    };
  },
  computed: {
    ...mapWritableState(useUserStore, ["userProfile"]),
  },
  methods: {
    closeForm() {
      this.$emit("close-form");
    },
    async updateData(values) {
      try {
        this.displayLoading = true;
        const dbDoc = await db.collection("user").doc(this.userProfile.ID);
        await dbDoc.update({
          firstName: values.firstName,
          lastName: values.lastName,
          username: values.username,
          email: values.email,
        });
        // update store
        this.userProfile.firstName = values.firstName;
        this.userProfile.lastName = values.lastName;
        this.userProfile.username = values.username;
        this.userProfile.email = values.email;
        this.displayLoading = false;
        this.$emit("close-form");
      } catch (error) {
        this.displayLoading = false;
        console.log(error.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    max-width: 500px;

    padding: 40px 30px;
    background-color: #fff;
    position: fixed;
    .close-icon {
      position: absolute;
      top: 20px;
      right: 30px;
      cursor: pointer;
    }
    h1 {
      text-align: center;
      margin-bottom: 20px;
      font-weight: 300;
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: left;
      gap: 15px;
      width: 100%;
      margin: 0;
      .input-container {
        display: flex;
        align-items: center;
        label {
          width: 100px;
        }
      }

      input {
        flex: 2;
        width: 350px;
        padding: 15px;
        padding-left: 38px;
        background-color: #e7f1f6;
        color: #000;
        border: none;
        outline: none;
        font-size: 1.3rem;
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
        width: 40%;
        margin: 0 auto;
        margin-top: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>
