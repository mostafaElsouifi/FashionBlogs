<template>
  <div class="container">
    <blog-post :post="welcomeScreen" />
    <blog-post v-for="(post, index) in blogPosts" :post="post" :key="index" />
  </div>
  <!-- blogs cards-->
  <div class="blog-cards-wrap">
    <div class="container">
      <h3>Most Recent Articles !</h3>
      <div class="blog-cards">
        <BlogCard
          v-for="(post, index) in blogCards"
          :key="index"
          :post="post"
        />
      </div>
    </div>
  </div>
</template>
<script>
import BlogPost from "@/components/BlogPost.vue";
import BlogCard from "@/components/BlogCard.vue";
import { mapState } from "pinia";
import useBlogsStore from "@/stores/blogs";
export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        weclomeIntro: "Weekly blog articles with all things fashion!",
        welcomeScreen: true,
        photo: "welcome-image",
      },
    };
  },
  computed: {
    ...mapState(useBlogsStore, ["blogPosts", "blogCards"]),
  },
};
</script>
<style lang="scss" scoped>
h3 {
  padding: 32px 116px;
  font-weight: 300;
  font-size: 1.5rem;
}
</style>
