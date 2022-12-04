<template>
  <div class="blog-cards-wrap">
    <toggle-edit @toggle-edit="toggleEdit" />
    <div class="blog-cards">
      <BlogCard
        v-for="(post, index) in blogCards"
        :key="index"
        :edit="toggleEditValue"
        :post="post"
      />
    </div>
  </div>
</template>
<script>
import BlogCard from "@/components/BlogCard.vue";
import ToggleEdit from "@/components/sub_components/ToggleEdit.vue";
import useBlogsStore from "@/stores/blogs";
import { mapState } from "pinia";
export default {
  name: "Blogs",
  emits: ["toggleEdit"],
  components: {
    BlogCard,
    ToggleEdit,
  },
  data() {
    return {
      toggleEditValue: false,
    };
  },
  computed: {
    ...mapState(useBlogsStore, ["blogCards"]),
  },

  methods: {
    toggleEdit() {
      this.toggleEditValue = !this.toggleEditValue;
    },
  },
};
</script>
<style lang="scss" scoped></style>
