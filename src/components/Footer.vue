<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="link branding-name" :to="{ name: 'home' }">
            FashonBlogs</router-link
          >
          <ul>
            <a href="#"><Youtube class="svg-icon" /></a>
            <a href="#"><Facebook class="svg-icon" /></a>
            <a href="#"><Twitter class="svg-icon" /></a>
            <a href="#"><Instagram class="svg-icon" /></a>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <router-link :to="{ name: 'home' }" class="link">
              Home
            </router-link>
            <router-link to="#" class="link"> Blogs </router-link>
            <router-link to="#" class="link"> Login / Register </router-link>
          </ul>
        </div>
      </div>
      <div class="right">&copy; 2022 all rgihts reserved</div>
    </div>
  </footer>
</template>
<script>
import Youtube from "../assets/icons/youtube.svg";
import Instagram from "../assets/icons/instagram.svg";
import Facebook from "../assets/icons/facebook.svg";
import Twitter from "../assets/icons/twitter.svg";
export default {
  name: "footer",
  components: {
    Youtube,
    Facebook,
    Twitter,
    Instagram,
  },
};
</script>
<style lang="scss" scoped>
footer {
  margin-right: 0;
  color: white;
  margin-top: auto;
  padding: 25px 25px;
  background-color: #303030;
  width: 100%;
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 600px) {
      flex-direction: column;
      gap: 10px;
    }
    .branding-name {
      font-size: 1.3rem;
    }
    .left {
      @media (max-width: 600px) {
        flex-direction: column;
        gap: 10px;
        align-items: center;
      }
      display: flex;
      justify-content: space-between;
      gap: 250px;
      .col-1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 35px;
        ul {
          margin-bottom: 20px;
        }
      }
      .col-2 {
        ul {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
      }
    }
    .right {
      display: flex;
      align-items: flex-end;
      @media (max-width: 600px) {
        margin-top: 20px;
        justify-content: center;
      }
    }
  }
  .svg-icon {
    width: 30px;
    margin-right: 15px;
  }
  .link {
    color: #fff;
    &:hover {
      color: #bb4991;
    }
  }
}
</style>
