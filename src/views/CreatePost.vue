<template>
  <Modal
    v-if="displayModal"
    :modalMessage="modalMessage"
    @close-modal="closeModal"
  />
  <div class="container">
    <div class="blog-info">
      <input
        v-model="newBlog.blogTitle"
        type="text"
        name="blogTitle"
        class="blog-title"
        placeholder="Enter blog title"
      />
      <div class="upload-file">
        <label for="blog-photo">Upload Cover Photo</label>
        <input
          type="file"
          id="blog-photo"
          ref="blogPhoto"
          accept=".png,.jpeg,.jpg"
        />
        <button
          class="preview"
          :class="{ 'disabled-button': !newBlog.blogPhotoPreview }"
          :disabled="newBlog.blogPhotoPreview"
        >
          Preview Photo
        </button>
        <span>File Choosen :</span>
      </div>
    </div>

    <div id="editor">
      <QuillEditor theme="snow" toolbar="full" ref="editor" />
    </div>

    <div class="blog-actions">
      <button @click="publishBlog">Publish Blog</button>
      <router-link class="router-button" to="#">Post Preview</router-link>
    </div>
  </div>
</template>
<script>
import { mapWritableState } from "pinia";
import useBlogsStore from "@/stores/blogs.js";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import Modal from "@/components/sub_components/modal.vue";

export default {
  name: "CreatePost",
  data() {
    return {
      modalMessage: "",
      errorMessage: "",
      displayModal: null,
    };
  },
  components: {
    QuillEditor,
    Modal,
  },
  mounted() {},
  computed: { ...mapWritableState(useBlogsStore, ["newBlog"]) },
  methods: {
    publishBlog() {
      if (!this.$refs.editor.getContents(1).ops.length) {
        this.modalMessage = "No Content to publish!";
        this.displayModal = true;
      }
    },
    closeModal() {
      this.displayModal = false;
      this.modalMessage = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 50px 200px;
  max-width: 1200px;
  .blog-info {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 20px;
    margin-left: 20px;
    .blog-title {
      border: none;
      border-bottom: 1px solid #303030;
      margin-right: 30px;
      padding: 10px 5px;
      &:focus {
        outline: none;
      }
    }
    .upload-file {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      position: relative;
      margin-top: 20px;
      input {
        display: none;
      }
      span {
        margin-left: 20px;
      }
    }
  }
  .blog-actions {
    margin-top: 30px;
    margin-left: 20px;
  }
  .router-button {
    text-decoration: none;
  }

  label,
  button,
  .router-button {
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
  }
}
.disabled-button {
  opacity: 0.4;
  cursor: not-allowed !important;
}
</style>
