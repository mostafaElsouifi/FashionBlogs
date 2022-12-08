import { defineStore } from "pinia";

export default defineStore("blogs", {
  state: () => {
    return {
      newBlog: {
        blogHtml: "",
        blogTitle: "",
        blogPhotoName: "",
        blogPhotoFileUrl: null,
        blogPhotoPreview: null,
      },

      editPost: null,
      blogPosts: [
        {
          title: "The 11 Standout Models of Spring-Summer 2023",
          blogHtml: "This a filler blog post title !",
          blogCoverPhoto: "summer-2023",
        },
        {
          title: "The new Winter collections",
          blogHtml: "This a filler blog post title !",
          blogCoverPhoto: "winter",
        },
      ],
      blogCards: [
        { title: "blog card #1", blogCoverPhoto: "winter", date: "May1,2022" },
        {
          title: "blog card #1",
          blogCoverPhoto: "summer-2023",
          date: "May1,2022",
        },
        { title: "blog card #1", blogCoverPhoto: "winter", date: "May1,2022" },
        {
          title: "blog card #1",
          blogCoverPhoto: "summer-2023",
          date: "May1,2022",
        },
      ],
    };
  },
});
