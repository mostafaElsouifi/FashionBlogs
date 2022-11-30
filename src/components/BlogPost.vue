<template>
  <div class="blog-wrapper">
    <div class="blog-content">
      <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
      <h2 v-else>{{ post.title }}</h2>
      <p v-if="post.welcomeScreen">{{ post.weclomeIntro }}</p>
      <p v-else class="content-preview" v-html="post.blogHtml"></p>
      <router-link to="#" v-if="post.welcomeScreen" class="link">
        Login / Register <Arrow class="arrow-icon" />
      </router-link>
      <router-link to="#" v-else class="link">
        View the post <Arrow class="arrow-icon" />
      </router-link>
    </div>
    <div class="blog-photo">
      <img
        v-if="post.welcomeScreen"
        :src="`src/assets/blogPhotos/${post.photo}.jpg`"
      />
      <img v-else :src="`src/assets/blogPhotos/${post.blogCoverPhoto}.jpg`" />
    </div>
  </div>
</template>
<script>
import Arrow from "../assets/icons/right-arrow.svg";
export default {
  name: "BlogPost",
  props: ["post"],
  components: {
    Arrow,
  },
  data() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.blog-wrapper {
  padding: 10px 40px;
  display: flex;
  max-height: 550px;
  min-height: 550px;
  @media (max-width: 700px) {
    flex-direction: column;
    max-height: 100%;
    min-height: 100%;
  }
  &:nth-child(even) {
    .blog-content {
      order: 2;
    }
    .blog-photo {
      order: 1;
    }
  }
}
.blog-content {
  flex: 3;
  order: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  line-height: 2;
  min-height: 350px;
  @media (max-width: 700px) {
    order: 2;
  }
  h2 {
    font-weight: 300;
  }
  p {
    font-size: 20px;
    font-weight: 300;
    line-height: 1.7;
  }
  .content-preview {
    font-size: 13px;
    max-height: 24px;
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .link {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    border-bottom: 1px solid transparent;
    transition: all 0.5s ease-in;
    &:hover {
      border-bottom-color: #303030;
    }
  }
  .arrow-icon {
    width: 20px;
    margin-left: 15px;
  }
}
.blog-photo {
  order: 2;
  flex: 4;

  @media (max-width: 700px) {
    order: 1;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: inherit;
  }
}
</style>
