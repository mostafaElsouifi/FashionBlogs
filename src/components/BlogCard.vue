<template>
  <div class="blog-card">
    <div class="icons" v-show="edit">
      <div class="icon">
        <Edit class="icon-svg" />
      </div>
      <div class="icon">
        <Delete class="icon-svg" />
      </div>
    </div>
    <img :src="`src/assets/cardPhotos/${post.blogCoverPhoto}.jpg`" />
    <div class="info">
      <h4>{{ post.title }}</h4>
      <h6>{{ post.date }}</h6>
      <router-link to="#" class="link"
        >view the post <Arrow class="icon-svg"
      /></router-link>
    </div>
  </div>
</template>
<script>
import Arrow from "../assets/icons/right-arrow.svg";
import Edit from "../assets/icons/edit.svg";
import Delete from "../assets/icons/delete.svg";
export default {
  name: "BlogCard",
  props: ["post", "edit"],
  components: {
    Arrow,
    Edit,
    Delete,
  },
};
</script>
<style lang="scss" scoped>
.blog-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  min-height: 420px;
  transition: 0.5s ease all;
  width: 100%;

  &:hover {
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
}
img {
  width: 100%;

  min-height: 200px;
  max-height: 200px;
  border-radius: 8px 8px 0 0;
  z-index: 1;
}
.info {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
  z-index: 3;
  color: #000;

  h4 {
    font-weight: 300;
    font-size: 1.2rem;
  }
  h6 {
    font-size: 0.7rem;
    margin-top: 3px;
    font-weight: 300;
  }
}
.icons {
  display: flex;
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 98;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
  transition: 0.5s ease all;
  &:nth-child(1) {
    margin-right: 5px;
  }
  &:hover {
    background-color: #303030;
    .icon-svg {
      fill: #fff;
    }
  }
}
.icon-svg {
  width: 20px;
}
.link {
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  font-weight: 500;
  padding-top: 20px;
  font-size: 12px;
  padding-bottom: 4px;
  transition: 0.5s ease-in all;
}
</style>
