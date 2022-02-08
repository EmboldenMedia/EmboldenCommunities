import { Dropzone } from "dropzone";

document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelector(".dropzone")) {
    const dropzone = new Dropzone(".dropzone", { url: "/file/post", maxFiles: 4 });
  }
});
