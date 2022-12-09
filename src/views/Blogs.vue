<template>
  <div class="blog-cards-wrap">
    <toggle-edit @toggle-edit="toggleEdit" />
    <div class="blog-cards">
      <BlogCard
        v-for="(post, index) in blogCards"
        :key="index"
        :edit="editMode"
        :post="post"
      />
    </div>
  </div>
</template>
<script>
import BlogCard from "@/components/BlogCard.vue";
import ToggleEdit from "@/components/sub_components/ToggleEdit.vue";
import useBlogsStore from "@/stores/blogs";
import useUserStore from "@/stores/user";
import { mapState, mapWritableState } from "pinia";
export default {
  name: "Blogs",
  emits: ["toggleEdit"],
  components: {
    BlogCard,
    ToggleEdit,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(useBlogsStore, ["blogCards"]),
    ...mapWritableState(useUserStore, ["editMode"]),
  },

  methods: {
    toggleEdit() {
      this.editMode = !this.editMode;
    },
  },
};
</script>
<style lang="scss" scoped></style>
