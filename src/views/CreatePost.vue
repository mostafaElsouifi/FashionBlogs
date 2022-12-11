<template>
  <preview-photo-modal
    v-if="displayPreview"
    :photoName="newBlog.blogPhotoName"
    :photoUrl="newBlog.blogPhotoFileUrl"
    @close-preview="closePreview"
  />
  <Modal
    v-if="displayModal"
    :modalMessage="modalMessage"
    @close-modal="closeModal"
  />
  <div class="container">
    <div class="blog-info">
      <div class="blog-title-section">
        <ExclamationMark class="warning-icon" v-if="warningBlogTitle" />
        <input
          v-model="newBlog.blogTitle"
          @input="checkBlogTitle"
          :class="{ warning: warningBlogTitle }"
          type="text"
          name="blogTitle"
          class="blog-title"
          placeholder="Enter blog title"
          id="blogTitle"
        />
      </div>

      <div class="upload-file">
        <label for="blogPhoto">Upload Cover Photo</label>
        <input
          type="file"
          id="blogPhoto"
          ref="blogPhoto"
          @change="uploadPhoto"
          accept=".png,.jpeg,.jpg"
        />
        <button
          class="preview"
          @click="displayPreviewModal"
          :class="{ 'disabled-button': !newBlog.blogPhotoPreview }"
        >
          Preview Photo
        </button>
        <span :class="{ warning: warningCoverPhoto }">
          <ExclamationMark class="warning-icon" v-if="warningCoverPhoto" />
          File Choosen : {{ newBlog.blogPhotoName }}
        </span>
      </div>
    </div>

    <div id="editor">
      <QuillEditor
        theme="snow"
        toolbar="full"
        ref="editor"
        @text-change="updateBlogHtml"
        :modules="modules"
      />
    </div>

    <div class="blog-actions">
      <button @click="publishBlog">Publish Blog</button>
      <router-link class="router-button" :to="{ name: 'postPreview' }"
        >Post Preview</router-link
      >
    </div>
  </div>
</template>
<script>
import { mapWritableState } from "pinia";
import useBlogsStore from "@/stores/blogs.js";
import { QuillEditor } from "@vueup/vue-quill";
import BlotFormatter from "quill-blot-formatter";

import "@vueup/vue-quill/dist/vue-quill.snow.css";
import Modal from "@/components/sub_components/Modal.vue";
import PreviewPhotoModal from "../components/sub_components/PreviewPhotoModal.vue";
import ExclamationMark from "@/assets/icons/exclamation-mark.svg";
export default {
  name: "CreatePost",
  data() {
    return {
      modalMessage: "",
      errorMessage: "",
      displayModal: null,
      displayPreview: null,
      warningBlogTitle: false,
      warningCoverPhoto: false,
      modules: {
        name: "blot formater",
        module: BlotFormatter,
        oprions: {},
      },
    };
  },
  components: {
    QuillEditor,
    Modal,
    PreviewPhotoModal,
    ExclamationMark,
  },
  mounted() {},
  computed: { ...mapWritableState(useBlogsStore, ["newBlog"]) },
  methods: {
    checkBlogTitle() {
      if (this.newBlog.blogTitle.trim() === "") {
        this.warningBlogTitle = true;
        document.getElementById("blogTitle").placeholder = "required..";

        document.getElementById("blogTitle").scrollIntoView();
      } else {
        this.warningBlogTitle = false;
      }
    },
    checkCoverPhoto() {
      if (!this.$refs.blogPhoto.files[0]) {
        this.warningCoverPhoto = true;
      } else {
        this.warningCoverPhoto = false;
      }
    },
    updateBlogHtml() {
      this.newBlog.blogHtml = this.$refs.editor.getHTML();
    },
    uploadPhoto() {
      const file = this.$refs.blogPhoto.files[0];
      if (file) {
        this.warningCoverPhoto = false;
        this.newBlog.blogPhotoFileUrl = URL.createObjectURL(file);
        this.newBlog.blogPhotoName = file.name;
        this.newBlog.blogPhotoPreview = true;
        console.log(this.newBlog.blogPhotoFileUrl);
      }
    },
    publishBlog() {
      this.checkBlogTitle();
      this.checkCoverPhoto();
      if (!this.$refs.editor.getContents(1).ops.length) {
        this.modalMessage = "No Content to publish!";
        this.displayModal = true;
      }
    },
    closeModal() {
      this.displayModal = false;
      this.modalMessage = "";
    },
    displayPreviewModal() {
      this.displayPreview = true;
    },
    closePreview() {
      this.displayPreview = false;
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
    .blog-title-section {
      position: relative;
      display: flex;
      align-items: center;

      .blog-title {
        border: none;
        border-bottom: 1px solid #303030;

        margin-right: 30px;
        padding: 10px 5px;
        &:focus {
          outline: none;
        }
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
    &:hover {
      opacity: 0.7;
    }
  }
}

button:hover {
  opacity: 0.7;
}
.disabled-button {
  opacity: 0.4;
  cursor: not-allowed !important;
  &:hover {
    opacity: 0.4 !important;
  }
}

/* classes */
.warning {
  border-bottom: 1px solid #e74c3c !important;
  color: #e74c3c;
  ::placeholder {
    color: #e74c3c !important;
    opacity: 1;
  }
}
</style>
