import { defineStore } from "pinia";
import { auth, db } from "@/includes/firebase";
import helpers from "../includes/helpers";
export default defineStore("user", {
  state: () => {
    return {
      userLoggedIn: false,
      userProfile: {
        firstName: "",
        lastName: "",
        fullName: "",
        username: "",
        email: "",
        isAdmin: false,
        ID: "",
        logoText: "",
      },
    };
  },
  actions: {
    async getCurrentUser() {
      try {
        const currentUser = await db
          .collection("user")
          .doc(auth.currentUser.uid);
        const currentUserResponse = await currentUser.get();
        const currentUserData = await currentUserResponse.data();
        this.userProfile.firstName = helpers.capFirstLetter(
          currentUserData.firstName
        );
        this.userProfile.lastName = helpers.capFirstLetter(
          currentUserData.lastName
        );
        this.userProfile.fullName =
          this.userProfile.firstName + " " + this.userProfile.lastName;
        this.userProfile.logoText =
          this.userProfile.firstName[0].toUpperCase() +
          this.userProfile.lastName[0].toUpperCase();
        this.userProfile.email = currentUserData.email;
        this.userProfile.username = currentUserData.username;
        this.userProfile.isAdmin = currentUserData.isAdmin;
        this.userProfile.ID = auth.currentUser.uid;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
