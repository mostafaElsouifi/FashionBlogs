<template>
  <div class="container">
    <div class="blog-info">
      <input
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
        <button class="preview" disabled="true">Preview Photo</button>
        <span>File Choosen :</span>
      </div>
    </div>
    <QuillEditor toolbar="full" theme="snow" />
    <div class="blog-actions">
      <button>Publish Blog</button>
      <router-link class="router-button" to="#">Post Preview</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 50px auto;
  max-width: 900px;
  .blog-info {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 20px;
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
</style>
