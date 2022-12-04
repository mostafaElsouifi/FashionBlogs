<template>
  <div class="profile-container">
    <div class="left">
      <div class="user-logo">{{ userProfile.logoText }}</div>
      <div class="user-type">
        <AdminIcon v-if="userProfile.isAdmin" class="icon" />
        <UserIcon v-else class="icon" />

        {{ userProfile.isAdmin ? "Admin" : "User" }}
      </div>
      <p><span>First Name: </span>{{ userProfile.firstName }}</p>
      <p><span>Last Name: </span>{{ userProfile.lastName }}</p>
      <p><span>Username: </span>{{ userProfile.username }}</p>
      <p><span>Email:</span>{{ userProfile.email }}</p>
      <button>Edit</button>
    </div>
    <div class="right">
      <h1>Activity</h1>
      <div class="blog-cards-wrap">
        <h2>My blogs</h2>
        <toggle-edit @toggle-edit="toggleEdit" />
        <div class="blog-cards">
          <BlogCard
            v-for="(blog, index) in blogCards"
            :key="index"
            :post="blog"
            :edit="toggleEditValue"
          />
        </div>
      </div>
      <div class=""></div>
    </div>
  </div>
</template>
<script>
import { mapWritableState } from "pinia";
import useUserStore from "@/stores/user";
import useBlogsStore from "@/stores/blogs";
import BlogCard from "@/components/BlogCard.vue";
import ToggleEdit from "@/components/sub_components/ToggleEdit.vue";
import UserIcon from "@/assets/icons/user.svg";
import AdminIcon from "@/assets/icons/admin2.svg";
export default {
  name: "Profile",
  data() {
    return {
      toggleEditValue: false,
    };
  },
  components: {
    BlogCard,
    ToggleEdit,
    UserIcon,
    AdminIcon,
  },
  computed: {
    ...mapWritableState(useUserStore, ["userProfile"]),
    ...mapWritableState(useBlogsStore, ["blogCards"]),
  },

  methods: {
    toggleEdit() {
      this.toggleEditValue = !this.toggleEditValue;
    },
  },
};
</script>
<style lang="scss" scoped>
.profile-container {
  margin: 40px 10px;
  display: flex;
  flex-wrap: wrap;
}
.left {
  flex: 1;
  max-width: 300px;
  padding: 50px 30px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 20px;
  margin-right: 20px;
  @media (max-width: 700px) {
    width: 50% !important;
    margin: 0px auto;
    margin-bottom: 30px;
  }

  .user-logo {
    position: relative;
    align-self: center;
    width: 60px;
    height: 60px;
    background-color: #303030;
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .user-type {
    align-self: center;
    font-weight: 400;
    color: #283d47;
    font-size: 1.4rem;
    display: flex;
    align-items: center;

    .icon {
      width: 20px;
      margin-right: 7px;
      color: black;
    }
  }
  p {
    display: flex;
    gap: 10px;
    font-weight: 600;
    color: #283d47;
    span {
      font-size: 1.2rem;
      font-weight: 800;
    }
  }
  button {
    padding: 10px 50px;
    border: none;
    outline: none;
    color: white;
    background-color: #283d47;
    border-radius: 10px;
    font-weight: 300;
    cursor: pointer;
    margin: 40px auto 0 auto;
  }
}

.right {
  flex: 2;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: 200;
    margin-top: 30px;
  }
  .blog-cards-wrap {
    width: 100%;
    h2 {
      padding: 0 30px;
      margin-bottom: 50px;
      font-weight: 200;
      font-size: 1.7rem;
    }
  }

  .blog-cards {
    grid-template-columns: repeat(3, 1fr) !important;
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
</style>
