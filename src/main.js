import { createApp } from "vue";
import { createPinia } from "pinia";
import veeValidatePlugin from "./plugins/validation";
import App from "./App.vue";
import router from "./router";
import { auth } from "./includes/firebase";
import "./assets/main.css";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.use(createPinia());
    app.use(router);
    app.use(veeValidatePlugin);
    app.component("QuillEditor", QuillEditor);
    app.mount("#app");
  }
});
