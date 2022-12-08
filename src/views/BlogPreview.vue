<template>
  <h1>{{ newBlog.blogTitle }}</h1>

  <div class="content" v-html="newBlog.blogHtml"></div>
</template>
<script>
import { mapWritableState } from "pinia";
import useBlogsStore from "@/stores/blogs.js";
export default {
  name: "BlogPreview",
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(useBlogsStore, ["newBlog"]),
  },
};
</script>
