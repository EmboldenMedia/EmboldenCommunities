import { Dropzone } from "dropzone";
import Datepicker from "../../../vendor/js/datepicker/datepicker";

document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelector(".dropzone")) {
    const dropzone = new Dropzone(".dropzone", { url: "/file/post", maxFiles: 4 });
  }

  if (document.querySelector(".datepicker")) {
    const datepicker = new Datepicker(".datepicker", {
      time: true,
      onChange: (dateTime) => {
        console.log(dateTime)
      }
    });
  }
});
