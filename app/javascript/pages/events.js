import { Dropzone } from "dropzone";

document.addEventListener("DOMContentLoaded", function() {
  const dropzone = new Dropzone(".dropzone", { url: "/file/post", maxFiles: 4 });
});
