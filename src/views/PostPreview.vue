<template>
  <div class="preview-container">
    <div class="left">
      <h1 class="blog-title">{{ newBlog.blogTitle }}</h1>

      <div class="content" v-html="newBlog.blogHtml"></div>
    </div>
    <div class="right">
      <div class="blog-cover-photo">
        <img :src="newBlog.blogPhotoFileUrl" />
      </div>
    </div>

    <!--<button @click="publishBlog">Publish Blog</button>-->
  </div>
</template>
<script>
import { mapWritableState } from "pinia";
import useBlogsStore from "@/stores/blogs.js";
export default {
  name: "PostPreview",
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(useBlogsStore, ["newBlog"]),
  },
  methods: {
    publishBlog() {},
  },
};
</script>

<style lang="scss" scoped>
.preview-container {
  margin: 40px 100px;
  display: flex;
  justify-content: space-between;
  .blog-cover-photo {
    margin: 10px 0;
    height: 100%;
    img {
      height: 60vh;
      width: 100%;
    }
  }
  button {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 15px;
    background-color: #303030;
    color: #fff;
    padding: 8px 12px;
    border-radius: 15px;
    margin-right: 15px;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
