<template>
  <Loading v-if="displayLoading" />
  <div class="modal">
    <div class="modal-content">
      <div class="close-icon" @click="closePreview">
        <CloseIcon />
      </div>
      <h1>{{ photoName }}</h1>
      <img :src="photoUrl" />
    </div>
  </div>
</template>

<script>
import CloseIcon from "@/assets/icons/close.svg";

export default {
  components: { CloseIcon },
  props: ["photoName", "photoUrl"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    closePreview() {
      this.$emit("close-Preview");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    max-width: 600px;
    height: 500px;
    padding: 10px 30px;
    background-color: #fff;
    position: fixed;
    img {
      height: 70%;
    }
    .close-icon {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    h1 {
      text-align: center;
      font-size: 17px;
      margin-bottom: 20px;
      font-weight: 300;
    }
  }
}
</style>
