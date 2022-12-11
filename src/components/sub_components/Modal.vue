<template>
  <div class="modal">
    <div class="modal-content">
      <p>{{ this.modalMessage }}</p>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["modalMessage"],
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 107;
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
    width: 300px;
    padding: 40px 30px;
    background-color: #fff;
    p {
      text-align: center;
      margin-bottom: 20px;
    }
    button {
      align-self: center;
      padding: 10px 25px;
      border: none;
      outline: none;
      color: white;
      background-color: #283d47;
      border-radius: 20px;
      font-weight: 300;
      cursor: pointer;
    }
  }
}
</style>
