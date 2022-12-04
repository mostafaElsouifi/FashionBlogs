<template>
  <div class="profile-container">
    <div class="left">
      <div class="user-logo">{{ userProfile.logoText }}</div>
      <div class="user-type">{{ userProfile.isAdmin ? "Admin" : "User" }}</div>
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
        <div class="blog-cards">
          <BlogCard
            v-for="(blog, index) in blogCards"
            :key="index"
            :post="blog"
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
export default {
  name: "Profile",
  data() {
    return {};
  },
  components: {
    BlogCard,
  },
  computed: {
    ...mapWritableState(useUserStore, ["userProfile"]),
    ...mapWritableState(useBlogsStore, ["blogCards"]),
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

  .user-logo {
    position: relative;
    align-self: center;
    width: 40px;
    height: 40px;
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
}
</style>
